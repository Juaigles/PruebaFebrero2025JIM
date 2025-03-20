import NewProjectButton from "@/components/NewProjectButton";
import Buttons from "@/components/Buttons";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import SateliteButton from "@/components/SateliteButton";
import SelectButtons from "@/components/SelectButtons";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="pl-[71px] pr-[87px] flex flex-col gap-[30px]">
        <div className="flex justify-between  pt-[20px]">
   
            <SateliteButton />


            <NewProjectButton />

        </div>
        <div>
          <SelectButtons/>
        </div>

        <div className=" wrapper ">
          {Array.from({ length: 8 }).map((_, index) => (
            <div key={index} className="">
              <Buttons img={"Assets/imagenesTarjetas/image1.png"} flag={"Assets/icons/italia.png"} tons={"195.122,74"}  logos={["Assets/icons/Vector.png", "Assets/icons/image24.png"]} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
