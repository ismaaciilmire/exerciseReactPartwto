import { NavLink } from "react-router-dom"


const Header = () => {
  return (

    <header className="flex justify-center  border-1 max-w-5xl mx-autos p-4 text-xl  shadow-[0px-500px-150px-rgba-(0,0,255.0,4)]  items-center m-10 rounded-lg bg-gray-800 text-white " >
    
      <nav className="flex justify-center items-center gap-12 w-full" >
            <NavLink to={'/'}>Home</NavLink>
            <NavLink to={'/Blogs'}>Blogs</NavLink>
            <NavLink to={'/NewPosts'}>NewPosts</NavLink>
        </nav>

    </header>

        
  )
}

export default Header