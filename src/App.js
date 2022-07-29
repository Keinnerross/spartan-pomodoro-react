import './App.css';
import Header from './Components/header';
import PomodoroApp from './Components/Pomodoro/pomodoroApp';
import ControlButton from './Components/Pomodoro/controlButton';
import PlayButton from './Components/Pomodoro/playButton';
import PomodoroCounter from './Components/Pomodoro/pomodoroCounter';
import Setting from './Components/setting';
import TaskList from './Components/Tasks/taskList';
import { AiOutlineReload } from 'react-icons/ai';
import { FaSquare } from 'react-icons/fa';





function App() {
  return (
    <main>
    <Header/>
    {/*Start Pomodoro */}
    <PomodoroApp/>
    <PomodoroCounter/>
    <div className='pomodoro-button'>
      <ControlButton icon={ <AiOutlineReload size={'20px'}/> }/>
      <PlayButton />
      <ControlButton icon={<FaSquare size={'15px'}/>}/>
    </div>
    <TaskList/>
    <Setting></Setting>
    
    
    

    </main>
  );
}

export default App;
