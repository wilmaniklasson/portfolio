import '../styles/About.css';
import html from '../assets/html.svg';
import css from '../assets/css.svg';
import js from '../assets/js.svg';
import git from '../assets/git.svg';
import github2 from '../assets/github2.svg';
import figma from '../assets/figma.svg';
import typscript from '../assets/typescript.svg';
import react from '../assets/react.svg';
import nextjs from '../assets/nextjs.svg';
import mongodb from '../assets/mongodb.svg';
import jest from '../assets/jest.svg';
import cypress from '../assets/cypress.svg';
import azuredevops from '../assets/azure-devops.svg';
import vitejs from '../assets/vite.js.svg';
import nodejs from '../assets/node-js.svg';
import { useTranslation } from 'react-i18next';
import InfiniteScrollSection from './ScrollingSection';

const skills = [
  { src: html, alt: 'HTML Icon', name: 'HTML' },
  { src: css, alt: 'CSS Icon', name: 'CSS' },
  { src: js, alt: 'JavaScript Icon', name: 'JavaScript' },
  { src: git, alt: 'Git Icon', name: 'Git' },
  { src: github2, alt: 'GitHub Icon', name: 'GitHub' },
  { src: figma, alt: 'Figma Icon', name: 'Figma' },
  { src: typscript, alt: 'TypeScript Icon', name: 'TypeScript' },
  { src: react, alt: 'React Icon', name: 'React' },
  { src: nextjs, alt: 'Next.js Icon', name: 'Next.js' },
  { src: mongodb, alt: 'MongoDB Icon', name: 'MongoDB' },
  { src: jest, alt: 'Jest Icon', name: 'Jest' },
  { src: cypress, alt: 'Cypress Icon', name: 'Cypress' },
  { src: azuredevops, alt: 'Azure DevOps Icon', name: 'Azure DevOps' },
  { src: vitejs, alt: 'Vite.js Icon', name: 'Vite.js' },
  { src: nodejs, alt: 'Node.js Icon', name: 'Node.js' }
];

const About = () => {
        const { t } = useTranslation();

    return (
        <>
            <section className='aboute-me'>
                <h1> {t('hoAmI')}</h1>
                <p className='aboute-me-text'>
                    {t('hoAmIText')}
                </p>
            </section>
            <div className="scrolling-section">
      <InfiniteScrollSection 
        items={skills.map(skill => (
          <div className="skill-item" key={skill.name}>
            <img src={skill.src} alt={skill.alt} className="skill-images" />
            <p className="skill-name"> {skill.name} </p>
          </div>
        ))} 
      />
    </div>
            
          
        </>
    );
};

export default About;
