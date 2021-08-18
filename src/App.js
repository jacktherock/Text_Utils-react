import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        {/* <Navbar title="TextUtils" aboutText="About"/> Validating Props */}
        <Navbar title="TextUtils" />
        {/* <Navbar /> Default Props */}
        <Switch>
          <Route exact path="/" render={() => {
            return (
              <div className="my-2">
                <TextForm heading="Enter the text to analyze" />
              </div>)
          }}>
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
