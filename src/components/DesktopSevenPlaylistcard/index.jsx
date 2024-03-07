import React from "react";
import { Img, Text, Heading } from "./..";

export default function DesktopSevenPlaylistcard({
  playlist = "Playlist",
  p100kviews = "100K Views",
  text = "•",
  duration = "18 hours ago",
  videoscounter = "32 videos",
  heading = "Google and Pieces dropped some interesting updates",
  description = "If you&#39;re a developer, be sure to check out the latest updates to Google and Pieces to make your coding workflow even more efficient.",
  image,
  ...props
}) {
  return (
    <div {...props}>
      <div className="flex flex-row justify-center items-center h-[280px] w-full pt-48 bg-[url(/public/images/defaultNoData.png)] bg-cover bg-no-repeat">
        <div className="flex flex-row justify-center w-full bg-gradient">
          <div className="flex flex-row justify-center w-full p-6 border-white-A700_7f border-t border-solid bg-blue_gray-700_7f">
            <div className="flex flex-row justify-between items-start w-full max-w-[501px]">
              <div className="flex flex-col items-start justify-start w-[38%] pt-0.5 gap-px">
                <Heading size="xs" as="h1">
                  {playlist}
                </Heading>
                <div className="flex flex-row justify-start w-full">
                  <div className="flex flex-row justify-start w-full gap-2">
                    <Text as="p">{p100kviews}</Text>
                    <Text as="p">{text}</Text>
                    <Text as="p">{duration}</Text>
                  </div>
                </div>
              </div>
              <Heading size="xs" as="h2">
                {videoscounter}
              </Heading>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-center items-start w-full">
        <div className="flex flex-col items-center justify-start w-[97%] gap-2">
          <Text size="2xl" as="p" className="text-shadow-ts">
            {heading}
          </Text>
          <Text size="md" as="p">
            {description}
          </Text>
        </div>
        <div className="flex flex-col items-center justify-start h-[20px] w-[20px]">
          {!!image ? <Img src={image} alt="image" className="h-[20px] w-[20px]" /> : null}
        </div>
      </div>
    </div>
  );
}
