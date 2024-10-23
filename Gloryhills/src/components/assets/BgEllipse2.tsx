import React from "react";

export default function BgEllipse2({ className = "" }: BgEllipse2Props) {
  return (
    <div className={`${className}`}>
      <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12.5" cy="12" r="12" fill="#2AABEE"/></svg>
    </div>
  );
}

interface BgEllipse2Props {
  className?: string;
}
