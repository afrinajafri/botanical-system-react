import logo from './logo.svg';
import './App.css';
import ExpertForm from './components/ExpertForm'
import 'bootstrap/dist/css/bootstrap.css';
import Background from './images/bg.jpg';

function App() {
  return ( 
    <div className="bg-image" style={{paddingTop:30,backgroundImage: `url(${Background})`, backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',height: "110vh"}}> 
      <ExpertForm></ExpertForm> 
    </div> 
  );
}

export default App;
