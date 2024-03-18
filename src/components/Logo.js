import logo from '../assets/logo2.png';

export default function Logo({onClick}) {
    return (

        <img onClick={onClick} className= "logo" src={logo} alt="Logo" />

    );
  }