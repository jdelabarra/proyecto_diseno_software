import React from "react";
import { render } from "react-dom";

function Popup(){ 
    return(
        <div>
        <h1>este es el poopup</h1>
        <p>poopuppoopuppoopuppoopup</p>
        </div>
    )
 } 

render(<Popup />, document.getElementById('react-target'));