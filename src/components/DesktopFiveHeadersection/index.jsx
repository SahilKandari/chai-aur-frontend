import React from "react";
import { Button, Text, Heading } from "./..";

export default function DesktopFiveHeadersection({
  subheading = "FAQs",
  heading = "We’re here to help",
  havequestionswe = "Have questions? We’re here to help.",
  contact = "Contact",
  ...props
}) {
  return (
    <div {...props}>
      <div className="flex flex-row justify-center w-full my-4 max-w-7xl">
        <div className="flex flex-col items-center justify-start w-[95%] gap-10">
          <div className="flex flex-col items-center justify-start w-[79%] gap-[26px]">
            <div className="flex flex-col items-center justify-start w-full pt-0.5 gap-[18px] px-0.5">
              <a href="#">
                <Heading as="h1" className="!text-deep_purple-A100 text-center">
                  {subheading}
                </Heading>
              </a>
              <Heading size="4xl" as="h2" className="tracking-[-0.96px] text-center">
                {heading}
              </Heading>
            </div>
            <Text size="xl" as="p" className="text-center">
              {havequestionswe}
            </Text>
          </div>
          <Button
            color="deep_purple_A200"
            size="5xl"
            className="font-semibold border-deep_purple-A200 border border-solid shadow-sm min-w-[102px]"
          >
            {contact}
          </Button>
        </div>
      </div>
    </div>
  );
}
