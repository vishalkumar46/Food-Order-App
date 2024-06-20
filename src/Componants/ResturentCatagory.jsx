import { useState } from "react";
import ProductList from "./ProductList";

export const ResturentCategory = ({ resData, setShowItem, showItem }) => {
  const showItemshandler = () => {
    setShowItem();
  };
  const getList = resData.itemCards || resData?.categories[0]?.itemCards;
  return (
    <div className="flex flex-col bg-gray-100 w-7/12 p-2 m-2 mx-auto items-center">
      <div
        className="flex-row justify-between flex w-full p-2 m-2"
        onClick={showItemshandler}
      >
        <h1 className="font-bold text-lg">{resData.title} </h1>
        <h4 className="font-bold text-2xl">+</h4>
      </div>
      {showItem && (
        <>
          {getList?.map((item, index) => {
            const infoDetails = item.card ?? item.dish;
            return (
              <ProductList
                key={`${infoDetails.info?.name}-${index}`}
                resData={infoDetails}
              />
            );
          })}
        </>
      )}
    </div>
  );
};
