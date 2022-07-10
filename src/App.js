import './App.css';
import Header from './Components/header';
import AddTask from './Components/addTask';
import PomodoroApp from './Components/pomodoroApp';
import ControlButton from './Components/controlButton';
import PlayButton from './Components/playButton';
import PomodoroCounter from './Components/pomodoroCounter';
import CompletedTask from './Components/completedTask';
import { AiOutlineReload } from 'react-icons/ai';
import { FaSquare } from 'react-icons/fa';




function App() {
  return (
    <main>
    <Header/>
    <AddTask/>
    <PomodoroApp/>
    <PomodoroCounter/>
    <div className='pomodoro-button'>
      <ControlButton icon={ <AiOutlineReload size={'20px'}/> }/>
      <PlayButton />
      <ControlButton icon={<FaSquare size={'15px'}/>}/>
    </div>
    <CompletedTask/>

    </main>
  );
}

export default App;
