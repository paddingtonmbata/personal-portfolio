import Company from "../company";

export default function Experience() {
  return (
    <section id="about" className="w-full mt-16 px-56 py-7">
      <h2 className="section-heading text-sky-500 text-3xl mt-1 mb-5">
        Work experience
      </h2>
      <div className="w-full pl-8">
        <Company 
          position="Lead Developer(Freelance)"
          company_name="IOM"
          company_link="https://www.iom.int"
          duration="June 2023 - January 2024"
          responsibilities={[
            "Designed mockups for the website using Figma and Adobe Illustrator",
            "Built the database and the api using Django's MVC system and Django rest framework to serve the api to the frontend",
            "Built and designed the front end using the Next.js framework and deployed it using firebase",
            "Worked alone as a one man power team"
          ]}
        />
      </div>
    </section>
  );
}
