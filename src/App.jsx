import React, { useEffect, useState } from "react";
import VidPlayer from "./VideoPlayer/player";

export default function VideoApp() {
  const [files, setFiles] = useState([]);
  const [selected, setSelected] = useState(null);

  async function load() {
    // switch the localhost with your IP address so your REACT and .NET apps can work together
    const response = await fetch("http://localhost:5001/videos/");
    const data = await response.json();

    const updatedData = Object.entries(data).map(([name, path]) => (
      {
        name,
        path,
      }
    ));

    console.log(data);
    setFiles(updatedData);
  }

  useEffect(() => { load(); }, []);

  return (
    <>
      <div className="h-screen w-screen">
        <nav className="bg-yellow-400 flex p-5 content-between">
          <a className="font-bold ml-2 text-2xl">
            <span className="text-red-600">VID</span>
            <span className="text-[#d32a8e]">STREAMR</span>
          </a>
        </nav>

        {/* Video player Section */}

        {selected && (
          <VidPlayer vidName={selected} />
        )}

        {/* Video List Section */}

        <div className="flex flex-wrap space-x-24 justify-center mt-6" >
          {files.map(video => (
            <div className="flex p-2 bg-cyan-950 flex-col items-center rounded-xl mb-8" key={video.name}>
              <img controls src={`https://placehold.co/300/099BC8/FFF/?text=${video.name}&font=playfair-display`}></img>
              <button onClick={() => { setSelected(video.name) }} className="p-4 mt-2 rounded-2xl w-[150px] bg-white">Play</button>
            </div>
          ))}
        </div>

        {/* use files over here */}
      </div >
    </>
  );
}