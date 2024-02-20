import SvgIcon from '@mui/material/SvgIcon';

function InstancesIcon() {
  return (
    <SvgIcon style={{ fontSize: 42 }} viewBox="0 0 42 42"> {/* Set viewBox to cover the full space */}
      <svg width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="42" height="42" rx="21" fill="#7367F0" fillOpacity="0.08" />
        <rect x="11.25" y="12.3334" width="19.5" height="8.66667" rx="3" stroke="url(#paint0_linear_1169_4914)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="11.25" y="21" width="19.5" height="8.66667" rx="3" stroke="url(#paint1_linear_1169_4914)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15.5833 16.6666V16.6775" stroke="url(#paint2_linear_1169_4914)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15.5833 25.3334V25.3442" stroke="url(#paint3_linear_1169_4914)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <defs>
          <linearGradient id="paint0_linear_1169_4914" x1="11.25" y1="21" x2="17.683" y2="6.52581" gradientUnits="userSpaceOnUse">
            <stop stopColor="#7367F0" />
            <stop offset="1" stopColor="#9E95F5" />
          </linearGradient>
          <linearGradient id="paint1_linear_1169_4914" x1="11.25" y1="29.6667" x2="17.683" y2="15.1924" gradientUnits="userSpaceOnUse">
            <stop stopColor="#7367F0" />
            <stop offset="1" stopColor="#9E95F5" />
          </linearGradient>
          <linearGradient id="paint2_linear_1169_4914" x1="15.0416" y1="17.2137" x2="16.125" y2="16.1304" gradientUnits="userSpaceOnUse">
            <stop stopColor="#7367F0" />
            <stop offset="1" stopColor="#9E95F5" />
          </linearGradient>
          <linearGradient id="paint3_linear_1169_4914" x1="15.0416" y1="25.8805" x2="16.125" y2="24.7971" gradientUnits="userSpaceOnUse">
            <stop stopColor="#7367F0" />
            <stop offset="1" stopColor="#9E95F5" />
          </linearGradient>
        </defs>
      </svg>
    </SvgIcon>
  );
}

export default InstancesIcon;
