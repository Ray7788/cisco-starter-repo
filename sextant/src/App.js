// import logo from './logo.svg';
import './App.css';
import Banner from 'react-js-banner';

import Exhibit from './Exhibit';
import AddressDisplay from './AddressDisplay';

function App() {
  return (
    <div className="App">
      <Banner 
        title={"CISCO Sextant 2022"} 
        
      />
      
      {/* IPv4 */}
      <Exhibit name="User's IPv4 Address">
          <AddressDisplay url='https://api.ipify.org?format=json' />
      </Exhibit>

      {/* IPv6 */}
      <Exhibit name="User's IPv6 Address">
          <AddressDisplay url='https://api64.ipify.org?format=json' />
      </Exhibit>

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
