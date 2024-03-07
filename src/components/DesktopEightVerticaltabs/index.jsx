import React from "react";
import { Heading, Button } from "./..";

export default function DesktopEightVerticaltabs({ myDetails, password, ...props }) {
  return (
    <div {...props}>
      {!!myDetails ? (
        <Button color="gray_900_02" size="lg" className="w-full text-white-A700 font-semibold rounded-md">
          {myDetails}
        </Button>
      ) : null}
      <div className="flex flex-row justify-center w-full p-[9px]">
        {!!password ? (
          <Heading size="xs" as="h1">
            {password}
          </Heading>
        ) : null}
      </div>
    </div>
  );
}
