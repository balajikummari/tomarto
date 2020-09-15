import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/TwoColumnWithVideo.js";
import Features from "components/features/ThreeColSimple.js";
import MainFeature from "components/features/TwoColWithButton.js";
import MainFeature2 from "components/features/TwoColSingleFeatureWithStats2.js";
import TabGrid from "components/cards/TabCardGrid.js";
import Testimonial from "components/testimonials/ThreeColumnWithProfileImage.js";
import DownloadApp from "components/cta/DownloadApp.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import SliderCard from "components/custom/ThreeColSlider.js";
import TextLoop from "react-text-loop";

import chefIconImageSrc from "images/chef-icon.svg";
import celebrationIconImageSrc from "images/celebration-icon.svg";
import shopIconImageSrc from "images/shop-icon.svg";

export default () => {
  const Subheading = tw.span`tracking-wider text-sm font-medium`;
  const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4  inline-block`;
  const HighlightedTextM = tw.span`bg-primary-500 text-3xl text-gray-100 px-4  inline-block`;

  const HighlightedTextInverse = tw.span`bg-gray-100 text-primary-500 px-4 transform -skew-x-12 inline-block`;
  const Description = tw.span`inline-block mt-8`;
  const imageCss = tw`rounded-4xl`;

  const Heading = tw.h1`text-redPrimary-500 text-3xl md:text-5xl leading-snug max-w-3xl`;
//   const Heading2 = tw.h1`text-primary-500 text-3xl md:text-5xl leading-snug max-w-3xl`;
//  const Heading3 = tw.h1`font-black text-3xl md:text-5xl leading-snug max-w-3xl`;


  return (
    <AnimationRevealPage>
      <Hero
        heading={<>      
        <TextLoop interval={1800} springConfig={{ stiffness: 50, damping: 10 }}>
        <Heading>Daily</Heading>
        <Heading>Fresh</Heading>
        <Heading>On Time</Heading>
      </TextLoop> Grocery <HighlightedTextM>Supermarket to your basement.</HighlightedTextM></>}
        description="We bring Fresh fruits, vegetables, grocery like oil, rice, staples on our smart truck to your apartment daily at a specific time, for you to shop, just like supermarket."
        imageSrc="https://i.ibb.co/GPg9DZ0/Untitled-design-1.png"
        imageCss={imageCss}
        imageDecoratorBlob={true}
      />
    
      <MainFeature
        imageCss = 'max-width: 115%'
        subheading={<Subheading></Subheading>}
        heading={
          <>
             Truck in basement
            <wbr /> <HighlightedText>Same Time Everyday.</HighlightedText>
          </>
        }
        description={
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
            <br />
            <br />
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Description>
        }
        buttonRounded={false}
        textOnLeft={false}
        primaryButtonText="Know timings"
        imageSrc={
          "https://i.ibb.co/FXkcn7Y/Untitled-design.png"
        }
        imageCss={imageCss}
        imageDecoratorBlob={true}
        imageDecoratorBlobCss={tw`left-1/2 -translate-x-1/2 md:w-32 md:h-32 opacity-25`}
      />
       <SliderCard />
      <MainFeature
        subheading={<Subheading></Subheading>}
        heading={
          <>
             Fresh Grocery 
            <wbr /> <HighlightedText>Hand Pick Yourself.</HighlightedText>
          </>
        }
        description={
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
            <br />
            <br />
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Description>
        }
        buttonRounded={false}
        textOnLeft={true}
        primaryButtonText="Know timings"
        imageSrc={
          "https://i.ibb.co/GPg9DZ0/Untitled-design-1.png"
        }
        imageCss={imageCss}
        imageDecoratorBlob={true}
        imageDecoratorBlobCss={tw`left-1/2 -translate-x-1/2 md:w-32 md:h-32 opacity-25`}
      />
      {/* TabGrid Component also accepts a tabs prop to customize the tabs and its content directly. Please open the TabGrid component file to see the structure of the tabs props.*/}
      {/* <TabGrid
        heading={
          <>
            Checkout our <HighlightedText>menu.</HighlightedText>
          </>
        }
      /> */}
      {/* <Features
        heading={
          <>
            Amazing <HighlightedText>Services.</HighlightedText>
          </>
        }
        cards={[
          {
            imageSrc: shopIconImageSrc,
            title: "8+ Locations",
            description: "Lorem ipsum donor amet siti ceali placeholder text",
            url: "https://google.com"
          },
          {
            imageSrc: chefIconImageSrc,
            title: "Top Quality Items",
            description: "Lorem ipsum donor amet siti ceali placeholder text",
            url: "https://timerse.com"
          },
          {
            imageSrc: celebrationIconImageSrc,
            title: "From Local Farmers",
            description: "Lorem ipsum donor amet siti ceali placeholder text",
            url: "https://reddit.com"
          }
        ]}

        imageContainerCss={tw`p-2!`}
        imageCss={tw`w-20! h-20!`}
      /> */}
     
      <Testimonial
        subheading=""
        heading={<>Our Trusted <HighlightedText>Suppliers.</HighlightedText></>}
      />
      {/* <DownloadApp
        text={<>People around you are ordering delicious meals using the <HighlightedTextInverse>Treact App.</HighlightedTextInverse></>}
      /> */}
      <Footer />
    </AnimationRevealPage>
  );
}
