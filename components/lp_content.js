"use client";
import Typewriter from "./typewriter";

export default function Lp_content() {
  return (
    <div className="content w-full px-72 h-4/6 flex">
      <div className="align-middle self-center flex flex-col items-start">
        <h4 className="text-xl text-sky-500">Hi, my name is</h4>
        <br />
        <h2 className="text-7xl text-white">Paddington Mbata.</h2>
        <h2 className="text-7xl">
          I am a{" "}
          <span>
            <Typewriter text={"Web developer"} />
          </span>{" "}
        </h2>
        <br />
        <p className="text-base">
          I specialize in crafting seamless web experiences as a full-stack web
          developer, proficient
          <br /> in NEXT.JS and DJANGO. With a passion for elegant design and
          robust functionality, I bring
          <br /> websites to life with a blend of creativity and technical
          expertise. Currently, I'm engaged
          <br /> in freelance work, transforming visions into reality one pixel
          at a time
        </p>
      </div>
    </div>
  );
}
