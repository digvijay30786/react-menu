import Common from './components/common.js';
import Contact from './components/contact.js';
import Download from './components/download.js';
import Help from './components/help.js';
import Join from './components/joinus.js';
import Search from './components/search.js';
import Login from './components/login.js';
import Setting from './components/setting.js';
import Home from './components/home.js';
import './App.css'
function App() {
  return (
    <div className="App">
      <h1>Using Common Components</h1>
      <Common />
      <h1>Using Separate Components</h1>
      <div id="common">
        <Join />
        <Setting />
        <Login />
        <Contact />
        <Search />
        <Help />
        <Home />
        <Download />
      </div>
      
      
    </div>
  );
}

export default App;
