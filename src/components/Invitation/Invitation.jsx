import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export const Invitation = () => {
  const [initialState, setInitialState] = useState([]);
  let { personID } = useParams();
  console.log(personID);
  const api = "http://localhost:8000/" + personID;
  console.log(api);

  useEffect(() => {
    fetch(api)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonResponse) => {
        setInitialState(jsonResponse);
        console.log(jsonResponse);
        const person = jsonResponse.data.result;
        console.log(person);
      });
  }, []);

  return <div>heil hitler</div>;
};
