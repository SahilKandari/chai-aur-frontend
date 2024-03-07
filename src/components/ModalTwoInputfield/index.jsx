import React from "react";
import { Text, Input } from "./..";

export default function ModalTwoInputfield({ labelOne = "New password", timezone, ...props }) {
  return (
    <div {...props}>
      <div className="flex flex-col items-start justify-start w-full pt-0.5 gap-1.5">
        <Text as="p" className="!font-medium">
          {labelOne}
        </Text>
        <Input shape="round" name="newpassword" placeholder="••••••••" className="w-full !text-blue_gray-500 border" />
      </div>
      {!!timezone ? (
        <Text as="p" className="!text-blue_gray-700">
          {timezone}
        </Text>
      ) : null}
    </div>
  );
}
