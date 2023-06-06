import React, { useState, useEffect } from "react";

function PreloderBar() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const animationDuration = 500;
    const frameRate = 160;
    const totalFrames = animationDuration / (1000 / frameRate);
    const increment = 100 / totalFrames;
    let currentCount = 0;

    const intervalId = setInterval(() => {
      if (currentCount >= 100) {
        clearInterval(intervalId);
      } else {
        currentCount += increment;
        const newValue = Math.min(Math.round(currentCount), 100);
        setCount(newValue);
      }
    }, 1000 / frameRate);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="d-flex align-items-center justify-content-center flex-column pt-5">
      <h1 className="preloderCounter text-center text-white fs_4xl ff_futura">
        {count}%
      </h1>
      <div
        className="preloderbarWidth mt-3 rounded-pill overflow-hidden"
        style={{ height: "30px", background: "#f0f0f0" }}
      >
        <div
          className="rounded-pill"
          style={{
            width: `${count}%`,
            height: "100%",
            background:
              "linear-gradient( 97.08deg, #002eff 0%, #0085ff 49.24%, #000aff 95.5%",
            transition: "width 0.5s",
          }}
        ></div>
      </div>
    </div>
  );
}

export default PreloderBar;
