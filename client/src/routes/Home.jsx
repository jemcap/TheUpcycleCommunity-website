import React from "react";
import Landing from "../components/home/Landing";
import BlogPosts from "../components/home/BlogPosts";

const Home = () => {
  return (
    <section className="h-screen w-screen py-5">
      <BlogPosts />
      {/* <Landing /> */}
    </section>
  );
};

export default Home;
