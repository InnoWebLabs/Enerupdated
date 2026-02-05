
import { useEffect } from 'react';
import AnimatedGalleryIntro from '../components/AnimatedGalleryIntro';
import HomagDropdown from './HomagDropdown';
import ShaktiDropdown from './ShaktiDropdown';
import MeyerDropdown from './MeyerDropdown';
import BismiDropdown from './BismiDropdown';

import ABBHitachiDropdown from './ABBHitachiDropdown';
import ARCInteriorsDropdown from './ARCInteriorsDropdown';
import RittalDropdown from './RittalDropdown';
import GEAWestfaliaDropdown from './GEAWestfaliaDropdown';
import GlobalPrintingDropdown from './GlobalPrintingDropdown';
import IbexEngineeringDropdown from './IbexEngineeringDropdown';
import MantriSerenityDropdown from './MantriSerenityDropdown';
import SusheelaFarmDropdown from './SusheelaFarmDropdown';
import RPAUnibakesDropdown from './RPAUnibakesDropdown';

export default function GalleryPage() {
  useEffect(() => {
    document.title = 'Gallery - Enerquest Solutions';
  }, []);

  return (
    <div className="min-h-screen w-full flex flex-col bg-white">
      <AnimatedGalleryIntro />

      {/* Eye-catching Gallery Section */}
  <section className="relative z-10 w-full bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-12 px-2 md:px-0 overflow-hidden">
        {/* Decorative blurred blobs and sparkles */}
        <div className="absolute inset-0 pointer-events-none opacity-60" style={{zIndex:0}}>
          <div className="blob blob-1" style={{top:'-8rem',left:'-8rem',background:'radial-gradient(circle at 30% 30%, #60a5fa, transparent 60%)'}} />
          <div className="blob blob-2" style={{bottom:'-6rem',right:'-6rem',background:'radial-gradient(circle at 70% 70%, #06b6d4, transparent 60%)'}} />
          {/* Soft gradient overlay */}
          <div style={{position:'absolute',inset:0,background:'linear-gradient(120deg,rgba(59,130,246,0.08) 0%,rgba(6,182,212,0.08) 100%)',zIndex:1}} />
          {/* Floating sparkles */}
          {[...Array(8)].map((_,i)=>(
            <span key={i} className="spark" style={{
              top:`${10+Math.random()*80}%`,
              left:`${5+Math.random()*90}%`,
              width:`${8+Math.random()*12}px`,
              height:`${8+Math.random()*12}px`,
              filter:'blur(0.5px)',
              opacity:0.7,
              zIndex:2,
              animationDelay:`${Math.random()*6}s`,
              background:'radial-gradient(circle,rgba(59,130,246,0.7) 0%,rgba(59,130,246,0.1) 80%,transparent 100%)'
            }} />
          ))}
        </div>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center text-blue-900 mb-8 animate-fade-in-up">Project Galleries</h2>
          {/* Stack each dropdown with colored backgrounds, borders, and padding for visual separation */}
          <div className="flex flex-col gap-10">
            {/* Add animated border glow on hover for each project section */}
            <div className="animate-scale-in transition-shadow duration-300 bg-white/90 border-2 border-blue-200 rounded-2xl shadow-lg hover:shadow-blue-200/60 p-4 md:p-6 group relative overflow-hidden">
              <div className="absolute inset-0 rounded-2xl pointer-events-none border-4 border-transparent group-hover:border-blue-400 group-hover:shadow-[0_0_32px_8px_rgba(59,130,246,0.18)] transition-all duration-500 z-10" />
              <HomagDropdown />
            </div>
            <div className="animate-scale-in transition-shadow duration-300 bg-blue-50 border-2 border-cyan-200 rounded-2xl shadow-lg hover:shadow-cyan-200/60 p-4 md:p-6 group relative overflow-hidden">
              <div className="absolute inset-0 rounded-2xl pointer-events-none border-4 border-transparent group-hover:border-cyan-400 group-hover:shadow-[0_0_32px_8px_rgba(6,182,212,0.18)] transition-all duration-500 z-10" />
              <ShaktiDropdown />
            </div>
            <div className="animate-scale-in transition-shadow duration-300 bg-cyan-50 border-2 border-blue-200 rounded-2xl shadow-lg hover:shadow-blue-200/60 p-4 md:p-6 group relative overflow-hidden">
              <div className="absolute inset-0 rounded-2xl pointer-events-none border-4 border-transparent group-hover:border-blue-400 group-hover:shadow-[0_0_32px_8px_rgba(59,130,246,0.18)] transition-all duration-500 z-10" />
              <MeyerDropdown />
            </div>
            <div className="animate-scale-in transition-shadow duration-300 bg-white/90 border-2 border-blue-100 rounded-2xl shadow-lg hover:shadow-blue-100/60 p-4 md:p-6 group relative overflow-hidden">
              <div className="absolute inset-0 rounded-2xl pointer-events-none border-4 border-transparent group-hover:border-blue-300 group-hover:shadow-[0_0_32px_8px_rgba(59,130,246,0.14)] transition-all duration-500 z-10" />
              <BismiDropdown />
            </div>
            <div className="animate-scale-in transition-shadow duration-300 bg-blue-50 border-2 border-cyan-100 rounded-2xl shadow-lg hover:shadow-cyan-100/60 p-4 md:p-6 group relative overflow-hidden">
              <div className="absolute inset-0 rounded-2xl pointer-events-none border-4 border-transparent group-hover:border-cyan-300 group-hover:shadow-[0_0_32px_8px_rgba(6,182,212,0.14)] transition-all duration-500 z-10" />
              <ABBHitachiDropdown />
            </div>
            <div className="animate-scale-in transition-shadow duration-300 bg-cyan-50 border-2 border-blue-100 rounded-2xl shadow-lg hover:shadow-blue-100/60 p-4 md:p-6 group relative overflow-hidden">
              <div className="absolute inset-0 rounded-2xl pointer-events-none border-4 border-transparent group-hover:border-blue-300 group-hover:shadow-[0_0_32px_8px_rgba(59,130,246,0.14)] transition-all duration-500 z-10" />
              <ARCInteriorsDropdown />
            </div>
            <div className="animate-scale-in transition-shadow duration-300 bg-white/90 border-2 border-blue-50 rounded-2xl shadow-lg hover:shadow-blue-50/60 p-4 md:p-6 group relative overflow-hidden">
              <div className="absolute inset-0 rounded-2xl pointer-events-none border-4 border-transparent group-hover:border-blue-200 group-hover:shadow-[0_0_32px_8px_rgba(59,130,246,0.10)] transition-all duration-500 z-10" />
              <RittalDropdown />
            </div>
            <div className="animate-scale-in transition-shadow duration-300 bg-blue-50 border-2 border-cyan-50 rounded-2xl shadow-lg hover:shadow-cyan-50/60 p-4 md:p-6 group relative overflow-hidden">
              <div className="absolute inset-0 rounded-2xl pointer-events-none border-4 border-transparent group-hover:border-cyan-200 group-hover:shadow-[0_0_32px_8px_rgba(6,182,212,0.10)] transition-all duration-500 z-10" />
              <GEAWestfaliaDropdown />
            </div>
            <div className="animate-scale-in transition-shadow duration-300 bg-cyan-50 border-2 border-blue-50 rounded-2xl shadow-lg hover:shadow-blue-50/60 p-4 md:p-6 group relative overflow-hidden">
              <div className="absolute inset-0 rounded-2xl pointer-events-none border-4 border-transparent group-hover:border-blue-200 group-hover:shadow-[0_0_32px_8px_rgba(59,130,246,0.10)] transition-all duration-500 z-10" />
              <GlobalPrintingDropdown />
            </div>
            <div className="animate-scale-in transition-shadow duration-300 bg-white/90 border-2 border-blue-100 rounded-2xl shadow-lg hover:shadow-blue-100/60 p-4 md:p-6 group relative overflow-hidden">
              <div className="absolute inset-0 rounded-2xl pointer-events-none border-4 border-transparent group-hover:border-blue-300 group-hover:shadow-[0_0_32px_8px_rgba(59,130,246,0.14)] transition-all duration-500 z-10" />
              <IbexEngineeringDropdown />
            </div>
            <div className="animate-scale-in transition-shadow duration-300 bg-blue-50 border-2 border-cyan-100 rounded-2xl shadow-lg hover:shadow-cyan-100/60 p-4 md:p-6 group relative overflow-hidden">
              <div className="absolute inset-0 rounded-2xl pointer-events-none border-4 border-transparent group-hover:border-cyan-300 group-hover:shadow-[0_0_32px_8px_rgba(6,182,212,0.14)] transition-all duration-500 z-10" />
              <MantriSerenityDropdown />
            </div>
            <div className="animate-scale-in transition-shadow duration-300 bg-cyan-50 border-2 border-blue-100 rounded-2xl shadow-lg hover:shadow-blue-100/60 p-4 md:p-6 group relative overflow-hidden">
              <div className="absolute inset-0 rounded-2xl pointer-events-none border-4 border-transparent group-hover:border-blue-300 group-hover:shadow-[0_0_32px_8px_rgba(59,130,246,0.14)] transition-all duration-500 z-10" />
              <SusheelaFarmDropdown />
            </div>
            <div className="animate-scale-in transition-shadow duration-300 bg-white/90 border-2 border-cyan-200 rounded-2xl shadow-lg hover:shadow-cyan-200/60 p-4 md:p-6 group relative overflow-hidden">
              <div className="absolute inset-0 rounded-2xl pointer-events-none border-4 border-transparent group-hover:border-cyan-400 group-hover:shadow-[0_0_32px_8px_rgba(6,182,212,0.18)] transition-all duration-500 z-10" />
              <RPAUnibakesDropdown />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
