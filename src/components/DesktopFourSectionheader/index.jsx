import React from "react";
import { Text, Heading } from "./..";

export default function DesktopFourSectionheader({
  password = "Password",
  pleaseenteryour = "Please enter your current password to change your password.",
  ...props
}) {
  return (
    <div {...props}>
      <div className="flex flex-row justify-center w-full">
        <div className="flex flex-col items-start justify-center w-full gap-[9px]">
          <Heading size="md" as="h1" className="mt-[3px]">
            {password}
          </Heading>
          <Text as="p">{pleaseenteryour}</Text>
        </div>
      </div>
      <div className="h-px w-full bg-blue_gray-50" />
    </div>
  );
}
