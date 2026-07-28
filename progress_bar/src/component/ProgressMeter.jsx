const ProgressMeter = ({ currProgress }) => {
  const percent = Math.min(100, Math.max(currProgress, 0));

  return (
    <div
      className="progress"
      role="progressbar"
      aria-label="Progress"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={percent}
    >
      <div
        className="progress__fill"
        style={{
          transform: `scaleX(${percent / 100})`,
        }}
      />

      <span
        className="progress__text"
        style={{
          color: percent > 50 ? "#fff" : "#000",
        }}
      >
        {percent.toFixed()}%
      </span>
    </div>
  );
};

export default ProgressMeter;