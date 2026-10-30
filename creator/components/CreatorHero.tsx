import React from 'react';
export interface CreatorHeroProps { actions: React.ReactNode; logo?: string; image?: string }
export function CreatorHero({ actions, logo = '/onlyhorse.png', image = '/horse-1.png' }: CreatorHeroProps) {
  return <section className="flex min-h-screen w-full">
    <div className="flex-1 flex overflow-hidden bg-[#00b0f0a6] relative justify-center items-center bg-noise p-6">
      <div className="flex flex-col gap-3 max-w-xl text-center md:text-left font-semibold py-20">
        <h1><img src={logo} alt="OnlyHorse" width={420} height={100} className="w-full max-w-[420px]" /></h1>
        <p className="text-2xl md:text-3xl">Hey! It's <span className="bg-stone-800 px-2 font-bold text-white">NOT</span> what it looks like.</p>
        <p className="text-2xl md:text-3xl mb-20">Built for <span className="bg-sky-500 px-2 text-white">HORSES</span> NOT <span className="bg-red-500 px-2 text-white">OTHERS</span></p>
        {actions}
      </div>
    </div>
    <div className="flex-1 relative overflow-hidden hidden md:block"><img src={image} alt="Horse at the farm" className="absolute inset-0 w-full h-full object-cover" /></div>
  </section>;
}
