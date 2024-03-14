import logo from '../assets/logo.png';

export default function Logo({onClick}) {
    return (

        <img onClick={onClick} className= "logo" src={logo} alt="Logo" />

    );
  }