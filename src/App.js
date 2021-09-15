import React from 'react';
import './App.css';
import {Button} from 'react-bootstrap'
import { Entry } from './pages/entry/Entrypage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>https://youtu.be/yiO8qXQ4BIc?list=PLtPNAX49WUFN8yq2vEuAY6AhM5EJOXQQ0</p>
       {/* <h1>Hello CRM</h1>
       <Button>test</Button> */}

       <Entry />
       
      </header>
    </div>
  );
}

export default App;
