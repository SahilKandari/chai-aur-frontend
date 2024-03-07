import React from "react";
import { Heading, Text, Button, Img } from "./..";

export default function DesktopOneMetricitem({ heading = "Total Views", number = "221,234", ...props }) {
  return (
    <div {...props}>
      <Button
        color="deep_purple_50"
        size="4xl"
        shape="circle"
        className="w-[48px] border-gray-900_02 border-4 border-solid"
      >
        <Img src="images/defaultNoData.png" />
      </Button>
      <div className="flex flex-col items-start justify-start w-full gap-[9px] mx-auto max-w-[340px]">
        <Text as="p" className="!font-medium">
          {heading}
        </Text>
        <div className="flex flex-row justify-start pt-0.5">
          <Heading size="3xl" as="h1" className="tracking-[-0.72px]">
            {number}
          </Heading>
        </div>
      </div>
    </div>
  );
}
