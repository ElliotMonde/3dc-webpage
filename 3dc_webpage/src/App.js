import './App.css';
import Landing from './Components/Main/Landing.jsx';
import SwipeableTextMobileStepper from './Components/Main/Events_section';

const appStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
}
const carouselStyle = {
  display: 'block'
}

function App() {
  return (
    <div className="App" style={appStyle}>
        <Landing className="mainContentContainer" />
        <SwipeableTextMobileStepper style={carouselStyle}/>
    </div>
  );
}

export default App;
