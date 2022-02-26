import React, { useState } from 'react';
import '../styles/sidebar.css'
import { Collapse } from 'reactstrap';
import SidebarItems from './SidebarItems';

import Graph from '../assets/Graph.png'
import vector from '../assets/Vector 2.png'
import Notification from '../assets/Notification.png'
import chat from '../assets/Chat.png'
import category from '../assets/Category.png'
import infoSquare from '../assets/Info Square.png'
import users from '../assets/3 User.png'
import profile from '../assets/Profile.png'
import call from '../assets/Call.png'
import api from '../assets/api.png'
import paper from '../assets/Paper.png'
import white from '../assets/white.png'


const Sidebar = () => {

    const [activeCollapse, setactiveCollapse] = useState(false)
    const [identificadorMenu, setIdentificadorMenu] = useState("")

    const handleClickCollapse = () => {
        setactiveCollapse(!activeCollapse)
    }


    const updateIdentificador = (identificador) => {

        setIdentificadorMenu(identificador)

    }

    console.log(identificadorMenu)



    const options = [
        { icon: Notification, titulo: "Web Phone", identificador: "webphone" },
        { icon: Notification, titulo: "Web Phone1", identificador: "webphone1", },
        { icon: Notification, titulo: "Web Phone2", identificador: "webphone2" },
        { icon: Notification, titulo: "Web Phone3", identificador: "webphone3", header: "Admin" },
        { icon: Notification, titulo: "Web Phone4.1", identificador: "webphone4.1" },
        { icon: Notification, titulo: "Web Phone4", identificador: "webphone4" },
    ]

    return (




        <div className='sidebar '>

            <div className='icono  d-flex'>
                <span>
                    <img alt='white' src={white} />
                </span>

            </div>
            <h4>ITP VOICE</h4>

            <div onClick={handleClickCollapse} className='d-flex  stiloscollapso'>
                <span ><img alt='grap' className='sidebaricon' src={Graph} /></span>
                <p className="sidebar-titulo2">My Extension </p>
                <span ><img alt='vector' className='vector1  mx-3' src={vector} /></span>

            </div>

            <Collapse isOpen={activeCollapse} className=''>

                <p className={`colapsoItems ${identificadorMenu === "dashboard" && "button-activado"}`} onClick={() => { updateIdentificador("dashboard") }}> Dashboard </p>
                <p className={`colapsoItems ${identificadorMenu === "voicemail" && "button-activado"}`} onClick={() => { updateIdentificador("voicemail") }}> Voicemail </p>
                <p className={`colapsoItems ${identificadorMenu === "callhistory" && "button-activado"}`} onClick={() => { updateIdentificador("callhistory") }}> Call History </p>
                <p className={`colapsoItems ${identificadorMenu === "settings" && "button-activado"}`} onClick={() => { updateIdentificador("settings") }}> Settings And Devices</p>


            </Collapse>

            {/*   <SidebarItems icon={Notification} identificadorMenu={identificadorMenu} titulo="Web Phone" updateIdentificador={updateIdentificador} identificador={"webphone"} />
            <SidebarItems icon={chat} identificadorMenu={identificadorMenu} titulo="Chat" updateIdentificador={updateIdentificador} identificador={"chat"} />
            <SidebarItems icon={category} identificadorMenu={identificadorMenu} titulo="Apps" updateIdentificador={updateIdentificador} identificador={"apps"} />
            <h4>Help</h4>
            <SidebarItems icon={infoSquare} identificadorMenu={identificadorMenu} titulo="Advanced" updateIdentificador={updateIdentificador} identificador={"advances"} />
            <h4>ADMIN</h4>
            <SidebarItems icon={users} identificadorMenu={identificadorMenu} titulo="Numbers" updateIdentificador={updateIdentificador} identificador={"numbers"} />
            <SidebarItems icon={profile} identificadorMenu={identificadorMenu} titulo="Users" updateIdentificador={updateIdentificador} identificador={"users"} />
            <SidebarItems icon={call} identificadorMenu={identificadorMenu} titulo="Your Phone System" updateIdentificador={updateIdentificador} identificador={"phonesystem"} />
            <SidebarItems icon={category} identificadorMenu={identificadorMenu} titulo="Apps" updateIdentificador={updateIdentificador} identificador={"apps2"} />
            <SidebarItems icon={api} identificadorMenu={identificadorMenu} titulo="API" updateIdentificador={updateIdentificador} identificador={"api"} />
            <SidebarItems icon={paper} identificadorMenu={identificadorMenu} titulo="Reports" updateIdentificador={updateIdentificador} identificador={"reports"} />
 */}

            {options.map(element => <SidebarItems {...element} identificadorMenu={identificadorMenu} updateIdentificador={updateIdentificador} />)}


        </div>

    );
}

export default Sidebar;