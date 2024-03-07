import React from "react";
import { Button, Img, Text, Heading } from "./..";

export default function ProfileVideoEditEmptyDesktopOneEmptystate({
  noVideos = "No videos uploaded",
  clicktouploadne = "Click to upload new video. You have yet to upload a video. ",
  newVideo = "New video",
  ...props
}) {
  return (
    <div {...props}>
      <div className="flex flex-col items-center justify-start w-[33%] gap-5">
        <Button
          color="deep_purple_50"
          size="6xl"
          shape="circle"
          className="w-[56px] border-gray-900_02 border-[5px] border-solid"
        >
          <Img src="images/img_play.svg" />
        </Button>
        <div className="flex flex-col items-center justify-start w-full pt-[3px] gap-[9px]">
          <Heading size="lg" as="h1" className="text-center">
            {noVideos}
          </Heading>
          <Text size="md" as="p" className="text-center">
            {clicktouploadne}
          </Text>
        </div>
      </div>
      <Button
        size="3xl"
        leftIcon={<Img src="images/defaultNoData.png" alt="plus" />}
        className="gap-2 font-semibold border-deep_purple-A100 border border-solid min-w-[146px]"
      >
        {newVideo}
      </Button>
    </div>
  );
}
