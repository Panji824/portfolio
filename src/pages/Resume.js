import React from "react";

// Data statis untuk Pengalaman Kerja
const workExperience = [
{
    title: "Trainee Technician",
    company: "Lintasarta",
    years: "January Februari 2024",
    
    description: [ 
       " Conducted analysis and design of Site-to-Site VPN IPsec implementation for Bank Nagari’s network topology, utilizing ISAKMP protocol, MD5 hashing, and 3DES encryption.",
        "Managed incoming warehouse inventory such as routers, switches, LNBs, and other networking equipment to support operational readiness.",
        "Performed connectivity checks and troubleshooting for Point-to-Point radio links of Lintasarta customers using Cambium Network interfaces."
    ]
    },
  {
    title: "Machine Learning Cohort",
    company: "Bangkit 2023 Batch 2",
    years: "August - December 2023",
    description: [
        "Completed an intensive Machine Learning program covering data preprocessing, exploratory data analysis, model development, and evaluation using Python and relevant libraries.",
        "Led a Capstone Project team, managing collaboration across multidisciplinary members using Notion and applying Agile Development methodologies.",
        "Developed a model for capstone project that helps tour guides discover local markets and analyze competitor venues using ML based on reviews and visitor data to improve service and placement strategies",
        "Coordinated task prioritization and ensured team alignment, achieving 100% on-time delivery for Capstone Project." 
    ]
    
    }
];

// Data statis untuk Pendidikan
const education = [
  {
    degree: "Bachelor of Computer Engineering",
    institution: "Andalas University",
    years: "2021 - 2025",
  },
];

const organizations = [
  {
    role: "Head of Bureau of Internal Auditing",
    organization: "BEM FTI UNAND 2023",
    years: "Januari - Desember 2023",
    description : [
        "Oversaw two main divisions: organizational internal supervision and secretariat management.",
        "Implemented individual member supervision programs to monitor participation and contribution.",
        "Achieved 98% activeness rate among permanent and internship members, measured throughprogram execution and attendance in BEM activities"
    ]
    },

    ];


const Resume = () => {
  return (
    <section className="resume-section">
      <h2>Resume</h2>
      <p>A summary of my professional experience, education, and achievements.</p>

      {/* Bagian Pengalaman Kerja */}
      <div className="experience-container">
        <h3>Work Experience</h3>
        {workExperience.map((job, index) => (
          <div key={index} className="job-entry">
            <h4>{job.title}</h4>
            <p className="company-info">
              {job.company} • {job.years}
            </p>
            <ul className="job-description-list">
              {job.description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bagian Pendidikan */}
      <div className="education-container">
        <h3>Education</h3>
        {education.map((edu, index) => (
          <div key={index} className="edu-entry">
            <h4>{edu.degree}</h4>
            <p className="institution-info">
              {edu.institution} • {edu.years}
            </p>
          </div>
        ))}
      </div>
        <div className="education-container">
            <h3>Organization</h3>
            {organizations.map((org, index) => (
            <div key={index} className="edu-entry">
                <h4>{org.role}</h4>
                <p className="institution-info">
                {org.organization} • {org.years}
                </p>
            <ul className="job-description-list">
              {org.description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Resume;
