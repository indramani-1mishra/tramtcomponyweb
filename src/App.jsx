
import './App.css'


import Router from './components/routes/Routes'
import ScrollToTop from './components/ScrolltotOP/ScrollToTop'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {


  return (
   <> 
   <ToastContainer/>
   <ScrollToTop/>
   <Router/>
   </>

  )
}

export default App
