import React from "react";
import { NavLink, useNavigate,Link } from "react-router-dom";

function Navbar(){
const navigate=useNavigate();
function submitHandler(e){
e.preventDefault();
navigate('/');
}

    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark" style={{width:window.innerWidth}}>
        <a className="navbar-brand ms-3" to=""><img src="https://upload.wikimedia.org/wikipedia/commons/e/e5/L%26T.png" width="50px" height="30px" alt="L&T"></img> SMOC</a>
        
            <ul className="navbar-nav ms-auto me-4"> 
                <li className="nav-item me-2">
                   <a className="nav-link" onClick={(e)=>{e.preventDefault(); navigate('/home',{ replace: true });}}>Home</a>
                </li>
                <li class="nav-item dropdown me-2">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Favourites
                    </a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><hr class="dropdown-divider"/></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </li>
                <li class="nav-item dropdown me-2">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Dashboards
                    </a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="/home/rc_dc_daily" >RC DC Daily</a></li>
                        <li><a class="dropdown-item" href="/home/rc_dc_monthly">RC DC Monthly</a></li>
                        <li><hr class="dropdown-divider"/></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </li>
                <li>
                    <button class="btn btn-outline-success" type="submit" onClick={submitHandler}>Sign out</button>
                </li>

            </ul>
        </nav>
    )
}

export default Navbar;
