import React from "react";
import Annouce from "../components/Annouce";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Newsletter from "../components/Newsletter";
import Counter from "../components/Counter";
function Cart() {
  return (
    <div>
      <Annouce />
      <NavBar />
      <div className="p-5">
        <div className=" flex justify-center text-5xl "> Cart</div>
        <div className="flex items-center justify-between mt-4">
          <button className=" btn bg-white ">Continue Shopping</button>
          <div className="flex underline text-lg hover:cursor-pointer">
            <p>Item your cart: 3</p>
            <p className="ml-5">Whitlist Item: 0</p>
          </div>
          <button className="btn">Checkout</button>
        </div>
        <div className="flex mt-7">
          <div className="flex flex-col flex-1 ">
            {/* list of product */}
            <div className="flex w-[100%] h-auto items-center">
              <div className="product flex self-start pl-5">
                <img
                  className="w-[7.5rem] h-[80%] rounded-lg shadow-lg hover:scale-[1.1] ease-in duration-300"
                  src="https://cdn.shopify.com/s/files/1/0240/7285/products/VisitorsCrewneckSweatshirtinWhite11_360x.jpg?v=1642719779"
                  alt="product_image"
                />
                <div className="decs flex  flex-col ml-5 h-auto justify-between">
                  <p>
                    <b className="mr-2">ID:</b>123123123
                  </p>
                  <p>
                    <b className="mr-2">Product:</b>Dazzing Sky Shirt
                  </p>
                  <p className="flex items-center">
                    <b className="mr-2">Color</b>
                    <div className="bg-blue-600 w-[20px] h-[20px] rounded-full border-2 p-[10px] cursor-pointer ml-1"></div>
                  </p>
                  <p>
                    <b className="mr-2">Size:</b>lg
                  </p>
                </div>
              </div>
              <div className=" flex flex-col justify-center items-center flex-auto">
                <Counter />
                <p className="flex items-center justify-center text-4xl mt-3">
                  <b>$70</b>
                </p>
              </div>
            </div>
            <hr className="mt-7 mb-7 h-[2px]" />
            <div className="flex w-[100%] h-auto items-center">
              <div className="product flex self-start pl-5">
                <img
                  className="w-[7.5rem] h-[80%] rounded-lg shadow-lg hover:scale-[1.1] ease-in duration-300"
                  src="https://cdn.shopify.com/s/files/1/0240/7285/products/VisitorsCrewneckSweatshirtinWhite11_360x.jpg?v=1642719779"
                  alt="product_image"
                />
                <div className="decs flex  flex-col ml-5 h-auto justify-between">
                  <p>
                    <b className="mr-2">ID:</b>123123123
                  </p>
                  <p>
                    <b className="mr-2">Product:</b>Dazzing Sky Shirt
                  </p>
                  <p className="flex items-center">
                    <b className="mr-2">Color</b>
                    <div className="bg-blue-600 w-[20px] h-[20px] rounded-full border-2 p-[10px] cursor-pointer ml-1"></div>
                  </p>
                  <p>
                    <b className="mr-2">Size:</b>lg
                  </p>
                </div>
              </div>
              <div className=" flex flex-col justify-center items-center flex-auto">
                <Counter />
                <p className="flex items-center justify-center text-4xl mt-3">
                  <b>$70</b>
                </p>
              </div>
            </div>
            <hr className="mt-7 mb-7 h-[2px]" />
          </div>

          <div className=" flex-[0.4] w-auto  h-[50vh] border-2 border-[#8a4af3] rounded-md shadow-lg flex-col items-center flex">
            <h1 className="text-[2rem]">Summary</h1>
            <div className="flex justify-between mt-3 w-[100%]">
              <p>Subtotal</p>
              <p>$140</p>
            </div>
            <div className="flex justify-between mt-3 w-[100%]">
              <p>Shipping</p>
              <p>$40</p>
            </div>
            <div className="flex justify-between mt-3 w-[100%]">
              <p>Shipping discount</p>
              <p>-$40</p>
            </div>
            <div className="flex justify-between mt-3 w-[100%] text-3xl font-bold">
              <p>total</p>
              <p>$140</p>
            </div>
          </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
}

export default Cart;
