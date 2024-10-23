import React from "react";

export default function PrimeTwitter({ className = "" }: PrimeTwitterProps) {
  return (
    <div className={`${className}`}>
      <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 12.8 12.8" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_674_1301)"><mask id="mask0_674_1301" style={{"maskType":"luminance"}} maskUnits="userSpaceOnUse" x="0" y="0" width="13" height="14"><path d="M0.0996094 0.599609H12.8996V13.3996H0.0996094V0.599609Z" fill="white"/></mask><g mask="url(#mask0_674_1301)"><path d="M10.1796 1.19922H12.1426L7.85458 6.11259L12.8996 12.7997H8.9499L5.85412 8.74482L2.31584 12.7997H0.351038L4.9371 7.54253L0.0996094 1.20013H4.1499L6.94395 4.90573L10.1796 1.19922ZM9.48932 11.6221H10.5773L3.55561 2.31556H2.38898L9.48932 11.6221Z" fill="white"/></g></g><defs><clipPath id="clip0_674_1301"><rect width="12.8" height="12.8" fill="white" transform="translate(0.0996094 0.599609)"/></clipPath></defs></svg>
    </div>
  );
}

interface PrimeTwitterProps {
  className?: string;
}
