import React from "react";
import { Heading, Img } from "./..";

export default function SearchedDefaultDesktopSidebar({
  home = "Home",
  likedVideos = "Liked Videos",
  history = "History",
  myContent = "My content",
  collection = "Collection",
  subscribers = "Subscribers",
  support = "Support",
  settings = "Settings",
  ...props
}) {
  return (
    <div {...props}>
      <div className="flex flex-col items-center justify-start w-full pt-8">
        <div className="flex flex-col items-center justify-start w-full gap-1">
          <div className="flex flex-row justify-start items-center w-full gap-3 p-2 border-white-A700 border border-solid bg-black-900 max-w-[248px]">
            <Img src="images/img_home_line.svg" alt="homeline_one" className="h-[24px] w-[24px] ml-1" />
            <Heading as="h1">{home}</Heading>
          </div>
          <div className="flex flex-row justify-start items-center w-full gap-3 p-2 border-white-A700 border border-solid bg-black-900 max-w-[248px]">
            <Img src="images/img_thumbs_up.svg" alt="thumbsup_one" className="h-[24px] w-[24px] ml-1" />
            <Heading as="h2">{likedVideos}</Heading>
          </div>
          <div className="flex flex-row justify-start items-center w-full gap-3 p-2 border-white-A700 border border-solid bg-black-900 max-w-[248px]">
            <Img src="images/img_clock_rewind.svg" alt="clockrewind_one" className="h-[24px] w-[24px] ml-1" />
            <Heading as="h3">{history}</Heading>
          </div>
          <div className="flex flex-row justify-start items-center w-full gap-3 p-2 border-white-A700 border border-solid bg-black-900 max-w-[248px]">
            <Img src="images/img_video_recorder.svg" alt="videorecorder" className="h-[24px] w-[24px] ml-1" />
            <Heading as="h4">{myContent}</Heading>
          </div>
          <div className="flex flex-row justify-start items-center w-full gap-3 p-2 border-white-A700 border border-solid bg-black-900 max-w-[248px]">
            <Img src="images/img_folder.svg" alt="folder_one" className="h-[24px] w-[24px] ml-1" />
            <Heading as="h5">{collection}</Heading>
          </div>
          <div className="flex flex-row justify-start items-center w-full gap-3 p-2 border-white-A700 border border-solid bg-black-900 max-w-[248px]">
            <Img src="images/img_user_check_01.svg" alt="usercheckone" className="h-[24px] w-[24px] ml-1" />
            <Heading as="h6">{subscribers}</Heading>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-center w-full pb-4">
        <div className="flex flex-col items-center justify-start w-[89%] mb-4 gap-1">
          <div className="flex flex-row justify-start items-center w-full gap-3 p-2 border-white-A700 border border-solid bg-black-900">
            <Img src="images/img_help_circle.svg" alt="image" className="h-[24px] w-[24px] ml-1" />
            <a href="#">
              <Heading as="h2">{support}</Heading>
            </a>
          </div>
          <div className="flex flex-row justify-start items-center w-full gap-3 p-2 border-white-A700 border border-solid bg-black-900">
            <Img src="images/img_settings_01.svg" alt="settingsone_one" className="h-[24px] w-[24px] ml-1" />
            <Heading as="h3">{settings}</Heading>
          </div>
        </div>
      </div>
    </div>
  );
}
