
export default function ProgressCircle({ total, active }) {
    const radius = 19; // Radius of the circle
    const strokeWidth = 1.7; // Width of the stroke
    const normalizedRadius = radius - strokeWidth * 2; // Adjust for stroke width
    const circumference = normalizedRadius * 2 * Math.PI; // Circumference of the circle
    const strokeDashoffset = circumference - (active / total) * circumference;

  return (
    <div className="bg-transparent absolute-x-center bottom-6 max-w-[32px] max-h-[32px] flex justify-center items-centerr ">
      <svg height={radius * 2} width={radius * 2}>
        {/* Background Circle (No Gap) */}
        <circle
          stroke="white"
          fill="transparent"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={0}  
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          strokeLinecap="round"
          style={{
            opacity: 0.2, // Slight transparency for the background circle
            transform: 'rotate(-90deg)', // Start at the top
            transformOrigin: '50% 50%',
          }}
        />

        {/* Progress Circle */}
        <circle
          stroke="white"
          fill="transparent"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          strokeLinecap="round" // Rounded edges for progress bar
          style={{
            transition: 'stroke-dashoffset 0.35s',
            transform: 'rotate(-90deg)', // Start progress from the top
            transformOrigin: '50% 50%',
          }}
        />

        {/* Text inside the circle */}
        <text className="text-sm absolute right-0 bottom-0"
          x="50%"
          y="45%"
          dominantBaseline="middle"
          textAnchor="middle"
          fill="white"
        >
          {`${active}/${total}`}
        </text>
      </svg>
    </div>
  )
}
