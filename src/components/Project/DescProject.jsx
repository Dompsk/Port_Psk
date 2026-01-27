// src/components/Project/descProject.jsx
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../Navbar/Navbar'; // Import Navbar ของคุณ
import projectsData from './projectsData'; // path ไปยังไฟล์ data
import Footer from '../footer/Footer'; // Import Footer ของคุณ
import './DescProject.css'; // สร้างไฟล์ CSS สำหรับสไตล์ของหน้ารายละเอียด


const DescProject = () => {
  const { id } = useParams(); // รับ id จาก URL (เช่น /project/1)
  // แปลง id เป็นตัวเลขแล้วค้นหาโปรเจกต์
  const project = projectsData.find((p) => p.id === parseInt(id));

  // Scroll ไปบนสุดเสมอเมื่อเปิดหน้านี้
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <>
        <Navbar />
        <div style={{ padding: '150px 20px', textAlign: 'center', fontSize: '1.5rem' }}>
          Project not found.
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <div className="project-detail-container">
        
        {/* ส่วนเนื้อหาหลัก (Left) */}
        <div className="project-content-wrapper">
          <h1 className="detail-title">{project.title}</h1>
          
          <div className="detail-image">
            <img src={project.image} alt={project.title} />
          </div>

          <div className="detail-description">
            <p>{project.description}</p>
          </div>

          <div className="detail-actions">
            {project.demoLink && (
              <a href={project.demoLink} target="_blank" rel="noreferrer" className="action-btn">
                Demo
              </a>
            )}
            {project.githubLink && (
              <a href={project.githubLink} target="_blank" rel="noreferrer" className="action-btn">
                GitHub
              </a>
            )}
          </div>
        </div>

        {/* ส่วน Sidebar (Right) */}
        <div className="project-sidebar">
          
          {/* Box 1: Categories */}
          <div className="sidebar-box">
            <h3>CATEGORIES</h3>
            <div className="divider"></div>
            <ul>
              {project.categories ? (
                project.categories.map((cat, index) => <li key={index}>{cat}</li>)
              ) : (
                <li>{project.category}</li>
              )}
            </ul>
          </div>

          {/* Box 2: Languages & Tools */}
          <div className="sidebar-box">
            <h3>LANGUAGES & TOOLS</h3>
            <div className="divider"></div>
            <ul>
              {project.tools ? (
                 project.tools.map((tool, index) => <li key={index}>{tool}</li>)
              ) : (
                 <li>-</li>
              )}
            </ul>
          </div>

        </div>

      </div>

      <Footer />
    </>
  );
};

export default DescProject;