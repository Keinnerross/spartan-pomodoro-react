import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import '../stylesheets/pomodoroApp.css'

const PomodoroApp = () =>{
    return(
    <div className="pomodoro-app-container"> 
        <CircularProgressbar value={60} text={`${60}%`} styles={buildStyles({
            rotation: 0.25,
            strokeLinecap: 'butt',
            textColor: '#ff0',
            pathColor: '#ff0000',
            tailColor: '#00ff'
        })} />
    </div>
)}

//this is the properties of 'buildStyles' for 'CircularProgresbar, imported above

export default PomodoroApp;