import React from "react";

export default function Union({ className = "" }: UnionProps) {
  return (
    <div className={`${className}`}>
      <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 144 171" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 5.00001V1.23978e-05L144 0V5V42H139V5.00001H5L5.00001 166L139 166V121H144V166V171L139 171H5.00001H0V166V5.00001Z" fill="#2AABEE"/></svg>
    </div>
  );
}

interface UnionProps {
  className?: string;
}