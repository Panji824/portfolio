import React from 'react';

const certificationData = [
  {
    id: 1,
    title: 'QA Test Activity',
    provider: 'MySkill',
    year: '2025',
    credentialId: 'MS-3/10/2025-8mJbWudZ0beqKIfYpGO',
    description: 'A comprehensive QA testing program covering bug advocacy, test planning, test case development, and defect management using qase.io platform.',
    skills: ['bug advocate', 'test planning', 'test scenario & test case', 'defect management with qase.io']
  },
  {
    id: 2,
    title: 'Basic QA Automation',
    provider: 'MySkill',
    year: '2025',
    credentialId: 'MS-3/10/2025-OMjs24kkFkBbdqgTecii',
    description: 'An introductory course on QA automation focusing on automated testing principles, tools, and frameworks to enhance testing efficiency and effectiveness.',
    skills: ['qa automation', 'automated testing principles', 'git collaboration', 'Java', 'Python', 'Javascript' ]
  },
  {
    id: 3,
    title: 'Mikrotik Certified Network Associate (MTCNA)',
    provider: 'Mikrotik',
    year: '2024',
    credentialId: '2411NA2527',
    description: 'Acquired foundational knowledge in configuring and managing Mikrotik routers and networks, including routing, firewall, and wireless technologies.',
    skills: ['Networking', 'Mikrotik', 'Routing', 'Firewall']
  },
  {
    id: 4,
    title: 'Tensorflow Developer Certificate',
    provider: 'TensorFlow',
    year: '2023',
    credentialId: '104105604',
    description: 'Demonstrated proficiency in building and deploying machine learning models using TensorFlow, covering topics such as neural networks, computer vision, and natural language processing.',
    skills: ['TensorFlow', 'Machine Learning', 'Neural Networks', 'Python']
  },
  {
    id: 5,
    title: 'Machine Learning Specialization',
    provider: 'DeepLearning.AI (Coursera)',
    year: '2023',
    credentialId: 'K7J4MRNGAUWA',
    description: 'Completed a comprehensive program covering supervised learning, unsupervised learning, and best practices in machine learning model development using Python.',
    skills: ['Machine Learning', 'Python', 'Model Development', 'Data Analysis']
  },
    {
    id: 6,
    title: 'Introduction to Git and GitHub',
    provider: 'Coursera',
    year: '2023',
    credentialId: 'PFYYAMEHT88D',
    description: 'Completed a course on version control using Git and GitHub, learning essential skills for collaborative software development and code management.',
    skills: ['Git', 'GitHub', 'Version Control', 'Collaboration']
  }


];
// ------------------------------------

const Certifications = () => {
  return (
    <section className="certifications-section">
      <h2>Certificates</h2>
      <p>A list of professional certifications and specialization programs I have successfully completed to enhance my expertise.</p>

      <div className="certifications-grid">
        {certificationData.map((cert) => (
          <div key={cert.id} className="cert-card">
            
            {/* Bagian Icon/Gambar Sertifikat */}
            <div className="cert-icon">
              <i className="fas fa-certificate fa-3x"></i>
            </div>

            <div className="cert-details">
              <h3 className="cert-title">{cert.title}</h3>
              <p className="cert-provider">{cert.provider} • {cert.year}</p>
              
              {/* Credential ID */}
              <p className="cert-credential">
                <span className="label">ID:</span> {cert.credentialId}
              </p>

              {/* Deskripsi */}
              <p className="cert-description">{cert.description}</p>
              
              {/* Tag Skill yang Dipelajari */}
              <div className="cert-skills-tags">
                {cert.skills.map((skill) => (
                  <span key={skill} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;