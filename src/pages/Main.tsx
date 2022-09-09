import React, { useEffect } from "react";
import { useUploadsState } from "../context/UploadImageContext";
import { DragAndDrop } from "components/DragDrop";
import { Card } from "../components/Card";
const CartPage: React.FC = () => {
  const context = useUploadsState();

  useEffect(() => {
    console.log(context.images);
  }, [context.images]);

  return (
    <div className="flex relative flex-col justify-center items-center py-10">
      <DragAndDrop />
      <button className="relative mt-10 inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-lg font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          Submit
        </span>
      </button>

      <div className="flex relative right-2 w-2/3 flex-wrap items-center justify-center">
        {context.images.map((item, i) => (
          <Card imgSrc={item.bytes} id={item.id} key={item.id} />
        ))}

        {/* <Card
          imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg"
          id={1}
        />
        <Card
          imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg"
          id={2}
        />
        <Card
          imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg"
          id={3}
        />
        <Card
          imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg"
          id={4}
        />
        <Card
          imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg"
          id={5}
        />
        <Card
          imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg"
          id={6}
        />
        <Card
          imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg"
          id={7}
        /> */}
      </div>
    </div>
  );
};

export default CartPage;
