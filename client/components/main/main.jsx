import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./navbar/navbar_container";
// import SidebarContainer from "./sidebar/sidebar";
// import HiveContainer from "./hive/hive_container";

export default () => (
    <div className="p-client_container">
        <div className="p-client">
            <NavBar />
        </div>
    </div>

    // <div className="main-content">
    //     {/* <div className="row">
    //         <div className="sections-sidebar">
    //             <SidebarContainer />
    //         </div>

    //         <div className="channel-detail">
    //             <HiveContainer />
    //         </div>
    //     </div> */}
    // </div>
)