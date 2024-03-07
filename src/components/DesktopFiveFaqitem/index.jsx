import React from "react";
import { Button, Img, Text } from "./..";

export default function DesktopFiveFaqitem({
  isthereafreetri = "Is there a free trial available?",
  description = "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  ...props
}) {
  return (
    <div {...props}>
      <div className="flex flex-col items-start justify-start w-[94%] pt-[3px] gap-2.5">
        <Text size="lg" as="p" className="!font-medium">
          {isthereafreetri}
        </Text>
        <Text size="md" as="p">
          {description}
        </Text>
      </div>
      <Button size="sm" className="w-[24px]">
        <Img src="images/defaultNoData.png" />
      </Button>
    </div>
  );
}
