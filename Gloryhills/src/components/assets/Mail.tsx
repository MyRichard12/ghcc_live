import React from "react";

export default function Mail({ className = "" }: MailProps) {
  return (
    <div className={`${className}`}>
      <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.50391 5.884L10.5009 9.882L18.4979 5.884C18.4683 5.37444 18.245 4.89549 17.8737 4.54523C17.5025 4.19497 17.0113 3.99991 16.5009 4H4.50091C3.99049 3.99991 3.49935 4.19497 3.12808 4.54523C2.75681 4.89549 2.53351 5.37444 2.50391 5.884Z" fill="white"/><path d="M18.5 8.11816L10.5 12.1182L2.5 8.11816V14.0002C2.5 14.5306 2.71071 15.0393 3.08579 15.4144C3.46086 15.7895 3.96957 16.0002 4.5 16.0002H16.5C17.0304 16.0002 17.5391 15.7895 17.9142 15.4144C18.2893 15.0393 18.5 14.5306 18.5 14.0002V8.11816Z" fill="white"/></svg>
    </div>
  );
}

interface MailProps {
  className?: string;
}
