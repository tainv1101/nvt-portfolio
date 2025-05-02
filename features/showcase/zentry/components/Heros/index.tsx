"use client";

import { useEffect, useRef, useState } from "react";
import { TiLocationArrow } from "react-icons/ti";
import WatchTrailerBnt from "./WatchTrailerBtn";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const TOTAL_VIDEO = 4;

function Heros() {
  const [currentIdx, setCurrentIdx] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loadedVideos, setLoadedVideos] = useState(0);

  const bgVideoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const nextVideoRef = useRef<HTMLVideoElement>(null);
  const isAnimatingRef = useRef(false);

  const upcomingVideoIdx = (currentIdx % TOTAL_VIDEO) + 1;

  const getVideoSrc = (idx: number) => `/assets/videos/hero-${idx}.mp4`;

  const handleVideoLoad = () => {
    setLoadedVideos((prev) => {
      const next = prev + 1;
      return next > 6 ? 6 : next;
    });
  };

  const handleClick = () => {
    if (hasClicked || isAnimatingRef.current) return;

    setHasClicked(true);
    isAnimatingRef.current = true;

    const tl = gsap.timeline({
      defaults: { ease: "power1.inOut", duration: 1.2 },
      onComplete: () => {
        setCurrentIdx(upcomingVideoIdx);
        setHasClicked(false);
        isAnimatingRef.current = false;

        // reset bg video
        const newBgVideo = bgVideoRefs.current[upcomingVideoIdx - 1];
        if (newBgVideo) {
          newBgVideo.currentTime = 0;
          newBgVideo.play();
        }
      },
    });

    tl.set("#animate-video", { visibility: "visible", scale: 0 })
      .to("#animate-video", {
        scale: 1,
        width: "85%",
        height: "85%",
        transformOrigin: "center center",
      })
      .set("#animate-video", { visibility: "hidden", scale: 0 });
  };

  useGSAP(() => {
    gsap.set("#video-frame", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      borderRadius: "0 0 0 0",
    });

    gsap.to("#video-frame", {
      clipPath: "polygon(14% 0, 72% 0%, 90% 90%, 0% 100%)",
      borderRadius: "0 0 12% 12%",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#video-frame",
        start: "40% 45%",
        end: "bottom center",
        scrub: true,
        markers: false,
        pin: false,
      },
    });
  }, []);

  useEffect(() => {
    if (loadedVideos >= 4) {
      setIsLoading(false);
    }
  }, [loadedVideos]);

  return (
    <div className="size-full relative overflow-x-hidden">
      {isLoading && (
        <div className="absolute inset-0 z-[100] bg-violet-50 flex justify-center items-center">
          <div className="three-body">
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
            <div className="three-body__dot" />
          </div>
        </div>
      )}

      <div
        id="video-frame"
        className="relative z-10 size-full h-[calc(100dvh-var(--practice-header-height))] overflow-hidden"
      >
        {/* Render all videos with z-index & opacity transition */}
        {[...Array(TOTAL_VIDEO)].map((_, idx) => (
          <video
            key={idx}
            src={getVideoSrc(idx + 1)}
            ref={(el) => { if (el) bgVideoRefs.current[idx] = el }}
            onLoadedData={handleVideoLoad}
            autoPlay
            loop
            muted
            className={`absolute top-0 left-0 size-full object-cover transition-opacity duration-700 ease-in-out
              ${idx + 1 === currentIdx ? "opacity-100 z-10" : "opacity-0 z-0"}
            `}
          />
        ))}

        {/* Clickable next video thumbnail */}
        <div className="zentry-mask-clip-path absolute-center z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
          <div
            onClick={handleClick}
            className="origin-center scale-50 opacity-0 hover:scale-100 hover:opacity-100 transition-all duration-500 ease-in"
          >
            <video
              src={getVideoSrc(upcomingVideoIdx)}
              loop
              muted
              onLoadedData={handleVideoLoad}
              className="size-64 origin-center scale-150 object-cover object-center"
            />
          </div>
        </div>

        {/* Animated transition video */}
        <video
          ref={nextVideoRef}
          src={getVideoSrc(upcomingVideoIdx)}
          loop
          muted
          onLoadedData={handleVideoLoad}
          id="animate-video"
          className="absolute-center invisible absolute z-20 size-64 object-cover object-center"
        />

        {/* Hero text + Button */}
        <div className="absolute left-0 top-0 z-40 size-full">
          <div className="mt-24 px-5 sm:px-10">
            <h2 className="zentry-special-font zentry-hero-heading text-zentry-blue-100">
              redefi<b>n</b>e
            </h2>
            <p className="mb-5 max-w-64 font-robert-regular text-zentry-blue-100">
              Enter the Metagame player <br /> Unleash the Play Economy
            </p>
            <WatchTrailerBnt
              title="Watch trailer"
              leftIcon={<TiLocationArrow />}
              className="bg-zentry-yellow-300 flex-center gap-1"
            />
          </div>
        </div>

        <h2 className="absolute right-5 bottom-5 z-40 zentry-special-font zentry-hero-heading text-zentry-blue-75">
          G<b>a</b>ming
        </h2>
      </div>

      <h2 className="absolute right-5 bottom-5 zentry-special-font zentry-hero-heading text-primary">
        G<b>a</b>ming
      </h2>
    </div>
  );
}

export default Heros;
