import React from "react";

const sizes = {
  "3xl": "text-4xl font-semibold leading-[44px]",
  "2xl": "text-3xl font-semibold leading-[37px]",
  xl: "text-2xl font-semibold leading-[30px]",
  "4xl": "text-5xl font-semibold leading-[59px]",
  s: "text-base font-semibold leading-5",
  md: "text-lg font-semibold leading-[22px]",
  xs: "text-sm font-semibold leading-[17px]",
  lg: "text-xl font-semibold leading-[25px]",
};

const Heading = ({ children, className = "", size = "s", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-white-A700 font-inter ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
