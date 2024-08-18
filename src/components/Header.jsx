import { useState } from 'react'
import '../App.css'
import main_img from '../assets/main_img.webp'
import { useSearchParams } from 'react-router-dom';

const Header = ({handleSearch}) => {

    const [searchTerm, setSearchTerm] = useState("");
    const [_, setSearchParams] = useSearchParams()

    const handleClick = () => {
        handleSearch(searchTerm);
        if(searchTerm){
            setSearchParams({
                search : searchTerm
            })
        }
        setSearchTerm("");
    }
    return (
        <header className="main_header">
            <div className="text-container">
                <h1 className="header-title">
                    Look for <span>Banger</span> Food
                </h1>
                <p className="header-description">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente harum veritatis enim deleniti at esse, praesentium incidunt est distinctio rem.
                </p>
                <div className="header-input-container">
                    <input type="text" placeholder='Find a recipe...'
                        onChange={(e) => setSearchTerm(e.target.value)}
                        value={searchTerm}
                    />
                    <button onClick={handleClick}>Search</button>
                </div>
            </div>
            <div>
                <img src={main_img} className='main_img'/>
            </div>
        </header>
    )
} 

export default Header