import React from "react";
import { Text, Heading, Button, Img } from "./..";

export default function ProfileAnnouncementDesktopTwoEmptystate({
  nopeoplesubscri = "No people subscribed",
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
          <div className="flex flex-col items-center justify-center w-full gap-3">
            <Heading size="lg" as="h1" className="mt-[3px] text-center">
              {nopeoplesubscri}
            </Heading>
            <Text size="md" as="p" className="text-center">
              <span className="text-white-A700">This page has yet to </span>
              <span className="text-white-A700 font-bold">subscribe </span>
              <span className="text-white-A700">a new person. </span>
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
}
