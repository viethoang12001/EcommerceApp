import { Search } from "@mui/icons-material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import React from "react";
import { Badge } from "@mui/material";

function NavBar() {
  const style = "text-[14px] cursor-pointer ml-[25px]";
  return (
    <div className="navbar h-[60px] shadow-md relative z-10">
      <div className="wrapper pl-[20px] pr-[20px] pt-[10px] pb-[10px] flex justify-between items-center">
        <div className="left flex flex-1 items-center">
          <div className="languege cursor-pointer text-[16px]">en</div>
          <div className="searchInput flex border-[2px] border-solid rounded-md items-center ml-[10px] p-[5px] focus-within:border-[#8a4af3] transition-all">
            <input type="text" className="input outline-none" />
            <Search className="" style={{ fontSize: "16px" }} />
          </div>
        </div>
        <div className="flex-1 text-center font-bold text-lg">Summer Kings</div>
        <div className=" right flex flex-1 items-center justify-end">
          <div className={style}>Register</div>
          <div className={style}>Sign In</div>
          <div className={style}>
            <Badge badgeContent={2} color="primary">
              <AddShoppingCartIcon />
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
