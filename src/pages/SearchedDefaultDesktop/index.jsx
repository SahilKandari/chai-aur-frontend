import React from "react";
import { Helmet } from "react-helmet";
import Header from "../../components/Header";
import SearchedDefaultDesktopSidebar from "../../components/SearchedDefaultDesktopSidebar";
import SearchedDefaultDesktopVideo from "../../components/SearchedDefaultDesktopVideo";

export default function SearchedDefaultDesktopPage() {
  return (
    <>
      <Helmet>
        <title>Sahil's Application</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full bg-black-900">
        <Header className="flex flex-row justify-center items-center w-full" />
        <div className="flex flex-row justify-center w-full">
          <div className="flex flex-row justify-start items-center w-full gap-4">
            <div className="flex flex-col items-center justify-start w-[20%]">
              <SearchedDefaultDesktopSidebar className="flex flex-col items-center justify-start w-full gap-[546px] border-blue_gray-50 border-r border-solid bg-black-900" />
            </div>
            <div className="flex flex-col w-[79%] pr-3 gap-5 py-3">
              <SearchedDefaultDesktopVideo className="flex flex-row justify-start w-[97%] mr-[38px] gap-4" />
              <SearchedDefaultDesktopVideo
                image="images/img_image_172x313.png"
                title="<>Google and Pieces dropped some <br />interesting updates</>"
                className="flex flex-row justify-start w-[97%] mr-[38px] gap-4"
              />
              <SearchedDefaultDesktopVideo
                image="images/img_image_1.png"
                title="<>Flutter Dart Case Study by @getpieces |<br />Engineering side</>"
                className="flex flex-row justify-start w-[97%] mr-[38px] gap-4"
              />
              <SearchedDefaultDesktopVideo
                image="images/img_image_2.png"
                title="Is this the best monitor for coders? | BenQ GW3290QT | Eye-Care Programming Monitor"
                className="flex flex-row justify-start w-[97%] mr-[38px] gap-4"
              />
              <SearchedDefaultDesktopVideo
                image="images/img_image_3.png"
                title="This will change DSA and Leetcode preparation forever | Pieces for developers"
                className="flex flex-row justify-start w-[97%] mr-[38px] gap-4"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
