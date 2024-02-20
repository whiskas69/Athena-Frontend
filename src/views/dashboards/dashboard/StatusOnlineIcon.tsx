import SvgIcon from '@mui/material/SvgIcon';

function StatusOnlineIcon() {
  return (
    <SvgIcon viewBox="0 0 32 32">
      <svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0.8" width="30" height="30" rx="15" fill="#28C76F" fillOpacity="0.16" />
        <circle cx="16" cy="16" r="8.25" stroke="#28C76F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 7V23" stroke="#28C76F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 17.0833L22.4167 10.6666" stroke="#28C76F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 21.6667L23.7917 13.875" stroke="#28C76F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 12.5L20.125 8.375" stroke="#28C76F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </SvgIcon>
  );
}

export default StatusOnlineIcon;
