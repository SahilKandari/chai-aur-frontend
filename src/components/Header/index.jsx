import React from "react";
import { Heading, Img, Text } from "./..";

export default function Header({ ...props }) {
  return (
    <header {...props}>
      <div className="flex flex-row justify-center w-full border-blue_gray-50 border-b border-solid bg-black-900">
        <div className="flex flex-row justify-center w-full max-w-[1371px]">
          <div className="flex flex-row justify-between items-center w-full p-[3px]">
            <Img src="images/img_logo.png" alt="logo_one" className="w-[63px] mt-px ml-1.5 object-cover" />
            <div className="flex flex-row justify-between items-center w-[66%] mt-[5px] mr-[27px]">
              <a href="#">
                <Text />
              </a>
              <div className="flex flex-row justify-center w-[25%]">
                <ul className="flex flex-row justify-between items-end w-full">
                  <li>
                    <div className="flex flex-col items-center justify-start h-[20px] mb-3">
                      <div className="flex flex-col items-center justify-start h-[20px] w-[20px]">
                        <Img src="images/img_dots_vertical.svg" alt="dotsvertical" className="h-[20px] w-[20px]" />
                      </div>
                    </div>
                  </li>
                  <li>
                    <a href="#" className="mb-2.5 cursor-pointer hover:bg-deep_purple-A100">
                      <Heading as="h6">Log in</Heading>
                    </a>
                  </li>
                  <li>
                    <div className="h-[49px] relative">
                      <div className="flex flex-row justify-center w-[95%] bottom-0 right-0 left-0 m-auto absolute">
                        <a
                          href="#"
                          className="flex justify-center items-center w-[95px] h-[44px] px-[18px] py-3 border-deep_purple-A100 border border-solid bg-deep_purple-A100 text-shadow-ts1 cursor-pointer hover:text-white-A700"
                        >
                          <Heading as="h6" className="!text-black-900">
                            Sign up
                          </Heading>
                        </a>
                        <div className="h-[44px] w-full ml-[-94px] bg-blue_gray-900" />
                      </div>
                      <a
                        href="#"
                        className="flex justify-center items-center w-[95px] h-[44px] left-0 top-0 px-[18px] py-3 m-auto bg-deep_purple-A100 cursor-pointer absolute hover:text-white-A700"
                      >
                        <Heading as="h6" className="!text-black-900">
                          Sign up
                        </Heading>
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
