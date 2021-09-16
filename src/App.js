import React from 'react';
import './App.css';
import { DefaultLayout } from './layout/DefaultLayout';
import { Dashboard } from './pages/dashboard/Dashboard.page';

function App() {
  return (
    <div className="App">
      {/* <p>https://youtu.be/yiO8qXQ4BIc?list=PLtPNAX49WUFN8yq2vEuAY6AhM5EJOXQQ0</p> */}
      {/* <Entry /> */}
      <DefaultLayout >
      {/* send page components */}
        <Dashboard/>
        
      </DefaultLayout>
    </div>
  );
}

export default App;
