import React from "react";
import { Text, Heading } from "./..";

export default function DesktopNineContentsection({
  description = (
    <>
      Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum
      felis. Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere vulputate arcu amet, vitae
      nisi, tellus tincidunt. At feugiat sapien varius id.
      <br />
      Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat mollis at volutpat lectus velit, sed auctor.
      Porttitor fames arcu quis fusce augue enim. Quis at habitant diam at. Suscipit tristique risus, at donec. In
      turpis vel et quam imperdiet. Ipsum molestie aliquet sodales id est ac volutpat.{" "}
    </>
  ),
  headingOne = "What information do we collect?",
  description1 = (
    <>
      Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla odio nisl vitae. In aliquet pellentesque
      aenean hac vestibulum turpis mi bibendum diam. Tempor integer aliquam in vitae malesuada fringilla.
      <br />
      Elit nisi in eleifend sed nisi. Pulvinar at orci, proin imperdiet commodo consectetur convallis risus. Sed
      condimentum enim dignissim adipiscing faucibus consequat, urna. Viverra purus et erat auctor aliquam. Risus,
      volutpat vulputate posuere purus sit congue convallis aliquet. Arcu id augue ut feugiat donec porttitor neque.
      Mauris, neque ultricies eu vestibulum, bibendum quam lorem id. Dolor lacus, eget nunc lectus in tellus, pharetra,
      porttitor.
      <br />
      Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris id. Non pellentesque congue eget consectetur
      turpis. Sapien, dictum molestie sem tempor. Diam elit, orci, tincidunt aenean tempus. Quis velit eget ut tortor
      tellus. Sed vel, congue felis elit erat nam nibh orci.
    </>
  ),
  headingTwo = "How do we use your information?",
  description2 = (
    <>
      Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla odio nisl vitae. In aliquet pellentesque
      aenean hac vestibulum turpis mi bibendum diam. Tempor integer aliquam in vitae malesuada fringilla.
      <br />
      Elit nisi in eleifend sed nisi. Pulvinar at orci, proin imperdiet commodo consectetur convallis risus. Sed
      condimentum enim dignissim adipiscing faucibus consequat, urna. Viverra purus et erat auctor aliquam. Risus,
      volutpat vulputate posuere purus sit congue convallis aliquet. Arcu id augue ut feugiat donec porttitor neque.
      Mauris, neque ultricies eu vestibulum, bibendum quam lorem id. Dolor lacus, eget nunc lectus in tellus, pharetra,
      porttitor.
      <br />
      Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris id. Non pellentesque congue eget consectetur
      turpis. Sapien, dictum molestie sem tempor. Diam elit, orci, tincidunt aenean tempus. Quis velit eget ut tortor
      tellus. Sed vel, congue felis elit erat nam nibh orci.
    </>
  ),
  headingThree = "Do we use cookies and other tracking technologies?",
  description3 = "Pharetra morbi libero id aliquam elit massa integer tellus. Quis felis aliquam ullamcorper porttitor. Pulvinar ullamcorper sit dictumst ut eget a, elementum eu. Maecenas est morbi mattis id in ac pellentesque ac.",
  headingFour = "How long do we keep your information?",
  description4 = "Pharetra morbi libero id aliquam elit massa integer tellus. Quis felis aliquam ullamcorper porttitor. Pulvinar ullamcorper sit dictumst ut eget a, elementum eu. Maecenas est morbi mattis id in ac pellentesque ac.",
  headingFive = "How do we keep your information safe?",
  description5 = "Pharetra morbi libero id aliquam elit massa integer tellus. Quis felis aliquam ullamcorper porttitor. Pulvinar ullamcorper sit dictumst ut eget a, elementum eu. Maecenas est morbi mattis id in ac pellentesque ac.",
  headingSix = "What are your privacy rights?",
  description6 = "Pharetra morbi libero id aliquam elit massa integer tellus. Quis felis aliquam ullamcorper porttitor. Pulvinar ullamcorper sit dictumst ut eget a, elementum eu. Maecenas est morbi mattis id in ac pellentesque ac.",
  headingSeven = "How can you contact us about this policy?",
  description7 = (
    <>
      Sagittis et eu at elementum, quis in. Proin praesent volutpat egestas sociis sit lorem nunc nunc sit. Eget diam
      curabitur mi ac. Auctor rutrum lacus malesuada massa ornare et. Vulputate consectetur ac ultrices at diam dui eget
      fringilla tincidunt. Arcu sit dignissim massa erat cursus vulputate gravida id. Sed quis auctor vulputate hac
      elementum gravida cursus dis.
      <br />
      Lectus id duis vitae porttitor enim gravida morbi.
      <br />
      Eu turpis posuere semper feugiat volutpat elit, ultrices suspendisse. Auctor vel in vitae placerat.
      <br />
      Suspendisse maecenas ac donec scelerisque diam sed est duis purus.
    </>
  ),
  ...props
}) {
  return (
    <div {...props}>
      <div className="flex flex-col items-center justify-start w-full mb-1.5 max-w-7xl">
        <div className="flex flex-col items-center justify-start w-[95%]">
          <div className="flex flex-col items-start justify-start w-[60%]">
            <div className="flex flex-row justify-start">
              <Text size="lg" as="p">
                {description}
              </Text>
            </div>
            <Heading size="2xl" as="h1" className="mt-[30px]">
              {headingOne}
            </Heading>
            <div className="flex flex-row justify-start mt-5">
              <Text size="lg" as="p">
                {description1}
              </Text>
            </div>
            <Heading size="2xl" as="h2" className="mt-[43px]">
              {headingTwo}
            </Heading>
            <div className="flex flex-row justify-start mt-[17px]">
              <Text size="lg" as="p">
                {description2}
              </Text>
            </div>
            <div className="flex flex-row justify-start py-3.5">
              <Heading size="xl" as="h3" className="mt-5">
                {headingThree}
              </Heading>
            </div>
            <div className="flex flex-row justify-start">
              <Text size="lg" as="p">
                {description3}
              </Text>
            </div>
            <div className="flex flex-row justify-start py-3.5">
              <Heading size="xl" as="h4" className="mt-5">
                {headingFour}
              </Heading>
            </div>
            <div className="flex flex-row justify-start">
              <Text size="lg" as="p">
                {description4}
              </Text>
            </div>
            <div className="flex flex-row justify-start py-3.5">
              <Heading size="xl" as="h5" className="mt-5">
                {headingFive}
              </Heading>
            </div>
            <div className="flex flex-row justify-start">
              <Text size="lg" as="p">
                {description5}
              </Text>
            </div>
            <Heading size="2xl" as="h6" className="mt-[43px]">
              {headingSix}
            </Heading>
            <div className="flex flex-row justify-start mt-[17px]">
              <Text size="lg" as="p">
                {description6}
              </Text>
            </div>
            <div className="flex flex-row justify-start py-3.5">
              <Heading size="xl" as="h4" className="mt-5">
                {headingSeven}
              </Heading>
            </div>
            <div className="flex flex-row justify-start">
              <Text size="lg" as="p">
                {description7}
              </Text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
