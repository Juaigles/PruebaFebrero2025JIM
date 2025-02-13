import Buttons from "@/components/Buttons";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      
      <div className="grid grid-cols-4 gap-4 p-4 justify-center items-center">
        {Array.from({ length: 8 }).map((_, index) => (
          <div key={index} className="">
            <Buttons />
          </div>
        ))}
      </div>
    </>
  );
}
