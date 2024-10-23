import React from "react";

export default function RiFacebookFill({
  className = "",
}: RiFacebookFillProps) {
  return (
    <div className={`${className}`}>
      <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 12.8 12.8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.56536 7.79935H8.8987L9.43203 5.66602H7.56536V4.59935C7.56536 4.05002 7.56536 3.53268 8.63203 3.53268H9.43203V1.74068C9.25816 1.71775 8.60163 1.66602 7.9083 1.66602C6.4603 1.66602 5.43203 2.54975 5.43203 4.17268V5.66602H3.83203V7.79935H5.43203V12.3327H7.56536V7.79935Z" fill="white"/></svg>
    </div>
  );
}

interface RiFacebookFillProps {
  className?: string;
}
