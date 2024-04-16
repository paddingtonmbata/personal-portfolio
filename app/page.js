import Landing_page from "@/components/sections/landing_page";
import About from "@/components/sections/about";
import Experience from "@/components/sections/experience";
import Work from "@/components/sections/work";
import Contact from "@/components/sections/contact";


export default function Home() {
  return (
    <main className="w-screen overflow-x-hidden">
      <Landing_page/>
      <About/>
      <Experience/>
      <Work/>
      <Contact/>
    </main>
  );
}
