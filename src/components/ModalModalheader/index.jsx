import React from "react";
import { Text, Heading, Img, Button } from "./..";

export default function ModalModalheader({
  editVideo = "Edit video",
  sharewhereyouve = "Share where you’ve worked on your profile.",
  ...props
}) {
  return (
    <div {...props}>
      <div className="flex flex-row justify-end w-full bg-black-900">
        <div className="flex flex-col items-start justify-start w-[94%] mt-[15px] mr-[15px]">
          <div className="flex flex-row justify-between items-start w-full">
            <Button
              color="black_900"
              size="4xl"
              shape="round"
              className="w-[48px] mt-2 border-blue_gray-50 border border-solid !rounded-[10px]"
            >
              <Img src="images/defaultNoData.png" />
            </Button>
            <div className="flex flex-col items-center justify-start h-[44px] w-[44px] p-2.5">
              <Img src="images/img_arrow_right.svg" alt="arrowright_one" className="h-[24px] w-[24px]" />
            </div>
          </div>
          <Heading size="md" as="h1" className="mt-[19px]">
            {editVideo}
          </Heading>
          <Text as="p" className="mt-[9px]">
            {sharewhereyouve}
          </Text>
        </div>
      </div>
    </div>
  );
}
