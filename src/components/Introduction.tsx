import { useTranslation } from 'react-i18next';
import Avatar from '../assets/images/avatar.svg';
import githubImg from '../assets/images/github.svg';
import linkedinImg from '../assets/images/linkedin.svg';
import '../styles/Introduction.css';
const Introduction = () => {
    const { t } = useTranslation();
 
    return (
        <>
        <div className="introduction" id="Introduction">
        
            <section className="row-section">
               <div className="text-content">
                <h1 className="greeting" id='animated-text'>{t('hello')}</h1> 
                <h1 className="greeting" id='animated-text'>{t('nameIs')}</h1>
                    <h2 className="name" id='animate-me'>Wilma</h2>
                </div>
            <div className='image-content'>
            <div className="profile-pic">
                <img src={Avatar} alt="Wilma" />
            </div>
            <div className="speech-bubble">
                <div className="social-link">
                <a href="https://github.com/wilmaniklasson" target="_blank" rel="noopener noreferrer">
                    <img src={githubImg} alt="github knapp" id="github" />
                </a>
                <a href="https://www.linkedin.com/in/wilma-niklasson-5b3518192/" target="_blank" rel="noopener noreferrer">
                    <img src={linkedinImg} alt="LinkedIn knapp" id="linkedin" />
                </a>
            </div>
            </div>

            </div>
            
                </section>
                <section className="description-section">
                    <p className="description">{t('pitch')}</p> 
                </section>
        </div>
        
        </>
    );
    }  
    
export default Introduction;

