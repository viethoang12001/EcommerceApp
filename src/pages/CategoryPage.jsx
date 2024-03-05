import React from "react";
import Annouce from "../components/Annouce";
import NavBar from "../components/NavBar";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
function CategoryPage() {
  return (
    <div>
      <Annouce />
      <NavBar />
      <div className="flex flex-col p-5">
        <h1 className="text-[30px] ">Men's Cloth</h1>
        <div className="flex items-center justify-between mt-3">
          <div className=" flex">
            <p>Filter by </p>
            <select className="ml-3 border-2">
              <option selected disabled>
                Size
              </option>
              <option>Small</option>
              <option>Medium</option>
              <option>Large</option>
            </select>
            <select className="ml-3 border-2">
              <option selected disabled>
                Color
              </option>
              <option>red</option>
              <option>blue</option>
              <option>yellow</option>
            </select>
          </div>
          <div>
            <p>Sort By</p>
            <select className="ml-3 border-2 ">
              <option>Newset (first)</option>
              <option>Oldest (first)</option>
              <option>Pirce(Asc)</option>
              <option>Pirce (Des)</option>
            </select>
          </div>
        </div>
      </div>
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default CategoryPage;
