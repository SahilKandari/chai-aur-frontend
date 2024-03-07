import React from "react";
import { Img, SelectBox } from "./..";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function DesktopEightWysiwygtoolbar({ ...props }) {
  return (
    <div {...props}>
      <div className="flex flex-row justify-start w-[37%]">
        <div className="flex flex-row justify-start w-full">
          <SelectBox
            indicator={<Img src="images/defaultNoData.png" alt="arrow_down" />}
            name="arrowdown"
            placeholder="Regular"
            options={dropDownOptions}
            className="w-full gap-px font-medium border-blue_gray-100 border border-solid"
          />
        </div>
      </div>
      <div className="flex flex-row justify-start w-[27%] gap-1">
        <Img src="images/defaultNoData.png" alt="wysiwygeditor" className="h-[32px] w-[32px] rounded-md" />
        <Img src="images/defaultNoData.png" alt="wysiwygeditor" className="h-[32px] w-[32px] rounded-md" />
        <Img src="images/defaultNoData.png" alt="wysiwygeditor" className="h-[32px] w-[32px] rounded-md" />
        <Img src="images/defaultNoData.png" alt="wysiwygeditor" className="h-[32px] w-[32px] rounded-md" />
        <Img src="images/defaultNoData.png" alt="wysiwygeditor" className="h-[32px] w-[32px] rounded-md" />
      </div>
    </div>
  );
}
