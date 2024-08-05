import logo from './logo.svg';
import './App.css';
import FunctionalGreeting from './components/FunctionalGreeting';
import FunctionalGreetingWithProps from './components/FunctionalGreetingsWithProps';
import StatefulGreeting from './components/StatefulGreeting';
import EventsFunctional from './components/EventsFunctional';
import EventsClass from './components/EventsClass';
import EventBinding from './components/EventBinding';



function App() {
  return (
    <div className="App">
      <FunctionalGreeting/>
      <FunctionalGreetingWithProps greeting="nice to meet you" name="Mike" age="32"/>
      <StatefulGreeting greeting="nice to see you" name="Mazen"/>
      <EventsFunctional/>
      <EventsClass/>
      <EventBinding/>

    </div>
  );
}

export default App;
