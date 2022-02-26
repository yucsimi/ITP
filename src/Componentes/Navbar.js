import React, { useState } from 'react';
import '../styles/Navbar.css'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


import ellipse from '../assets/elipse.png'
import group from '../assets/Group.png'
import V from '../assets/V.png'
import perfil from '../assets/Perfil.png'
import logout from '../assets/Logout.png'


const Navbar = (props) => {

    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);

    return (

        <div className='navbarr  d-flex justify-content-between '>
            <div className=' mx-3'>
                <img src={group} />

            </div>

            <div className='d-flex '>

                <div className='d-flex contenedorNavbarr'>

                    <p className='mx-3 navbarrBilling'>Billing</p>
                    <div className='d-flex'>
                        <p className='mx2 navbarrServicio'>My services</p>
                        <span className='mx-2'> <img src={V} /></span>
                    </div>



                </div>

                <div className='contenedordropdownn d-flex'>
                    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                        <DropdownToggle caret className='d-flex mx-1'>
                            <div className='d-flex contenedorPequeno'>

                                <p className='jhon  mx-2'>John</p>
                                <span className=''>
                                    <img className='jhon2  mx-2' src={ellipse} />
                                </span>



                            </div>

                        </DropdownToggle>

                        <DropdownMenu>
                            <DropdownItem><div className='d-flex botonItem'> <span className='mx-2'><img src={perfil} /></span><p>Profile</p> </div></DropdownItem>
                            <DropdownItem><div className='d-flex  botonItem'> <span className='mx-2'><img src={logout} /></span><p>Logout</p> </div></DropdownItem>

                        </DropdownMenu>
                    </Dropdown>
                </div>




            </div>




        </div >
    );
}

export default Navbar;