import React from 'react';
import '../styles/Dashboard.css'

const Dashboard = () => {


    return (

        <div className='dashboard '>
            <h2>Dashboard </h2>
            <div className='row m-0  justify-content-between contenedorDashboard'>
                <div className=' my-3 carta '>
                    <div >
                        <h3>Welcome back, John!</h3>
                    </div>
                    <div className='borderDeAbajo'>
                        <p className='parrafo1' >Assigned Number</p>
                        <p className='parrafo2'>Not Assigned</p>
                    </div>
                    <div className='borderDeAbajo'>
                        <p className='parrafo1'>Assigned Extension</p>
                        <p className='parrafo2'> 7003</p>
                    </div>
                    <div className=''>
                        <p className='parrafo1' >Voice Messages</p>
                        <p className='parrafo2'> 0</p>
                    </div>

                </div>
                <div className='my-3  segundaCarta'>
                    <div>
                        <h3>Information</h3>
                    </div>
                    <div className='borderDeAbajo'>
                        <p className='parrafo1'>full name</p>
                        <p className='parrafo2'> John Krasinski</p>

                    </div>

                    <div className='borderDeAbajo'>
                        <p className='parrafo1' >Country</p>
                        <p className='parrafo2'>  USA</p>
                    </div>
                    <div className=''>
                        <p className='parrafo1' >Country</p>
                        <p className='parrafo2'>Boston</p>
                    </div>

                </div>

                <div className=' col-12 mt-5 row m-0 terceraCarta'>
                    <h5>Recent Call</h5>

                    <div className='col-md-4  p-5 '>
                        <p className='numero'>125s </p>
                        <p className='previosMonth'>From previous month</p>
                        <button type='submit' className='boton'> View Details</button>

                    </div>
                    <div className='col-md-8 boder p-5' >



                    </div>



                </div>


            </div>


        </div >
    );
}

export default Dashboard;