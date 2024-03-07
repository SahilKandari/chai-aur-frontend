import React from "react";
import { Text, Heading, Button, Img } from "./..";

export default function ModalFileupload({
  clickToUpload = "Click to upload",
  orDragAnd = "or drag and drop",
  svgpngjpgorgifm = "SVG, PNG, JPG or GIF (max. 800x400px)",
  ...props
}) {
  return (
    <div {...props}>
      <div className="flex flex-row justify-center w-full p-4 border-blue_gray-50 border border-solid bg-black-900">
        <div className="flex flex-col items-center justify-start w-full gap-3 max-w-[460px]">
          <Button
            color="gray_900_02"
            size="xl"
            shape="circle"
            className="w-[40px] border-black-900 border-[3px] border-solid"
          >
            <Img src="images/defaultNoData.png" />
          </Button>
          <div className="flex flex-col items-center justify-start w-full gap-1.5">
            <div className="flex flex-row justify-start items-center w-full pl-[121px] pr-14 gap-1">
              <div className="flex flex-row justify-start w-[36%]">
                <Heading size="xs" as="h1" className="mt-0.5 !text-teal-800">
                  {clickToUpload}
                </Heading>
              </div>
              <Text as="p">{orDragAnd}</Text>
            </div>
            <Text size="xs" as="p" className="text-center">
              {svgpngjpgorgifm}
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
}
