import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--green);

    &:hover,
    &:focus {
      outline: 0;
      transform: translate(-4px, -4px);

      &:after {
        transform: translate(8px, 8px);
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--green);
      top: 14px;
      left: 14px;
      z-index: -1;
    }
  }
`;

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const skills = ['Python','Java','R','JavaScript','ExpressJS','MongoDB','MySQL','NodeJS'];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
              Hello! I am Riya! 
            </p>
            <p>
            I have been intrigued by technology since early childhood and consider it an essential tool 
            for solving societal problems. Fueled by curiosity and a strong aptitude for problem-solving, 
            my interest in technology is driven by a desire to make a meaningful impact.
            </p>
            <p>
            I am currently pursuing a <b>Master’s</b> degree in <b>Computer Science</b> at <a href='https://www.columbia.edu/'>Columbia University</a>, 
            where my academic journey allows me to engage with advanced technological concepts. 
            I also contribute as a <b>Teaching Assistant</b> for the <b>Computing in Context</b> course and work as a <b>Research Assistant</b> in the <a href='https://www.cs.columbia.edu/speech/projects.cgi'>Spoken Language Processing</a> lab developing a chatbot aimed at assessing and enhancing users' English proficiency.
            </p>
    
            <p>
             Previously I worked as a software developer at <a href='https://www.jpmorgan.com/global'>JPMorgan Chase & Co.</a> in Hyderabad, India, where I 
              leverage technology to create impactful and robust applications. I hold a <b>Bachelor of Technology</b>  in <b>Computer Science and Engineering</b> from <a href='https://vit.ac.in/'>Vellore Institute of Technology, Vellore</a>. 
              My work revolves around <b>Natural Language Processing</b> and <b>Machine Learning</b>. 
              </p>
              <p>
              With extensive proficiency in Java, Python, React, SQL, and R, I bring a blend of technical skill and ingenuity to each project. Outside of my professional pursuits, I have a passion for dance and podcast production.
            </p>
          </div>
        </StyledText>
        <StyledPic>
          <div className="wrapper">
            <StaticImage
              className="img"
              src="../../images/me.png"
              width={500}
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Headshot"
            />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
