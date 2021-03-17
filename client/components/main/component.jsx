import React, { Component } from "react";
import { Route } from 'react-router-dom';
import NavBar from "./navbar/navbar_container";
import Modals from "./modals/container";
import Sidebar from "./sidebar/sidebar_container";
import Channel from "./channel/container";
import DirectMessage from "./direct_message/container";

class Main extends Component {
    constructor(props) {
        super(props);
        const layout = this.props.location.pathname.includes("hive") ? "p-workspace-layout" : "p-workspace-layout dm"
        this.state = {
            layout: layout
        }
    };

    componentDidUpdate(prevProps) {
        if (prevProps.location.pathname !== this.props.location.pathname) {
            const layout = this.props.location.pathname.includes("hive") ? "p-workspace-layout" : "p-workspace-layout dm"
            this.setState({
                layout: layout
            })
        }
    }

    render() {
        let { location:{pathname, params, query} } = this.props;

        return (
            <div tabIndex="-1" className="sk-client-theme--dark supports_custom_scrollbar p-client_desktop--ia-top-nav">
                <div className="p-client_container">
                    <div className="p-client">
                        <NavBar />
                        <div className={this.state.layout}>
                            <Sidebar />
                            <Route path="/client/hives/:hiveId" component={Channel} />
                            <Route path="/client/dms/:dmId" component={DirectMessage} />
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