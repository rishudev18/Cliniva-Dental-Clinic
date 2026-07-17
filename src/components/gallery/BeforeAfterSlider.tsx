import React, { useState } from "react";

interface BeforeAfterSliderProps {
  beforeUrl: string;
  afterUrl: string;
  title: string;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeUrl,
  afterUrl,
  title,
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPosition(Number(e.target.value));
  };

  return (
    <div className="flex flex-col gap-4">
      <h3 className="font-display text-base font-semibold text-center text-foreground">
        {title}
      </h3>
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-border bg-card shadow-card select-none">
        {/* Before Image (Bottom) */}
        <img
          src={beforeUrl}
          alt="Before treatment"
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute top-4 left-4 z-20 rounded-md bg-black/60 px-2.5 py-1 text-xs font-semibold uppercase tracking-wider text-white">
          Before
        </div>

        {/* After Image (Top, clipped) */}
        <div
          className="absolute inset-0 h-full w-full"
          style={{
            clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`,
          }}
        >
          <img
            src={afterUrl}
            alt="After treatment"
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="absolute top-4 right-4 z-20 rounded-md bg-primary/85 px-2.5 py-1 text-xs font-semibold uppercase tracking-wider text-white">
          After
        </div>

        {/* Slider Handle */}
        <div
          className="absolute inset-y-0 z-30 w-1 bg-white cursor-ew-resize shadow-md"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 -left-5 h-10 w-10 md:-left-3.5 md:h-7 md:w-7 -translate-y-1/2 rounded-full border-2 border-white bg-primary text-white flex items-center justify-center text-xs font-bold shadow-lg select-none">
            ↔
          </div>
        </div>

        {/* Transparent Input Range Overlay */}
        <input
          type="range"
          min="0"
          max="100"
          value={sliderPosition}
          onChange={handleSliderChange}
          className="absolute inset-0 z-30 w-full h-full cursor-ew-resize opacity-0 touch-none"
        />
      </div>
    </div>
  );
};
