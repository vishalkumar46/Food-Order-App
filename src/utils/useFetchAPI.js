import { useEffect, useState } from "react";

export const useFetchAPI = (RESTAURANT_URL, resID) => {
  const [resturentDetails, SetResturentDetails] = useState(null);
  useEffect(() => {
    fetchResturentDetails();
  }, []);

  const fetchResturentDetails = async () => {
    const data = await fetch(RESTAURANT_URL + resID);
    const updatedData = await data.json();
    SetResturentDetails(updatedData);
  };
  return resturentDetails;
};
