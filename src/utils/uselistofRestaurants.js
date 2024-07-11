import { useEffect, useState } from "react";

const uselistofRestaurants=()=>{

 const[listofrestaurants,setlistofrestaurants]=useState([]);
 
 const[FilterResaturant,setFilteredRestaurant]=useState([]);

 console.log("body render")

  useEffect(()=>{
    fetchData();

   },[]);

  const fetchData= async () => {
     const data=await fetch("https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=10.831695039357836&lng=78.6945154890418&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
     const json =await data.json();

     setlistofrestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
     setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

};

export default uselistofRestaurants;