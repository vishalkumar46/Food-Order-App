import { useDispatch } from "react-redux";
import { MENU_IMAGE_URL } from "../utils/constant";
import { addItems } from "../utils/Store/CardSlice";

const ProductList = ({ resData }) => {
  const dispatch = useDispatch();
  const handleAddItem = (resData) => {
    dispatch(addItems(resData));
  };
  console.log("resData", resData);
  return (
    <div className="w-full">
      <div className="flex justify-between p-2 m-2">
        <div className="w-10/12 pr-5">
          <p>{resData?.info?.name}</p>
          <p>
            Rs.
            {parseFloat(
              (resData?.info?.price ?? resData?.info?.defaultPrice) / 100
            )}
          </p>
          <p className="text-xs text-gray-400">{resData?.info?.description}</p>
        </div>

        <div className="w-2/12 relative">
          <button
            onClick={() => handleAddItem(resData)}
            className="bg-black text-white px-4 py-2 absolute rounded-lg left-1/4 -bottom-5"
          >
            Add
          </button>
          <img
            className="rounded-lg"
            src={MENU_IMAGE_URL + resData?.info?.imageId}
          ></img>
        </div>
      </div>
      <hr style={{ margin: "20px auto", maxWidth: "850px" }}></hr>
    </div>
  );
};

export default ProductList;
