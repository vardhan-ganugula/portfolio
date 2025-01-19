import React, { useCallback, useEffect } from "react";
import "../styles/ping.css";
import { useParams } from "react-router-dom";

const Pingpage = () => {
  const { url } = useParams();

  useEffect(() => {
    const verticalElements = document.querySelectorAll(".vertical");
    verticalElements.forEach((element, index) => {
      if (index % 2 === 0) {
        element.style.transform = "rotate(90deg)";
      } else {
        element.style.transform = "rotate(-90deg)";
      }
    });
  }, []);

  const pingSite = useCallback(async () => {
    const resp = await fetch(
      `https://cors-anywhere.herokuapp.com/https://${url}`
    );
    if (resp.status === 200) {
      return true;
    } else {
      return await pingSite();
    }
  }, [url, useParams]);

  useEffect(() => {
    pingSite().then((res) => {
      if (res) {
        console.log("Site is up");
        window.location.href = `https://${url}`;
      }
    });
  }, [useParams]);

  return (
    <main className="w-full h-screen flex justify-center items-center flex-col bg-zinc-900">
      <div className="loader relative flex">
        <span>
          <div className="vertical">pinging</div>
        </span>
        <span>
          <div className="vertical">pinging</div>
        </span>
        <span>
          <div className="vertical">pinging</div>
        </span>
        <span>
          <div className="vertical">pinging</div>
        </span>
        <span>
          <div className="vertical">pinging</div>
        </span>
      </div>

      <div className="border w-64 h-10 border-white shadow-sm shadow-white translate-y-28 p-1 relative">
        <span className="block w-10 h-full bg-white glowShadow"></span>
        <span className="top-1/2 left-1/2 absolute -translate-x-1/2 -translate-y-1/2 text-white mix-blend-difference">
          loading...
        </span>
      </div>
    </main>
  );
};

export default Pingpage;
