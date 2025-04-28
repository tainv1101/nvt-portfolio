"use client";

import { useRef, useState } from "react";
import WatchTrailerBnt from "./WatchTrailerBnt";

const TOTAL_VIDEO = 4;

function MiniVideoPlayer() {
  const [currentIdx, setCurrentIdx] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [loadedVideos, setLoadedVideos] = useState(0);
  console.log("loadedVideos", loadedVideos)
  const nextVideoRef = useRef<HTMLVideoElement>(null);

  //0 modulo 4 => 0 + 1 = 1
  //1 modulo 4 => 1 + 1 = 2
  //2 modulo 4 => 2 + 1 = 3
  //3 modulo 4 => 3 + 1 = 4
  //4 modulo 4 => 0 + 1 = 1
  const upcomingVideoIdx = (currentIdx % TOTAL_VIDEO) + 1

  const handleClick = () => {
    setHasClicked(true);
    setCurrentIdx(upcomingVideoIdx);
  }

  const handleVideoLoad = () => {
    setLoadedVideos((idx) => idx + 1);
  }

  const getVideoSrc = (idx: number) => {
    return `/assets/videos/hero-${idx}.mp4`;
  }



  return (
    <div id='video-frame' className="relative z-10 size-full overflow-hidden rounded-lg bg-zentry-blue-75">
      <div>

        {/* Next video, can be clicked to change other video */}
        <div className="zentry-mask-clip-path absolute-center z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
          <div
            onClick={handleClick}
            className="origin-center scale-50 opacity-0 hover:scale-100 hover:opacity-100 transition-all duration-500 ease-in"
          >
            <video
              ref={nextVideoRef}
              src={getVideoSrc(upcomingVideoIdx)}
              loop
              muted
              // autoPlay
              id="next-video"
              className="size-64 origin-center scale-150 object-cover object-center"
              onLoadedData={handleVideoLoad}
            />
          </div>
        </div>

        <video
          ref={nextVideoRef}
          src={getVideoSrc(upcomingVideoIdx)}
          loop
          muted
          id="next-video"
          className="absolute-center invisible absolute z-20 size-64 object-cover object-center"
          onLoadedData={handleVideoLoad}
        />

        {/* Background playing video */}
        <video
          src={getVideoSrc(
            currentIdx
          )}
          autoPlay
          loop
          muted
          className="absolute left-0 top-0 size-full object-cover object-center"
          onLoadedData={handleVideoLoad}
        />
      </div>

      <div className="absolute left-0 top-0 z-40 size-full">
        <div className="mt-24 px-5 sm:px-10">
          <h2 className=" zentry-special-font zentry-hero-heading text-zentry-blue-100">
            redefi<b>n</b>e
          </h2>

          <p className="mb-5 max-w-64 font-robert-regular text-zentry-blue-100">Enter the Metagame player <br /> Unleash the Play Economy</p>
          <WatchTrailerBnt />
        </div>
      </div>

      <h2 className=" absolute right-5 bottom-5 z-40 zentry-special-font zentry-hero-heading text-zentry-blue-75">
        G<b>a</b>ming
      </h2>
    </div>
  );
}

export default MiniVideoPlayer;