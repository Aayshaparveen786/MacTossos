// import { Card, Grid } from "@mui/material";
// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getMeal } from "../redux/slice/mealSlice";

// const FoodList = () => {
//   const mealdetails = useSelector((state) => state.mealdetails);
//   const searchQuery = useSelector((state) => state.search);
//   // const foodItems = useSelector((state) => state.foodItems);
//   console.log("mealdeatils",mealdetails);

//   const filteredItems = mealdetails?.cart?.filter((item) =>
//   item.strMeal.toLowerCase().includes(searchQuery.toLowerCase())
//   );
//   // console.log("filteredItem",filteredItems);
//   // const dispatch = useDispatch();
//   // useEffect(() => {
//   //   dispatch(getMeal());
//   //   // console.log("State", mealdetails);
//   // }, []);
//   return (
//     <>
//       <div>
//         <h1>Food List</h1>

//         <div>
//           {filteredItems?.map((item,index) => (
//             <div key={index}>
//               <h3>{item.strArea}</h3>
//               <p>{item.strMeal}</p>
//             </div>
//           ))}
//         </div>

//         {/* {mealdetails?.data?.meals?.map((item, index) => (
//           <div key={index} >
//             <li>Name: {item.strMeal}</li>
//             <br />
//             <li>Categroy: {item.strCategory}</li>
//             <br />
//             <li>Area: {item.strArea}</li>
//             <br />
//           </div>
//         ))} */}
//         {/* <Grid sx={{ flexGrow: 1 }} container>
//           <Grid item xs={12}>
//             <Grid container justifyContent="center" spacing={3}>
//               {mealdetails?.data?.meals?.map((item, index) => (
//                 <Grid key={index} item>
//                   <Card>
//                     <li>
//                       <img src={item.strMealThumb} />
//                     </li>
//                     <br />
//                     <li>Name: {item.strMeal}</li>
//                     <br />
//                     <li>Categroy: {item.strCategory}</li>
//                     <br />
//                     <li>Area: {item.strArea}</li>
//                   </Card>
//                 </Grid>
//               ))}
//             </Grid>
//           </Grid>
//         </Grid> */}
//       </div>
//     </>
//   );
// };

// export default FoodList;

import React from "react";
import { useNavigate } from "react-router-dom";
const FoodItem=({data})=>{
    console.log(data);
    let navigate = useNavigate();
    return(
        <>  
            {
                (!data) ?"Not Found": data.map(item=>{
                    return(
                    <div className="card" key={item.idMeal} onClick={()=>navigate(`/${item.idMeal}`)}>
                        <img src={item.strMealThumb} alt="" />
                        <h3>{item.strMeal}</h3>
                    </div>
                    )
                })
            }
            
        </>
    )
}
export default FoodItem;