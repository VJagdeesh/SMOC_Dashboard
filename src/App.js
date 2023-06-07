import './App.css';
import React,{lazy,Suspense} from 'react';
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import MasterFile from './components/MasterFile';
import LoginForm from './login_components/LoginForm';
import MiddlePage from './middle_page/MiddlePage';
import MetersCommunicationST from './components/MetersCommunicationST';
import MasterRCDCD from './rc_dc_daily/MasterRCDCD';
import MasterRCDCM from './rc_dc_monthly/MasterRCDCM';
import MasterSAIDI  from "./RI_SAIDI/MasterSAIDI";
import MasterCAIFI from './RI_CAIFI/MasterCAIFI';
import MasterCAIDI from './RI_CAIDI/MasterCAIDI';

function App() {

  // For Routing 
  const router=createBrowserRouter([
    {path:'/',element:<LoginForm/>},
    {path:'/home',element:<MiddlePage/>},
    {path:'/home/dashboard',element:<MasterFile/>},
    {path:'/home/dashboard/metersincommunication',element:<MetersCommunicationST/>},
    {path:'/home/rc_dc_daily',element:<MasterRCDCD/>},
    {path:'/home/rc_dc_monthly',element:<MasterRCDCM/>},
    {path:'/home/RI_SAIDI',element:<MasterSAIDI/>},
    {path:'/home/RI_CAIFI',element:<MasterCAIFI/>},
    {path:'/home/RI_CAIDI',element:<MasterCAIDI/>}

    ]);
  

    return (
    <div>
     <RouterProvider router={router}/>
    </div>
  );
}

export default App;
