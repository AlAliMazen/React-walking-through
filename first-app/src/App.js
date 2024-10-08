import logo from './logo.svg';
import './App.css';
import FunctionalGreeting from './components/FunctionalGreeting';
import FunctionalGreetingWithProps from './components/FunctionalGreetingsWithProps';
import StatefulGreeting from './components/StatefulGreeting';
import EventsFunctional from './components/EventsFunctional';
import EventsClass from './components/EventsClass';
import EventBinding from './components/EventBinding';
import ConditionalRenderingClass from './components/ConditionalRenderingClass';
import ConditionalRenderingFunction from './components/ConditionalRenderingFunction';
import NestingComponent from './components/NestingComponent';
import MehtodsAsPropsChild from './components/MehtodsAsPropsChild';
import MethodsAsPropsParent from './components/MethodsAsPropsParent';
import RenderingLists from './components/RenderingLists';
import LifeCylesCDM from './components/LifeCylesCDM';
import LifeCylesCDU from './components/LifeCylesCDU';
import LifeCyclesCWU from './components/LifeCyclesCWU';
import ControlledForm from './components/ControlledForm';
import UncontrolledForm from './components/UncontrolledForm';
import SearchBar from './components/SearchBar';



function App() {
  return (
    <div className="App">
      <FunctionalGreeting/>
      <FunctionalGreetingWithProps greeting="nice to meet you" name="Mike" age="32"/>
      <StatefulGreeting greeting="nice to see you" name="Mazen"/>
      <EventsFunctional/>
      <EventsClass/>
      <EventBinding/>
      <h1>Conditonal Rendering </h1>
      <ConditionalRenderingClass/>
      <ConditionalRenderingFunction loading="false"/>
      <NestingComponent/>
      <h1>Updating Parent from Child</h1>
      <MethodsAsPropsParent/>
      <h1>Rendering List of Items</h1>
      <RenderingLists/>
      <h1>Component Life Cycle</h1>
      <LifeCylesCDM/>
      <hr/>
      <h1>Component DID Update</h1>
      <LifeCylesCDU/>
      <hr/>
      <LifeCyclesCWU/>
      <hr/>
      <h1>Controlled Form</h1>
      <ControlledForm/>
      <hr/>
      <h1>Uncontrolled Form</h1>
      <UncontrolledForm/>
      <hr/>
      <h1>Filter search bar</h1>
      <SearchBar/>

    </div>
  );
}

export default App;
