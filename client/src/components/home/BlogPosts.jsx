import React from "react";

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
const BlogPosts = () => {
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

  return (
    <div>
      <aside className="w-full flex flex-col gap-5">
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

export default BlogPosts;
