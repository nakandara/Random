import React from 'react'
import Sidebar from '../global/Sidebar';
import Topbar from '../global/Topbar';
 const Dashboard = () => {
  return (
    <div>
      <Sidebar  className="app"/>
        <main className="content">
        <Topbar />
        </main>
    </div>
  )
}

export default Dashboard;