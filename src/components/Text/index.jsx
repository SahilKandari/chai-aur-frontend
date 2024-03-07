import React from "react";

const sizes = {
  xs: "text-xs font-normal leading-[15px]",
  lg: "text-lg font-normal leading-7",
  s: "text-sm font-normal leading-[17px]",
  "2xl": "text-2xl font-medium leading-8",
  xl: "text-xl font-normal leading-[30px]",
  md: "text-base font-normal leading-6",
};

const Text = ({ children, className = "", as, size = "s", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-white-A700 font-inter ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
