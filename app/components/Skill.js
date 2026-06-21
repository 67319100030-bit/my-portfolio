export default function Skills() {
  const skills = ["Graphic Design ", "Content Creator", "Canva", "chatgpt", "gemini"];
  
  return (
    <section className="py-20 px-8">
      <h2 className="text-4xl font-bold mb-8">ทักษะ</h2>
      <div className="flex flex-col gap-3 items-start"> 
        {skills.map((skill) => (
          <span key={skill}>{skill}</span>
        ))}
      </div>
    </section>
  );
}