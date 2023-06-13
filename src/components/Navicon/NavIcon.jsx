import './NavIcon.scss';
import ImgLogo from '../../assets/images/logos/Color logo with background.png';

const NavIcon = () => {
  return (
    <div className="navbar__logo__section">
    <a href="/"><img className='navbar__logo' src={ImgLogo} alt="logo" /></a>
  </div> 
  );
}

export default  NavIcon;
