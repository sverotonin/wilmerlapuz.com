// src/App.jsx
import React, { useState, useEffect } from "react";
import "./index.css";

function App() {
  const [isHovering, setIsHovering] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const facebookUrl = "https://www.facebook.com/profile.php?id=61572930857654";

  const handleQrClick = () => {
    window.open(facebookUrl, "_blank");
  };

  const copyUrl = (e) => {
    e.stopPropagation();
    navigator.clipboard.writeText(facebookUrl);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  // Text typing animation effect
  const [displayText, setDisplayText] = useState("");
  const fullText = "wip facebook";

  useEffect(() => {
    if (isHovering) {
      let i = 0;
      const typingInterval = setInterval(() => {
        if (i < fullText.length) {
          setDisplayText(fullText.substring(0, i + 1));
          i++;
        } else {
          clearInterval(typingInterval);
        }
      }, 50);
      return () => clearInterval(typingInterval);
    } else {
      setDisplayText("");
    }
  }, [isHovering]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="max-w-sm w-full p-6">
        {/* Card with hover detection */}
        <div
          className="relative group cursor-pointer"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          onClick={handleQrClick}
        >
          {/* QR Container with border animation */}
          <div
            className={`
            relative overflow-hidden rounded-md mb-8 p-6
            bg-gray-900 
            before:content-[''] before:absolute before:inset-0
            before:border-2 before:border-gray-700
            before:transition-all before:duration-700
            ${isHovering ? "before:scale-95 before:border-white" : "before:scale-100"}
            after:content-[''] after:absolute after:-inset-2
            after:border after:border-gray-800
            after:transition-all after:duration-700
            ${isHovering ? "after:scale-105 after:border-gray-600 after:opacity-100" : "after:scale-100 after:opacity-0"}
          `}
          >
            {/* QR Code with zoom effect */}
            <div
              className={`transition-all duration-500 ${isHovering ? "scale-105" : "scale-100"}`}
            >
              <img
                src="/qr.png"
                alt="QR Code to Wilmer's Facebook profile"
                className={`w-full h-auto transition-all duration-500 ${isHovering ? "brightness-110" : "brightness-90"}`}
              />
            </div>

            {/* Animated corners */}
            <div
              className={`absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 transition-all duration-700 ${isHovering ? "border-white scale-110 -translate-x-1 -translate-y-1" : "border-gray-700"}`}
            ></div>
            <div
              className={`absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 transition-all duration-700 ${isHovering ? "border-white scale-110 translate-x-1 -translate-y-1" : "border-gray-700"}`}
            ></div>
            <div
              className={`absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 transition-all duration-700 ${isHovering ? "border-white scale-110 -translate-x-1 translate-y-1" : "border-gray-700"}`}
            ></div>
            <div
              className={`absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 transition-all duration-700 ${isHovering ? "border-white scale-110 translate-x-1 translate-y-1" : "border-gray-700"}`}
            ></div>
          </div>

          {/* Animated text overlay */}
          <div
            className={`
            absolute inset-0 flex flex-col items-center justify-center
            bg-black bg-opacity-80 
            transition-all duration-700
            ${isHovering ? "opacity-100" : "opacity-0 pointer-events-none"}
          `}
          >
            <span className="text-xl font-light tracking-widest text-center mb-4">
              {displayText}
            </span>
            <span className="text-sm text-gray-400 animate-pulse">
              Click to visit
            </span>
          </div>
        </div>

        {/* Interactive button */}
        <div className="text-center">
          <button
            onClick={copyUrl}
            className={`
              relative overflow-hidden
              border border-gray-700 px-8 py-3 
              text-sm uppercase tracking-widest
              transition-all duration-500
              hover:border-white
              focus:outline-none
              before:content-[''] before:absolute before:bg-white before:top-0 before:left-0 
              before:w-full before:h-full before:origin-left before:scale-x-0
              before:transition-transform before:duration-500
              hover:before:scale-x-100 hover:text-black
              group
            `}
          >
            <span className="relative z-10 transition-colors duration-500 group-hover:text-black">
              {isCopied ? "Copied!" : "Copy URL"}
            </span>
          </button>
        </div>

        {/* Minimal signature */}
        <p className="mt-8 text-center text-gray-600 text-xs tracking-wider">
          <li>site WIP</li>
          <li>next update 20250227</li>
          <li>来てくれてありがとう</li>
          <li>♡</li>
        </p>
      </div>
    </div>
  );
}

export default App;
