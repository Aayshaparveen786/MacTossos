import { Skeleton } from "@mui/material";

/* eslint-disable react/react-in-jsx-scope */
const MealSkeleton = () => {
  return (
    <div className="food-items">
      <ul>
        <li>
          <Skeleton
            variant="rectangular"
            sx={{
              width: "20vw",
              marginTop: "1rem",
              //   marginBottom: "1rem",
              height: "20vh",
              marginLeft: "-0rem",
            }}
          />
        </li>
        <div>
          <Skeleton
            variant="circular"
            width="3vw"
            height="5vh"
            sx={{
              marginLeft: "-0rem",
              //   marginBottom: "1rem",
            }}
          />
        </div>
        <br />
        <li>
          <Skeleton
            // variant="text"
            sx={{
              height: "5vh",
              fontSize: "1rem",
              marginLeft: "-0rem",
              //   marginBottom: "1rem",
            }}
          />
        </li>
        <br />
        <li>
          <Skeleton
            // variant="text"
            sx={{
              height: "5vh",
              fontSize: "1rem",
              marginLeft: "-0rem",
              //   marginBottom: "1rem",
            }}
          />
        </li>
        <br />
        <li>
          <Skeleton
            // variant="text"
            sx={{
              height: "5vh",
              fontSize: "1rem",
              marginLeft: "-0rem",
              //   marginBottom: "1rem",
            }}
          />
        </li>
        <br />
        <li>
          <Skeleton
            // variant="text"
            sx={{
              height: "10vh",
              fontSize: "1rem",
              marginLeft: "-0rem",
            }}
          />
        </li>
        <button>
          <Skeleton
            // variant="text"
            sx={{
              height: "7vh",
              fontSize: "1rem",
              marginLeft: "-0rem",
              //   marginBottom: "1rem",
              borderRadius: "20px",
            }}
          />
        </button>
      </ul>
    </div>
  );
};

export default MealSkeleton;
