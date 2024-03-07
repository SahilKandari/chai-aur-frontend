import React from "react";
import { Text, Heading, Img } from "./..";

export default function DesktopThreeVideo({
  imageOne = "images/defaultNoData.png",
  heading = "How does a browser work? | Engineering side",
  yashMittal = "Yash Mittal",
  p100kviews = "100K Views",
  text = "•",
  duration = "18 hours ago",
  ...props
}) {
  return (
    <div {...props}>
      <Img src={imageOne} alt="image_one" className="w-[33%] object-cover" />
      <div className="flex flex-col items-center justify-start w-[62%] gap-1 py-1.5">
        <div className="flex flex-col items-start justify-start w-full gap-8">
          <Heading as="h1">{heading}</Heading>
          <div className="flex flex-row justify-start w-full">
            <div className="flex flex-row justify-start w-[20%]">
              <Text as="p">{yashMittal}</Text>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-start w-full mb-[5px] gap-2">
          <Text as="p" className="!text-blue_gray-700">
            {p100kviews}
          </Text>
          <Text as="p" className="!text-gray-700">
            {text}
          </Text>
          <Text as="p" className="!text-blue_gray-700">
            {duration}
          </Text>
        </div>
      </div>
    </div>
  );
}
