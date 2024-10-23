import React from "react";

export default function ArrowRight1({ className = "" }: ArrowRight1Props) {
  return (
    <div className={`${className}`}>
      <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.91602 7H11.0827" stroke="#2AABEE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M7 2.91699L11.0833 7.00033L7 11.0837" stroke="#2AABEE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </div>
  );
}

interface ArrowRight1Props {
  className?: string;
}