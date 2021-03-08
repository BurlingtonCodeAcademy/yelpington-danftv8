import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Restaurants(props) {
  //Setting Beginning State for Restaurant Names
  const [restNames, setRestNames] = useState([]);

  //Fetch for Restaurant Names
  useEffect(() => {
    //Guard clause for fetch
    if (restNames.length === 0) {
      fetch("apis")
        .then((res) => res.json())
        .then((restList) => {
          setRestNames(restList);
        });
    }
  });

  return (
    <div>
      <ul>
        {/* Iterating Restaurant Names */}
        {restNames.map((id, index) => {
          return (
            <h2 key="index">
              {/* Presenting Name Iterations */}
              <Link to={`/api/${id}`}>{id}</Link>
            </h2>
          );
        })}
      </ul>
    </div>
  );
}

export default Restaurants;
