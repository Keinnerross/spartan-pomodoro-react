import './App.css';
import Header from './Components/header';
import AddTask from './Components/addTask';
import PomodoroApp from './Components/pomodoroApp';
import ControlButton from './Components/controlButton';
import PlayButton from './Components/playButton';
import PomodoroCounter from './Components/pomodoroCounter';
import CompletedTask from './Components/completedTask';



function App() {
  return (
    <main>
    <Header/>
    <AddTask/>
    <PomodoroApp/>
    <PomodoroCounter/>
    <ControlButton/>
    <PlayButton/>
    <ControlButton/>
    <CompletedTask/>

    </main>
  );
}

export default App;
