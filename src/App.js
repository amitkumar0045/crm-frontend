import React from 'react';
import './App.css';
import { DefaultLayout } from './layout/DefaultLayout';
import { Dashboard } from './pages/dashboard/Dashboard.page';
import { AddTicket } from './pages/new-ticket/AddTicket.page';
import { TicketLists } from './pages/ticket-listing/TicketLists.page';
import { Ticket } from './pages/ticket/Ticket.page';

function App() {
  return (
    <div className="App">
      {/* <p>https://youtu.be/yiO8qXQ4BIc?list=PLtPNAX49WUFN8yq2vEuAY6AhM5EJOXQQ0</p> */}
      {/* <Entry /> */}

      {/* send page components */}
      <DefaultLayout >
        {/* <Dashboard /> */}
        {/* <AddTicket /> */}
        {/* <TicketLists /> */}
        <Ticket />
      </DefaultLayout>
    </div>
  );
}

export default App;
