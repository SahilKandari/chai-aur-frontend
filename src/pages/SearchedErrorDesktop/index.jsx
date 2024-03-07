import React from "react";
import { Helmet } from "react-helmet";
import Header from "../../components/Header";
import SearchedDefaultDesktopSidebar from "../../components/SearchedDefaultDesktopSidebar";
import SearchedErrorDesktopEmptystate from "../../components/SearchedErrorDesktopEmptystate";

export default function SearchedErrorDesktopPage() {
  return (
    <>
      <Helmet>
        <title>Sahil's Application</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full bg-black-900">
        <Header className="flex justify-center items-center w-full" />
        <div className="flex flex-row justify-center w-full">
          <div className="flex flex-row justify-center w-full">
            <div className="flex flex-col items-center justify-start w-[20%]">
              <SearchedDefaultDesktopSidebar className="flex flex-col items-center justify-start w-full gap-[546px] border-blue_gray-50 border-r border-solid bg-black-900" />
            </div>
            <SearchedErrorDesktopEmptystate className="flex flex-row justify-center w-[81%] px-14 py-[396px]" />
          </div>
        </div>
      </div>
    </>
  );
}
