import React from 'react';
import '../styles/sidebarItems.css'

const SidebarItems = ({ icon, titulo, identificadorMenu, identificador, updateIdentificador, header }) => {
    return (
        <>

            {header && <h4>{header}</h4>}
            <div className={`boton23 ${identificadorMenu === identificador && "button-activado"}`} onClick={() => { updateIdentificador(identificador) }}>
                <button className="sidebar-buttom " type='submit' >

                    <div className="d-flex sidebar-buttom-adentro">
                        <span ><img className='sidebaricon' src={icon} /></span>
                        <p className="sidebar-titulo"> {titulo} </p>
                    </div>


                </button>



            </div>
        </>


    );
}

export default SidebarItems;