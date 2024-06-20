import { useDispatch, useSelector } from "react-redux";
import ProductList  from "./ProductList";
import { clearItems } from "../utils/Store/CardSlice";
export const Cart = () => {
  const itemDetails = useSelector((store) => store.cart.items);
  const dispatch = useDispatch()
  return (
    <>
    <div className=" items-center justify-center flex text-lg font-bold w-6/12 mx-auto my-2 p-2">
      Cart
      </div>
      <div className="w-6/12 mx-auto text-center">
        <button onClick={()=> dispatch(clearItems())} className="bg-black text-white text-lg rounded-lg text-center px-5 ">Cleat cart</button>
      {itemDetails?.map((item, index) => {
            const infoDetails = item.card ?? item.info;
            return (
              <ProductList
                key={`${infoDetails?.info?.name}-${index}`}
                resData={item}
              />
            );
          })}
          </div>
          </>
  );
};
