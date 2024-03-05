import {
  Facebook,
  Instagram,
  LocalPhoneOutlined,
  LocationCity,
  Pinterest,
  Twitter,
} from "@mui/icons-material";
import AttachEmailIcon from "@mui/icons-material/AttachEmail";
import React from "react";

function Footer() {
  const socialStyle = "m-3 rounded-full cursor-pointer p-2 text-white";
  return (
    <div className="flex items-center justify-around p-2">
      <div className="flex-1 flex flex-col flex-wrap p-2">
        <h1 className="text-[25px]">NguyenVanVietHoang</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel omnis
          odit culpa, natus modi doloremque eligendi quaerat nihil quidem
          officia deserunt nam, maxime tempore dignissimos velit debitis.
          Tenetur, libero consequuntur!
        </p>
        <div className="flex items-center justify-center mt-3 self-start">
          <div className={socialStyle + ` bg-blue-700`}>
            <Facebook />
          </div>
          <div className={socialStyle + ` bg-orange-500`}>
            <Instagram />
          </div>
          <div className={socialStyle + ` bg-sky-400`}>
            <Twitter />
          </div>
          <div className={socialStyle + ` bg-red-600`}>
            <Pinterest />
          </div>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-2">
        <div className="flex m-3">
          <LocationCity />
          <p className="pl-3">State of Viet Nam</p>
        </div>
        <div className="flex m-3">
          <LocalPhoneOutlined />
          <p className="pl-3">+84 702609815</p>
        </div>
        <div className="flex m-3">
          <AttachEmailIcon />
          <p className="pl-3">viethoang0112001@gmail.com</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
