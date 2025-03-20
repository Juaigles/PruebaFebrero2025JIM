import NewProjectButton from "@/components/NewProjectButton";
import Buttons from "@/components/Buttons";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import SateliteButton from "@/components/SateliteButton";
import SelectButtons from "@/components/SelectButtons";

export default function Home() {
  const data = [
    {
      img: ["Assets/imagenesTarjetas/image1.png","Assets/icons/biodiversity_stamp1.png"],
      flag: "Assets/icons/italia.png",
      tons: "195.122,74",
      logos: ["Assets/icons/Vector.png", "Assets/icons/image24.png"],
    },
    {
      img: ["Assets/imagenesTarjetas/image2.png"],
      flag: "Assets/icons/italia.png",
      tons: "884,74",
      logos: ["Assets/icons/image21.png"],
    },
    {
      img: ["Assets/imagenesTarjetas/image3.png"],
      flag: "Assets/icons/greece.png",
      tons: "562,05",
      logos: ["Assets/icons/Vector.png", "Assets/icons/image18.png"],
    },
    {
      img: ["Assets/imagenesTarjetas/image4.png"],
      flag: "Assets/icons/germany.png",
      tons: "230.122,99",
      logos: ["Assets/icons/Vector.png", "Assets/icons/image21.png"],
    },
    {
      img:  ["Assets/imagenesTarjetas/image5.png","Assets/icons/biodiversity_stamp1.png"],
      flag: "Assets/icons/denmark.png",
      tons: "5.122,11",
      logos: [],
    },
    {
      img:[ "Assets/imagenesTarjetas/image6.png"],
      flag: "Assets/icons/italia.png",
      tons: "80,74",
      logos: ["Assets/icons/image24.png"],
    },
    {
      img: ["Assets/imagenesTarjetas/image7.png"],
      flag: "Assets/icons/belgium.png",
      tons: "336.005",
      logos: [],
    },
    {
      img:  ["Assets/imagenesTarjetas/image8.png","Assets/icons/biodiversity_stamp1.png"],
      flag: "Assets/icons/italia.png",
      tons: "55.014,50",
      logos: [],
    },
  ];

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
          <SelectButtons />
        </div>

        <div className=" wrapper pb-[51px] ">
          {Array.from({ length: 8 }).map((_, index) => (

              <Buttons key={index}
                img={data[index].img}
                flag={data[index].flag}
                tons={data[index].tons}
                logos={data[index].logos}
              />
          ))}
        </div>
      </div>
    </>
  );
}
