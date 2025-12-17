import React from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './Home.css';
import foodyDoo from '../../assets/FoodyDoo.jpg';
import Profolio from '../../assets/Profolio.png';


const Home = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const name = location.state?.name || 'User';

  return (
    <div className="home-container">
      <Header />
      <main>
        <section className="welcome">
          <h2>{t('home.greeting', { name })}</h2>
        </section>

        <section className="personal-info">
          <h3>{t('home.personalInfo')}</h3>
          <p>Name: {name}</p>
          <p>Email: chivilkarkhulood@gmail.com</p>
          <p>Role: Full-Stack Developer</p>
        </section>

        <section className="projects">
  <h3>{t('home.projects')}</h3>

  {/* FoodyDoo Project */}
  <div className="project-card">
    <img className='img' src={foodyDoo} alt="FoodyDoo" />
    <div>
      <h4>FoodyDoo</h4>
      <p>
        FoodyDoo is a modern food delivery app connecting restaurants with customers efficiently.<br />
        It allows users to browse restaurant menus and place orders with just a few clicks.<br />
        Customers can track their orders in real-time from preparation to delivery.<br />
        Restaurant owners can manage orders, menus, and daily specials using a streamlined dashboard.<br />
        Secure payment integration ensures a smooth checkout experience.<br />
        Designed with responsive UI, it works perfectly on both web and mobile devices.<br />
        Built with React for frontend, Node.js and Express for backend, and MongoDB for database management.<br />
        Focused on clean design, fast performance, and excellent user experience.
      </p>
      <p className="project-catchline">
        "Bringing your favorite meals from restaurant to doorstep, fast and hassle-free!"
      </p>
    </div>
  </div>

  {/* Multilingual Portfolio Project */}
  <div className="project-card">
    <img className='img' src={Profolio} alt="Multilingual Website" />
    <div>
      <h4>Multilingual Website</h4>
      <p>
        A responsive React application demonstrating full multilingual support using i18next.<br />
        Users can automatically view content in their browser language.<br />
        Manual language switching is available for instant updates.<br />
        Includes sections for Personal Info, Projects, Skills, and Education.<br />
        Built with React, i18next, and modern CSS gradients for a professional look.<br />
        Fully responsive design ensures smooth experience on mobile and desktop.<br />
        Focused on clean UI, smooth transitions, and recruiter-friendly layout.
      </p>
      <p className="project-catchline">
        "Showcase your skills to the world – in any language you choose!"
      </p>
    </div>
  </div>
</section>


        <section className="skills">
          <h3>{t('home.skills')}</h3>
          <span className="skill-badge">React.js</span>
          <span className="skill-badge">JavaScript</span>
          <span className="skill-badge">CSS</span>
          <span className="skill-badge">HTML</span>
          <span className="skill-badge">Node.js</span>
          <span className="skill-badge">MongoDB</span>
          <span className="skill-badge">Express.js</span>
        </section>

        <section className="education">
          <h3>{t('home.education')}</h3>
          <p>BBA(CA) - Arihant College</p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
