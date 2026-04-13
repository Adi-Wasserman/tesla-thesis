export function StarsBg() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <svg width="100%" height="100%" className="absolute">
        {Array.from({ length: 50 }, (_, i) => (
          <circle
            key={i}
            cx={`${(i * 37 + 13) % 100}%`}
            cy={`${(i * 53 + 7) % 100}%`}
            r={0.4 + (i % 4) * 0.3}
            fill="#fff"
            opacity={0.08 + (i % 5) * 0.05}
          />
        ))}
      </svg>
    </div>
  );
}
