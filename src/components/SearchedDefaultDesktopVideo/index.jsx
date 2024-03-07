import React from "react";
import { Text, Img, Heading } from "./..";

export default function SearchedDefaultDesktopVideo({
  image = "images/img_image.png",
  title = (
    <>
      Best way to learn Socket IO | <br />
      comlex chat IO
    </>
  ),
  p100kviews = "100K Views",
  text = "•",
  duration = "18 hours ago",
  name = "David Lee",
  loremipsum = "Lorem ipsum dolor sit amet consectetur. Sagittis egestas justo adipiscing integer.",
  ...props
}) {
  return (
    <div {...props}>
      <Img src={image} alt="image" className="w-[29%] object-cover" />
      <div className="flex flex-col items-start justify-start w-[70%] gap-2">
        <div className="flex flex-col items-center justify-start w-[63%] gap-1">
          <Heading size="md" as="h1" className="!leading-[25px]">
            {title}
          </Heading>
          <div className="flex flex-row justify-start w-full">
            <Text as="p">{p100kviews}</Text>
            <Text as="p" className="ml-2 !text-gray-700">
              {text}
            </Text>
            <Text as="p" className="ml-2">
              {duration}
            </Text>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start w-[92%] pb-2 gap-2.5">
          <div className="flex flex-row justify-start items-center gap-2">
            <Img src="images/img_avatar.png" alt="david_lee_one" className="h-[40px] w-[40px] rounded-[50%]" />
            <Text as="p">{name}</Text>
          </div>
          <Text as="p">{loremipsum}</Text>
        </div>
      </div>
    </div>
  );
}
