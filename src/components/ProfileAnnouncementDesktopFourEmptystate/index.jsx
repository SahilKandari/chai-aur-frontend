import React from "react";
import { Text, Heading, Button, Img } from "./..";

export default function ProfileAnnouncementDesktopFourEmptystate({
  no = "No Announcements",
  thispagehasyett,
  ...props
}) {
  return (
    <div {...props}>
      <div className="flex flex-row justify-center w-[33%]">
        <div className="flex flex-col items-center justify-start w-full gap-5">
          <Button
            color="deep_purple_50"
            size="6xl"
            shape="circle"
            className="w-[56px] border-gray-900_02 border-[5px] border-solid"
          >
            <Img src="images/defaultNoData.png" />
          </Button>
          <div className="flex flex-col items-center justify-start w-full pt-0.5 gap-2.5">
            <Heading size="lg" as="h1" className="text-center">
              {no}
            </Heading>
            <Text size="md" as="p" className="text-center">
              <span className="text-white-A700">This page has yet to make an </span>
              <span className="text-white-A700 font-bold">Announcements</span>
              <span className="text-white-A700">.</span>
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
}
