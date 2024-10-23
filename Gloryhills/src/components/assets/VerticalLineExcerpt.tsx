import React from "react";

export default function VerticalLineExcerpt({
  className = "",
}: VerticalLineExcerptProps) {
  return (
    <div className={`${className}`}>
      <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 1 50" fill="none" xmlns="http://www.w3.org/2000/svg"><line y1="-2.5" x2="50" y2="-2.5" transform="matrix(-4.37114e-08 1 1 4.37114e-08 5 0)" stroke="#2AABEE" stroke-width="5"/></svg>
    </div>
  );
}

interface VerticalLineExcerptProps {
  className?: string;
}
