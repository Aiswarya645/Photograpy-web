import { useEffect, useState } from "react";
import logo from "./logos.svg";
import photo from './photographer.jpg'


import bg1 from "./back1.jpg";
import bg2 from "./back2.jpg";
import bg3 from "./back3.jpg";
import WondersSection from "./WondersSection";
import PopularTours from "./PopularTours";
import FeaturedNature from "./FeaturedNature";
import DiscoverWorld from "./DiscoverWorld";
import PhotographyPortfolio from "./PhotographyPortfolio";
import AwardsSection from "./AwardsSection";
import Footer from "./Footer";



const slides = [
  {
    img: "/images/animal.jpg",
    title: "Nagano",
    subtitle: "Prefecture",
  },
  {
    img: "/images/desert.jpg",
    title: "Marrakech",
    subtitle: "Merzouga",
  },
  {
    img: "/images/mountain.jpg",
    title: "Yosemite",
    subtitle: "National Park",
  },
 
];

const bgImages = [bg1, bg2, bg3];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [bgIndex, setBgIndex] = useState(0);

  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const bgTimer = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % bgImages.length);
    }, 6000);
    return () => clearInterval(bgTimer);
  }, []);

  return (
    <section className="relative h-screen w-full ">

     
      <div className="absolute inset-0">
        {bgImages.map((img, i) => (
          <div
            key={i}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              i === bgIndex ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
      </div>

   
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent z-10" />

    
      <nav className="relative z-20 flex items-center justify-between px-12 h-24 text-white">
<img
  src={logo}
  alt="Logo"
  className="h-16 md:h-20 lg:h-24"
/>
        <ul className="hidden md:flex gap-10 text-sm tracking-wide">
          {["Home", "About", "Photos", "Videos", "Contact Us"].map(
            (item) => (
              <li key={item} className="hover:text-yellow-400 cursor-pointer">
                {item}
              </li>
            )
          )}
        </ul>
      </nav>

  
      <div className="relative z-20 h-full flex items-center px-12">
        <div className="grid md:grid-cols-2 w-full items-center">

          
          <div className="text-white max-w-xl">
            <p className="uppercase text-sm tracking-widest mb-4">
              Switzerland Alps
            </p>

            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
              SAINT
              <br />
              ANTÖNIEN
            </h1>

            <p className="text-gray-200 mt-6 text-sm leading-relaxed">
              Discover breathtaking landscapes and unforgettable experiences
              curated for explorers.
            </p>

            <button className="mt-8 inline-flex items-center gap-3 border border-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition">
              Discover Location →
            </button>
          </div>

          <div className="hidden md:block relative overflow-hidden">
            <div
              className="flex gap-6 transition-transform duration-700"
              style={{
                transform: `translateX(-${currentSlide * 220}px)`,
              }}
            >
              {slides.map((slide, index) => {
                const active = index === currentSlide;
                return (
                  <div
                    key={index}
                    className={`w-52 h-80 rounded-2xl overflow-hidden shadow-2xl transition-all duration-700
                      ${active ? "scale-110 opacity-100" : "scale-95 opacity-60"}
                    `}
                  >
                    <img
                      src={slide.img}
                      alt={slide.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="font-semibold">{slide.title}</h3>
                      <p className="text-xs opacity-80">{slide.subtitle}</p>
                    </div>
                  </div>
                );
              })}
            </div>

        
            <div className="absolute -bottom-16 left-0 flex gap-4">
              <button
                onClick={() =>
                  setCurrentSlide(
                    (currentSlide - 1 + slides.length) % slides.length
                  )
                }
                className="w-10 h-10 rounded-full border border-white text-white hover:bg-white hover:text-black"
              >
                ←
              </button>
              <button
                onClick={() =>
                  setCurrentSlide((currentSlide + 1) % slides.length)
                }
                className="w-10 h-10 rounded-full border border-white text-white hover:bg-white hover:text-black"
              >
                →
              </button>
            </div>
          </div>

        </div>
      </div>
       <section
  className="relative w-full h-screen"
  style={{ marginTop: "-100px" }}
>

      
     
      <img
        src={photo}
        alt="Photographer"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-black/60 to-black/90" />

    
      <div className="relative z-10 max-w-7xl mx-auto h-full px-6 flex items-center">
        <div className="max-w-2xl ml-auto text-white">

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
            Hello, I’m{" "}
            <span className="text-yellow-400 font-bold">
              Devdatta Rokade
            </span>
          </h1>

         
          <p className="mt-6 text-gray-300 leading-relaxed text-sm md:text-base">
            The concept of Wildlife Frame Stores began with a simple idea —
            preserving the beauty of nature through artistic expression. In the
            early 1990s, photographers, naturalists, and conservation enthusiasts
            started creating dedicated spaces where people could experience
            wildlife imagery in a meaningful and immersive way.
          </p>

         
          <p className="mt-6 text-white font-script text-xl">
            Devdatta Rokade
          </p>

          
          <div className="flex gap-4 mt-6">
            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-white text-black hover:bg-white transition"
            >
              f
            </a>
            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-white text-black hover:bg-white transition"
            >
              ◎
            </a>
            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-white text-black hover:bg-white transition"
            >
              ▶
            </a>
          </div>

        </div>
      </div>
    </section>
       <WondersSection />
       <PopularTours />  
       <FeaturedNature /> 
       <DiscoverWorld />   
       <PhotographyPortfolio />
       <AwardsSection />
       <Footer />
 
    </section>
 

   
  );
    
   
}
