import Restaurantcard, { withPromotedLabel } from "./Restaurantcard";
import { useState } from "react";
import { useEffect } from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import useOnlinestatus from "../utils/useOnlinestatus";
import UserContext from "./UserContext";
import { useContext } from "react";

const Body = () => {
  const Onlinestatus = useOnlinestatus();

  const [listofrestaurants, setlistofrestaurants] = useState([]);

  const [searchtext, setsearchtext] = useState("");

  const [FilterResaturant, setFilteredRestaurant] = useState([]);

  const Restaurantcardopen = withPromotedLabel(Restaurantcard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=10.831695039357836&lng=78.6945154890418&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
      { mode: "no-cors" }
    );
    const json = await data.json();

    setlistofrestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  if (Onlinestatus === false)
    return (
      <h1>Looks you're offline!! Please check your network connection;</h1>
    );

  const { setuserName, loggedInUser } = useContext(UserContext);

  return listofrestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4 ">
          <input
            type="text"
            data-testid="searchInput"
            className="border border-solid border-black"
            value={searchtext}
            onChange={(e) => {
              setsearchtext(e.target.value);
            }}
          ></input>
          <button
            className="px-4 py-1 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              const filtereRestaurant = listofrestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchtext.toLowerCase())
              );
              setFilteredRestaurant(filtereRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <div className="search m-4 p-4 flex item-center">
          <button
            className="px-4 py-1 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              const filteredlist = listofrestaurants.filter(
                (res) => res.info.avgRating > 4.4
              );
              setFilteredRestaurant(filteredlist);
            }}
          >
            Top rated restaurants
          </button>
        </div>
        <div className="search m-6 p-4 item-center">
          <label> UserName </label>
          <input
            className="border border-black p-2"
            value={loggedInUser}
            onChange={(e) => setuserName(e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-wrap">
        {FilterResaturant?.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant?.info?.id}
          >
            {restaurant.info.isOpen ? (
              <Restaurantcardopen resData={restaurant} />
            ) : (
              <Restaurantcard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
