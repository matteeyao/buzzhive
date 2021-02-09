  import React from "react";
import NavBar from "./navbar/navbar_container";
import Modals from "./modals/modal_container";
import Sidebar from "./sidebar/sidebar";
import Client from "./client/channel_container";

export default ({state}) => (
    <div className="p-client_container">
        <div className="p-client">
            <NavBar />
            <div className="p-workspace-layout">
                <Sidebar />
                <Client />
            </div>
        </div>
        <div className="ReactModalPortal">
            <Modals state={state}/>
        </div>
    </div>
)