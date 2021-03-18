import React from "react";
import Header from "./components/client/header";
import Body from "./components/client/body/body";
import Footer from "./components/client/footer/footer_container";
import Locked from "./components/client/locked/component";
import WebSocketContainer from "./components/websocket_container";

class DirectMessage extends React.Component {
    constructor(props) {
        super(props);
        // this.bottom = React.createRef();
        this.state = {
            height: window.innerHeight,
            width: window.innerWidth,            
        }
    }

    componentDidMount() {
        this.props.fetchDM(this.props.match.params.dmId);
        this.props.fetchMessages({type: 'direct_messages', id: this.props.match.params.dmId});
        // this.bottom.current.scrollIntoView();

        const handleResize = () => {
            this.setState({
                height: window.innerHeight,
                width: window.innerWidth,
            });
        };

        window.addEventListener('resize', handleResize);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.dmId !== this.props.match.params.dmId) {
            this.props.fetchDM(this.props.match.params.dmId);
            this.props.fetchMessages({type: 'direct_messages', id: this.props.match.params.dmId});
        }
        // this.bottom.current.scrollIntoView();
    }

    render() {
        const { currentDirectMessage, messages, currentUser, aboutModal } = this.props;

        const ids = currentDirectMessage.users ? Object.values(currentDirectMessage.users)
            .map(user => user.id) : [];

        const name = currentDirectMessage.users ? Object.values(currentDirectMessage.users)
            .map(user => user.username)
            .filter(username => username != currentUser.username)
            [0] : 
            null

        const locked = ids ?
            ids.includes(currentUser.id) ?
                <div className="p-file_drag_drop__container">
                    <Body
                        currentDirectMessage={currentDirectMessage}
                        messages={messages}
                    />
                    {/* <div ref={this.bottom} /> */}
                    <Footer
                        name={name}
                        currentDirectMessage={currentDirectMessage}
                    />
                    <WebSocketContainer />
                </div> :
                <div className="p-file_drag_drop__container" style={{marginTop: "-1px", borderTop: "1pt solid rgb(66, 68, 71)"}}>
                    <Locked
                        currentDirectMessage={currentDirectMessage}
                    />
                    {/* <div ref={this.bottom} /> */}
                </div>
            : <React.Fragment></React.Fragment>
                  

        return (
            <React.Fragment>
                <div role="main" aria-label="Channel general" className="p-workspace__primary_view">
                    <div className="p-workspace__primary_view_contents">
                        <Header
                            name={name}
                            currentDirectMessage={currentDirectMessage}
                            currentUser={currentUser}
                            aboutModal={aboutModal}
                        />
                        {locked}
                        {/* <div className="p-file_drag_drop__container">
                            <Body
                                currentHive={currentHive}
                                messages={messages}
                                hiveUsers={hiveUsers}
                                fetchMessage={fetchMessage}
                            />
                            <div ref={this.bottom} />
                            <Footer 
                                currentHive={currentHive}
                            />
                            <WebSocketContainer />
                        </div> */}
                    </div>
                </div>
                {/* <div className="p-workspace__secondary_view p-workspace__secondary_view--large">
                    <div className="p-workspace__secondary_view_contents">
                        <div role="complementary" className="p-flexpane p-flexpane--iap1">
                            <ThreadHeader
                                currentHive={currentHive}
                            />
                            <div className="p-flexpane__body p-threads_flexpane_container p-flexpane__body--dark">
                                <div className="p-file_drag_drop__container p-threads_flexpane">
                                    <div className="flex_one no_min_height">
                                        <div role="presentation" id="C2J4CK8N7-1612043729.007300-thread-list">
                                            <div tabIndex="0" style={{position: "absolute", width: "1px", height: "1px", outline: "none", boxShadow: "none", top: "0px"}}></div>
                                            <div role="list" aria-label="Thread in help-requests (channel)" className="c-virtual_list c-virtual_list--scrollbar c-scrollbar c-scrollbar--hidden" style={{width: "100%", minHeight: `${this.state.height}px`}}>
                                                <div data-qa="slack_kit_scrollbar" role="presentation" className="c-scrollbar__hider" style={{width: "100%"}} >
                                                    <div role="presentation" className="c-scrollbar__child" style={{width: "100%"}} >
                                                        <div data-qa="slack_kit_list" className="c-virtual_list__scroll_container" role="presentation" style={{position: "relative", minHeight: `${this.state.height}px`}}>
                                                            <ThreadBody 
                                                                currentHive={currentHive}
                                                                currentThread={currentThread}
                                                                hiveUsers={hiveUsers}
                                                                currentUser={currentUser}
                                                                action={action}
                                                                fetchMessage={fetchMessage}
                                                                closeThread={closeThread}                                               
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </React.Fragment>
        );
    }
}

export default DirectMessage;
