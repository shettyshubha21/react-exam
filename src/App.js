import logo from './logo.svg';
import './App.css';
import Chat from './chat';
import Message from './message';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
function App() {
  return (
    <Router>
    <div className="App">
     <header className="header">
       <ul>
         <li>
           <Link to="/chat">Send Message</Link>
         </li>
         <li className="view">
           <Link to="/message">View message</Link>
         </li>
       </ul>
       <div>
         <Switch>
           <Route exact path="/chat" component={Chat} />
           <Route exact path="/message" component={Message} />
         </Switch>
       </div>
     </header>
    </div>
    </Router>
  );
}

export default App;

