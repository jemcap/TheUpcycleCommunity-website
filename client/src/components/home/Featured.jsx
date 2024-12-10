import React from "react";

const Featured = () => {
  const featuredPost = {
    image: "src/assets/young-adult-reusing-fabric-material.jpg",
    title:
      "Sustainable fashion: Get creative with the use of used Polyester clothing",
    author: "John Doe",
  };

  const recentPosts = [
    {
      image:
        "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
      title: "Eco-friendly Shoes",
      description: "Discover the trend of sustainable footwear.",
    },
    {
      image:
        "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
      title: "Recycled Fabrics",
      description: "How recycled fabrics are transforming the industry.",
    },
  ];

  const PostCard = ({ image, title, description }) => (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img
          src={image}
          alt={title}
          className="rounded-xl w-full h-48 object-cover"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );

  return (
    <div className="align-elements flex justify-between items-start gap-10">
      <div className="card card-compact bg-base-100 w-2/3 shadow-xl flex-1">
        <figure className="h-[500px]">
          <img
            src={featuredPost.image}
            alt={featuredPost.title}
            className="object-cover w-full h-full"
          />
        </figure>
        <article className="card-body">
          <h2 className="card-title">{featuredPost.title}</h2>
          <small>{featuredPost.author}</small>
        </article>
      </div>
      <aside className="w-1/3 flex flex-col gap-5">
        <h1 className="text-xl font-bold text-center">Recent Posts</h1>
        {recentPosts.map((post, index) => (
          <PostCard
            key={index}
            image={post.image}
            title={post.title}
            description={post.description}
          />
        ))}
      </aside>
    </div>
  );
};

export default Featured;
