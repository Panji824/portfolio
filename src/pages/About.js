import React from "react";

const about = () => {
  const skillsDataSQA = [
    {
      title: "Manual Testing",
      content: "Functional Testing, Regression Testing, Smoke Testing, UAT",
    },
    {
      title: "Automation Testing",
      content: "Creating and maintaining automated test scripts for web applications using Selenium WebDriver and Cypress frameworks.",
    },
    {
      title: "API Testing",
      content: "Designing and executing test cases for RESTful APIs using Postman and RestAssured to ensure functionality, reliability, performance, and security.",
    },
    {
      title: "Documentation",
      content: "Creating detailed test plans, test cases, and bug reports using tools like Excel and JIRA to ensure clear communication and tracking of testing activities.",
    },
    {
      title: "Version Control",
      content: "Using Git for version control and collaborating on code repositories hosted on GitHub.",
    },
  ];

  const skillsDataDMA = [
    {
      title: "Scraping Data",
      content: "Scraping data from websites using Python libraries such as BeautifulSoup and Scrapy to collect relevant information for analysis.",
    },
    {
      title: "Pandas & NumPy",
      content: "Data manipulation and analysis using Pandas and NumPy libraries in Python to clean, transform, and analyze datasets effectively.",
    },
    {
      title: "Power BI & Tableau",
      content: "Creating interactive dashboards and visualizations using Power BI and Tableau to present data insights clearly and effectively.",
    },
    {
      title: "Sentiment Analysis",
      content: "Performing sentiment analysis on textual data using Natural Language Processing (NLP) techniques to extract insights and trends.",
    },
    {
      title: "Excel & SQL",
      content: "Data analysis and querying using Excel for spreadsheet management and SQL for database interactions to retrieve and manipulate data.",
    },
  ];
  return (
    <section className="about-section">
      <h2>About Me</h2>
      <p>
        A motivated Computer Engineering graduate (Andalas University, 2025) with a strong foundation in Data Science from the Bangkit Program. Experienced in applying analytical and problem-solving skills using Python and SQL for data
        processing, visualization, and model development. Through multiple online courses, I have developed a solid understanding of software testing fundamentals, including test case management, automation testing, and manual testing, and
        have gained hands-on project experience using Selenium. Highly motivated to pursue opportunities in Quality Assurance and Software Testing, with a strong interest in ensuring product reliability, performance, and user satisfaction
        within the software development lifecycle
      </p>
      <h3>Software Testing Skills</h3>

      {/* Container untuk tata letak grid */}
      <div className="skills-grid">
        {skillsDataSQA.map((skill, index) => (
          // skill-card harus memiliki position: relative
          <div key={index} className="skill-card">
            {/* 1. Konten yang Selalu Terlihat (Hanya Title) */}
            <h4 className="skill-title-visible">{skill.title}</h4>
            <div className="skill-overlay"> 

              <p className="overlay-text">{skill.content}</p>
            </div>
          </div>
        ))}
      </div>

      <h3>Data Manipulation and analysis skill</h3>

      {/* Container untuk tata letak grid */}
      <div className="skills-grid">
        {skillsDataDMA.map((skill, index) => (
          <div key={index} className="skill-card">
            <h4 className="skill-title-visible">{skill.title}</h4>
            <div className="skill-overlay">
              <p className="overlay-text">{skill.content}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default about;
