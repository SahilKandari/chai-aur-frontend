import React from "react";
import { Button } from "./..";

export default function DesktopFourSectionfooter({ cancel = "Cancel", updatePassword = "Update password", ...props }) {
  return (
    <div {...props}>
      <div className="h-px w-full bg-blue_gray-50" />
      <div className="flex flex-row justify-start w-full pl-[814px] gap-3">
        <Button
          color="black_900"
          className="font-semibold border-blue_gray-100 border border-solid min-w-[80px] rounded-lg"
        >
          {cancel}
        </Button>
        <Button className="font-semibold border-deep_purple-A100 border border-solid min-w-[152px]">
          {updatePassword}
        </Button>
      </div>
    </div>
  );
}
