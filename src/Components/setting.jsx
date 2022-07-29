import React from "react";
import '../stylesheets/setting.css'


const Setting = () =>{
    return(
        <div className="setting-menu-container">
            <div className='setting-menu'>
                <div className="setting-container-margin">
                    <h3>Timmer Settings</h3>
                    <hr />
                    <h3>Time</h3>
                    <div className="time-settings">
                        
                        <input className="input-pomodoro-setting input-setting" type="number"/>
                        <input className="input-short-setting input-setting" type="number" />
                        <input className="input-long-setting input-setting" type="number" />
                    </div>
                    <hr />
                    <div className="long-break-interval">
                        <h3>Long break interval</h3>
                        <input className="input-long-break" type="number" />
                    </div>
                    <hr />
                    <div className="alarm-sound">
                        <h3>Alarm Sound</h3>
                        <select className="select-sound">
                        <option>Rock</option>
                        <option selected>Birds</option>
                        <option>Cyberpunk</option>
                        <option>Spartan</option>

                        </select>
                    </div>
                    
                </div>
                <div className="save-setting-section">
                    <div className="button-setting-container">
                        <button className="save-change-buton" >OK</button>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Setting;