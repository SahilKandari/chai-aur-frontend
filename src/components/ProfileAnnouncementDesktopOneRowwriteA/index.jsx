import React from "react";
import { Button, Img, Text } from "./..";

export default function ProfileAnnouncementDesktopOneRowwriteA({
  writeA = "Write a annoucement",
  facesmileOne,
  dotshorizontal,
  ...props
}) {
  return (
    <div {...props}>
      <div className="flex flex-row justify-center w-full">
        <div className="flex flex-col items-start justify-center w-full gap-[17px] p-3 border-blue_gray-100 border border-solid bg-black-900 shadow-sm">
          <Text size="md" as="p" className="mt-0.5 ml-0.5">
            {writeA}
          </Text>
          <div className="flex flex-row justify-start items-center w-[14%] ml-[942px] gap-2">
            <div className="flex flex-row justify-start w-[50%] gap-0.5">
              <div className="flex flex-col items-center justify-start h-[36px] w-[36px] p-2">
                {!!facesmileOne ? <Img src={facesmileOne} alt="dotshorizontal" className="h-[20px] w-[20px]" /> : null}
              </div>
              <div className="flex flex-col items-center justify-start h-[36px] w-[36px] p-2">
                {!!facesmileOne ? <Img src={facesmileOne} alt="dotshorizontal" className="h-[20px] w-[20px]" /> : null}
              </div>
            </div>
            <Button className="font-semibold border-deep_purple-A100 border border-solid min-w-[67px]">Send</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
