import React from "react";

export default function SeparatorLine({ className = "" }: SeparatorLineProps) {
  return (
    <div className={`${className}`}>
      <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 350 1" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="-1.31134e-07" y1="1.5" x2="350" y2="1.49997" stroke="#2AABEE" stroke-width="3"/></svg>
    </div>
  );
}

interface SeparatorLineProps {
  className?: string;
}
