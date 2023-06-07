import React from "react";
import Grid from "./Grid";
import Navbar from "./Navbar";

function MiddlePage(){
    return(
        <div style={{height:window.innerHeight}}>
            <Navbar/>
            <Grid/> 
        </div>
    
    )
}

export default MiddlePage;
