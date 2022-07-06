import '../stylesheets/header.css'

const Header = () =>{
    return(
    <header className="header-container">
        <div className='header-grid'>
            <div className='logo-container'>
                <img src='../img/logo.png' className='logo'/>
            </div>
            <div className='settings-container'>
                <div className='settings'></div>
            </div>
            
        </div>
    </header>
)}

export default Header;