import React from "react";
import { Heading, Text, Img } from "./..";

export default function Header2({ ...props }) {
  return (
    <header {...props}>
      <div className="flex flex-row justify-center w-full p-2 border-gray-100_01 border-b border-solid bg-black-900">
        <div className="flex flex-row justify-center w-full mr-[104px] max-w-[1185px]">
          <div className="flex flex-row justify-center items-center w-full">
            <Img src="images/defaultNoData.png" alt="vector_one" className="h-[63px] w-[63px]" />
            <div className="flex flex-row justify-between items-center w-full mt-1 ml-[-52px]">
              <div className="flex flex-row justify-center w-[47%]">
                <ul className="flex flex-row justify-between items-start w-full">
                  <li>
                    <div className="h-[31px] relative">
                      <div className="flex flex-row justify-center items-center w-full h-full left-0 bottom-0 right-0 top-0 m-auto absolute">
                        <Img src="images/defaultNoData.png" alt="vector_three" className="w-[63%] z-[1] object-cover" />
                        <Img src="images/defaultNoData.png" alt="image" className="h-[10px] ml-[-19px]" />
                      </div>
                      <Img
                        src="images/defaultNoData.png"
                        alt="vector_five"
                        className="h-[2px] w-px left-[17%] top-[42%] m-auto absolute"
                      />
                    </div>
                  </li>
                  <li>
                    <div className="flex flex-row justify-between items-center w-auto mt-0.5 gap-8">
                      <a href="#">
                        <Heading as="h6">Home</Heading>
                      </a>
                      <a href="#" className="cursor-pointer hover:text-white-A700 hover:font-semibold">
                        <Text />
                      </a>
                      <a href="#" className="cursor-pointer hover:text-white-A700 hover:font-semibold">
                        <Text />
                      </a>
                      <a href="#">
                        <Heading as="h6">Pricing</Heading>
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="flex flex-row justify-start items-center w-[17%] pl-[18px] gap-[25px]">
                <a href="#">
                  <Heading as="h6">Log in</Heading>
                </a>
                <ul className="h-[49px] w-[59%] relative">
                  <li>
                    <div className="h-[44px] bottom-0 right-0 left-0 m-auto border-deep_purple-A100 border border-solid bg-deep_purple-A100 shadow-sm absolute">
                      <a href="#" className="w-max bottom-[24%] right-0 left-0 m-auto absolute">
                        <Heading as="h6" className="!text-black-900">
                          Sign up
                        </Heading>
                      </a>
                      <div className="justify-center h-[44px] w-full left-0 bottom-0 right-0 top-0 m-auto bg-blue_gray-900 absolute" />
                    </div>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex justify-center items-center w-[95px] h-[44px] left-0 top-0 px-[18px] py-3 m-auto bg-deep_purple-A100 absolute"
                    >
                      <Heading as="h6" className="!text-black-900">
                        Sign up
                      </Heading>
                    </a>
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
