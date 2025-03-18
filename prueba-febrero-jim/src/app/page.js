import Button from "@/components/Button";
import Buttons from "@/components/Buttons";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import SateliteButton from "@/components/SateliteButton";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="pl-[71px] pr-[87px]">
      <div className="flex justify-between">
        <div>
<SateliteButton/>
        </div>
        <div>
          
<Button/>
        </div>
      </div>

      <div className=" wrapper ">
        {Array.from({ length: 8 }).map((_, index) => (
          <div key={index} className="">
            <Buttons />
          </div>
        ))}
      </div>
        </div>
    </>
  );
}
