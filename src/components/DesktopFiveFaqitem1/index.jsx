import React from "react";
import { Button, Img, Text } from "./..";
import { AccordionItemHeading, AccordionItemButton, AccordionItemState } from "react-accessible-accordion";

export default function DesktopFiveFaqitem1({ canichangemypla = "Can I change my plan later?", ...props }) {
  return (
    <div {...props}>
      <div className="flex flex-row justify-start w-[94%]">
        <Text size="lg" as="p" className="mt-1 !font-medium">
          {canichangemypla}
        </Text>
      </div>
      <Button size="sm" className="w-[24px]">
        <Img src="images/defaultNoData.png" />
      </Button>
    </div>
  );
}
