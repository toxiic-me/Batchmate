import React, { useEffect, useRef } from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import { HiHome } from "react-icons/hi2";
import { FaPen } from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";
import { FaCode } from "react-icons/fa";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from "react-redux"



const Sidebar = ({ closeSidebar }) => {
    const sidebarRef = useRef(null);
    const { isUserLoggedIn } = useSelector(state => state.authReducer)
    const navigate = useNavigate();

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
                closeSidebar();
            }
        };

        document.addEventListener('mousedown', handleOutsideClick);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [closeSidebar]);

    return (
        <section ref={sidebarRef} className='w-[65%] h-screen fixed left-0 top-0 bg-blue-100 z-10 shadow-lg px-2 '>
            <button className='bg-none font-Nunito font-bold text-2xl mt-2 ml-2' onClick={closeSidebar}>X</button>

            <h2 className='shadow-text-white text-bg-gradient mt-8 text-2xl font-["Rubik_Scribble"] font-semibold not-italic text-center'>BATCHMATE</h2>

            <ul className='mt-5 w-full flex flex-col justify-start items-center gap-6'>

                <li className='text-center'>
                    <NavLink to="/" className="font-Nunito font-semibold text-xl text-center flex justify-center items-center" >
                        <HiHome size={18} className='mr-1' />Home
                    </NavLink>
                </li>


                <li className='text-center'>
                    <button className="font-Nunito font-semibold text-xl text-center flex justify-center items-center"
                        onClick={() => {
                            !isUserLoggedIn ? toast.error("Login to write feedback.") :
                                navigate("/write-feedback")
                        }}>
                        <FaPen size={18} className='mr-1' />Write
                    </button>
                </li>


                <li className='text-center'>
                    <NavLink to="/teachers" className="font-Nunito font-semibold text-xl text-center flex justify-center items-center" >
                        <GiTeacher size={18} className='mr-1' />Teachers
                    </NavLink>
                </li>

                <li className='text-center'>
                    <NavLink to="/developers" className="font-Nunito font-semibold text-xl text-center flex justify-center items-center" >
                        <FaCode size={18} className='mr-1' />Devs
                    </NavLink>
                </li>

            </ul>
        </section>
    )
}

export default Sidebar;
