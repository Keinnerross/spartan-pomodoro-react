import '../stylesheets/header.css'
import { AiFillSetting } from 'react-icons/ai';

const Header = () =>{
    return(
    <header className="header-container">
        <div className='header-grid'>
            <div className='logo-container'>
                <div className="logo"></div>
            </div>
            <div className='settings-container'>
                <div className="button-settings-container">
                    <AiFillSetting/>
                    <span>Settings</span>
                </div>
            </div>
            
        </div>
    </header>
)}

export default Header;