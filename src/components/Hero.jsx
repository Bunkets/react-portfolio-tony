import { HERO_CONTENT1 } from "../constants";
import { HERO_CONTENT2 } from "../constants";
import { HERO_CONTENT3 } from "../constants";
import profilePic from "../assets/tony3.jpg";

const Hero = () => {
  return <div className="border-b border-neutral-900 pb-4 lg:mb-35">
    <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
            <div className="flex flex-col items-center lg:items-start">
                <h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">Tony Yang</h1>
                <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
                    About Me
                </span>
                <p className="mb-1 max-w-xl py-6 font-light tracking-tighter">
                  {HERO_CONTENT1}
                </p>
                <p className="mb-1 max-w-xl py-6 font-light tracking-tighter">
                  {HERO_CONTENT2}
                </p>
                <p className="mb-1 max-w-xl py-6 font-light tracking-tighter">
                  {HERO_CONTENT3}
                </p>
            </div>
        </div>
        <div className="w-20 lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <img src={profilePic} alt="Kevin Rush" />
            
          </div>
        </div>
    </div>
  </div>
}

export default Hero