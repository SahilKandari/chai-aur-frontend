import React from "react";
import { Text, Heading, Img } from "./..";

export default function DesktopAvatarlabel({
  yashMittal = "Yash Mittal",
  p117kfollowers = "11.7K followers",
  ...props
}) {
  return (
    <div {...props}>
      <Img src="images/defaultNoData.png" alt="avatar_one" className="h-[40px] w-[40px] rounded-[50%]" />
      <div className="flex flex-col items-start justify-start w-[66%] gap-[3px]">
        <Heading size="xs" as="h1">
          {yashMittal}
        </Heading>
        <Text as="p">{p117kfollowers}</Text>
      </div>
    </div>
  );
}
