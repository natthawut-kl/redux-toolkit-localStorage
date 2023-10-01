import React from 'react';
import { themeColors } from '../theme/themeColors';

interface IPropsArrowUpDownIcon {
  color?: string;
  width?: string;
  height?: string;
  className?: string;
}

const ArrowUpDownIcon = (props: IPropsArrowUpDownIcon) => {
  const {
    color = themeColors.primary,
    width = '12',
    height = '12',
    className
  } = props;

  return (
    <>
      <svg
        className={className}
        width={width}
        height={height}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13 5.5L8.50172 1.45155C8.2165 1.19485 7.78351 1.19485 7.49828 1.45155L3 5.5"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13 10.5L8.50172 14.5484C8.2165 14.8052 7.78351 14.8052 7.49828 14.5484L3 10.5"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
};

export default ArrowUpDownIcon;
