import React, { Component } from "react";
import NavBar from "./navbar/navbar_container";
import Modals from "./modals/container";
import Sidebar from "./sidebar/sidebar_container";
import Client from "./client/container";

class Main extends Component {
    render() {
        return (
            <div tabIndex="-1" className="sk-client-theme--dark supports_custom_scrollbar p-client_desktop--ia-top-nav">
                <div className="p-client_container">
                    <div className="p-client">
                        <NavBar />
                        <div className="p-workspace-layout">
                            <Sidebar />
                            <Client />
                        </div>
                    </div>
                    <div className="ReactModalPortal">
                        <Modals state={this.props.state}/>
                    </div>
                </div>
            </div>
        );
    }
};

export default Main;