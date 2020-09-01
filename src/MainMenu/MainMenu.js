import React from 'react';
import './MainMenu.css';

const mainMenu = () => {
    
    const openNav = () => {
        document.getElementById("myNav").style.height = "100%";
      }
      
    // /* Close */
    const closeNav = () => {
        console.log('toto');
        document.getElementById("myNav").style.height = "0%";
    }


    return  <div className="">
                <div id="myNav" className="overlay">
                    <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>
                    <div className="overlay-content">
                        <a href="#">About</a>
                        <a href="#">Services</a>
                        <a href="#">Clients</a>
                        <a href="#">Contact</a>
                    </div>
                </div>
                <span onClick={openNav}>open</span>
            </div>
}




export default mainMenu;