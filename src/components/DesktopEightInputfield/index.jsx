import React from "react";
import { Input, Text } from "./..";

export default function DesktopEightInputfield({ labelThree = "Username", vidplaycom = "vidplay.com/", ...props }) {
  return (
    <div {...props}>
      <Text as="p" className="!font-medium">
        {labelThree}
      </Text>
      <div className="flex flex-row justify-start items-center pl-3.5 gap-3 border-blue_gray-100 border border-solid bg-black-900 shadow-sm rounded-lg">
        <Text size="md" as="p">
          {vidplaycom}
        </Text>
        <Input name="textinput" placeholder="olivia" className="w-[84%] rounded-tr-lg rounded-br-lg border" />
      </div>
    </div>
  );
}
