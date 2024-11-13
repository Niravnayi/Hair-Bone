import React from "react";

const BlogCard = ({ img, alt, button, heading }) => {
  return (
    <div className="bg-card p-5 h-fit  rounded-2xl transform transition duration-300 hover:-translate-y-5  ">
      <div>
        <button className="bg-secondary rounded-3xl text-primary px-5 py-2 ">
          {button}
        </button>

        <p className="text-[28px] font-medium text-start mt-5 ">{heading}</p>
      </div>
      <div className="h-fit w-full overflow-hidden flex justify-center  mt-5">
        <img src={img} alt={alt} className="rounded-2xl   w-fit " />
      </div>
    </div>
  );
};

export default BlogCard;
