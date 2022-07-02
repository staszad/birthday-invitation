import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export const Invitation = () => {
  const [person, setPerson] = useState(null);
  let { personID } = useParams();
  console.log(personID);
  const api = "http://localhost:8000/" + personID;
  console.log(api);

  useEffect(() => {
    (async () => {
      const data = await fetch(api);
      const response = await data.json();
      setPerson(response.data.result);
    })();
  }, []);
  if (person === null) return null;
  const { _id, name, hasPartner, isWoman, form } = person;
  return (
    <div>
      <header>
        <p className="">halo halo, czy to</p>
        <h1 className="text-center uppercase text-7xl font-bold py-8">
          {name}!
        </h1>
        {!isWoman ? (
          <p className="text-lg">
            Z radością chciałbym Ci przekazać, że zostałeś zaproszony
            {hasPartner && " (oczywiście z babom)"} na moją osiemnastkę!
            Odbędzie się ona 30 sierpnia 2022 roku u mnie, czyli w Tarnowskich
            Górach, na Rybnej, przy ul. Liściastej 29 B (mapkę masz poniżej).
          </p>
        ) : (
          <p className="text-lg">
            Z radością chciałbym Ci przekazać, że zostałaś zaproszona
            {hasPartner && " (oczywiście z chłopem)"} na moją osiemnastkę!
            Odbędzie się ona 30 sierpnia 2022 roku u mnie, czyli w Tarnowskich
            Górach, na Rybnej, przy ul. Liściastej 29 B (mapkę masz poniżej).
          </p>
        )}
        <p className="text-lg">
          Chciałbym, żeby to wydarzenie opierało się na muzyce. Zaczniemy od jam
          sassion, czyli wspólnego wykonywania i śpiewania różnorakich utworów.
          Dlatego uwaga, jeśli umiesz w miarę dobrze grać na dowolnym
          instrumencie, weź go ze sobą, przyda się. Chciałbym też, byś zapoznał
          {isWoman && "a"} się dokładnie z tym, co będziemy grali, bo znane
          utwory śpiewa się znacznie przyjemniej niż te, które słyszy się
          pierwszy raz w życiu.
        </p>
      </header>
      <main></main>
      <script src="https://embed.tidal.com/tidal-embed.js"></script>
    </div>
  );
};
