import React, { useEffect, useState } from "react";

export default function Scroll() {
  const [displayText, setDisplayText] = useState("");
  useEffect(() => {
    const text = "Akintunde Oluborode";

    function update(index) {
      setTimeout(() => {
        setDisplayText((prev) => prev + text[index]);
      }, (index + 1) * 100);
    }
    for (let i = 0; i < text.length; i++) {
      update(i);
    }
  }, []);
  return <div className="scroll"> {displayText}</div>;
}
