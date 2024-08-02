// ./src/App.js
import React, { useState } from 'react';
import './index.css';

const App = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="h-screen flex items-center justify-center bg-cover bg-center bg-[url('https://darksoul-git.github.io/Blurred%20Side%20Navigation%20bar/windows-11-gradient-background-bloom-light-backgrounds-5k.png')]">
      <div className={`transition-all duration-900 ${isOpen ? 'w-[250px]' : 'w-[60px]'} h-[650px] bg-white bg-opacity-60 rounded-2xl border border-white backdrop-blur-lg flex flex-col`}>
        <div className="flex flex-col items-center mt-4">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 rounded-full bg-white overflow-hidden">
              <img src="https://darksoul-git.github.io/Blurred%20Side%20Navigation%20bar/darksoul.jpg" alt="Profile Pic" className="w-full h-full object-cover" />
            </div>
            <div className={`flex flex-col ${isOpen ? 'block' : 'hidden'}`} id="pname">
              <span className="text-xs">Good Vibes✨</span>
              <p className="text-sm font-semibold">DarkSoul</p>
            </div>
          </div>
          <button onClick={toggle} className="w-8 h-8 rounded-full bg-gradient-to-r from-white to-transparent flex items-center justify-center mt-4 cursor-pointer">
            <img id="togglericon" width="10" height="10" src={`https://img.icons8.com/metro/26/${isOpen ? 'back' : 'forward'}.png`} alt="toggle" />
          </button>
        </div>
        <div className="mt-8 flex flex-col space-y-4">
          <p className="ml-4 text-sm">Menus</p>
          <div className="space-y-2">
            {[
              { src: "https://img.icons8.com/material/24/dashboard-layout.png", label: "Dashboard" },
              { src: "https://img.icons8.com/fluency-systems-filled/48/task.png", label: "My Task" },
              { src: "https://img.icons8.com/puffy-filled/32/calendar.png", label: "Calendar" },
              { src: "https://img.icons8.com/puffy-filled/32/new-post.png", label: "Mail" },
              { src: "https://img.icons8.com/ios-filled/50/replay.png", label: "Activity" }
            ].map(menu => (
              <div key={menu.label} className="flex items-center space-x-4 p-2 rounded-lg hover:bg-white hover:shadow-lg cursor-pointer">
                <img className="w-4 h-4" src={menu.src} alt={menu.label} />
                <p className={`text-sm ${isOpen ? 'block' : 'hidden'}`}>{menu.label}</p>
              </div>
            ))}
          </div>
          <p className="ml-4 text-sm">Service</p>
          <div className="space-y-2">
            {[
              { src: "https://img.icons8.com/pastel-glyph/64/laptop-metrics--v2.png", label: "SEO" },
              { src: "https://img.icons8.com/pastel-glyph/64/web--v1.png", label: "Web Design" },
              { src: "https://img.icons8.com/windows/32/huawei-logo.png", label: "Logo Design" }
            ].map(service => (
              <div key={service.label} className="flex items-center space-x-4 p-2 rounded-lg hover:bg-white hover:shadow-lg cursor-pointer">
                <img className="w-4 h-4" src={service.src} alt={service.label} />
                <p className={`text-sm ${isOpen ? 'block' : 'hidden'}`}>{service.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-auto mb-4 flex flex-col items-center space-y-2">
          <div className={`w-11/12 h-20 flex flex-col items-center justify-center bg-white rounded-lg shadow-lg ${isOpen ? 'block' : 'hidden'}`} id="createtask">
            <img id="taskicon" width="25" height="25" src="https://img.icons8.com/ios-filled/50/add--v1.png" alt="add" className="cursor-pointer" />
            <p id="task" className="text-xs">Create new task</p>
            <span id="link" className="text-[10px]">Or use <b>Invite</b> Link</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
