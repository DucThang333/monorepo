interface Props {
  size: number;
  percentage: number;
  strokeWidth: number;
}

const CircleProgress = (props: Props) => {
  const { size, percentage, strokeWidth } = props;

  const radius = (size - strokeWidth) / 2;
  const viewBox = `0 0 ${size} ${size}`;
  const dashArray = radius * Math.PI * 2;
  const dashOffset = dashArray - (dashArray * percentage) / 100;

  return (
    <div className="relative">
      <svg width={size} height={size} viewBox={viewBox} className="transform -rotate-90">
        {/* Background circle */}
        <circle
          r={radius}
          cx={size / 2}
          cy={size / 2}
          className="fill-none stroke-muted stroke-[var(--stroke-width)]"
          style={{ '--stroke-width': `${strokeWidth}px` } as React.CSSProperties}
        />
        {/* Progress circle */}
        <circle
          r={radius}
          cx={size / 2}
          cy={size / 2}
          className="fill-none stroke-current transition-all duration-300 ease-in-out"
          style={{
            strokeDasharray: dashArray,
            strokeDashoffset: dashOffset,
            strokeLinecap: 'round',
            '--stroke-width': `${strokeWidth}px`,
          } as React.CSSProperties}
          strokeWidth="var(--stroke-width)"
        />
      </svg>
    </div>
  );
};

export {CircleProgress};
