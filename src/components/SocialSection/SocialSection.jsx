import Line from "../../components/ProjectCard/Line";
import "./SocialSection.scss";
import resumeDoc from "../../assets/Doc/prakash resume.pdf";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterSquare,
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineMail,
  AiOutlineDownload,
} from "react-icons/ai";
const SocialSection = () => {
  const socialData = [
    {
      id: 1,
      socialName: "Linkedin",
      socialIcon: <AiFillLinkedin />,
      socialLink: "https://www.linkedin.com/in/prakash-m-21543a249",
    },
    {
      id: 2,
      socialName: "github",
      socialIcon: <AiFillGithub />,
      socialLink: "https://github.com/PrakashCodeLab ",
    },
    {
      id: 3,
      socialName: "twitter",
      socialIcon: <AiFillTwitterSquare />,
      socialLink: "https://twitter.com/Prakash77481399/ ",
    },

    {
      id: 4,
      socialName: "resume",
      socialIcon: <AiOutlineDownload />,
      socialLink: resumeDoc,
    },
    {
      id: 5,
      socialName: "facebook",
      socialIcon: <AiFillFacebook />,
      socialLink: "https://www.facebook.com/profile.php?id=100009177674130",
    },
    {
      id: 6,
      socialName: "instagram",
      socialIcon: <AiFillInstagram />,
      socialLink: " https://www.instagram.com/prakashtechweb/",
    },
  ];

  const dataList = socialData.map((data) => {
    return (
      <div
        key={data.id}
        id="contactUs"
        data-aos={data.id % 2 === 0 ? "fade-right" : "fade-left"}
        className="social__media--btn"
      >
        <a
          target="blank"
          className="btn--social btn-block"
          href={data.socialLink}
        >
          <span className="icon--btn">{data.socialIcon}</span>
          <span className="social--title"> {data.socialName}</span>
        </a>
      </div>
    );
  });

  return (
    <section className="social__connect--section">
      <div className="social__connect--wrapper">
        <h4 data-aos="fade-right">
          <Line heading={"let's connect "} />
        </h4>
        <h6 data-aos="fade-right">my social</h6>
        <div className="social__body--section">{dataList}</div>
      </div>
    </section>
  );
};

export default SocialSection;
