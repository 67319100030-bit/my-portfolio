export default function Home() {
  
  const name = "ฑลดล แสงจัทร์";
  
  return (                                                                          // ใสลิ้ง //
    <main className="min-h-screen flex items-center justify-center bg-[url('https://i.postimg.cc/Qxp5pnrS/pngtree-abstract-gold-scratches-on-a-black-background-picture-image-15503323.jpg')] bg-cover bg-center">
      
      <div className="text-center text-white">
        <h1 className="text-6xl font-bold mb-4">
           ⚔️ {name} ⚔️
        </h1>

        <p className="text-xl mb-6">Graphic Design · Bangkok</p>

        <div className="flex gap-4 justify-center">
          <button className="px-6 py-3 bg-white text-purple-600 font-semibold rounded-xl shadow hover:bg-gray-100 transition">
            Projects
          </button>

          <button className="px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-purple-600 transition">
            Contact
          </button>
        </div>

      </div>
    </main>
  );
}