import PlayIco from "../assets/icons/play.svg";
import PauseIco from "../assets/icons/pause.svg";
import { PhraseObjs } from "./api/hello.js";
import React, { useRef, useState, useEffect } from "react";

const PhraseBox = ({ dataObj }) => {
  const { text_de, audioUrl } = dataObj;

  const audioPlayerEl = useRef(null);

  const playAudio = () => {
    audioPlayerEl.current.play();
  };

  return (
    <button
      onClick={playAudio}
      className="sentence-box border border-gray-600 rounded p-2 w-full max-w-md mb-2"
    >
      <div className="flex justify-end text-gray-500">
        <PlayIco className="fill-current w-4 h-4 lg:w-8 " />
      </div>
      <p className="mb-5 py-36 text-center px-2">{text_de}</p>

      <audio src={audioUrl} ref={audioPlayerEl}></audio>
    </button>
  );
};

export default function Home() {
  const [list, setList] = useState([]);

  useEffect(() => {
    const shafflePhrases = PhraseObjs.sort(() => Math.random() - 0.5);
    setList(shafflePhrases);
  }, []);

  const PhrasesList = list.map((dataObj) => (
    <PhraseBox dataObj={dataObj} key={dataObj.audioUrl} />
  ));
  return (
    <div className="bg-black text-white flex flex-col items-center py-20 px-4">
      {PhrasesList}
    </div>
  );
}
