import './ProjectCard.scss';
import {FaHtml5,FaCss3Alt,FaReact} from 'react-icons/fa';
import {BiLinkExternal } from 'react-icons/bi';
import {DiJavascript1} from 'react-icons/di';
import {BsGithub} from 'react-icons/bs';
import {BsFiletypeScss} from 'react-icons/bs';
import  ProjectImg1 from '../../assets/images/project/website app.png'
import  ProjectImg2 from '../../assets/images/project/shusie web.jpg'
import  ProjectImg3 from '../../assets/images/project/648072ef9ae5eb350d6ec46b.jpg'
import  ProjectImg4 from '../../assets/images/project/movie app.jpg'
import  ProjectImg5 from '../../assets/images/project/movie.jpg'


const ProjectCard = () => {

     const cardData = [
       {
         id: 1,
         title: "GPT3 Chat UI",
         description:
           " Develop a responsive website using React to provide users with an interactive and user-friendly interface for engaging in AI-driven conversations powered by GPT-3.",
         poster: ProjectImg1,
        
         tech1: "scss",
         tech2: "react js",  
         webLink: "https://chat-gpt3-website-react.vercel.app/",
         gitLink: "https://github.com/PrakashCodeLab/chat-gpt3-website-react.git",
         icon1: <BsFiletypeScss className='icon icon-scss'/>,
         icon2: <FaReact className='icon icon--react'/>,
       },
       {
         id: 2,
         title: "Sushi Restaurant",
         description:
           "Create a visually stunning and user-friendly website using React, showcasing the menu, services, and a contemporary sushi  japanese restaurant feel the taste",
         poster:ProjectImg2,
         tech1: "scss",
         tech2: "react",
         webLink: "https://sushiman-website-seven.vercel.app/",
         gitLink: "https://github.com/PrakashCodeLab/sushiman-website-.git",
         icon1: <BsFiletypeScss className='icon'/>,
         icon2: <FaReact className='icon'/>,
       },
       {
         id: 3,
         title: "Promising Startup",
         description:
           " Develop a captivating and responsive landing page using HTML, CSS, and JavaScript of the startup company, and driving conversions.",
         poster: ProjectImg3,
         tech1: "html5",
         tech2: "css3",
         tech3: "javascript",
         webLink: "https://startup-landing-page-iota.vercel.app/",
         gitLink: "https://github.com/PrakashCodeLab/Startup-landing-page-.git",
         icon1: <FaHtml5 className='icon'/>,
         icon2: <FaCss3Alt className='icon'/>,
         icon3: <DiJavascript1 className='icon'/>,
       },
       {
         id: 4,
         title: "CineSearch",
         description:
           "Build a sleek and intuitive movie search website using React,  OMDB API to fetch movie data , search results and user-friendly manner.",
         poster: ProjectImg4,
         tech1: "scss",
         tech2: "react js",
         webLink: "https://react-movie-search-website.vercel.app/",
         gitLink: "https://github.com/PrakashCodeLab/React-movie-search-website.git",
         icon1: <BsFiletypeScss className='icon'/>,
         icon2: <FaReact className='icon'/>,
       },
       {
         id: 5,
         title: "CineTop100",
         description:
           " Develop a feature-rich movie application  for exploring  cinematic gems ,Rapid API to fetch movie data, providing users with comprehensive details.",
         poster: ProjectImg5,
         tech1: "html5",
         tech2: "css3",
         tech3: "javascript",
         webLink: "https://movie-website-omega.vercel.app/",
         gitLink: "https://github.com/PrakashCodeLab/movie-website.git",
         icon1: <FaHtml5 className='icon'/>,
         icon2: <FaCss3Alt className='icon'/>,
         icon3: <DiJavascript1 className='icon'/>,

       },
     ];


    return ( 

      <div className="project__wrapper__section">
      {cardData.map((data) => (
        <article data-aos='fade-up' className="project__card__body" key={data.id}>
          <div className="project__img--container">
            <img data-aos='slide-up' data-aos-delay='500' src={data.poster} alt="" className="project__card--image" />
          </div>
          <div className="project__icon--section">
            {data.icon1}
            {data.icon2}
            {data.icon3?data.icon3:""}
          </div>

          <div  className="project__descrption--section">
            <h4 className="project__desc--heading">{data.title}</h4>
            <p className="project__desc--lead">{data.description}</p>
          </div>

          <div  className="project__tech--section">
            <h4 className="project__stack--lead">stack</h4>
            <div  className="project__tech--used">
              <h5 className="tech--lead">{data.tech1}</h5>
              <h5 className="tech--lead">{data.tech2}</h5>
              {data.tech3? (<h5 className="tech--lead">{data.tech3}</h5>): null}
              
            </div>
          </div>

          <div  className="project__btn__section">
            <a href={data.webLink} className="btn btn__visit">
              visit <BiLinkExternal className="icon icon--link" />
            </a>
            <a href={data.gitLink} className="btn btn__code">
              code <BsGithub className="icon icon--code" />
            </a>
          </div>
        </article>
      ))}
    </div>
  );
}


export default ProjectCard;


