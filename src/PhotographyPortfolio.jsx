import img1 from './img1.jpg'
import img2 from './img2.jpg'
import img3 from './img3.jpg'


export default function PhotographyPortfolio() {
  const cards = [
    {
      img: img1,
      title: "Majestic Creatures of the African Savanna",
      tag: ["Wildlife", "Nature"],
    },
    {
      img: img2,
      title: "A Temple’s Serene Silhouette",
      tag: [],
    },
    {
      img: img3,
      title: "Moments Framed in Portraits",
      tag: [],
    },
  ];

  return (
    <section className="bg-gradient-to-br from-[#0c0c12] to-[#161621] py-24">
      <div className="max-w-7xl mx-auto px-6">

      
        <div className="grid lg:grid-cols-2 gap-16 text-white mb-20">
          
      
          <div>
            <p className="text-sm text-gray-400 mb-4">
              Discover Our Work
            </p>

            <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
              Explore the artistry and precision behind our <br />
              <span className="font-bold">portfolio</span> of timeless <br />
              photography
            </h2>
          </div>

          <div>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Embark on a visual journey through our cherished moments. Captured
              with passion and precision, each frame tells a story of artistry
              and emotion.
            </p>

            <button className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-white/30 hover:bg-white hover:text-black transition">
              Explore More
              <span className="text-lg">→</span>
            </button>
          </div>
        </div>

       
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="relative h-[420px] rounded-2xl overflow-hidden group"
            >
             
              <img
                src={card.img}
                alt={card.title}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
              />

             
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

            
              {card.tag.length > 0 && (
                <div className="absolute top-4 left-4 flex gap-2">
                  {card.tag.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs bg-white/20 backdrop-blur px-3 py-1 rounded-full text-white"
                    >
                      {tag}
                    </span>
                  ))}
                  <span className="text-xs bg-white/20 backdrop-blur px-3 py-1 rounded-full text-white">
                    #2023
                  </span>
                </div>
              )}

             
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h3 className="text-sm font-semibold mb-3 leading-snug">
                  {card.title}
                </h3>

                <button className="flex items-center justify-between w-full px-4 py-2 text-xs rounded-full bg-white/10 backdrop-blur hover:bg-white hover:text-black transition">
                  More Details
                  <span>→</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
