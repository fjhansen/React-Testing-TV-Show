import React, { useState, useEffect } from "react";
import axios from "axios";
import Dropdown from "react-dropdown";
import parse from "html-react-parser";

import { useFetchShow } from "./api/fetchShow"

import { formatSeasons } from "./utils/formatSeasons";

import Episodes from "./components/Episodes";
import "./styles.css";

export default function App(props) {
  // const [show, setShow] = useState(null);
  // const [seasons, setSeasons] = useState([]);

  const [selectedSeason, setSelectedSeason] = useState("");
  const episodes = seasons[selectedSeason] || [];

  const [seasons, setSeasons] = useFetchShow(episodes)

  // useEffect was here

  const handleSelect = e => {
    setSelectedSeason(e.value);
  };

  if (!props.axiosshow) {
    return <h2>Fetching data...</h2>;
  }

  return (
    <div className="App">
      <img className="poster-img" src={props.show.image.original} alt={props.show.name} />
      <h1>{props.show.name}</h1>
      {parse(props.show.summary)}
      <Dropdown
        options={Object.keys(seasons)}
        onChange={handleSelect}
        value={selectedSeason || "Select a season"}
        placeholder="Select an option"
      />
      <Episodes episodes={episodes} />
    </div>
  );
}
