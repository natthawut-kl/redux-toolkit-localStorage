import React from 'react';
import { themeColors } from '../theme/themeColors';

interface IPropsCalendarIcon {
  color?: string;
  width?: string;
  height?: string;
  className?: string;
}

const Calendar = (props: IPropsCalendarIcon) => {
  const { color = themeColors.primary, width = '16', height = '16' } = props;

  return (
    <>
      <svg
        width={width}
        height={height}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.75 5.165C0.75 4.31076 0.75 3.88365 0.91888 3.55854C1.06119 3.28457 1.28457 3.06119 1.55854 2.91888C1.88365 2.75 2.31076 2.75 3.165 2.75H12.835C13.6892 2.75 14.1164 2.75 14.4415 2.91888C14.7154 3.06119 14.9388 3.28457 15.0811 3.55854C15.25 3.88365 15.25 4.31076 15.25 5.165V11.835C15.25 12.6892 15.25 13.1164 15.0811 13.4415C14.9388 13.7154 14.7154 13.9388 14.4415 14.0811C14.1164 14.25 13.6892 14.25 12.835 14.25H3.165C2.31076 14.25 1.88365 14.25 1.55854 14.0811C1.28457 13.9388 1.06119 13.7154 0.91888 13.4415C0.75 13.1164 0.75 12.6892 0.75 11.835V5.165Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4.25 2.75V0.75H3.75V2.75H4.25Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12.25 2.75V0.75H11.75V2.75H12.25Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M1 6L15 6"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
};

export default Calendar;
