import logo from "./logos.svg";
export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#0c0c10] to-[#16161f] py-16">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex flex-col md:flex-row justify-between gap-16">

      
          <div className="text-white">
            <img
              src={logo}
              alt="Wildframe"
              className="h-26 mb-6"
            />

            <p className="text-sm text-gray-400">
              © 2024 WildFrame
            </p>
          </div>

         
          <div className="flex gap-10">

            
            <div className="bg-[#14141c] rounded-2xl px-6 py-5 text-sm text-gray-300 space-y-2 min-w-[160px]">
              <p className="hover:text-white cursor-pointer">Home</p>
              <p className="hover:text-white cursor-pointer">About</p>
              <p className="hover:text-white cursor-pointer">Images</p>
              <p className="hover:text-white cursor-pointer">Videos</p>
            </div>

         
            <div className="bg-[#14141c] rounded-2xl px-6 py-5 text-sm text-gray-300 space-y-2 min-w-[160px]">
              <p className="hover:text-white cursor-pointer">Contact Us</p>
              
            </div>

            
            <div className="bg-[#14141c] rounded-2xl px-6 py-5 text-sm text-gray-300 min-w-[160px]">
              <p className="mb-4">Follow us</p>

              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-black transition cursor-pointer">
                  f
                </div>
                <div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-black transition cursor-pointer">
                  Ⓟ
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </footer>
  );
}
