import React from "react";
import { Text, Heading, Button, Img } from "./..";

export default function ProfileVideoEditEmptyDesktopTwoEmptystate({
  nolibrariescrea = "No libraries created",
  therearenoplayl = "there are no playlists inside this library",
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
          <div className="flex flex-col items-center justify-center w-full gap-3.5">
            <Heading size="lg" as="h1" className="mt-px text-center">
              {nolibrariescrea}
            </Heading>
            <Text size="md" as="p" className="text-center">
              {therearenoplayl}
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
}
