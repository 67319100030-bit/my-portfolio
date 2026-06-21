// app/page.js
import Hero from "./components/Hero";
import Skill from "./components/Skill";
function Greeting({ name }) {   //ส่วนที่1
  return <h1> Hello {name}</h1>;
}

function Section({ title, children }) { //ส่วนที่2
  return (
    <section className="py-20 px-8">
      <h2 className="text-4xl font-bold mb-8">{title}</h2>
      {children}
    </section>
  );
}
export default function Home() {
  return (
    <main className="bg-[#FAF9F6] text-amber-950">
      <Hero />
      
      <Section title="แนะนำตัว">
        <div className="bg-[#F4F1EA] p-6 rounded-xl">
          <Greeting name="ฑลดล" />
          <Greeting name="เติ้ล" />
        </div>
      </Section>

      <Skill />

      <Section title="เกี่ยวกับฉัน">
        <div className="bg-[#EFECE4] p-6 rounded-xl">
          <p>ผมเรียนวิทยาลัยนี้จนจบ ปวช ปวส กำลังเรียนต่อ ป.ตรี </p>
        </div>
      </Section>

      <Section title="ระดับการศึกษา">
        <div className="bg-[#F4F1EA] p-6 rounded-xl">
          <p>ป.ตรี</p>
        </div>
      </Section>

      <Section title="ผลงาน ">
        <div className="bg-[#EFECE4] p-6 rounded-xl flex flex-wrap gap-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg">
            twenty-four ซีคอนบางแค 
          </button>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-9 py-2 rounded-lg">
            JIE center 
          </button>
        </div>
      </Section>

     </main>
  );
}