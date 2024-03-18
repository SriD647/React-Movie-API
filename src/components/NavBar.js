import SearchForm from "./SearchForm";
import { useState, useEffect } from "react";
import Logo from "./Logo";
import { FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

export default function NavBar({ getMovies }) {
    const [formData, setFormData] = useState({
        searchTerm: ""
    });

    const [showMenu, setShowMenu] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const reloadPage = () => {
        window.location.reload();
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        getMovies(formData.searchTerm);
    };

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    const inputWidth = windowWidth <= 400 ? '90vw' : '20vw';

    return (
        <div className="navbar">
            <Logo className="logo" onClick={reloadPage} />
            {windowWidth > 1050 ? (
                <ul className="list">
                    <li onClick={reloadPage}>Home</li>
                    <li>New</li>
                    <li>Genre</li>
                    <li>Country</li>
                    <li>Promotions</li>
                    <li>Android/Mac</li>
                    <li id="last">Top IMDB</li>
                </ul>
            ) : (
                <GiHamburgerMenu className="hamburger-menu" onClick={toggleMenu} />
            )}
            <form
                className="form"
                onSubmit={handleSubmit}
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                }}
            >
                <div className="search-container">
                    <input
                        name="searchTerm"
                        className="input"
                        id="input"
                        type="text"
                        placeholder=" Search for film/series"
                        onChange={handleChange}
                        value={formData.searchTerm}
                        style={{ marginRight: "0.5vw", width: inputWidth, height: "2.5vh" }}
                    />
                    <button type="submit" className="search-icon">
                        <FaSearch />
                    </button>
                </div>
            </form>
            {showMenu && windowWidth <= 1050 && (
                <ul className="listTwo">
                    <li onClick={reloadPage}>Home</li>
                    <li>New</li>
                    <li>Genre</li>
                    <li>Country</li>
                    <li>Promotions</li>
                    <li>Android/Mac</li>
                    <li id="last">Top IMDB</li>
                </ul>
            )}
        </div>
    );
}
