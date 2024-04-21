import { useGSAP } from "@gsap/react";
import {rightImg, watchImg} from "../utils";

import VideoCarosel from "./VideoCarosel";
import { animateWithGsap, animateWithGsapTimeline } from "../utils/animations";



const Highlights = () => {
useGSAP(() => {
  animateWithGsap('.link', {opacity: 1, y: 0, duration: 1, stagger: 0.25})  
  animateWithGsap('#title', {opacity: 1, y: 0})
}, [])

  return (
    <section id="hightlighst" className="w-screen overflow-hidden h-full common-padding bg-zinc">
      <div className="screen-max-width">
        <div className="mb-12 w-full md:flex items-end justify-between">
        <h2 id="title" className="section-heading">
        Get the Highlights

        </h2>
        <div className="flex flex-wrap items-end gap-5">
          <p className="link">
            Watch the film <img src={watchImg} alt="watch" className="ml-2"/>
          </p>
          <p className="link">
            Watch the Event <img src={rightImg} alt="right" className="ml-2"/>
          </p>
        </div>
      </div>
      </div>
      <VideoCarosel />
      
    </section>
    
  )
}

export default Highlights