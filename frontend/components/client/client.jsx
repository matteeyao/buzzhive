import React from "react";
import Sidebar from "./sidebar/sidebar";
// import ChannelShowContainer from "./channels/channel_show_container";

export default () => (
    <div className="main-content">
        <div className="row">
            <div className="sections-sidebar">
                <Sidebar />
            </div>

            <div className="col-sm-3">
                {/* <ChannelShowContainer /> */}
            </div>
        </div>
    </div>
)