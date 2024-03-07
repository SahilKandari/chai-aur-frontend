import React from "react";
import { Heading, Button, Img, Text } from "./..";

export default function ProfileVideoViewDefaultDesktopPageheader({
  imageTwo = "images/defaultNoData.png",
  yashmittal = "YashMittal",
  yashmittalOne = "@YashMittal",
  p600k = "600k Subscribers",
  text = "•",
  subscribedcount = "220 Subscribed",
  viewOne,
  usersplusOne,
  follow,
  follow1,
  videos,
  playlist,
  tweets,
  following = "Following",
  badgeOne,
  ...props
}) {
  return (
    <div {...props}>
      <div className="flex flex-col items-center justify-start w-full">
        <div className="flex flex-row justify-center w-full">
          <Img src={imageTwo} alt="image_two" className="w-full object-cover" />
        </div>
        <div className="flex flex-col items-center justify-start w-full mt-[-16px] gap-6 max-w-[1096px]">
          <div className="flex flex-row justify-start items-center w-full gap-6">
            <div className="flex flex-col items-center justify-start h-[160px] w-[160px]">
              <Img src="images/defaultNoData.png" alt="content_one" className="h-[160px] w-[160px] rounded-[50%]" />
            </div>
            <div className="flex flex-row justify-start items-start w-[84%] gap-[5px]">
              <div className="flex flex-col items-start justify-start w-[87%] mt-[9px] gap-1.5">
                <Heading size="2xl" as="h1">
                  {yashmittal}
                </Heading>
                <Text size="md" as="p">
                  {yashmittalOne}
                </Text>
                <div className="flex flex-row justify-start items-center gap-2">
                  <Text size="md" as="p">
                    {p600k}
                  </Text>
                  <Text as="p">{text}</Text>
                  <Text size="md" as="p">
                    {subscribedcount}
                  </Text>
                </div>
              </div>
              <div className="h-[49px] w-[13%] relative">
                <div className="flex flex-col items-center justify-start w-[95%] bottom-0 right-0 m-auto absolute">
                  {!!viewOne ? <div className="h-[44px] w-full z-[1] bg-blue_gray-900" /> : null}
                  <div className="flex flex-row justify-start items-center w-[96%] mt-[-40px] gap-2 p-2.5 border-deep_purple-A100 border border-solid bg-deep_purple-A100 shadow-sm">
                    {!!usersplusOne ? (
                      <Img src={usersplusOne} alt="usersplus_one" className="h-[20px] w-[20px] ml-1.5" />
                    ) : null}
                    {!!follow ? (
                      <Heading size="xs" as="h2" className="mr-1.5 !text-black-900">
                        {follow}
                      </Heading>
                    ) : null}
                  </div>
                </div>
                {!!follow1 ? (
                  <Button
                    size="3xl"
                    leftIcon={<Img src="images/defaultNoData.png" alt="Icon" />}
                    className="gap-2.5 left-0 top-0 m-auto font-semibold min-w-[109px] absolute"
                  >
                    {follow1}
                  </Button>
                ) : null}
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-start w-full gap-4 py-4 border-blue_gray-50 border-b border-solid">
            {!!videos ? (
              <Button
                color="gray_100"
                size="3xl"
                className="w-full font-semibold border-deep_purple-A100 border-b-2 border-solid min-w-[262px]"
              >
                {videos}
              </Button>
            ) : null}
            <div className="flex flex-row justify-center w-full p-3">
              {!!playlist ? (
                <Heading size="xs" as="h3" className="mt-0.5 !text-blue_gray-500">
                  {playlist}
                </Heading>
              ) : null}
            </div>
            <div className="flex flex-row justify-center w-full p-[13px]">
              {!!tweets ? (
                <Heading size="xs" as="h4" className="!text-blue_gray-500">
                  {tweets}
                </Heading>
              ) : null}
            </div>
            <div className="flex flex-row justify-center items-center w-full gap-2 p-[11px]">
              <Heading size="xs" as="h5" className="!text-blue_gray-500">
                {following}
              </Heading>
              {!!badgeOne ? <div className="h-[22px] w-[10%] bg-gray-100_01 rounded-[11px]" /> : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
