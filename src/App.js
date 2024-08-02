import React, { useState } from "react";
import './App.css';

const App = () => {
  const [isOpen, setIsOpen] = useState(true);

  const menulist = [
    { src: "https://img.icons8.com/material/24/dashboard-layout.png", label: "Dashboard" },
    { src: "https://img.icons8.com/fluency-systems-filled/48/task.png", label: "My Task" },
    { src: "https://img.icons8.com/puffy-filled/32/calendar.png", label: "Calendar" },
    { src: "https://img.icons8.com/puffy-filled/32/new-post.png", label: "Mail" },
    { src: "https://img.icons8.com/ios-filled/50/replay.png", label: "Activity" }
  ];

  const servicelist = [
    { src: "https://img.icons8.com/pastel-glyph/64/laptop-metrics--v2.png", label: "SEO" },
    { src: "https://img.icons8.com/pastel-glyph/64/web--v1.png", label: "Web Design" },
    { src: "https://img.icons8.com/windows/32/huawei-logo.png", label: "Logo Design" }
  ];
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(https://darksoul-git.github.io/Blurred%20Side%20Navigation%20bar/windows-11-gradient-background-bloom-light-backgrounds-5k.png)' }}>
      <div className={`transition-all duration-900 ${isOpen ? 'w-[250px]' : 'w-[60px]'} h-[650px] bg-white bg-opacity-60 rounded-2xl border border-white backdrop-blur-lg flex flex-col`}>
        <div className="flex h-[20%] w-full m-auto">
          <div className="flex items-center w-[70%] space-x-4 ml-3 -mr-2">
            <div className="w-10 h-10 rounded-full bg-white overflow-hidden">
              <img src="https://darksoul-git.github.io/Blurred%20Side%20Navigation%20bar/darksoul.jpg" alt="Profile Pic" className="w-full h-full object-cover" />
            </div>
            <div className={`flex flex-col ${isOpen ? 'block' : 'hidden'}`} id="pname">
              <span className="text-xs">Good Vibes✨</span>
              <p className="text-sm font-semibold">DarkSoul</p>
            </div>
          </div>
          <div className="w-[30%] flex m-auto items-center">
            <button onClick={toggle} className={`w-8 h-8 rounded-full bg-gradient-to-r m-auto -mr-4 from-white to-transparent flex items-center justify-start cursor-pointer ${isOpen ? 'custom-gradient2' : 'custom-gradient1'} `}>
              <img id="togglericon" width="10" height="10" src={`https://img.icons8.com/metro/26/${isOpen ? 'back' : 'forward'}.png`} className={`${isOpen? "":"m-auto mr-[5px]"}`} alt="toggle" />
            </button>
          </div>

        </div>

        <div className={`mt-8 flex flex-col ${isOpen ? 'p-4' : 'p-1'} space-y-2`}>
          <p className=" text-sm">Menus</p>
          <div className="space-y-2">
            {menulist.map(menu => (
              <div key={menu.label} className={`flex items-center  ${isOpen ? '' : 'justify-center'} space-x-4 p-2 rounded-lg  hover:bg-white hover:shadow-lg cursor-pointer transition`}>
                <img className="w-4 h-4" src={menu.src} alt={menu.label} />
                <p className={`text-sm ${isOpen ? 'block' : 'hidden'}`}>{menu.label}</p>
              </div>
            ))}
          </div>
          <p className="text-sm">Service</p>
          <div className="space-y-2">
            {servicelist.map(service => (
              <div key={service.label} className={`flex items-center ${isOpen ? '' : 'justify-center'}  space-x-4 p-2 rounded-lg hover:bg-white hover:shadow-lg cursor-pointer`}>
                <img className="w-4 h-4" src={service.src} alt={service.label} />
                <p className={`text-sm ${isOpen ? 'block' : 'hidden'}`}>{service.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={`p-3 h-[20%] ${isOpen?  "": " flex items-center justify-center"}`}>
          <div className={`flex flex-col items-center rounded-lg  ${isOpen ? 'bg-white py-3 gap-3' : ''} cursor-pointer hover:shadow-lg transition`}>
            <img className="w-6 h-6" src="https://img.icons8.com/ios-filled/50/add--v1.png" alt="Create new task" />
            {isOpen && (
              <div className="ml-4 flex flex-col">
                <p className="text-xs">Create new task</p>
                <span className="text-[10px]">Or use <b>Invite</b> Link</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
