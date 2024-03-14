import SearchForm from "./SearchForm";
import { useState } from "react";
import Logo from "./Logo";

export default function NavBar({ getMovies }) {
  
    const reloadPage = () => {
        window.location.reload();
    };
    
    const [formData, setFormData] = useState({
        searchTerm: ""
      });
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        console.log(formData);
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        getMovies(formData.searchTerm);
      };

    return (

    <div class="navbar">
        <Logo className="logo" onClick={reloadPage} />
          <ul className="list">
            <li onClick={reloadPage}>Home</li>
            <li>New</li>
            <li>Genre</li>
            <li>Country</li>
            <li>Top IMDB</li>
        </ul>    

      <form
      className="form"
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <input
        name="searchTerm"
        type="text"        
        placeholder=" Search for film/series" 
        onChange={handleChange}
        value={formData.searchTerm}
        style={{ marginRight: "10px", width:"250px" }}
      />
      <input className="button" type="submit" />
    </form>
    </div>
    )
}