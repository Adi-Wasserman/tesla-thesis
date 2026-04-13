interface TopoGeometry {
  type: string;
  id?: string | number;
  properties?: Record<string, unknown>;
  arcs: number[][] | number[][][];
}

interface TopoObject {
  type: string;
  geometries?: TopoGeometry[];
}

interface Topology {
  arcs: number[][][];
  transform?: {
    translate: [number, number];
    scale: [number, number];
  };
  objects: Record<string, TopoObject>;
}

interface GeoFeature {
  type: "Feature";
  id: string | number | undefined;
  properties: Record<string, unknown>;
  geometry: {
    type: "Polygon" | "MultiPolygon";
    coordinates: number[][][] | number[][][][];
  };
}

interface FeatureCollection {
  type: "FeatureCollection";
  features: GeoFeature[];
}

export function topojsonFeature(t: Topology, o: TopoObject): FeatureCollection {
  const arcs = t.arcs;
  const tx = t.transform ? t.transform.translate[0] : 0;
  const ty = t.transform ? t.transform.translate[1] : 0;
  const sx = t.transform ? t.transform.scale[0] : 1;
  const sy = t.transform ? t.transform.scale[1] : 1;

  function a2c(ai: number): number[][] {
    const r = ai < 0;
    const idx = r ? ~ai : ai;
    const arc = arcs[idx];
    const c: number[][] = [];
    let x = 0;
    let y = 0;
    for (let i = 0; i < arc.length; i++) {
      x += arc[i][0];
      y += arc[i][1];
      c.push([x * sx + tx, y * sy + ty]);
    }
    if (r) c.reverse();
    return c;
  }

  function r2c(ring: number[]): number[][] {
    let c: number[][] = [];
    for (let i = 0; i < ring.length; i++) {
      const a = a2c(ring[i]);
      if (i > 0) {
        c = c.concat(a.slice(1));
      } else {
        c = c.concat(a);
      }
    }
    return c;
  }

  function g2f(g: TopoGeometry, id: string | number | undefined): GeoFeature | null {
    if (g.type === "Polygon") {
      return {
        type: "Feature",
        id,
        properties: g.properties || {},
        geometry: {
          type: "Polygon",
          coordinates: (g.arcs as number[][]).map(r2c),
        },
      };
    }
    if (g.type === "MultiPolygon") {
      return {
        type: "Feature",
        id,
        properties: g.properties || {},
        geometry: {
          type: "MultiPolygon",
          coordinates: (g.arcs as number[][][]).map((p) => p.map(r2c)),
        },
      };
    }
    return null;
  }

  const f: GeoFeature[] = [];
  if (o.type === "GeometryCollection" && o.geometries) {
    for (let i = 0; i < o.geometries.length; i++) {
      const fe = g2f(o.geometries[i], o.geometries[i].id);
      if (fe) f.push(fe);
    }
  }
  return { type: "FeatureCollection", features: f };
}
