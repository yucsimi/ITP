import './App.css';
import 'bootstrap/dist/css/bootstrap.css';


import Dashboard from './Componentes/Dashboard';
import Sidebar from './Componentes/Sidebar';
import Navbar from './Componentes/Navbar';
import Footer from './Componentes/Footer';


function App() {
  return (
    <>
      <div className="d-flex h-100 ">

        <Sidebar />

        <div className=' w-100 app' style={{ minHeight: "100vh  " }}>
          <Navbar />
          <Dashboard />


        </div>


      </div>
      <Footer />
    </>
  );
}

export default App;
