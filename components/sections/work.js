import ScrollAnimation from "../ScrollAnimation";
export default function Work() {
    const variants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      };
      
      const transition = { duration: 0.5, ease: 'easeOut' };
      
      return (
        <ScrollAnimation variants={variants} transition={transition}>
      <section id="work" className="w-full mt-16 px-56 py-7 flex flex-col justify-center">
        <h2 className="section-heading text-sky-500 text-3xl mt-1 mb-5">
          Some of my personal projects
        </h2>
        <div className="w-full pl-8">
          
        </div>
      </section>
        </ScrollAnimation>
    );
  }
  