// app/components/Hero.js
export default function Hero() {
  return (
    <section className="py-20 px-8 flex flex-col items-center text-center bg-[#F4F1EA]">
      <img 
        src="https://api.dicebear.com/7.x/bottts-neutral/svg?seed=Gabriel" 
        alt="Student Profile" 
        className="w-32 h-32 rounded-full object-cover mb-6 border-4 border-white shadow-md bg-blue-100"
      />
      
      <h2 className="text-5xl font-bold text-amber-950">โปรไฟล์</h2>
    </section>
  );
}