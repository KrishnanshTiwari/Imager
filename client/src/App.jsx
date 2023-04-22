import React from 'react'
import Community from './pages/Community';
import CreatePost from './pages/CreatePost';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <header className="w-full flex justify-between items-center bg-[#00235B] sm:px-8 px-4 py-4 border-b border-b-[#009EFF]">
      <Link to="/">
        <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Imager</h1>
      </Link>

      <Link to="/commmunity" className="font-inter font-medium bg-emerald-500 text-white px-4 py-2 rounded-md">Community Page</Link>
    </header>
    <main className="sm:p-8 px-4 py-8 w-full bg-[#088395] min-h-[calc(100vh-73px)]">
      <Routes>
        <Route path="/" element={<CreatePost />} />
        <Route path="/commmunity" element={<Community />} />
      </Routes>
    </main>
  </BrowserRouter>
  )
}

export default App