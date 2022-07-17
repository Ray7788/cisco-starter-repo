// import logo from './logo.svg';
import './App.css';

// Task2
import Banner from 'react-js-banner';

// Task3
import Exhibit from './Exhibit';
import AddressDisplay from './AddressDisplay';
// Task4
import PylonConnector from './PylonConnector';

function App() {
  return (
    <div className="App">
      <Banner 
        title={"CISCO Sextant 2022"} 
        // design a header banner
      />
      
      {/* IPv4 */}
      <Exhibit name="User's IPv4 Address">
          <AddressDisplay url='https://api.ipify.org?format=json' />
      </Exhibit>

      {/* IPv6 */}
      <Exhibit name="User's IPv6 Address">
          <AddressDisplay url='https://api64.ipify.org?format=json' />
      </Exhibit>

      {/* Websocket */}
      <Exhibit name="Pylon Packet Latency">
            <PylonConnector />
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
