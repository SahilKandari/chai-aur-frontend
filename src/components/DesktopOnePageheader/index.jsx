import React from "react";
import { Button, Img, Text, Heading } from "./..";

export default function DesktopOnePageheader({
  welcomebackoliv = "Welcome back, Olivia",
  trackmanageandf,
  uploadVideo,
  ...props
}) {
  return (
    <div {...props}>
      <div className="flex flex-col items-start justify-center w-[87%] gap-[5px]">
        <Heading size="2xl" as="h1" className="mt-0.5">
          {welcomebackoliv}
        </Heading>
        {!!trackmanageandf ? (
          <Text size="md" as="p">
            {trackmanageandf}
          </Text>
        ) : null}
      </div>
      <div className="flex flex-row justify-start w-[13%]">
        {!!uploadVideo ? (
          <Button
            leftIcon={<Img src="images/defaultNoData.png" alt="plus" />}
            className="w-full gap-2 font-semibold border-deep_purple-A100 border border-solid"
          >
            {uploadVideo}
          </Button>
        ) : null}
      </div>
    </div>
  );
}
