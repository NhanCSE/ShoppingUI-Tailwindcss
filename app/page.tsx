import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";

export default function Home() {
  return (
    <main>
      <div className= "w-full h-120 bg-banner-bg bg-center">
        <div className="w-full h-full bg-black opacity-80 text-white"> 
          <Navbar />
          <Banner />
        </div>
      </div>
    </main>
  )
};
