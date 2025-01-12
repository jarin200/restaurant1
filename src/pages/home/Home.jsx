import { Component } from "react";
import Banner from "./banner";
import Category from "./Category";
import SectionHeading from "../../Components/SectionHeading";
import Menu from "./menu";


const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <SectionHeading
       title="From 11:00am to 10:00pm"
        heading="ORDER ONLINE"
      >
      </SectionHeading>
      <Category></Category>
      <SectionHeading
       title="Check it out"
        heading="FROM OUR MENU"
      >
      </SectionHeading>
      <Menu></Menu>
          </div>
  );
};

export default Home;