import React from 'react';
import './App.css';
import { DefaultLayout } from './layout/DefaultLayout';
import { Dashboard } from './pages/dashboard/Dashboard.page';
import { AddTicket } from './pages/new-ticket/AddTicket.page';

function App() {
  return (
    <div className="App">
      {/* <p>https://youtu.be/yiO8qXQ4BIc?list=PLtPNAX49WUFN8yq2vEuAY6AhM5EJOXQQ0</p> */}
      {/* <Entry /> */}

      {/* send page components */}
      <DefaultLayout >
        {/* <Dashboard /> */}
        <AddTicket />
      </DefaultLayout>
    </div>
  );
}

export default App;
