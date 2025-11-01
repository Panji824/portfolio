import React from "react";

const projects = [
  {
    id: 1,
    title: "API Testing with Postman",
    description: "Developed and executed comprehensive API test cases using Postman to validate RESTful services, ensuring functionality, reliability, and performance. while maintenain documentation afterward",
    tech: ["Postman", "RESTful API", "Swagger"],
  },
  {
    id: 2,
    title: "Insight of London Tourism Data",
    description: "Created a web scraping automation tool using Selenium WebDriver to extract tourism data from London-based websites. Analyzed the collected data using Pandas to uncover insights and trends.",
    tech: ["Selenium WebDriver", "Python", "Pandas"],
  },
  {
    id: 3,
    title: "Ecommerce website testing using katalon studio",
    description: "Conducted end-to-end testing of an eCommerce website using Katalon Studio, including functional, regression, and performance testing to ensure a seamless user experience and robust functionality.",
    tech: ["Katalon Studio", "Selenium", "Excel"],
  },
];

const Portfolio = () => {
  return (
    <section className="portfolio-section">
      <h2>My Portfolio</h2>
      <p>Here are some of the projects I've worked on:</p>
      <div className="project-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tech-tags">
              {project.tech.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
            <div className="project-links">
              <a href="#code">Repository</a>
              <a href="#demo">Live Demo</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Portfolio;
