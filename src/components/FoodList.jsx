import React from "react";
import { useSelector } from "react-redux";

const FoodList = () => {
  const mealdetails = useSelector((state) => state.mealdetails);

  return (
    <>
      <div>
        <h1>Food List</h1>
        {mealdetails?.data?.meals?.map((item, index) => (
          <div key={index} item>
            <li>Name: {item.strMeal}</li>
            <br />
            <li>Categroy: {item.strCategory}</li>
            <br />
            <li>Area: {item.strArea}</li>
            <br />
          </div>
        ))}
      </div>
    </>
  );
};

export default FoodList;
