import React from "react";
import { Text, Heading } from "./..";

export default function DesktopNineHeadersection({
  subheading = "Privacy Policy",
  heading = "We care about your privacy",
  description = "Your privacy is important to us at Untitled. We respect your privacy regarding any information we may collect from you across our website.",
  ...props
}) {
  return (
    <div {...props}>
      <div className="flex flex-row justify-center w-full my-4 max-w-7xl">
        <div className="flex flex-row justify-center w-[95%]">
          <div className="flex flex-col items-center justify-start w-[79%] gap-6">
            <div className="flex flex-col items-center justify-start w-full pt-[3px] gap-4 px-[3px]">
              <a href="#">
                <Heading as="h1" className="!text-deep_purple-A200 text-center">
                  {subheading}
                </Heading>
              </a>
              <Heading size="4xl" as="h2" className="tracking-[-0.96px] text-center">
                {heading}
              </Heading>
            </div>
            <Text size="xl" as="p" className="w-[80%] text-center">
              {description}
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
}
