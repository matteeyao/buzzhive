import React from "react";
import { Route, Switch } from "react-router-dom";
import SidebarContainer from "./sidebar/sidebar";
import ChannelShowContainer from "./channel/channel";

export default () => (
    <div className="main-content">
        <div className="row">
            <div className="sections-sidebar">
                <SidebarContainer />
            </div>

            <div className="channel-detail">
                <ChannelShowContainer />
            </div>
        </div>
    </div>
)