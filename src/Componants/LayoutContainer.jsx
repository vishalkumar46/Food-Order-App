import { useState, useEffect, useContext } from "react";
import { FoodTile, ResturentComponent } from "./FoodTile";
import { Shimmer } from "./Shimmer";
import { Link } from "react-router-dom";
import { useFetchAPI } from "../utils/useFetchAPI";
import { REGULAR_All } from "../utils/constant";
import { useStatusOnline } from "../utils/useStatusOnline";
import { UserContext } from "./UserContext";

export const LayoutContainer = () => {
  const [resturentList, setResturentList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filterList, setFilterList] = useState([]);
  const newData = useFetchAPI(REGULAR_All, null);
  const isOffline = useStatusOnline();
  const {setName} = useContext(UserContext)
  const NewResturentComponent = ResturentComponent(FoodTile)
  const fetchdata = () => {
    const updateddata =
      newData?.data?.cards[1] &&
      newData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        .restaurants;
    setResturentList(updateddata);
    setFilterList(updateddata);
  };
  useEffect(() => {
    fetchdata();
  }, [newData]);

  const showRatedResturentHandle = () => {
    const filterData = resturentList.filter((res) => res.info.avgRating > 4.2);
    setFilterList(filterData);
  };

  const searchHandle = (e) => {
    if (searchText) {
      const filterData = resturentList.filter((res) =>
        res?.info?.name.toLowerCase().includes(searchText?.toLowerCase())
      );
      setFilterList(filterData);
    }
  };
  if (!isOffline) return <h1>Looks like you are offline</h1>;
  return resturentList?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="layoutContainer">
      <div className="my-5">
        <input
          type="search"
          placeholder="Search here !"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="border-solid border-2 border-indigo-600 mx-5"
        />
        <button
          className="bg-green-300 px-5 py-1 rounded-lg"
          onClick={searchHandle}
        >
          Search
        </button>
        <button
          className="mx-5 bg-green-300 px-5 py-1 rounded-lg"
          onClick={showRatedResturentHandle}
        >
          Top rated resturents
        </button>

        <input className="border border-black" type="text" onChange={(e)=>setName(e.target.value)}/>
      </div>
      <div className="flex flex-wrap mx-4">
        {filterList?.map((res) => (
          <Link key={res.info.id} to={"/resturent/" + res.info.id}>
            {res.info.veg ? (
              <NewResturentComponent resData={res.info}/>
            ) : (
              <FoodTile resData={res.info} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};
