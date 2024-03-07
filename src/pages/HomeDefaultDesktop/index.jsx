import React from "react";
import { Helmet } from "react-helmet";
import { Text, Img } from "../../components";
import Header from "../../components/Header";
import SearchedDefaultDesktopSidebar from "../../components/SearchedDefaultDesktopSidebar";

export default function HomeDefaultDesktopPage() {
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
            <div className="flex flex-col items-center justify-start w-[81%] pb-[110px]">
              <div className="justify-center w-full gap-4 grid-cols-4 grid">
                <div className="flex flex-col items-center justify-start w-full gap-4">
                  <Img src="images/img_image_133x270.png" alt="image_one" className="w-full object-cover" />
                  <div className="flex flex-col items-center justify-start w-full gap-2">
                    <div className="flex flex-row justify-start items-center w-full gap-4">
                      <Img src="images/img_avatar.png" alt="circleimage" className="h-[40px] w-[40px] rounded-[50%]" />
                      <Text size="md" as="p" className="w-[66%] !font-medium">
                        How to learn react | A React Roadmap
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-start w-full gap-[5px]">
                      <div className="flex flex-row justify-start ml-[54px] gap-2">
                        <Text as="p">100K Views</Text>
                        <Text as="p">•</Text>
                        <Text as="p">18 hours ago</Text>
                      </div>
                      <Text as="p" className="ml-[54px]">
                        Yash Mittal
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-full gap-4">
                  <Img src="images/img_image_4.png" alt="image_one" className="w-full object-cover" />
                  <div className="flex flex-col items-center justify-start w-full gap-2">
                    <div className="flex flex-row justify-start items-center w-full gap-4">
                      <Img
                        src="images/img_avatar_40x40.png"
                        alt="avatar_one"
                        className="h-[40px] w-[40px] rounded-[50%]"
                      />
                      <Text size="md" as="p" className="w-[66%] !font-medium">
                        How much I made with 70M views
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-start w-full gap-[5px]">
                      <div className="flex flex-row justify-start ml-[54px] gap-2">
                        <Text as="p">100K Views</Text>
                        <Text as="p">•</Text>
                        <Text as="p">18 hours ago</Text>
                      </div>
                      <Text as="p" className="ml-[54px]">
                        Arnau Ros
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-full gap-4">
                  <Img src="images/img_image_5.png" alt="image_one" className="w-full object-cover" />
                  <div className="flex flex-col items-center justify-start w-full gap-2">
                    <div className="flex flex-row justify-start items-center w-full gap-4">
                      <Img src="images/img_avatar.png" alt="avatar_one" className="h-[40px] w-[40px] rounded-[50%]" />
                      <Text size="md" as="p" className="w-[66%] !font-medium">
                        Deno just got 2M npm packages
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-start w-full gap-[5px]">
                      <div className="flex flex-row justify-start ml-[54px] gap-2">
                        <Text as="p">100K Views</Text>
                        <Text as="p">•</Text>
                        <Text as="p">18 hours ago</Text>
                      </div>
                      <Text as="p" className="ml-[54px]">
                        Arnau Ros
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-full gap-4">
                  <Img src="images/img_image_6.png" alt="image_one" className="w-full object-cover" />
                  <div className="flex flex-col items-center justify-start w-full gap-2">
                    <div className="flex flex-row justify-start items-center w-full gap-4">
                      <Img src="images/img_avatar.png" alt="avatar_one" className="h-[40px] w-[40px] rounded-[50%]" />
                      <Text size="md" as="p" className="w-[66%] !font-medium">
                        Best way to learn Socket IO | comlex chat IO
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-start w-full gap-[5px]">
                      <div className="flex flex-row justify-start ml-[54px] gap-2">
                        <Text as="p">100K Views</Text>
                        <Text as="p">•</Text>
                        <Text as="p">18 hours ago</Text>
                      </div>
                      <Text as="p" className="ml-[54px]">
                        Arnau Ros
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-full gap-4">
                  <Img src="images/img_image_7.png" alt="image_one" className="w-full object-cover" />
                  <div className="flex flex-col items-center justify-start w-full gap-2">
                    <div className="flex flex-row justify-start items-center w-full gap-4">
                      <Img src="images/img_avatar.png" alt="avatar_one" className="h-[40px] w-[40px] rounded-[50%]" />
                      <Text size="md" as="p" className="w-[66%] !font-medium">
                        Terraform, fig & FreeAPI | Updates in Open Source
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-start w-full gap-[5px]">
                      <div className="flex flex-row justify-start ml-[54px] gap-2">
                        <Text as="p">100K Views</Text>
                        <Text as="p">•</Text>
                        <Text as="p">18 hours ago</Text>
                      </div>
                      <Text as="p" className="ml-[54px]">
                        Arnau Ros
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-full gap-4">
                  <Img src="images/img_image_8.png" alt="image_one" className="w-full object-cover" />
                  <div className="flex flex-col items-center justify-start w-full gap-2">
                    <div className="flex flex-row justify-start items-center w-full gap-4">
                      <Img src="images/img_avatar.png" alt="avatar_one" className="h-[40px] w-[40px] rounded-[50%]" />
                      <Text size="md" as="p" className="w-[66%] !font-medium">
                        Let’s learn react from scratch
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-start w-full gap-[5px]">
                      <div className="flex flex-row justify-start ml-[54px] gap-2">
                        <Text as="p">100K Views</Text>
                        <Text as="p">•</Text>
                        <Text as="p">18 hours ago</Text>
                      </div>
                      <Text as="p" className="ml-[54px]">
                        Arnau Ros
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-full gap-4">
                  <Img src="images/img_image_9.png" alt="image_one" className="w-full object-cover" />
                  <div className="flex flex-col items-center justify-start w-full gap-2">
                    <div className="flex flex-row justify-start items-center w-full gap-4">
                      <Img src="images/img_avatar.png" alt="avatar_one" className="h-[40px] w-[40px] rounded-[50%]" />
                      <Text size="md" as="p" className="w-[66%] !font-medium">
                        Google’s IDX Unveiled : Exclusive First Look
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-start w-full gap-[5px]">
                      <div className="flex flex-row justify-start ml-[54px] gap-2">
                        <Text as="p">100K Views</Text>
                        <Text as="p">•</Text>
                        <Text as="p">18 hours ago</Text>
                      </div>
                      <Text as="p" className="ml-[54px]">
                        Arnau Ros
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-full gap-4">
                  <Img src="images/img_image_10.png" alt="image_one" className="w-full object-cover" />
                  <div className="flex flex-col items-center justify-start w-full gap-2">
                    <div className="flex flex-row justify-start items-center w-full gap-4">
                      <Img src="images/img_avatar.png" alt="avatar_one" className="h-[40px] w-[40px] rounded-[50%]" />
                      <Text size="md" as="p" className="w-[66%] !font-medium">
                        Google and Pieces dropped some interesting updates
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-start w-full gap-[5px]">
                      <div className="flex flex-row justify-start ml-[54px] gap-2">
                        <Text as="p">100K Views</Text>
                        <Text as="p">•</Text>
                        <Text as="p">18 hours ago</Text>
                      </div>
                      <Text as="p" className="ml-[54px]">
                        Arnau Ros
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-full gap-4">
                  <Img src="images/img_image_11.png" alt="image_one" className="w-full object-cover" />
                  <div className="flex flex-col items-center justify-start w-full gap-2">
                    <div className="flex flex-row justify-start items-center w-full gap-4">
                      <Img src="images/img_avatar.png" alt="avatar_one" className="h-[40px] w-[40px] rounded-[50%]" />
                      <Text size="md" as="p" className="w-[66%] !font-medium">
                        Flutter Dart case Study by @getpieces | Engineering side
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-start w-full gap-[5px]">
                      <div className="flex flex-row justify-start ml-[54px] gap-2">
                        <Text as="p">100K Views</Text>
                        <Text as="p">•</Text>
                        <Text as="p">18 hours ago</Text>
                      </div>
                      <Text as="p" className="ml-[54px]">
                        Arnau Ros
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-full gap-4">
                  <Img src="images/img_image_3.png" alt="image_one" className="w-full object-cover" />
                  <div className="flex flex-col items-center justify-start w-full gap-2">
                    <div className="flex flex-row justify-start items-center w-full gap-4">
                      <Img src="images/img_avatar.png" alt="avatar_one" className="h-[40px] w-[40px] rounded-[50%]" />
                      <Text size="md" as="p" className="w-[66%] !font-medium">
                        How database works | Engineering side
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-start w-full gap-[5px]">
                      <div className="flex flex-row justify-start ml-[54px] gap-2">
                        <Text as="p">100K Views</Text>
                        <Text as="p">•</Text>
                        <Text as="p">18 hours ago</Text>
                      </div>
                      <Text as="p" className="ml-[54px]">
                        Arnau Ros
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-full gap-4">
                  <Img src="images/img_image_12.png" alt="image_one" className="w-full object-cover" />
                  <div className="flex flex-col items-center justify-start w-full gap-2">
                    <div className="flex flex-row justify-start items-center w-full gap-4">
                      <Img src="images/img_avatar.png" alt="avatar_one" className="h-[40px] w-[40px] rounded-[50%]" />
                      <Text size="md" as="p" className="w-[66%] !font-medium">
                        Building a multi million dollar developer product | Dhiwise
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-start w-full gap-[5px]">
                      <div className="flex flex-row justify-start ml-[54px] gap-2">
                        <Text as="p">100K Views</Text>
                        <Text as="p">•</Text>
                        <Text as="p">18 hours ago</Text>
                      </div>
                      <Text as="p" className="ml-[54px]">
                        Arnau Ros
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-full gap-4">
                  <Img src="images/img_image_13.png" alt="image_one" className="w-full object-cover" />
                  <div className="flex flex-col items-center justify-start w-full gap-2">
                    <div className="flex flex-row justify-start items-center w-full gap-4">
                      <Img src="images/img_avatar.png" alt="avatar_one" className="h-[40px] w-[40px] rounded-[50%]" />
                      <Text size="md" as="p" className="w-[66%] !font-medium">
                        How does a browser work? | Engineering side
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-start w-full gap-[5px]">
                      <div className="flex flex-row justify-start ml-[54px] gap-2">
                        <Text as="p">100K Views</Text>
                        <Text as="p">•</Text>
                        <Text as="p">18 hours ago</Text>
                      </div>
                      <Text as="p" className="ml-[54px]">
                        Arnau Ros
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
