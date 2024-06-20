import { Shimmer } from "./Shimmer";
import { RESTAURANT_URL } from "../utils/constant";
import { useParams } from "react-router-dom";
import React, { useState } from "react";
import { useFetchAPI } from "../utils/useFetchAPI";
import { ItemList } from "./ProductList";
import { ResturentCategory } from "./ResturentCatagory";

export const Resturent = () => {
  const [showVeg, setShowVeg] = useState(false);
  const [showfilterVegList, setshowfilterVegList] = useState(false);
  const [showItem, setShowItem] = useState(false);
  const { resID } = useParams();
  const resturentDetails = useFetchAPI(RESTAURANT_URL, resID);
  if (!resturentDetails) {
    return <Shimmer />;
  }
  const {
    name,
    avgRating,
    cuisines,
    totalRatingsString,
    areaName,
    lastMileTravelString,
  } = resturentDetails?.data?.cards[0]?.card?.card?.info;

  const showOnlyVeg = () => {
    let newList =
      resturentDetails.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR
        ?.cards[1]?.card?.card?.itemCards;
    newList = newList.filter((item) => item?.card?.info?.isVeg == 1);
    setshowfilterVegList(newList);
    setShowVeg(!showVeg);
  };
  const getList = showVeg
    ? showfilterVegList
    : resturentDetails.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR
        ?.cards[1]?.card?.card?.itemCards ??
      resturentDetails.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR
        ?.cards[1]?.card.card.carousel;
  const newItems =  resturentDetails.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR
  ?.cards.filter((item)=>item.card.card["@type"]===("type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"))

  return (
    <>
      <button
        className="bg-green-300 px-5 py-1 rounded-lg mt-10 ml-5"
        onClick={showOnlyVeg}
      >
        Only Veg
      </button>
      <div className="flex justify-around">
        <div className="resturent-details-container">
          <p className="font-bold">{name}</p>
          <p>{cuisines.join(",")}</p>
          <p>
            {areaName},{lastMileTravelString}
          </p>
        </div>
        <div className="border border-solid p-2 border-black">
          <p>{avgRating}</p>
          <p>{totalRatingsString}</p>
        </div>
      </div>
      <hr className="my-5 mx-auto max-w-5xl"></hr>
        {newItems?.map((item, index) => {
          return (
            <ResturentCategory
              key={`${item.card.card.title}-${index}`}
              resData={item.card.card}
              showItem={index===showItem}
              setShowItem={()=>{setShowItem(index)}}
            />
          );
        })}
    </>
  );
};
