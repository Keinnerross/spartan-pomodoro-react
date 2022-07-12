import '../../stylesheets/playButton.css'
import { AiFillCaretRight } from "react-icons/ai";

const PlayButton = ()=>{
    return(
        <div className='play-button-container'>
        <AiFillCaretRight size={'40px'} className='play-button'/>
        </div>

)}

export default PlayButton;