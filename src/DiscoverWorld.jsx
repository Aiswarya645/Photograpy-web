import nature from './nature.jpg'
import travel from './Travel.jpg'
import travel1 from './Travel1.jpg'
export default function DiscoverWorld() {
  return (
    <section className="relative h-screen w-full ">
     
      <div
        className="absolute inset-0 bg-cover bg-center"
         style={{ backgroundImage: `url(${nature})` }}
      />

     
      <div className="absolute inset-0 bg-black/60" />

     
      <div className="relative z-10 max-w-7xl mx-auto h-full px-6 flex items-center">
        <div className="grid lg:grid-cols-2 w-full gap-16">

          
          <div className="text-white max-w-xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              DISCOVER THE <br />
              WORLD IN A <br />
              NEW WAY
            </h1>

            
            <div className="flex items-center gap-4 mt-8">
              <div className="w-12 h-12 rounded-full border border-white flex items-center justify-center">
                ▶
              </div>
              <span className="uppercase text-sm tracking-widest">
                Watch the video
              </span>
            </div>

           
            <p className="text-sm text-gray-300 mt-10 leading-relaxed">
              “Attachment to things and comfort is the main obstacle to an
              interesting life. People, as a rule, do not realize that at any
              time they can throw anything out of their lives. Anytime.
              Instantly.”
            </p>

            <p className="mt-4 text-sm text-gray-400">
              © Carlos Castaneda
            </p>
          </div>

         
          <div className="flex items-end gap-6">
           
            <div className="relative w-56 h-36 rounded-lg overflow-hidden">
              <img
                src={travel1}
                alt="Video 1"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <div className="w-10 h-10 rounded-full border border-white flex items-center justify-center text-white">
                  ▶
                </div>
              </div>
            </div>

           
            <div className="relative w-56 h-36 rounded-lg overflow-hidden">
              <img
                src={travel}
                alt="Video 2"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <div className="w-10 h-10 rounded-full border border-white flex items-center justify-center text-white">
                  ▶
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
