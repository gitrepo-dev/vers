import React from "react";
import { cardProps } from "./card.types";
import { Like, Cmt } from 'assets'
import { Link } from "react-router-dom";

const Card: React.FC<cardProps> = () => {
  return (
    <div className="container mx-auto px-5">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5  xl:grid-cols-4">    {
        [1, 2, 3, 4].map((i) => {
          return (
            <div key={i} className="w-full h-auto rop-shadow-md relative overflow-hidden">
              <Link to="/single/1">
                <img src="https://images.unsplash.com/photo-1571181284424-1271ac959bbf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fHdlYXRoZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60" alt="weather" className="mx-w-100 h-auto hover:scale-110 hover:ease-linear duration-100" />
              </Link>
              <div className="flex justify-between itmes-center absolute w-full bottom-0 p-3 bg-overlay">
                <span className="font-medium capitalize flex items-center text-white cursor-pointer"><img src="https://images.unsplash.com/photo-1571181284424-1271ac959bbf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fHdlYXRoZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=40&h=40&q=60" alt="jay" className="rounded-full mr-3" /> jay sean</span>
                <div className="flex items-center font-medium text-sm text-white">
                  <span className="flex items-center justify-center mr-2 cursor-pointer">2.5k <img src={Like} alt="like" className="ml-1 w-5 h-auto" /></span>
                  <span className="flex items-center justify-center cursor-pointer">1k <img src={Cmt} alt="comment" className="ml-1 w-5 h-auto" /></span>
                </div>
              </div>
            </div>
          )
        })
      }
      </div>
    </div>
  );
}

export default Card;
