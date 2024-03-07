import React from "react";
import PropTypes from "prop-types";

const shapes = {
  circle: "rounded-[50%]",
  round: "rounded-[11px]",
  square: "rounded-[0px]",
};
const variants = {
  fill: {
    deep_purple_A100: "bg-deep_purple-A100 shadow-sm text-black-900",
    deep_purple_A200: "bg-deep_purple-A200 text-white-A700",
    white_A700: "bg-white-A700 shadow-sm text-blue_gray-800",
    deep_purple_50: "bg-deep_purple-50",
    gray_900_02: "bg-gray-900_02",
    black_900: "bg-black-900 shadow-sm text-white-A700",
    white_A700_99: "bg-white-A700_99",
    gray_100: "bg-gray-100 text-deep_purple-A100",
    red_50: "bg-red-50 text-red-900",
  },
  outline: {
    teal_700: "border-teal-700 border border-solid text-teal-800_01",
  },
};
const sizes = {
  "8xl": "h-[104px]",
  "7xl": "h-[64px]",
  "5xl": "h-[48px] px-5 text-base",
  md: "h-[28px] px-2.5 text-sm",
  xl: "h-[40px] px-2.5",
  "4xl": "h-[48px] px-3",
  sm: "h-[24px] px-0.5",
  "6xl": "h-[56px] px-3.5",
  lg: "h-[36px] px-3.5 text-sm",
  xs: "h-[22px] px-2 text-xs",
  "3xl": "h-[44px] px-[23px] text-base",
  "2xl": "h-[40px] px-4 text-sm",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "square",
  variant = "fill",
  size = "2xl",
  color = "deep_purple_A100",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex items-center justify-center text-center cursor-pointer ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["circle", "round", "square"]),
  size: PropTypes.oneOf(["8xl", "7xl", "5xl", "md", "xl", "4xl", "sm", "6xl", "lg", "xs", "3xl", "2xl"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf([
    "deep_purple_A100",
    "deep_purple_A200",
    "white_A700",
    "deep_purple_50",
    "gray_900_02",
    "black_900",
    "white_A700_99",
    "gray_100",
    "red_50",
    "teal_700",
  ]),
};

export { Button };
