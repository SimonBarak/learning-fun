import PlayIco from "../assets/icons/play.svg";
import PauseIco from "../assets/icons/pause.svg";
import { PhraseObjs } from "./api/hello.js";
import React, { useRef, useState, useEffect } from "react";

const PhraseBox = ({ dataObj }) => {
  const [visible, setVisible] = useState("");
  const { text_de, audioUrl } = dataObj;

  const audioPlayerEl = useRef(null);

  const playAudio = () => {
    audioPlayerEl.current.play();
    //audioPlayerEl.classList.add("go");
    // audioPlayerEl.current.onended(() => {
    //   console.log("");
    // });
  };

  useEffect(() => {
    const newAudio = new Audio(audioUrl);

    newAudio.onended = (e) => {
      console.log("H");
      setVisible("ml ");
      //newAudio.classList.add("ml");
    };

    audioPlayerEl.current = newAudio;
  }, []);

  const s =
    visible +
    "ps sentence-box border border-gray-600 rounded p-2 w-full max-w-md mb-2";

  return (
    <button onClick={playAudio} className={s}>
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
