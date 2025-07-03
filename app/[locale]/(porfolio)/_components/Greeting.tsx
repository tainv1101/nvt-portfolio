import React from "react";

export default function GreetingIntro() {
  return (
    <div className="greeting__wrapper flex items-center justify-center h-screen w-screen overflow-hidden fixed text-3xl md:text-4xl lg:text-5xl font-bold top-0 left-0 z-[100] bg-gray-50 text-primary">
      <div className="greeting size-full flex flex-col items-center justify-center gap-4">
        <h1>Hi there, welcome to</h1>
        <h1>Nguyen Van Tai Portfolio</h1>
      </div>
    </div>
  );
}
