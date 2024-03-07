import React from "react";
import { Img, Heading } from "./..";

export default function ModalTwoModalheader({ saveTo = "Save To playlist", ...props }) {
  return (
    <div {...props}>
      <div className="flex flex-col items-center justify-start w-full max-w-[331px]">
        <div className="flex flex-row justify-center w-full pt-2.5 px-2.5 z-[1] bg-black-900">
          <div className="flex flex-row justify-end items-center w-full mt-[13px] gap-[60px]">
            <Heading size="md" as="h1" className="text-center">
              {saveTo}
            </Heading>
            <Img src="images/img_arrow_right.svg" alt="arrowright_one" className="h-[24px] w-[24px]" />
          </div>
        </div>
        <div className="h-[72px] w-full mt-[-52px] bg-black-900" />
      </div>
    </div>
  );
}
