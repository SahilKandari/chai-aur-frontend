import React from "react";
import { Button } from "./..";

export default function ProfileVideoEditDefaultDesktopCategory({
  previosly = "Previosly uploaded",
  oldest = "Oldest",
  item = "Item",
  ...props
}) {
  return (
    <div {...props}>
      <Button
        color="deep_purple_A200"
        size="md"
        className="font-medium border-blue_gray-800 border border-solid min-w-[148px]"
      >
        {previosly}
      </Button>
      <Button color="black_900" size="md" className="font-medium border-blue_gray-100 border border-solid min-w-[64px]">
        {oldest}
      </Button>
      <Button color="black_900" size="md" className="font-medium border-blue_gray-100 border border-solid min-w-[50px]">
        {item}
      </Button>
    </div>
  );
}
