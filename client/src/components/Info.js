//Setup for react Hooks
import { useState, useEffect } from "react";

function Info(props) {
  //Creates State for Json Restaurant Information
  const [restInfo, setRestInfo] = useState({});

  useEffect(() => {
    //Fetch only if there is no Data to prevent infinite loop
    if (!restInfo) {
      //Fetch Data from URL parameter
      fetch("/apis/" + props.match.params)
        //Waits to Convert information
        .then((res) => res.json())

        //Waits to send information into Update function
        .then((bioInfo) => {
          setRestInfo(bioInfo);
        });
    }
  });

  return (
    <div>
      {/* Presented Information */}
      <p>{restInfo}</p>
    </div>
  );
}

export default Info;
