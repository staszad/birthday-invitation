import { useParams } from "react-router-dom";

export const Invitation = () => {
  let { personID } = useParams();
  console.log(personID);

  async function fecthData() {
    const response = await fetch("localhost:8000/" + personID);
    console.log(response);
  }

  fecthData();

  return <div>{personID}</div>;
};
