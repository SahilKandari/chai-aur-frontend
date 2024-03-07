import React from "react";
import { Text, Heading, Img } from "./..";

export default function DesktopThreeAvatarlabel({
  lexFridman = "Lex Fridman",
  p705kfollowers = "705K Followers",
  ...props
}) {
  return (
    <div {...props}>
      <div className="flex flex-row justify-start w-full gap-3">
        <Img src="images/defaultNoData.png" alt="avatar_one" className="h-[48px] w-[48px] rounded-[50%]" />
        <div className="flex flex-col items-start justify-start w-[26%] gap-1">
          <Heading as="h1">{lexFridman}</Heading>
          <Text size="md" as="p">
            {p705kfollowers}
          </Text>
        </div>
      </div>
    </div>
  );
}
