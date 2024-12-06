import React from "react";

const Featured = () => {
  const image = "src/assets/young-adult-reusing-fabric-material.jpg";
  return (
    <>
      <div className="align-elements flex justify-between items-center gap-10">
        <div className="card card-compact bg-base-100 w-2/3 shadow-xl flex-1">
          <figure className="h-[500px]">
            <img src={image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Sustainable fashion: Get creative with the use of used Polyester
              clothing
            </h2>
            <small>John Doe</small>
          </div>
        </div>
        <aside className="w-1/3">
          <h1>hello</h1>
        </aside>
      </div>
    </>
  );
};

export default Featured;
