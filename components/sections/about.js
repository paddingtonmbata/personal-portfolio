import Image from "next/image";
import ScrollAnimation from "../ScrollAnimation";

export default function About() {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  
  const transition = { duration: 0.5, ease: 'easeOut' };
  
  return (
    <ScrollAnimation variants={variants} transition={transition}>
      <section id="about" className="w-full px-52 py-7">
      <h2 className="section-heading text-sky-500 text-3xl mt-1 mb-5">About me</h2>
      <div className="">
        <div className="text-img-container grid grid-cols-3 gap-10">
          <div className="about-text col-span-2">
            Hey there! I'm Paddington Mbata, a self-taught web developer with a
            passion for crafting digital experiences that resonate on the
            internet. My journey in web development kicked off
            during my 9th grade in high school when I stumbled upon YouTube
            tutorials. It was there that I discovered the endless possibilities
            of coding, starting from Python to mastering JavaScript.<br/>As I deepened my programming skills, Next.js and Django became my go-to tools for web development, enabling me to bring ideas to life. A highlight of my journey was leading a major project for the International Organization for Migration, where I created a comprehensive repository for migration-related courses. From my early days of experimenting with code to now, I've evolved into a versatile developer, skilled at merging design and functionality seamlessly
            <br/>
            <br/>
            Here's a glimpse of some of the technologies I've been immersed in recently:<br/>
            <ul className="immersed_list grid grid-cols-2 gap-2 ">
                <li>JavaScript</li>
                <li>Python</li>
                <li>Next.js</li>
                <li>DJANGO</li>
                <li>Tailwind Css</li>
                <li>Framer Motion</li>
            </ul>
          </div>
          <div className="img-wrapper relative block w-fit">
            <Image
              className="grayscale hover:grayscale-0 rounded-lg"
              src="/profile.jpg"
              alt="profile image"
              width={300}
              height={300}
              priority={true}
              quality={100}
            />
          </div>
        </div>
      </div>
    </section>
    </ScrollAnimation>
    
  );
}
