import React from "react";
import { Img, Text } from "./..";

export default function DesktopEightInputdropdown({ labelFive = "Timezone", ...props }) {
  return (
    <div {...props}>
      <Text as="p" className="!font-medium">
        {labelFive}
      </Text>
      <div className="flex flex-row justify-start items-center w-full gap-2 p-2.5 border-blue_gray-100 border border-solid bg-black-900 shadow-sm rounded-lg">
        <div className="flex flex-row justify-start items-center w-[95%] ml-1 gap-2">
          <Img src="images/defaultNoData.png" alt="clock_one" className="h-[20px] w-[20px]" />
          <Text size="md" as="p" className="!font-medium">
            PST
          </Text>
          <Text size="md" as="p">
            UTC−08:00
          </Text>
        </div>
        <Img src="images/defaultNoData.png" alt="arrowdown_two" className="h-[20px] w-[20px] mr-1" />
      </div>
    </div>
  );
}
