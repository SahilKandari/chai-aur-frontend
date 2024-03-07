import React from "react";
import { CloseSVG } from "../../assets/images";
import { Img, Input } from "./..";

export default function Header1({ ...props }) {
  const [searchBarValue2, setSearchBarValue2] = React.useState("");

  return (
    <header {...props}>
      <div className="flex flex-row justify-center w-full border-blue_gray-50 border-b border-solid bg-black-900">
        <div className="flex flex-row justify-center w-full max-w-[1371px]">
          <div className="flex flex-row justify-center items-center w-full p-1">
            <Img src="images/img_logo.png" alt="logo_one" className="w-[63px] object-cover" />
            <Input
              name="search"
              placeholder="Search"
              value={searchBarValue2}
              onChange={(e) => setSearchBarValue2(e)}
              prefix={<Img src="images/defaultNoData.png" alt="search" className="cursor-pointer" />}
              suffix={
                searchBarValue2?.length > 0 ? (
                  <CloseSVG onClick={() => setSearchBarValue2("")} fillColor="#ffffffff" />
                ) : null
              }
              className="w-[30%] ml-[416px] gap-2 font-medium border-2"
            />
            <div className="flex flex-col items-center justify-start h-[40px] w-[40px] ml-[362px] mr-7">
              <div className="flex flex-col items-center justify-start h-[40px] w-[40px]">
                <div className="flex flex-col items-center justify-start h-[40px] w-[40px]">
                  <Img src="images/defaultNoData.png" alt="avatar_one" className="h-[40px] w-[40px] rounded-[50%]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
