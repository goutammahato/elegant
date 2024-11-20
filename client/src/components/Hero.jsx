import hero1 from "../assets/hero1.jpg";

import { Link } from "react-router-dom";

const carouselIMages = [hero1, hero1, hero1, hero1];

const Hero = () => {
  return (
    <div className="mx-auto max-w-6xl px-8 grid lg:grid-cols-1 -mt-12 gap-12 items-center">
      <div className=" h-[28rem] carousel w-full   space-x-4 bg-neutral rounded-box">
        {carouselIMages.map((image) => {
          return (
            <div key={image} className="carousel-item relative w-full">
              <img src={image} className="w-full" />
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide4" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide2" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-between ">
        <h1 className="max-w-2xl text-4xl text-slate-800 font-semibold tracking-tight sm:text-6xl">
          Simply Unique <span className="text-slate-500">/</span> <br />
          Simply Better
        </h1>
        <p className="mt-8 max-w-lg  text-lg leading-8">
          <span className="text-slate-800">3legant</span> is a gift &
          decorations store based in HCMC, Vietnam. Est since 2019.
        </p>
      </div>
    </div>
  );
};

export default Hero;
