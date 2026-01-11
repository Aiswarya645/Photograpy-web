import pic1 from './pic1.jpg'
import pic2 from './pic2.jpg'
import pic3 from './pic3.jpg'
import pic4 from './pic4.jpg'
export default function WondersSection() {
  const cards = [
    {
      img: pic1,
      title: "Camel Hill",
      desc: "We seek to provide the authentic content for travelers around the world",
    },
    {
      img: pic2,
      title: "Havana Street",
      desc: "We seek to provide the authentic content for travelers around the world",
    },
    {
      img: pic3,
      title: "Chumphon Forest",
      desc: "We seek to provide the authentic content for travelers around the world",
      active: true,
    },
    {
      img: pic4,
      title: "Red Mountain",
      desc: "We seek to provide the authentic content for travelers around the world",
    },
  ];

  return (
    <section className="bg-[#0b1a1f] py-20">
      <div className="max-w-7xl mx-auto px-6">
        
      
        <div className="text-center text-white mb-14">
          <h2 className="text-3xl font-semibold">
            The Wonders Of Nature
          </h2>
          <p className="text-gray-400 mt-2 text-sm">
            We seek to provide the authentic content for traveller around the world
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`relative rounded-2xl overflow-hidden group
                ${card.active ? "bg-lime-500" : "bg-[#13272e]"}
              `}
            >
          
              <img
                src={card.img}
                alt={card.title}
                className="h-80 w-full object-cover group-hover:scale-105 transition duration-500"
              />

             
              <div
                className={`absolute bottom-0 left-0 right-0 p-5
                  ${card.active ? "text-black" : "text-white"}
                `}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-lg">➜</span>
                  <h3 className="font-semibold">{card.title}</h3>
                </div>

                <p
                  className={`text-xs leading-relaxed
                    ${card.active ? "text-black/70" : "text-gray-300"}
                  `}
                >
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
