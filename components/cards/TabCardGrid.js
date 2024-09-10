import React, { useState } from "react";
import { motion } from "framer-motion";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import { SectionHeading } from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import { ReactComponent as StarIcon } from "images/star-icon.svg";
import { ReactComponent as SvgDecoratorBlob1 } from "images/svg-decorator-blob-5.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "images/svg-decorator-blob-7.svg";

const HeaderRow = tw.div`flex justify-between items-center flex-col xl:flex-row`;
const Header = tw(SectionHeading)``;
const TabsControl = tw.div`flex flex-wrap bg-gray-200 px-2 py-2 rounded leading-none mt-12 xl:mt-0`;

const TabControl = styled.div`
  ${tw`cursor-pointer px-6 py-3 mt-2 sm:mt-0 sm:mr-2 last:mr-0 text-gray-600 font-medium rounded-sm transition duration-300 text-sm sm:text-base w-1/2 sm:w-auto text-center`}
  &:hover {
    ${tw`bg-gray-300 text-gray-700`}
  }
  ${props => props.active && tw`bg-primary-500! text-gray-100!`}
  }
`;

const TabContent = tw(motion.div)`mt-6 flex flex-wrap sm:-mr-10 md:-mr-6 lg:-mr-12`;
const CardContainer = tw.div`mt-10 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 sm:pr-10 md:pr-6 lg:pr-12`;
const Card = tw(motion.a)`bg-gray-200 rounded-b block max-w-xs mx-auto sm:max-w-none sm:mx-0`;
const CardImageContainer = styled.div`
  ${props => css`background-image: url("${props.imageSrc}");`}
  ${tw`h-56 xl:h-64 bg-center bg-cover relative rounded-t`}
`;
const CardRatingContainer = tw.div`leading-none absolute inline-flex bg-gray-100 bottom-0 left-0 ml-4 mb-4 rounded-full px-5 py-2 items-end`;
const CardRating = styled.div`
  ${tw`mr-1 text-sm font-bold flex items-end`}
  svg {
    ${tw`w-4 h-4 fill-current text-orange-400 mr-1`}
  }
`;

const CardHoverOverlay = styled(motion.div)`
  background-color: rgba(255, 255, 255, 0.5);
  ${tw`absolute inset-0 flex justify-center items-center`}
`;
const CardButton = tw(PrimaryButtonBase)`text-sm`;

const CardReview = tw.div`font-medium text-xs text-gray-600`;

const CardText = tw.div`p-4 text-gray-900`;
const CardTitle = tw.h5`text-lg font-semibold group-hover:text-primary-500`;
const CardContent = tw.p`mt-1 text-sm font-medium text-gray-600`;
const CardPrice = tw.p`mt-4 text-xl font-bold`;

const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none -z-20 absolute right-0 top-0 h-64 w-64 opacity-15 transform translate-x-2/3 -translate-y-12 text-pink-400`}
`;
const DecoratorBlob2 = styled(SvgDecoratorBlob2)`
  ${tw`pointer-events-none -z-20 absolute left-0 bottom-0 h-80 w-80 opacity-15 transform -translate-x-2/3 text-primary-500`}
`;

export default ({
  heading = "Checkout the Menu",
  tabs = {
    Starters: [
      {
        imageSrc:
          "https://img.freepik.com/free-photo/top-view-pakistani-food-arrangement_23-2148825109.jpg?t=st=1720066591~exp=1720070191~hmac=d38a748d8ae79bf56c5ab04c6b3657da812a3ffa40984f1d11ba6665335c7ddd&w=740",
        title: "Palak Paneer",
        content: "Paneer Palak & Chilies etc",
        price: "200 Rs",
        rating: "5.0",
        reviews: "87",
        url: "#"
      },
      {
        imageSrc:
          "https://img.freepik.com/free-photo/front-view-meat-hamburger-with-fresh-tomatoes-dark-background_179666-19386.jpg?t=st=1720066839~exp=1720070439~hmac=4d7aba53ce390d6f98748044764c6075ebfd5e68ef9ec2b7560e2c0e8a8bf5ef&w=826",
        title: "Veg Burger",
        content: "Vegetables Beans",
        price: "190 Rs",
        rating: "4.8",
        reviews: "32",
        url: "#"
      },
      {
        imageSrc:
          "https://img.freepik.com/free-photo/traditional-indian-soup-lentils-indian-dhal-spicy-curry-bowl-spices-herbs-rustic-black-wooden-table_2829-18717.jpg?t=st=1720066998~exp=1720070598~hmac=7840979e2190024bfeedbf25339b512ed671672291b6e47374b6cbf3c55ccce2&w=826",
        title: "Dal Khichadi",
        content: "Masoor dal & White rice",
        price: "150 Rs",
        rating: "4.9",
        reviews: "89",
        url: "#"
      },
      {
        imageSrc:
          "https://img.freepik.com/free-photo/vertical-shot-traditional-indian-paneer-butter-masala-cheese-cottage-curry-black-surface_181624-32001.jpg?t=st=1720067157~exp=1720070757~hmac=d43bf331a4cf217a7efcfb3f144bb4a5ad3f992ccd68a33c17f504b4f1905df4&w=740",
        title: "Paneer Bhara Masala",
        content: "Paneer & Tomato etc",
        price: "280 Rs",
        rating: "4.6",
        reviews: "12",
        url: "#"
      },
      {
        imageSrc:
          "https://img.freepik.com/free-photo/top-view-delicious-food-table_23-2149629082.jpg?t=st=1720067283~exp=1720070883~hmac=6df6c3859c244247ef0c0fe51f6bcd3788cd29b6ce1fba494129ee5199bd432a&w=826",
        title: "Mashroom Masala",
        content: "Mashroom, gineer, Sweet Tomatos etc",
        price: "230 Rs",
        rating: "4.2",
        reviews: "19",
        url: "#"
      },
      {
        imageSrc:
          "https://img.freepik.com/free-photo/fried-spring-rolls-cutting-board_1150-17010.jpg?t=st=1720065751~exp=1720069351~hmac=af60347e821c9b8e20b12eff3a629fbd35a128b42fda4987f1f6110a43f8b957&w=826",
        title: "Vegetable Spring Roll",
        content: "Carrots, soy sauce, garlic and ginger etc",
        price: "180 Rs",
        rating: "5.0",
        reviews: "61",
        url: "#"
      },
      {
        imageSrc:
          "https://ministryofcurry.com/wp-content/uploads/2022/07/Dahi-Puri_-4-1.jpg",
        title: "Dahi Puri",
        content: "Yogurt Green, Chutney, Potatoes, Onions etc",
        price: "60 Rs",
        rating: "4.2",
        reviews: "95",
        url: "#"
      },
      {
        imageSrc:
          "https://realfood.tesco.com/media/images/Garlicky-mushroom-bruschetta-with-pesto-HERO-edd27bf8-8509-4d66-9e1c-af241dbbab5c-0-472x310.jpg",
        title: "Mashroom Bruschetta",
        content: "Mix Mashroom, Cheese, Bread, Garlic etc",
        price: "200 Rs",
        rating: "3.9",
        reviews: "26",
        url: "#"
      }
    ],
    Main: getRandomCards(),
    Soup: getRandomCards(),
    Desserts: getRandomCards()
  }
}) => {
  /*
   * To customize the tabs, pass in data using the `tabs` prop. It should be an object which contains the name of the tab
   * as the key and value of the key will be its content (as an array of objects).
   * To see what attributes are configurable of each object inside this array see the example above for "Starters".
   */
  const tabsKeys = Object.keys(tabs);
  const [activeTab, setActiveTab] = useState(tabsKeys[0]);

  return (
    <Container>
      <ContentWithPaddingXl>
        <HeaderRow>
          <Header>{heading}</Header>
          <TabsControl>
            {Object.keys(tabs).map((tabName, index) => (
              <TabControl key={index} active={activeTab === tabName} onClick={() => setActiveTab(tabName)}>
                {tabName}
              </TabControl>
            ))}
          </TabsControl>
        </HeaderRow>

        {tabsKeys.map((tabKey, index) => (
          <TabContent
            key={index}
            variants={{
              current: {
                opacity: 1,
                scale:1,
                display: "flex",
              },
              hidden: {
                opacity: 0,
                scale:0.8,
                display: "none",
              }
            }}
            transition={{ duration: 0.4 }}
            initial={activeTab === tabKey ? "current" : "hidden"}
            animate={activeTab === tabKey ? "current" : "hidden"}
          >
            {tabs[tabKey].map((card, index) => (
              <CardContainer key={index}>
                <Card className="group" href={card.url} initial="rest" whileHover="hover" animate="rest">
                  <CardImageContainer imageSrc={card.imageSrc}>
                    <CardRatingContainer>
                      <CardRating>
                        <StarIcon />
                        {card.rating}
                      </CardRating>
                      <CardReview>({card.reviews})</CardReview>
                    </CardRatingContainer>
                    <CardHoverOverlay
                      variants={{
                        hover: {
                          opacity: 1,
                          height: "auto"
                        },
                        rest: {
                          opacity: 0,
                          height: 0
                        }
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <CardButton>Buy Now</CardButton>
                    </CardHoverOverlay>
                  </CardImageContainer>
                  <CardText>
                    <CardTitle>{card.title}</CardTitle>
                    <CardContent>{card.content}</CardContent>
                    <CardPrice>{card.price}</CardPrice>
                  </CardText>
                </Card>
              </CardContainer>
            ))}
          </TabContent>
        ))}
      </ContentWithPaddingXl>
      <DecoratorBlob1 />
      <DecoratorBlob2 />
    </Container>
  );
};

/* This function is only there for demo purposes. It populates placeholder cards */
const getRandomCards = () => {
  const cards = [
    {
      imageSrc:
        "https://img.freepik.com/free-photo/fresh-vegetarian-salad-healthy-meal-with-gourmet-ingredients-generated-by-ai_188544-30672.jpg?t=st=1720070455~exp=1720074055~hmac=7e1262cef4d79dd1b3faf5f22679e5208660d0343a7fd70caaa61d166fb590fe&w=900",
      title: "Vegan Roasted Sweet Potato Salad",
      content: "roasted sweet potatoes, avocado, black beans and raw kale",
      price: "90 Rs",
      rating: "5.0",
      reviews: "87",
      url: "#"
    },
    {
      imageSrc:
        "https://img.freepik.com/free-photo/flat-lay-mexican-meal_23-2148131979.jpg?t=st=1720071493~exp=1720075093~hmac=e4624da3a674faedac018402163ae60435452da025fb360acaac458a75891b32&w=740",
      title: "Vegetarian Burrito Bowl with Avocado Crema",
      content: "roasted veggies, beans and a lime-garlic avocado crema on a bed of rice",
      price: "180 Rs",
      rating: "4.5",
      reviews: "34",
      url: "#"
    },
    {
      imageSrc:
        "https://img.freepik.com/free-photo/pre-prepared-food-showcasing-ready-eat-delicious-meals-go_23-2151246080.jpg?t=st=1720070894~exp=1720074494~hmac=141b248fd91ee661d41cf0b4e44eed8a14da9c373e6b9d351c2543f87421cebf&w=360",
      title: "Chicken Tikka Masala",
      content: "Chicken breast or thighs marinated in yogurt",
      price: "280 Rs",
      rating: "3.9",
      reviews: "26",
      url: "#"
    },
    {
      imageSrc:
        "https://img.freepik.com/free-photo/top-view-mushroom-soup_23-2148656389.jpg?t=st=1720069313~exp=1720072913~hmac=831e56f20d89ce9f0deb92f2946b9ecb27284f190cda82f7f253615e6b26425a&w=826",
      title: "Waldorf Soup",
      content: "vegetables and served with bread croutons",
      price: "70 Rs",
      rating: "4.2",
      reviews: "95",
      url: "#"
    },
    {
      imageSrc:
        "https://img.freepik.com/free-photo/veggies-creme-soup-winter-food-high-view_23-2148717349.jpg?t=st=1720069435~exp=1720073035~hmac=94fa3db0e0c4f98128bf73ba5b8f847ef8d48fc4e2dd47e97afb55c33393dc2b&w=740",
      title: "Roasted Garlic Soup",
      content: "roasted garlic, served with a side of confit chicken",
      price: "60 Rs",
      rating: "5.0",
      reviews: "61",
      url: "#"
    },
    {
      imageSrc:
        "https://img.freepik.com/free-photo/top-view-mushrooms-bisque-spoon-with-copy-space_23-2148369714.jpg?t=st=1720069603~exp=1720073203~hmac=6ab9fd326c1ddd4728a83d29d0ff84e3e335a73d0eb0a5cc4fe8f479c3f8d1a3&w=826",
      title: "Mushroom Cappuccino",
      content: "mushrooms, served with a side of bread",
      price: "120 Rs",
      rating: "4.9",
      reviews: "89",
      url: "#"
    },
    {
      imageSrc:
        "https://img.freepik.com/free-photo/tomato-soup-with-basil-bowl_114579-12655.jpg?t=st=1720069752~exp=1720073352~hmac=84cf333f551d2c3d5ef581dc4a1b3bda5e3a6acf5eb8907b3abd64eb346b09e6&w=826",
      title: "Tomato and Basil",
      content: "tomatoes and basil, served with a side of bread",
      price: "70 Rs",
      rating: "4.6",
      reviews: "12",
      url: "#"
    },
    {
      imageSrc:
        "https://img.freepik.com/free-photo/high-angle-pumpkin-soup-bowl-with-pumpkin-wooden-spoon_23-2148369627.jpg?t=st=1720069949~exp=1720073549~hmac=32ea9f99f3d8ef6be3fa86767dfd0fd3bf3d902449363461e1cca4735146fe82&w=900",
      title: "Butternut Squash and Sweet Potato",
      content: "butternut squash and sweet potatoes",
      price: "80 Rs",
      rating: "4.2",
      reviews: "19",
      url: "#"
    }
  ];

  // Shuffle array
  return cards.sort(() => Math.random() - 0.5);
};
