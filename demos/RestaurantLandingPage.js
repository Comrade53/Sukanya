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

import chefIconImageSrc from "images/chef-icon.svg";
import celebrationIconImageSrc from "images/celebration-icon.svg";
import shopIconImageSrc from "images/shop-icon.svg";

export default () => {
  const Subheading = tw.span`tracking-wider text-sm font-medium`;
  const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;
  const HighlightedTextInverse = tw.span`bg-gray-100 text-primary-500 px-4 transform -skew-x-12 inline-block`;
  const Description = tw.span`inline-block mt-8`;
  const imageCss = tw`rounded-4xl`;
  return (
    <AnimationRevealPage>
      <Hero
        heading={
          <>
            Dine with Us, Stay with Us{" "}
            <HighlightedText>Taste the Comfort.</HighlightedText>
          </>
        }
        description="Discover the flavors of Sukanya Hotel
Where tradition meets innovation and taste meets excellence.
Come, indulge in the delight!."
        imageSrc="https://img.freepik.com/premium-photo/restaurant-place-where-people-can-order-eat-ai-generated_866663-6441.jpg?w=900"
        imageCss={imageCss}
        imageDecoratorBlob={true}
        primaryButtonText="Explore"
        watchVideoButtonText="Meet The Chefs"
      />
      <MainFeature
        subheading={<Subheading>Established Since 2019</Subheading>}
        heading={
          <>
            We've been serving for
            <wbr /> <HighlightedText>over 5 years.</HighlightedText>
          </>
        }
        description={
          <Description>
            Book now and enjoy limited-time offers, including discounted room rates, free upgrades, and a complimentary anniversary gift.
            <br />
            {/* <br />
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. */}
          </Description>
        }
        buttonRounded={false}
        textOnLeft={false}
        primaryButtonText="Latest Offers"
        imageSrc={
          "https://img.freepik.com/free-photo/top-view-delicious-sweet-pastries-with-chocolate-cookies-cup-tea-dark-space_140725-75884.jpg?t=st=1720089209~exp=1720092809~hmac=49fcc87b11fcdd7bcd83a6ddf34fa84dcdc11f258609cf24a3a3a329508d4259&w=826"
        }
        imageCss={imageCss}
        imageDecoratorBlob={true}
        imageDecoratorBlobCss={tw`left-1/2 -translate-x-1/2 md:w-32 md:h-32 opacity-25`}
      />
      {/* TabGrid Component also accepts a tabs prop to customize the tabs and its content directly. Please open the TabGrid component file to see the structure of the tabs props.*/}
      <TabGrid
        heading={
          <>
            Checkout our <HighlightedText>menu.</HighlightedText>
          </>
        }
      />
      <Features
        heading={
          <>
            Amazing <HighlightedText>Services.</HighlightedText>
          </>
        }
        cards={[
          {
            imageSrc: shopIconImageSrc,
            title: "50+ Locations",
            description: "Delivery of meals and snacks from the hotel",
            url: "#",
          },
          {
            imageSrc: chefIconImageSrc,
            title: "Professional Chefs",
            description: "Favorite recipes and cooking techniques",
            url: "#",
          },
          {
            imageSrc: celebrationIconImageSrc,
            title: "Birthday Catering",
            description: "Celebrate Your Special Day with Us!",
            url: "#",
          },
        ]}
        imageContainerCss={tw`p-2!`}
        imageCss={tw`w-20! h-20!`}
      />
      <MainFeature2
        subheading={<Subheading>A Reputed Brand</Subheading>}
        heading={
          <>
            Why <HighlightedText>Choose Us ?</HighlightedText>
          </>
        }
        statistics={[
          {
            key: "Orders",
            value: "52000+",
          },
          {
            key: "Regular Customers",
            value: "800+",
          },
          {
            key: "Chefs",
            value: "20+",
          },
        ]}
        primaryButtonText="Order Now"
        primaryButtonUrl="https://order.now.com"
        imageInsideDiv={false}
        imageSrc="https://ideogram.ai/assets/image/lossless/response/2l_BOWETTeuqbZ9B-2Bpsw"
        imageCss={Object.assign(tw`bg-cover`, imageCss)}
        imageContainerCss={tw`md:w-1/2 h-auto`}
        imageDecoratorBlob={true}
        imageDecoratorBlobCss={tw`left-1/2 md:w-32 md:h-32 -translate-x-1/2 opacity-25`}
        textOnLeft={true}
      />
      <Testimonial
        subheading=""
        heading={
          <>
            Customers <HighlightedText>Love Us.</HighlightedText>
          </>
        }
      />
      <DownloadApp
        text={
          <>
            People around you are ordering delicious meals using the{" "}
            <HighlightedTextInverse>Sukanya Hotel App</HighlightedTextInverse>
          </>
        }
      />
      <Footer />
    </AnimationRevealPage>
  );
};
