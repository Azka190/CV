import Image from "next/image";
import { Inter } from "next/font/google";
import Main from "@/components/Main";
import Navbar from "@/components/Navbar";
import Education from "@/components/Education";
import Hireme from "@/components/Hireme";
import Skills from "@/components/Skills";
import Contactme from "@/components/Contactme";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
   <div>
      
      <Main />
      <Education />
      <Hireme />
      <Skills />
      <Contactme />
     
   </div>
  );
}
