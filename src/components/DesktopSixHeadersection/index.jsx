import React from "react";
import { Text, Heading } from "./..";

export default function DesktopSixHeadersection({
  subheading = "Current as of 20 Jan 2022",
  termandconditio = "Terms and conditions",
  description = "By accessing our website, you are agreeing to be bound by these terms of service, and agree that you are responsible for compliance with any applicable local laws.",
  ...props
}) {
  return (
    <div {...props}>
      <div className="flex flex-row justify-center w-full my-4 max-w-7xl">
        <div className="flex flex-row justify-center w-[95%]">
          <div className="flex flex-col items-center justify-start w-[79%] gap-6">
            <div className="flex flex-col items-center justify-start w-full gap-[13px]">
              <Heading as="h1" className="!text-deep_purple-A200 text-center">
                {subheading}
              </Heading>
              <a href="#">
                <Heading size="4xl" as="h2" className="tracking-[-0.96px] text-center">
                  {termandconditio}
                </Heading>
              </a>
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
