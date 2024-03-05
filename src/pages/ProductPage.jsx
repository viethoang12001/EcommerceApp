import React from "react";
import Annouce from "../components/Annouce";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Newsletter from "../components/Newsletter";
import Counter from "../components/Counter";
function ProductPage() {
  return (
    <div>
      <Annouce />
      <NavBar />
      <div className="flex justify-center">
        <div className=" flex flex-1 justify-center items-center">
          <img
            src="https://cdn.shopify.com/s/files/1/0240/7285/products/KushJonesLST-ShirtinBlack09_360x.jpg?v=1642719733"
            alt="product_image"
            className="w-[80%] h-[80%] rounded-lg shadow-lg hover:scale-[1.1] ease-in duration-300"
          />
        </div>
        <div className="flex-[1.3] items-start justify-items-start flex-col mt-10">
          <h1 className="title text-[40px]">
            Creamy hoody 100% orignal cotton
          </h1>
          <p className="pr-[4rem] text-justify mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
            aspernatur atque ab quaerat reprehenderit corporis magnam tempora,
            numquam suscipit dolores soluta fuga, molestias laboriosam minima
            perferendis doloribus ratione, culpa quod.
          </p>
          <p className="mt-7 text-3xl">
            Price: <b>$70</b>
          </p>
          <div className="flex text-2xl mt-7">
            Color
            <div className="bg-red-600 w-[2rem] h-[2rem] rounded-full border-2 p-[10px] cursor-pointer ml-5"></div>
            <div className="bg-blue-600 w-[2rem] h-[2rem] rounded-full border-2 p-[10px] cursor-pointer ml-5"></div>
            <div className="bg-yellow-400 w-[2rem] h-[2rem] rounded-full border-2 p-[10px] cursor-pointer ml-5"></div>
          </div>
          <div className="mt-7 text-2xl">
            Size
            <select className="ml-5 ">
              <option selected disabled>
                Select
              </option>
              <option value="">Small</option>
              <option value="">Medium</option>
              <option value="">Langre</option>
            </select>
          </div>
          <div className=" flex justify-start mt-5">
            <Counter />
          </div>
          <button className="btn mt-5">Add To Cart</button>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
}

export default ProductPage;
