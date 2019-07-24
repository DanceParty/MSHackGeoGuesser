import "../style/game.scss";
import React from "react";
import { withRouter } from "react-router-dom";
import Map from "./Map";
import StreetView from "./Streetview";
import { getScore } from "../utils/helpers";

const Game = ({ history }) => {
  const [googleMaps, setGoogleMaps] = React.useState(0);
  const [streetLat, setStreetLat] = React.useState(0);
  const [streetLng, setStreetLng] = React.useState(0);

  const [insetMapLat, setInsetMapLat] = React.useState(0);
  const [insetMapLng, setInsetMapLng] = React.useState(0);

  const submitGuess = () => {
    const coordinates = [{ lat: insetMapLat, lng: insetMapLng }, { lat: streetLat, lng: streetLng }];
    const score = getScore({ lat: insetMapLat, lng: insetMapLng }, { lat: streetLat, lng: streetLng });

    history.push({
      pathname: "/score",
      state: {
        coordinates: [coordinates],
        score
      }
    });
  };

  return (
    <>
      <input
        className="submit-button"
        type="button"
        value="Submit Guess"
        onClick={submitGuess}
      />
      <Map
        insetMapLat={insetMapLat}
        setInsetMapLat={setInsetMapLat}
        insetMapLng={insetMapLng}
        setInsetMapLng={setInsetMapLng}
        setGoogleMaps={setGoogleMaps}
      />
      {googleMaps ? (
        <StreetView
          streetLat={streetLat}
          setStreetLat={setStreetLat}
          streetLng={streetLng}
          setStreetLng={setStreetLng}
          googleMaps={googleMaps}
        />
      ) : null}
    </>
  );
};

export default withRouter(Game);
