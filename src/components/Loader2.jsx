import React from "react";
import '../styles/Loader.css'

const Loader2 = () => {
  return (
    <div className="min-h-[300px] min-w-[300px] flex items-center justify-center bg-zinc-800">
      <svg
        width="400"
        height="400"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        id="loader_v"
      >
        <path d="M30 50L38 32H46L38 50H30Z" fill="#fffff" />
        <path d="M70 50L62 32H54L62 50H70Z" fill="#fffff" />
        <path d="M50 70L38 42H46L50 52L54 42H62L50 70Z" fill="#fffff" />
      </svg>
    </div>
  );
};

export default Loader2;
