import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "./UserContext";

const Restaurantcard = (props) => {
  const { resData } = props;

  const { loggedInUser } = useContext(UserContext);
  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    deliveryTime,
  } = resData?.info;

  return (
    <div
      data-testid="rescard"
      className="m-4 p-4 w-[230px] rounded-lg bg-gray-100 hover:bg-gray-200 "
    >
      <img
        className="rounded-lg"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-2 text-lg">{name}</h3>
      <h3>{cuisines.join("-")}</h3>
      <h3>{costForTwo}</h3>
      <h3>{resData.info.sla.deliveryTime}minutes</h3>
      <h3>{avgRating}Stars</h3>
      <h3>User :{loggedInUser}</h3>
    </div>
  );
};

export const withPromotedLabel = (Restaurantcard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-1  rounded-lg">
          Opened
        </label>
        <Restaurantcard {...props}></Restaurantcard>
      </div>
    );
  };
};

export default Restaurantcard;
