import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Contact from './pages/Contact'
import About from './pages/About'
import { Routes, Route } from "react-router";
import PostDetails from './pages/PostDetails'
import PostList from './pages/PostList'
import { ToastContainer, toast } from 'react-toastify';
import { useUserStore } from './store/user'
import FavouriteList from './pages/FavouriteList'


function App() {
  let isuser = useUserStore((store)=>store.isuser)

  return (
    <>

      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/posts" element={<PostList />} />
        <Route path="/posts/:id" element={<PostDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/favourites" element={<FavouriteList />} />
        <Route path="/about" element={<About />} />

      </Routes>


    </>
  )
}

export default App
