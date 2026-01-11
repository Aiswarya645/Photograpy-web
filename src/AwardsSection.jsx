import img from "./Awardimg.jpg";

export default function AwardsSection() {
  const awards = [
    {
      year: "2015",
      title: "Sony World Photography Awards",
      active: true,
    },
    {
      year: "2017",
      title: "Travel Photographer Of The Year",
    },
    {
      year: "2022",
      title: "Magnum Photography Awards",
    },
    {
      year: "2023",
      title: "International Photography Awards",
    },
  ];

  return (
    <section className="bg-gradient-to-br from-[#0b0b12] to-[#171723] py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 mb-20 text-white">
          <div></div>

          <div>
            <h2 className="text-3xl md:text-4xl font-semibold leading-snug">
              Award is a pixel that <span className="font-bold">reflecting</span> <br />
              our ongoing <span className="font-bold">dedication</span> to <br />
              innovation and excellence
            </h2>
          </div>
        </div>

       
        <div className="grid lg:grid-cols-2 gap-12">

    
          <div className="space-y-4">
            {awards.map((award, index) => (
              <div
                key={index}
                className={`group flex items-center justify-between px-6 py-5 rounded-xl cursor-pointer
                  transition-all duration-300
                  ${
                    award.active
                      ? "bg-[#3a3a33] text-white"
                      : "bg-transparent border border-white/10 text-gray-300 hover:bg-[#3a3a33] hover:text-white"
                  }
                `}
              >
                <div className="flex items-center gap-6">
                  <span className="text-sm opacity-60 w-12">
                    {award.year}
                  </span>
                  <p className="text-sm font-medium">
                    {award.title}
                  </p>
                </div>

                <span
                  className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center
                  group-hover:bg-white group-hover:text-black transition"
                >
                  →
                </span>
              </div>
            ))}
          </div>

       
          <div className="bg-[#1c1c26] rounded-2xl p-6 text-white">
            <img
              src={img}
              alt="Award"
              className="rounded-xl mb-6 w-full h-[200px] object-cover"
            />

            <h3 className="font-semibold mb-2">
              A Quiet Afternoon in the Countryside
            </h3>

            <p className="text-sm text-gray-400 leading-relaxed">
              As the sun gently descends in the western sky, casting warm golden
              hues upon rolling hills and meadows, the countryside settles into
              a tranquil serenity.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
