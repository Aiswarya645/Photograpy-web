import tour from './tour.jpg'
import tour1 from './tour1.jpg'
import tour2 from './tour2.jpg'
import tour3 from './tour3.jpg'
export default function PopularTours() {
  const tours = [
    {
      img: tour,
      title: "Occasion",
      desc: "There will be a small.",
    },
    {
      img: tour1,
      title: "Sea",
      desc: "There will be a small.",
    },
    {
      img: tour2,
      title: "Beach",
      desc: "There will be a small.",
    },
    {
      img: tour3,
      title: "mountain",
      desc: "There will be a small.",
    },
  ];

  return (
    <section className="bg-gradient-to-br from-[#0c0c12] to-[#161621] py-24">
   
      <div className="max-w-7xl mx-auto px-6">

       
        <div className="text-center text-white mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-wide">
            POPULAR TOURS
          </h2>
          <p className="text-gray-400 mt-3 text-sm">
            There will be a small title here.
          </p>
        </div>

      
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {tours.map((tour, index) => (
            <div
              key={index}
              className="relative h-[420px] rounded-xl overflow-hidden group"
            >
           
              <img
                src={tour.img}
                alt={tour.title}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
              />

            
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

             
              <div className="absolute bottom-6 left-0 right-0 text-center text-white px-4">
                <h3 className="text-lg font-semibold tracking-widest">
                  {tour.title}
                </h3>
                <p className="text-sm text-gray-300 mt-1">
                  {tour.desc}
                </p>
              </div>

            
              <div className="absolute inset-0 rounded-xl border border-white/20" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
