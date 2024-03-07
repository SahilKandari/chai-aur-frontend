import React from "react";
import { Text, Heading, Button, Img } from "./..";

export default function SearchedErrorDesktopEmptystate({
  noVideosFound = "No videos found",
  therearenovideo = "There are no videos here for your search result. Please try to search some thing else.",
  ...props
}) {
  return (
    <div {...props}>
      <div className="flex flex-row justify-center w-[34%]">
        <div className="flex flex-col items-center justify-start w-full gap-5">
          <Button
            color="deep_purple_50"
            size="6xl"
            shape="circle"
            className="w-[56px] border-gray-900_02 border-[5px] border-solid"
          >
            <Img src="images/img_play.svg" />
          </Button>
          <div className="flex flex-col items-center justify-start w-full gap-[11px]">
            <Heading size="lg" as="h1" className="text-center">
              {noVideosFound}
            </Heading>
            <Text size="md" as="p" className="text-center">
              {therearenovideo}
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
}
