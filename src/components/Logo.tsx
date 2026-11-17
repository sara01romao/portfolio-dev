
export default function Logo({label = false, color = "white"}: {label?: boolean; color?: string;}) {
  
  return (
    <div className="flex flex-col items-center">
      <svg width="141" height="43" viewBox="0 0 141 43" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M86 1.5C86 1.5 61.5 11.5 60 16C58.5 20.5 78 17.5 75 23C72 28.5 50 41.5 50 41.5" stroke={color} stroke-width="3" stroke-linecap="round"/>
        <path id="arrow-left" d="M18.75 29L11.25 21.5L18.75 14" stroke="#EC6990" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path id="arrow-right" d="M122.25 29L129.75 21.5L122.25 14" stroke="#EC6990" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      
      {label && <span className="text-xs tracking-wide text-white mt-4">SARA ROMÃO</span>}
    </div>
  );
}
