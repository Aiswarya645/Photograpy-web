import travel from './Travel.jpg'
import trav2 from './nature2.jpg'
import travel1 from './Travel1.jpg'
export default function FeaturedNature() {
  return (
    <section className="relative bg-[#0b0f12] text-white py-28 overflow-hidden">
    
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
         style={{ backgroundImage: `url(${trav2})` }}
      />

      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20">

       
        <div className="relative">
        
          <div className="relative w-[300px] h-[420px] border border-white/30 p-3">
            <img
              src={travel1}
              className="w-full h-full object-cover"
              alt="Mountain"
            />
          </div>

      

          
        </div>

       
        <div>
        
          <span className="inline-block border border-white/40 px-3 py-1 text-xs tracking-widest mb-6">
            FEATURED
          </span>

          <h2 className="text-4xl md:text-5xl font-serif leading-tight mb-6">
            Mountain as a <br /> place of adventure
          </h2>

          <p className="text-sm text-gray-300 mb-4 max-w-md">
            Bercerita tentang tempat petualangan dan wisata alam
          </p>

          <p className="text-sm text-gray-400 leading-relaxed max-w-md">
            Begitu banyak tempat yang dapat kita jelajahi dan menikmati segala
            keindahan yang telah Tuhan berikan bagi alam ini untuk kita.
          </p>

          <div className="w-24 h-[1px] bg-white/30 my-8" />

      
          <h3 className="text-3xl font-serif mb-3">
            Back to Nature
          </h3>

          <p className="text-sm text-gray-400 leading-relaxed max-w-md mb-8">
            Alam memberi ketenangan dan memberi kebahagiaan. Walaupun ketenangan
            kita sendiri yang diciptakan, namun harus juga suasana dan keadaan
            sekitar.
          </p>

          <button className="border border-white px-6 py-2 text-sm hover:bg-white hover:text-black transition">
            Learn More
          </button>
        </div>
      </div>

      
      <div className="relative max-w-7xl mx-auto px-6 mt-24">
        <div className="ml-auto w-[260px] h-[200px] border border-white/30 p-2">
          <img
            src={travel}
            className="w-full h-full object-cover"
            alt="Nature"
          />
        </div>
      </div>
    </section>
  );
}
