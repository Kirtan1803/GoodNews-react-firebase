import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddCategory from './pages/AddCategory'
import ViewCategories from './pages/ViewCategories'
import AdminAuthorLogin from './pages/AdminAuthorLogin'
import AddPost from './pages/AddPost'
import { Navigate, Route, Routes } from 'react-router'
import { ToastContainer, toast } from 'react-toastify';
import UpdateCategory from './pages/UpdateCategory'
import AddAuthor from './pages/AddAuthor'
import ViewAuthors from './pages/ViewAuthors'
import UpdateAuthor from './pages/UpdateAuthor'
import Dashboard from './pages/Dashboard'
import { useAdminStore } from './store/admin'
import { useAuthorStore } from './store/author'
import ViewPosts from './pages/ViewPosts'
import UpdatePost from './pages/UpdatePost'

function App() {
  let isadmin = useAdminStore((store)=>store.isadmin)
  let isauthor = useAuthorStore((store)=>store.isauthor)


  return (
    <>
      <Routes>
        <Route path="/" element={<AdminAuthorLogin />} />
        <Route path="/dashboard" element={ isadmin || isauthor ? <Dashboard /> :  <Navigate to="/"/>} />
        <Route path="/addcategory" element={isadmin ? <AddCategory />: <Navigate to="/"/>} />
        <Route path="/updatecategory/:id"  element={isadmin ? <UpdateCategory />: <Navigate to="/"/>} />
        <Route path="/viewcategories"  element={isadmin ? <ViewCategories />: <Navigate to="/"/>} />
        <Route path="/addpost"  element={isauthor ? <AddPost />: <Navigate to="/"/>} />
        <Route path="/updatepost/:id"  element={isauthor ? <UpdatePost />: <Navigate to="/"/>} />
        <Route path="/viewposts"  element={isadmin || isauthor ? <ViewPosts />: <Navigate to="/"/>} />
        <Route path="/addauthor"  element={isadmin ? <AddAuthor />: <Navigate to="/"/>} />
        <Route path="/updateauthor/:id"  element={isadmin ? <UpdateAuthor />: <Navigate to="/"/>} />
        <Route path="/viewauthors"  element={isadmin ? <ViewAuthors />: <Navigate to="/"/>} />
      </Routes>
      <ToastContainer />
    </>
  )
}

export default App
