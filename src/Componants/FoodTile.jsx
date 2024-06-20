import { FOOD_CARD_URL } from "../utils/constant";

export const FoodTile = ({ resData }) => {
  const { name, cuisines, avgRating, cloudinaryImageId } = resData;
  return (
    <div className="w-64 justify-center flex flex-col items-center bg-slate-100 mr-4 mb-4 p-4 rounded-lg">
      <img className="w-52 h-40 rounded-lg" src={FOOD_CARD_URL + cloudinaryImageId} />
      <div className="w-full">
        <div className="foodTile-content-heading">
          <h4 className="font-bold my-4 h-[48]">{name}</h4>
        </div>
        <div className="h-[48]">
          <p>{cuisines.slice(0,3).join(",")}</p>
        </div>
        <div className="foodTile-content-rating">
          <span>{avgRating}</span>
        </div>
      </div>
    </div>
  );
};

export const ResturentComponent = (Resturent) => {
  return (props) => {
    return (
      <div>
        <label className="absolute text-white bg-black rounded-lg ml-5 p-1">Veg Only</label>
        <Resturent {...props} />
      </div>
    );
  };
};
