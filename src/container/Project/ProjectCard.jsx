import "./ProjectCard.scss";
import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { BiLinkExternal  } from "react-icons/bi";
import { DiJavascript1 } from "react-icons/di";
import { BsGithub } from "react-icons/bs";
import {BiLogoTypescript} from 'react-icons/bi'
import { BsFiletypeScss } from "react-icons/bs";
import {TbBrandNextjs,TbBrandTailwind} from 'react-icons/tb'
import ProjectImg1 from "../../assets/images/project/website app.png";
import ProjectImg2 from "../../assets/images/project/shusie web.jpg";
import ProjectImg3 from "../../assets/images/project/648072ef9ae5eb350d6ec46b.jpg";
import ProjectImg4 from "../../assets/images/project/movieflix.jpg";
import ProjectImg5 from "../../assets/images/project/movie.jpg";
import ProjectImg6 from "../../assets/images/project/prakash portfolio.png";
import ProjectImg7 from "../../assets/images/project/nextmeta.jpg";
import ProjectImg8 from "../../assets/images/project/tech blog.jpg";
import ProjectImg9 from "../../assets/images/project/helpscout.jpg"
import projectImg10 from '../../assets/images/project/nike-project.jpg';


const ProjectCard = () => {
  const cardData = [
    {
      id: 1,
      title: "nike website",
      description:
        "I recreated the nike website using Next.js, TypeScript, SCSS, and Tailwind CSS as a practice project for web development.",
      poster: projectImg10,

      tech1: "typescript",
      tech2:'tailwindCss',
      tech3: "nextjs ",
      webLink: "https://shoes-nike.vercel.app/",
      gitLink: "https://github.com/PrakashCodeLab/shoes-nike.git",
      icon1: <BiLogoTypescript className="icon" />,
      icon2: <TbBrandTailwind className="icon" />,
      

      icon3: <TbBrandNextjs className="icon" />,
    },
    {
      id: 2,
      title: "Help scout",
      description:
        "I recreated the Help Scout website using Next.js, TypeScript, SCSS, and Tailwind CSS as a practice project for web development.",
      poster: ProjectImg9,

      tech1: "scss",
      tech2:'tailwindCss',
      tech3: "nextjs ",
      webLink: "https://help-scout.vercel.app/",
      gitLink: "https://github.com/PrakashCodeLab/help-scout.git",
      icon1: <BsFiletypeScss className="icon" />,
      icon2: <TbBrandTailwind className="icon" />,
      

      icon3: <TbBrandNextjs className="icon" />,
    },
    {
      id: 3,
      title: "my portfolio",
      description:
        "This project showcases my skills in developing responsive and visually appealing web applications using SCSS and React.",
      poster: ProjectImg6,

      tech1: "scss",
      tech2: "react",
      webLink: "https://prakash-portfolio-delta.vercel.app/",
      gitLink: "https://github.com/PrakashCodeLab/Prakash-Portfolio-.git",
      icon1: <BsFiletypeScss className="icon" />,

      icon2: <FaReact className="icon" />,
    },
    {
      id: 4,
      title: "MovieFlix",
      description:
        "Create a seamless and captivating movie search website, MovieFlix, using Next.js and Tailwind CSS.  movie collection with a search bar powered by the OMDB API  ",
      poster: ProjectImg4,
      tech1:'tailwindCss',
      tech2: "nextjs ",
      webLink: "https://movieflix-theta-ruddy.vercel.app/",
      gitLink:
        "https://github.com/PrakashCodeLab/movieflix.git",
      
       icon1: <TbBrandTailwind className="icon" />,
       icon2: <TbBrandNextjs className="icon" />,
    },
    {
      id: 5,
      title: "Sushi Restaurant",
      description:
        "Create a visually stunning and user-friendly website using React, showcasing the menu, services, and a contemporary sushi  japanese restaurant feel the taste",
      poster: ProjectImg2,
      tech1: "scss",
      tech2: "react",
      webLink: "https://sushiman-website-seven.vercel.app/",
      gitLink: "https://github.com/PrakashCodeLab/sushiman-website-.git",
      icon1: <BsFiletypeScss className="icon" />,
      icon2: <FaReact className="icon" />,
    },
    {
      id: 6,
      title: "tech blog",
      description:
        "Tech blog! Built with Next.js , I utilized the efficiency of Sass and Tailwind CSS to bring you concise, cutting-edge content in a sleek and responsive design.",
      poster: ProjectImg8,

      tech1: "scss",
      tech2:'tailwindCss',
      tech3: "nextjs ",
      webLink: "https://tech-nextjs-website.vercel.app/",
      gitLink: "https://github.com/PrakashCodeLab/tech-nextjs-website.git",
      icon1: <BsFiletypeScss className="icon" />,
      icon2: <TbBrandTailwind className="icon" />,
      

      icon3: <TbBrandNextjs className="icon" />,
    },
   
    {
      id: 7,
      title: "Metaverse nextjs ",
      description:
        "Metaverse UI, Designed with Next.js and enhanced by the versatility of Sass and the Tailwind CSS, this project serves as a perfect playground for  Next.js skills ",
      poster: ProjectImg7,

      tech1: "scss",
      tech2: "Tailwindcss",
      tech3:"Next.js",
      webLink: "https://meta-nextjs-website-i6tejh6pr-prakashcodelab.vercel.app/",
      gitLink: "https://github.com/PrakashCodeLab/meta-nextjs-website.git",
      icon1: <BsFiletypeScss className="icon" />,

      icon2: <TbBrandNextjs className="icon" />,
    },
   
    {
      id: 8,
      title: "GPT3 Chat UI",
      description:
        " Develop a responsive website using React to provide users with an interactive and user-friendly interface for engaging in AI-driven conversations powered by GPT-3.",
      poster: ProjectImg1,

      tech1: "scss",
      tech2: "react js",
      webLink: "https://chat-gpt3-website-react.vercel.app/",
      gitLink: "https://github.com/PrakashCodeLab/chat-gpt3-website-react.git",
      icon1: <BsFiletypeScss className="icon icon-scss" />,
      icon2: <FaReact className="icon icon--react" />,
    },
   
    {
      id: 9,
      title: "Promising Startup",
      description:
        " Develop a captivating and responsive landing page using HTML, CSS, and JavaScript of the startup company, and driving conversions.",
      poster: ProjectImg3,
      tech1: "html5",
      tech2: "css3",
      tech3: "javascript",
      webLink: "https://startup-landing-page-iota.vercel.app/",
      gitLink: "https://github.com/PrakashCodeLab/Startup-landing-page-.git",
      icon1: <FaHtml5 className="icon" />,
      icon2: <FaCss3Alt className="icon" />,
      icon3: <DiJavascript1 className="icon" />,
    },
   
    {
      id: 10,
      title: "CineTop100",
      description:
        " Develop a feature-rich movie application  for exploring  cinematic gems ,Rapid API to fetch movie data, providing users with comprehensive details.",
      poster: ProjectImg5,
      tech1: "html5",
      tech2: "css3",
      tech3: "javascript",
      webLink: "https://movie-website-omega.vercel.app/",
      gitLink: "https://github.com/PrakashCodeLab/movie-website.git",
      icon1: <FaHtml5 className="icon" />,
      icon2: <FaCss3Alt className="icon" />,
      icon3: <DiJavascript1 className="icon" />,
    },
   
  ];

  return (
    <div className="project__wrapper__section">
      {cardData.map((data) => (
        <article
          data-aos="fade-up"
          className="project__card__body"
          key={data.id}
        >
          <div className="project__img--container">
            <img
              data-aos="slide-up"
              data-aos-delay="500"
              src={data.poster}
              alt=""
              className="project__card--image"
            />
          </div>
          <div className="project__icon--section">
            {data.icon1}
            {data.icon2}
            {data.icon3 ? data.icon3 : ""}
          </div>

          <div className="project__descrption--section">
            <h4 className="project__desc--heading">{data.title}</h4>
            <p className="project__desc--lead">{data.description}</p>
          </div>

          <div className="project__tech--section">
            <h4 className="project__stack--lead">stack</h4>
            <div className="project__tech--used">
              <h5 className="tech--lead">{data.tech1}</h5>
              <h5 className="tech--lead">{data.tech2}</h5>
              {data.tech3 ? <h5 className="tech--lead">{data.tech3}</h5> : null}
            </div>
          </div>

          <div className="project__btn__section">
            <a href={data.webLink}  target="blank" className="btn btn__visit">
              visit <BiLinkExternal className="icon icon--link" />
            </a>
            <a href={data.gitLink}  target="blank" className="btn btn__code">
              code <BsGithub className="icon icon--code" />
            </a>
          </div>
        </article>
      ))}
    </div>
  );
};

export default ProjectCard;
