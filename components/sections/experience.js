import Company from "../company";
import ScrollAnimation from "../ScrollAnimation";

export default function Experience() {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  
  const transition = { duration: 0.5, ease: 'easeOut' };
  
  return (
    <ScrollAnimation variants={variants} transition={transition}>
    <section id="experience" className="w-full mt-16 px-56 py-7">
      <h2 className="section-heading text-sky-500 text-3xl mt-1 mb-5">
        Work experience
      </h2>
      <div className="w-full pl-8">
        <Company 
          position="Lead Developer(Freelance)"
          company_name="IOM"
          company_link="https://www.iom.int"
          duration="May 2023 - January 2024"
          responsibilities={[
            "Designed mockups for the website using Figma and Adobe Illustrator",
            "Built the database and the api using Django's MVC system and Django rest framework to serve the api to the frontend",
            "Built and designed the front end using the Next.js framework and deployed it using firebase",
            "Worked alone as a one man power team"
          ]}
        />
      </div>
    </section>
    </ScrollAnimation>
  );
}
