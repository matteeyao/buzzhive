import React from "react";
import Header from "./components/header";
// import MessageFormContainer from "./components/create_message_container";
// import WebSocketContainer from "./components/websocket_container";

class Channel extends React.Component {
    constructor(props) {
        super(props);
        this.bottom = React.createRef();
    }

    componentDidMount() {
        this.props.fetchHive(this.props.match.params.hiveId);
        // this.bottom.current.scrollIntoView();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.hiveId !== this.props.match.params.hiveId) {
            this.props.fetchHive(this.props.match.params.hiveId)
        }
        // this.bottom.current.scrollIntoView();
    }

    render() {
        // const { messages, users } = this.props;
        // const messageList = messages.map(message => {
        //     return (
        //         <li key={message.id}>
        //             <strong>{users[message.authorId].username}
        //                 (
        //                     {users[message.authorId].fname}
        //                     {users[message.authorId].lname}
        //                 )
        //             </strong>
        //             <div>{message.body}</div>
        //         </li>
        //     );
        // });

        return (
            <div role="main" aria-label="Channel general" className="p-workspace__primary_view" >
                <div className="p-workspace__primary_view_contents">
                    <Header
                        currentHive={this.props.currentHive}
                        users={this.props.users}
                    />
                    <div className="p-file_drag_drop__container">
                        <div className="p-workspace__primary_view_body">
                            <div className="p-message_pane p-message_pane--classic-nav" data-qa="message_pane">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Channel;

// const cut = (
        
            
        
        //         <div className="p-message_pane__top_banners"></div>
        //         <div style="overflow: visible; height: 0px; width: 0px;">
        //             <div role="presentation">
        //                 <div tabindex="0" style="position: absolute; width: 1px; height: 1px; outline: none; box-shadow: none; top: 0px;"></div>
        //                 <div role="list" aria-label="general (channel)" className="c-virtual_list c-virtual_list--scrollbar c-message_list c-message_list--dark c-scrollbar c-scrollbar--fade" style="width: 739px; height: 654px;">
        //                     <div data-qa="slack_kit_scrollbar" role="presentation" className="c-scrollbar__hider">
        //                     <div role="presentation" className="c-scrollbar__child" style="width: 739px;">
        //                         <div data-qa="slack_kit_list" className="c-virtual_list__scroll_container" role="presentation" style="position: relative; height: 1809.7px;">
        //                             <div className="c-virtual_list__item" tabindex="-1" role="listitem" id="0000000000.000001" data-qa="virtual-list-item" style="top: 0px;">
        //                                 <div className="p-global_banner__spacer" data-qa="global_banner_spacer"></div>
        //                                 <div className="p-global_banner p-global_banner--persistent p-global_banner--inline" data-qa="global_banner" role="banner">
        //                                 <div className="p-global_banner__heading display_flex">
        //                                     <h1 className="p-global_banner__heading_text" data-qa="global_banner_heading_text">Unlock messages prior to February 4th in App Academy</h1>
        //                                 </div>
        //                                 <div className="p-global_banner__body" data-qa="global_banner_body">To view and search all the messages in your workspace’s history, rather than just the 10,000 most recent, upgrade to one of our paid plans.</div>
        //                                 <div className="p-global_banner__buttons"><a target="_blank" className="c-link c-button c-button--primary c-button--medium p-global_banner__button  p-global_banner__button--primary" data-qa="global_banner_primaryCTA_button" href="https://app-academy.slack.com/plans?entry_point=limited_history_foreword&amp;feature=unlimited_messages" rel="noopener noreferrer">See Upgrade Options</a></div>
        //                                 </div>
        //                             </div>
        //                             <div className="c-virtual_list__sticky_container" role="presentation" style="top: 189px; bottom: 1367.7px;">
        //                                 <div aria-roledescription="separator" aria-label="Tuesday, February 2nd Press enter to select a date to jump to." className="c-virtual_list__item--sticky c-virtual_list__item" tabindex="-1" role="listitem" id="1612252800000.C03GU502Q" data-qa="virtual-list-item" style="top: 0px; z-index: 199;">
        //                                 <div className="c-message_list__day_divider__label c-message_list__day_divider__label--jump_to_date"><button className="c-button-unstyled c-message_list__day_divider__label__pill" aria-label="Jump to date" aria-haspopup="menu" aria-expanded="false" type="button">Tuesday, February 2nd<i className="c-icon c-message_list__day_divider__label__pill__arrow c-icon--chevron-down" type="chevron-down" aria-hidden="true"></i></button></div>
        //                                 </div>
        //                             </div>
        //                             <div className="c-virtual_list__item" tabindex="-1" role="presentation" id="1612252800000divider" data-qa="virtual-list-item" style="top: 198px;">
        //                                 <div className="c-message_list__day_divider" data-stringify-ignore="true">
        //                                 <div className="c-message_list__day_divider__line" data-stringify-ignore="true"></div>
        //                                 </div>
        //                             </div>
        //                             <div aria-expanded="false" className="c-virtual_list__item" tabindex="-1" role="listitem" id="1612292917.198100" data-qa="virtual-list-item" style="top: 238px;">
        //                                 <div role="document" className="c-message_kit__background p-message_pane_message__message c-message_kit__message" data-qa="message_container" data-qa-unprocessed="false" data-qa-placeholder="false">
        //                                 <div role="document" className="c-message_kit__hover" data-qa-hover="true">
        //                                     <div className="c-message_kit__actions c-message_kit__actions--default" style="position: relative;">
        //                                         <div className="c-message_kit__labels__offscreen_message" aria-live="assertive"></div>
        //                                         <div className="c-message_kit__gutter">
        //                                             <div className="c-message_kit__gutter__left" data-stringify-ignore="true"><button className="c-button-unstyled c-message_kit__avatar c-avatar c-avatar--interactive " aria-hidden="true" aria-label="View Max’s Profile" tabindex="-1" aria-haspopup="menu" aria-expanded="false" type="button" style="height: 36px; width: 36px;"><img src="https://ca.slack-edge.com/T03GU501J-U0173CXKZGD-cdadb0380e42-48" srcset="https://ca.slack-edge.com/T03GU501J-U0173CXKZGD-cdadb0380e42-72 2x" className="c-base_icon c-base_icon--image" aria-hidden="true" role="img" alt="" style="height: 36px; width: 36px;"></button></div>
        //                                             <div className="c-message_kit__gutter__right" data-qa="message_content">
        //                                             <span className="c-message__sender c-message_kit__sender" data-qa="message_sender" data-stringify-type="replace" data-stringify-text="Max"><a target="_blank" rel="noopener noreferrer" data-message-sender="U0173CXKZGD" data-qa="message_sender_name" aria-haspopup="menu" aria-expanded="false" className="c-link c-message__sender_link " href="/team/U0173CXKZGD">Max<span aria-label="(opens in new tab)"></span></a></span>&nbsp;&nbsp;<a data-stringify-type="replace" data-stringify-text="[11:08 AM]" data-stringify-requires-siblings="true" data-ts="1612292917.198100" delay="300" data-sk="tooltip_parent" className="c-link c-timestamp" href="https://app-academy.slack.com/archives/C03GU502Q/p1612292917198100"><span className="c-timestamp__label">11:08 AM</span></a><br>
        //                                             <div className="c-message_kit__blocks c-message_kit__blocks--rich_text">
        //                                                 <div className="c-message__message_blocks c-message__message_blocks--rich_text">
        //                                                     <div className="p-block_kit_renderer" data-qa="block-kit-renderer">
        //                                                         <div className="p-block_kit_renderer__block_wrapper p-block_kit_renderer__block_wrapper--first">
        //                                                         <div className="p-rich_text_block" dir="auto">
        //                                                             <div className="p-rich_text_section">I just booted up a project on localhost and found that the associated postgres database had mysteriously vanished. To my knowledge I have not done anything that would result in such an erasure. To make things even more interesting, a number of databases that I <i data-stringify-type="italic">had</i> deleted from my machine <i data-stringify-type="italic">reappeared</i> at the same time as this project disappeared.<span className="c-mrkdwn__br" data-stringify-type="paragraph-break"></span>Fortunately the solution was as simple as re-migrating and re-seeding. I was just wondering if anyone has ever run into similar issues running postgres locally</div>
        //                                                         </div>
        //                                                         </div>
        //                                                     </div>
        //                                                 </div>
        //                                             </div>
        //                                             <div role="presentation" className="c-message__reply_bar c-message_kit__thread_replies" data-qa="reply_bar" data-stringify-ignore="true">
        //                                                 <button className="c-button-unstyled c-avatar c-avatar--interactive " aria-label="View Fishman (El Bagre)’s Profile" tabindex="0" aria-haspopup="menu" aria-expanded="false" type="button" style="height: 24px; width: 24px;"><img src="https://ca.slack-edge.com/T03GU501J-U219VHNAG-b8cd706ebab3-24" srcset="https://ca.slack-edge.com/T03GU501J-U219VHNAG-b8cd706ebab3-48 2x" className="c-base_icon c-base_icon--image" aria-hidden="true" role="img" alt="" style="height: 24px; width: 24px;"></button><button className="c-button-unstyled c-avatar c-avatar--interactive " aria-label="View jasminenoack’s Profile" tabindex="0" aria-haspopup="menu" aria-expanded="false" type="button" style="height: 24px; width: 24px;"><img src="https://ca.slack-edge.com/T03GU501J-U4J8KLF7S-gea444987d2e-24" srcset="https://ca.slack-edge.com/T03GU501J-U4J8KLF7S-gea444987d2e-48 2x" className="c-base_icon c-base_icon--image" aria-hidden="true" role="img" alt="" style="height: 24px; width: 24px;"></button><button className="c-button-unstyled c-avatar c-avatar--interactive " aria-label="View Max’s Profile" tabindex="0" aria-haspopup="menu" aria-expanded="false" type="button" style="height: 24px; width: 24px;"><img src="https://ca.slack-edge.com/T03GU501J-U0173CXKZGD-cdadb0380e42-24" srcset="https://ca.slack-edge.com/T03GU501J-U0173CXKZGD-cdadb0380e42-48 2x" className="c-base_icon c-base_icon--image" aria-hidden="true" role="img" alt="" style="height: 24px; width: 24px;"></button><button className="c-button-unstyled c-avatar c-avatar--interactive " aria-label="View David Webster’s Profile" tabindex="0" aria-haspopup="menu" aria-expanded="false" type="button" style="height: 24px; width: 24px;"><img src="https://ca.slack-edge.com/T03GU501J-U6X9J9Z0S-b1bf85398943-24" srcset="https://ca.slack-edge.com/T03GU501J-U6X9J9Z0S-b1bf85398943-48 2x" className="c-base_icon c-base_icon--image" aria-hidden="true" role="img" alt="" style="height: 24px; width: 24px;"></button><button className="c-button-unstyled c-avatar c-avatar--interactive " aria-label="View Sam Stark’s Profile" tabindex="0" aria-haspopup="menu" aria-expanded="false" type="button" style="height: 24px; width: 24px;"><img src="https://ca.slack-edge.com/T03GU501J-U018QCA2U6M-774113bf9a7f-24" srcset="https://ca.slack-edge.com/T03GU501J-U018QCA2U6M-774113bf9a7f-48 2x" className="c-base_icon c-base_icon--image" aria-hidden="true" role="img" alt="" style="height: 24px; width: 24px;"></button><a target="_blank" rel="noopener noreferrer" aria-expanded="false" className="c-link c-message__reply_count" href="">6 replies<span aria-label="(opens in new tab)"></span></a>
        //                                                 <div className="c-message__reply_bar_description"><span className="c-message__reply_bar_last_reply">Last reply 4 days ago</span><span className="c-message__reply_bar_view_thread">View thread</span></div>
        //                                                 <i className="c-deprecated-icon c-message__reply_bar_arrow c-icon--chevron-right c-deprecated-icon--vertical-align-baseline" type="chevron_right" aria-hidden="true"></i>
        //                                             </div>
        //                                             </div>
        //                                         </div>
        //                                     </div>
        //                                 </div>
        //                                 </div>
        //                             </div>
        //                             <div className="c-virtual_list__sticky_container" role="presentation" style="top: 442px; bottom: 1234.7px;">
        //                                 <div aria-roledescription="separator" aria-label="Wednesday, February 3rd Press enter to select a date to jump to." className="c-virtual_list__item--sticky c-virtual_list__item" tabindex="-1" role="listitem" id="1612339200000.C03GU502Q" data-qa="virtual-list-item" style="top: 0px; z-index: 199;">
        //                                 <div className="c-message_list__day_divider__label c-message_list__day_divider__label--jump_to_date"><button className="c-button-unstyled c-message_list__day_divider__label__pill" aria-label="Jump to date" aria-haspopup="menu" aria-expanded="false" type="button">Wednesday, February 3rd<i className="c-icon c-message_list__day_divider__label__pill__arrow c-icon--chevron-down" type="chevron-down" aria-hidden="true"></i></button></div>
        //                                 </div>
        //                             </div>
        //                             <div className="c-virtual_list__item" tabindex="-1" role="presentation" id="1612339200000divider" data-qa="virtual-list-item" style="top: 451px;">
        //                                 <div className="c-message_list__day_divider" data-stringify-ignore="true">
        //                                 <div className="c-message_list__day_divider__line" data-stringify-ignore="true"></div>
        //                                 </div>
        //                             </div>
        //                             <div aria-expanded="false" className="c-virtual_list__item" tabindex="-1" role="listitem" id="1612399085.207100" data-qa="virtual-list-item" style="top: 491px;">
        //                                 <div role="document" className="c-message_kit__background p-message_pane_message__message c-message_kit__message" data-qa="message_container" data-qa-unprocessed="false" data-qa-placeholder="false">
        //                                 <div role="document" className="c-message_kit__hover" data-qa-hover="true">
        //                                     <div className="c-message_kit__actions c-message_kit__actions--default" style="position: relative;">
        //                                         <div className="c-message_kit__labels__offscreen_message" aria-live="assertive"></div>
        //                                         <div className="c-message_kit__gutter">
        //                                             <div className="c-message_kit__gutter__left" data-stringify-ignore="true"><button className="c-button-unstyled c-message_kit__avatar c-avatar c-avatar--interactive " aria-hidden="true" aria-label="View Klyde’s Profile" tabindex="-1" aria-haspopup="menu" aria-expanded="false" type="button" style="height: 36px; width: 36px;"><img src="https://ca.slack-edge.com/T03GU501J-U01LXDKFR19-35d777223c25-48" srcset="https://ca.slack-edge.com/T03GU501J-U01LXDKFR19-35d777223c25-72 2x" className="c-base_icon c-base_icon--image" aria-hidden="true" role="img" alt="" style="height: 36px; width: 36px;"></button></div>
        //                                             <div className="c-message_kit__gutter__right" data-qa="message_content">
        //                                             <span className="c-message__sender c-message_kit__sender" data-qa="message_sender" data-stringify-type="replace" data-stringify-text="Klyde"><a target="_blank" rel="noopener noreferrer" data-message-sender="U01LXDKFR19" data-qa="message_sender_name" aria-haspopup="menu" aria-expanded="false" className="c-link c-message__sender_link " href="/team/U01LXDKFR19">Klyde<span aria-label="(opens in new tab)"></span></a></span>&nbsp;&nbsp;<a data-stringify-type="replace" data-stringify-text="[4:38 PM]" data-stringify-requires-siblings="true" data-ts="1612399085.207100" delay="300" data-sk="tooltip_parent" className="c-link c-timestamp" href="https://app-academy.slack.com/archives/C03GU502Q/p1612399085207100"><span className="c-timestamp__label">4:38 PM</span></a><br>
        //                                             <div className="c-message_kit__blocks c-message_kit__blocks--rich_text">
        //                                                 <div className="c-message__message_blocks c-message__message_blocks--rich_text">
        //                                                     <div className="p-block_kit_renderer" data-qa="block-kit-renderer">
        //                                                         <div className="p-block_kit_renderer__block_wrapper p-block_kit_renderer__block_wrapper--first">
        //                                                         <div className="p-rich_text_block" dir="auto">
        //                                                             <div className="p-rich_text_section"><span className="c-emoji c-emoji__medium c-emoji--inline" data-qa="emoji" delay="300" data-sk="tooltip_parent"><img src="https://a.slack-edge.com/production-standard-emoji-assets/13.0/apple-medium/1f64b.png" aria-label="raising hand emoji" alt=":raising_hand:" data-stringify-type="emoji" data-stringify-emoji=":raising_hand:"></span> Roll call! Who else is here?</div>
        //                                                         </div>
        //                                                         </div>
        //                                                     </div>
        //                                                 </div>
        //                                             </div>
        //                                             <div className="c-message_kit__reaction_bar c-reaction_bar c-reaction_bar--dark" role="group" data-qa="reaction_bar" aria-label="Reactions" data-stringify-ignore="true">
        //                                                 <button className="c-button-unstyled c-reaction c-reaction--dark" aria-label="17 reactions, react with +1 emoji" aria-pressed="false" data-qa="reactji" delay="300" data-sk="tooltip_parent" type="button"><img src="https://a.slack-edge.com/production-standard-emoji-assets/13.0/apple-small/1f44d.png" aria-label="+1 emoji" alt=":+1:" className="c-emoji c-emoji__small" data-qa="emoji" data-stringify-type="emoji" data-stringify-emoji=":+1:"><span className="c-reaction__count">17</span></button><button className="c-button-unstyled c-reaction c-reaction--dark" aria-label="1 reaction, react with shrug emoji" aria-pressed="false" data-qa="reactji" delay="300" data-sk="tooltip_parent" type="button"><img src="https://a.slack-edge.com/production-standard-emoji-assets/13.0/apple-small/1f937.png" aria-label="shrug emoji" alt=":shrug:" className="c-emoji c-emoji__small" data-qa="emoji" data-stringify-type="emoji" data-stringify-emoji=":shrug:"><span className="c-reaction__count">1</span></button><button className="c-button-unstyled c-reaction c-reaction--dark" aria-label="5 reactions, react with doge emoji" aria-pressed="false" data-qa="reactji" delay="300" data-sk="tooltip_parent" type="button"><img src="https://emoji.slack-edge.com/T03GU501J/doge/741694587e76f4d6.jpg" aria-label="doge emoji" alt=":doge:" className="c-emoji c-emoji__small" data-qa="emoji" data-stringify-type="emoji" data-stringify-emoji=":doge:"><span className="c-reaction__count">5</span></button><button className="c-button-unstyled c-reaction c-reaction--dark" aria-label="2 reactions, react with no good emoji" aria-pressed="false" data-qa="reactji" delay="300" data-sk="tooltip_parent" type="button"><img src="https://a.slack-edge.com/production-standard-emoji-assets/13.0/apple-small/1f645.png" aria-label="no good emoji" alt=":no_good:" className="c-emoji c-emoji__small" data-qa="emoji" data-stringify-type="emoji" data-stringify-emoji=":no_good:"><span className="c-reaction__count">2</span></button><button className="c-button-unstyled c-reaction c-reaction--dark" aria-label="3 reactions, react with cat on keyboard emoji" aria-pressed="false" data-qa="reactji" delay="300" data-sk="tooltip_parent" type="button"><img src="https://emoji.slack-edge.com/T03GU501J/cat-on-keyboard/b4b934e0b337f8ba.png" aria-label="cat on keyboard emoji" alt=":cat-on-keyboard:" className="c-emoji c-emoji__small" data-qa="emoji" data-stringify-type="emoji" data-stringify-emoji=":cat-on-keyboard:"><span className="c-reaction__count">3</span></button><button className="c-button-unstyled c-reaction c-reaction--dark" aria-label="3 reactions, react with alvin emoji" aria-pressed="false" data-qa="reactji" delay="300" data-sk="tooltip_parent" type="button"><img src="https://emoji.slack-edge.com/T03GU501J/alvin/38efd334875b6445.jpg" aria-label="alvin emoji" alt=":alvin:" className="c-emoji c-emoji__small" data-qa="emoji" data-stringify-type="emoji" data-stringify-emoji=":alvin:"><span className="c-reaction__count">3</span></button>
        //                                                 <button className="c-button-unstyled c-reaction_add c-reaction_add--dark" aria-label="Add reaction..." data-qa="add_reaction_button" delay="300" aria-haspopup="true" data-sk="tooltip_parent" type="button">
        //                                                     <div className="c-reaction_add__container"><i className="c-icon c-reaction_add__icon c-reaction_add__icon--bg c-icon--small-reaction-bg" type="small-reaction-bg" aria-hidden="true"></i><i className="c-icon c-reaction_add__icon c-reaction_add__icon--fg c-icon--small-reaction" type="small-reaction" aria-hidden="true"></i></div>
        //                                                 </button>
        //                                             </div>
        //                                             </div>
        //                                         </div>
        //                                     </div>
        //                                 </div>
        //                                 </div>
        //                             </div>
        //                             <div className="c-virtual_list__sticky_container" role="presentation" style="top: 575px; bottom: 1011.7px;">
        //                                 <div aria-roledescription="separator" aria-label="Thursday, February 4th Start of unread messages. Press enter to select a date to jump to." className="c-virtual_list__item--sticky c-virtual_list__item" tabindex="-1" role="listitem" id="1612425600000.C03GU502Q" data-qa="virtual-list-item" style="top: 0px; z-index: 199;">
        //                                 <div className="c-message_list__day_divider__label c-message_list__day_divider__label--jump_to_date"><button className="c-button-unstyled c-message_list__day_divider__label__pill" aria-label="Jump to date" aria-haspopup="menu" aria-expanded="false" type="button">Thursday, February 4th<i className="c-icon c-message_list__day_divider__label__pill__arrow c-icon--chevron-down" type="chevron-down" aria-hidden="true"></i></button></div>
        //                                 </div>
        //                             </div>
        //                             <div className="c-virtual_list__item" tabindex="-1" role="presentation" id="1612425600000divider" data-qa="virtual-list-item" style="top: 584px;">
        //                                 <div className="c-message_list__day_divider" data-stringify-ignore="true">
        //                                 <div className="c-message_list__unread_divider c-message_list__unread_divider--ghost c-message_list__unread_divider--unread_threads" data-stringify-ignore="true">
        //                                     <hr className="c-message_list__unread_divider__separator" aria-hidden="true" data-qa="">
        //                                     <span className="c-message_list__unread_divider__label">New</span>
        //                                 </div>
        //                                 </div>
        //                             </div>
        //                             <div aria-expanded="false" className="c-virtual_list__item" tabindex="-1" role="listitem" id="1612469638.214000" data-qa="virtual-list-item" style="top: 624px;">
        //                                 <div role="document" className="c-message_kit__background p-message_pane_message__message c-message_kit__message" data-qa="message_container" data-qa-unprocessed="false" data-qa-placeholder="false">
        //                                 <div role="document" className="c-message_kit__hover" data-qa-hover="true">
        //                                     <div className="c-message_kit__actions c-message_kit__actions--default" style="position: relative;">
        //                                         <div className="c-message_kit__labels__offscreen_message" aria-live="assertive"></div>
        //                                         <div className="c-message_kit__gutter">
        //                                             <div className="c-message_kit__gutter__left" data-stringify-ignore="true"><button className="c-button-unstyled c-message_kit__avatar c-avatar c-avatar--interactive " aria-hidden="true" aria-label="View Adrian Apodaca’s Profile" tabindex="-1" aria-haspopup="menu" aria-expanded="false" type="button" style="height: 36px; width: 36px;"><img src="https://ca.slack-edge.com/T03GU501J-U013PAS7G9J-06c374ff1cf3-48" srcset="https://ca.slack-edge.com/T03GU501J-U013PAS7G9J-06c374ff1cf3-72 2x" className="c-base_icon c-base_icon--image" aria-hidden="true" role="img" alt="" style="height: 36px; width: 36px;"></button></div>
        //                                             <div className="c-message_kit__gutter__right" data-qa="message_content">
        //                                             <span className="c-message__sender c-message_kit__sender" data-qa="message_sender" data-stringify-type="replace" data-stringify-text="Adrian Apodaca"><a target="_blank" rel="noopener noreferrer" data-message-sender="U013PAS7G9J" data-qa="message_sender_name" aria-haspopup="menu" aria-expanded="false" className="c-link c-message__sender_link " href="/team/U013PAS7G9J">Adrian Apodaca<span aria-label="(opens in new tab)"></span></a></span>&nbsp;&nbsp;<a data-stringify-type="replace" data-stringify-text="[12:13 PM]" data-stringify-requires-siblings="true" data-ts="1612469638.214000" delay="300" data-sk="tooltip_parent" className="c-link c-timestamp" href="https://app-academy.slack.com/archives/C03GU502Q/p1612469638214000"><span className="c-timestamp__label">12:13 PM</span></a><br>
        //                                             <div className="c-message_kit__blocks c-message_kit__blocks--rich_text">
        //                                                 <div className="c-message__message_blocks c-message__message_blocks--rich_text">
        //                                                     <div className="p-block_kit_renderer" data-qa="block-kit-renderer">
        //                                                         <div className="p-block_kit_renderer__block_wrapper p-block_kit_renderer__block_wrapper--first">
        //                                                         <div className="p-rich_text_block" dir="auto">
        //                                                             <div className="p-rich_text_section">General question. In our cohort we had a brief overview of Capybara. It seems to me that as far as writing tests, there is the possibility of writing integration tests with and rails and a javascript frontend using Capybara-webkit, for a rails/js app it seems like it would probably just make more sense to use rspec &amp; jest. Does anybody have thoughts on this?&nbsp; Is capybara just kind of a dated part of the A/A in person curriculum.</div>
        //                                                         </div>
        //                                                         </div>
        //                                                     </div>
        //                                                 </div>
        //                                             </div>
        //                                             <div role="presentation" className="c-message__reply_bar c-message_kit__thread_replies" data-qa="reply_bar" data-stringify-ignore="true">
        //                                                 <button className="c-button-unstyled c-avatar c-avatar--interactive " aria-label="View mc962’s Profile" tabindex="0" aria-haspopup="menu" aria-expanded="false" type="button" style="height: 24px; width: 24px;"><img src="https://ca.slack-edge.com/T03GU501J-U3G406GAH-ffda8e2bb3e9-24" srcset="https://ca.slack-edge.com/T03GU501J-U3G406GAH-ffda8e2bb3e9-48 2x" className="c-base_icon c-base_icon--image" aria-hidden="true" role="img" alt="" style="height: 24px; width: 24px;"></button><button className="c-button-unstyled c-avatar c-avatar--interactive " aria-label="View Adrian Apodaca’s Profile" tabindex="0" aria-haspopup="menu" aria-expanded="false" type="button" style="height: 24px; width: 24px;"><img src="https://ca.slack-edge.com/T03GU501J-U013PAS7G9J-06c374ff1cf3-24" srcset="https://ca.slack-edge.com/T03GU501J-U013PAS7G9J-06c374ff1cf3-48 2x" className="c-base_icon c-base_icon--image" aria-hidden="true" role="img" alt="" style="height: 24px; width: 24px;"></button><button className="c-button-unstyled c-avatar c-avatar--interactive " aria-label="View dbz’s Profile" tabindex="0" aria-haspopup="menu" aria-expanded="false" type="button" style="height: 24px; width: 24px;"><img src="https://ca.slack-edge.com/T03GU501J-U0FV4UW80-af45ae685e7b-24" srcset="https://ca.slack-edge.com/T03GU501J-U0FV4UW80-af45ae685e7b-48 2x" className="c-base_icon c-base_icon--image" aria-hidden="true" role="img" alt="" style="height: 24px; width: 24px;"></button><button className="c-button-unstyled c-avatar c-avatar--interactive " aria-label="View stephen’s Profile" tabindex="0" aria-haspopup="menu" aria-expanded="false" type="button" style="height: 24px; width: 24px;"><img src="https://ca.slack-edge.com/T03GU501J-U5KK1P1CN-50ccdf0dbae0-24" srcset="https://ca.slack-edge.com/T03GU501J-U5KK1P1CN-50ccdf0dbae0-48 2x" className="c-base_icon c-base_icon--image" aria-hidden="true" role="img" alt="" style="height: 24px; width: 24px;"></button>
        //                                                 <button className="c-button-unstyled c-avatar c-avatar--interactive " aria-label="View Greg Waite’s Profile" tabindex="0" aria-haspopup="menu" aria-expanded="false" type="button" style="height: 24px; width: 24px;">
        //                                                     <img src="https://ca.slack-edge.com/T03GU501J-UDHPQD2KH-g2b0e2b75c2c-24" srcset="https://ca.slack-edge.com/T03GU501J-UDHPQD2KH-g2b0e2b75c2c-48 2x" className="c-base_icon c-base_icon--image" aria-hidden="true" role="img" alt="" style="height: 24px; width: 24px;">
        //                                                     <div className="c-avatar__additional_overlay">+1</div>
        //                                                 </button>
        //                                                 <a target="_blank" rel="noopener noreferrer" aria-expanded="false" className="c-link c-message__reply_count" href="">12 replies<span aria-label="(opens in new tab)"></span></a>
        //                                                 <div className="c-message__reply_bar_description"><span className="c-message__reply_bar_last_reply">Last reply 3 days ago</span><span className="c-message__reply_bar_view_thread">View thread</span></div>
        //                                                 <i className="c-deprecated-icon c-message__reply_bar_arrow c-icon--chevron-right c-deprecated-icon--vertical-align-baseline" type="chevron_right" aria-hidden="true"></i>
        //                                             </div>
        //                                             </div>
        //                                         </div>
        //                                     </div>
        //                                 </div>
        //                                 </div>
        //                             </div>
        //                             <div className="c-virtual_list__sticky_container" role="presentation" style="top: 798px; bottom: 217px;">
        //                                 <div aria-roledescription="separator" aria-label="Friday, February 5th Press enter to select a date to jump to." className="c-virtual_list__item--sticky c-virtual_list__item" tabindex="-1" role="listitem" id="1612512000000.C03GU502Q" data-qa="virtual-list-item" style="top: 0px; z-index: 199;">
        //                                 <div className="c-message_list__day_divider__label c-message_list__day_divider__label--jump_to_date"><button className="c-button-unstyled c-message_list__day_divider__label__pill" aria-label="Jump to date" aria-haspopup="menu" aria-expanded="false" type="button">Friday, February 5th<i className="c-icon c-message_list__day_divider__label__pill__arrow c-icon--chevron-down" type="chevron-down" aria-hidden="true"></i></button></div>
        //                                 </div>
        //                             </div>
        //                             <div className="c-virtual_list__item" tabindex="-1" role="presentation" id="1612512000000divider" data-qa="virtual-list-item" style="top: 807px;">
        //                                 <div className="c-message_list__day_divider" data-stringify-ignore="true">
        //                                 <div className="c-message_list__day_divider__line" data-stringify-ignore="true"></div>
        //                                 </div>
        //                             </div>
        //                             <div aria-expanded="false" className="c-virtual_list__item" tabindex="-1" role="listitem" id="1612544875.225200" data-qa="virtual-list-item" style="top: 847px;">
        //                                 <div role="document" className="c-message_kit__background p-message_pane_message__message c-message_kit__message" data-qa="message_container" data-qa-unprocessed="false" data-qa-placeholder="false">
        //                                 <div role="document" className="c-message_kit__hover" data-qa-hover="true">
        //                                     <div className="c-message_kit__actions c-message_kit__actions--default" style="position: relative;">
        //                                         <div className="c-message_kit__labels__offscreen_message" aria-live="assertive"></div>
        //                                         <div className="c-message_kit__gutter">
        //                                             <div className="c-message_kit__gutter__left" data-stringify-ignore="true"><button className="c-button-unstyled c-message_kit__avatar c-avatar c-avatar--interactive " aria-hidden="true" aria-label="View Shawki Kased’s Profile" tabindex="-1" aria-haspopup="menu" aria-expanded="false" type="button" style="height: 36px; width: 36px;"><img src="https://ca.slack-edge.com/T03GU501J-UNDSYKG0Y-0219bb03397a-48" srcset="https://ca.slack-edge.com/T03GU501J-UNDSYKG0Y-0219bb03397a-72 2x" className="c-base_icon c-base_icon--image" aria-hidden="true" role="img" alt="" style="height: 36px; width: 36px;"></button></div>
        //                                             <div className="c-message_kit__gutter__right" data-qa="message_content">
        //                                             <span className="c-message__sender c-message_kit__sender" data-qa="message_sender" data-stringify-type="replace" data-stringify-text="Shawki Kased"><a target="_blank" rel="noopener noreferrer" data-message-sender="UNDSYKG0Y" data-qa="message_sender_name" aria-haspopup="menu" aria-expanded="false" className="c-link c-message__sender_link " href="/team/UNDSYKG0Y">Shawki Kased<span aria-label="(opens in new tab)"></span></a><span className="c-custom_status" data-qa="custom_status" delay="150" data-sk="tooltip_parent"><span className="c-emoji c-emoji__small c-emoji--inline" data-qa="emoji"><img src="https://slack-imgs.com/?c=1&amp;o1=gu&amp;url=https%3A%2F%2Fa.slack-edge.com%2Fproduction-standard-emoji-assets%2F13.0%2Fapple-small%2F1f4ac.png" aria-label="speech balloon emoji" alt=":speech_balloon:" data-stringify-type="emoji" data-stringify-emoji=":speech_balloon:"></span></span></span>&nbsp;&nbsp;<a data-stringify-type="replace" data-stringify-text="[9:07 AM]" data-stringify-requires-siblings="true" data-ts="1612544875.225200" delay="300" data-sk="tooltip_parent" className="c-link c-timestamp" href="https://app-academy.slack.com/archives/C03GU502Q/p1612544875225200"><span className="c-timestamp__label">9:07 AM</span></a><br>
        //                                             <div className="c-message_kit__blocks c-message_kit__blocks--rich_text">
        //                                                 <div className="c-message__message_blocks c-message__message_blocks--rich_text">
        //                                                     <div className="p-block_kit_renderer" data-qa="block-kit-renderer">
        //                                                         <div className="p-block_kit_renderer__block_wrapper p-block_kit_renderer__block_wrapper--first">
        //                                                         <div className="p-rich_text_block" dir="auto">
        //                                                             <div className="p-rich_text_section">Does anybody know any good tools or guides on how to drag and drop elements between components? I'm using Angular and while the cdk drag and drop works, i can't seem to connect them between 2 components on the same page.<span className="c-message__edited_label" dir="ltr" delay="300" data-sk="tooltip_parent">&nbsp;(edited)&nbsp;</span></div>
        //                                                         </div>
        //                                                         </div>
        //                                                     </div>
        //                                                 </div>
        //                                             </div>
        //                                             <div role="presentation" className="c-message__reply_bar c-message_kit__thread_replies" data-qa="reply_bar" data-stringify-ignore="true">
        //                                                 <button className="c-button-unstyled c-avatar c-avatar--interactive " aria-label="View oalvarez’s Profile" tabindex="0" aria-haspopup="menu" aria-expanded="false" type="button" style="height: 24px; width: 24px;"><img src="https://ca.slack-edge.com/T03GU501J-U21KC7NAF-8ee608bce34a-24" srcset="https://ca.slack-edge.com/T03GU501J-U21KC7NAF-8ee608bce34a-48 2x" className="c-base_icon c-base_icon--image" aria-hidden="true" role="img" alt="" style="height: 24px; width: 24px;"></button><button className="c-button-unstyled c-avatar c-avatar--interactive " aria-label="View Shawki Kased’s Profile" tabindex="0" aria-haspopup="menu" aria-expanded="false" type="button" style="height: 24px; width: 24px;"><img src="https://ca.slack-edge.com/T03GU501J-UNDSYKG0Y-0219bb03397a-24" srcset="https://ca.slack-edge.com/T03GU501J-UNDSYKG0Y-0219bb03397a-48 2x" className="c-base_icon c-base_icon--image" aria-hidden="true" role="img" alt="" style="height: 24px; width: 24px;"></button><button className="c-button-unstyled c-avatar c-avatar--interactive " aria-label="View Shaie’s Profile" tabindex="0" aria-haspopup="menu" aria-expanded="false" type="button" style="height: 24px; width: 24px;"><img src="https://ca.slack-edge.com/T03GU501J-U011T9W0DSA-9fab0d945315-24" srcset="https://ca.slack-edge.com/T03GU501J-U011T9W0DSA-9fab0d945315-48 2x" className="c-base_icon c-base_icon--image" aria-hidden="true" role="img" alt="" style="height: 24px; width: 24px;"></button><button className="c-button-unstyled c-avatar c-avatar--interactive " aria-label="View timhwang21’s Profile" tabindex="0" aria-haspopup="menu" aria-expanded="false" type="button" style="height: 24px; width: 24px;"><img src="https://ca.slack-edge.com/T03GU501J-U0HMQLHL4-0dea668aa8eb-24" srcset="https://ca.slack-edge.com/T03GU501J-U0HMQLHL4-0dea668aa8eb-48 2x" className="c-base_icon c-base_icon--image" aria-hidden="true" role="img" alt="" style="height: 24px; width: 24px;"></button>
        //                                                 <button className="c-button-unstyled c-avatar c-avatar--interactive " aria-label="View jasminenoack’s Profile" tabindex="0" aria-haspopup="menu" aria-expanded="false" type="button" style="height: 24px; width: 24px;">
        //                                                     <img src="https://ca.slack-edge.com/T03GU501J-U4J8KLF7S-gea444987d2e-24" srcset="https://ca.slack-edge.com/T03GU501J-U4J8KLF7S-gea444987d2e-48 2x" className="c-base_icon c-base_icon--image" aria-hidden="true" role="img" alt="" style="height: 24px; width: 24px;">
        //                                                     <div className="c-avatar__additional_overlay">+1</div>
        //                                                 </button>
        //                                                 <a target="_blank" rel="noopener noreferrer" aria-expanded="false" className="c-link c-message__reply_count" href="">11 replies<span aria-label="(opens in new tab)"></span></a>
        //                                                 <div className="c-message__reply_bar_description"><span className="c-message__reply_bar_last_reply">Last reply 2 days ago</span><span className="c-message__reply_bar_view_thread">View thread</span></div>
        //                                                 <i className="c-deprecated-icon c-message__reply_bar_arrow c-icon--chevron-right c-deprecated-icon--vertical-align-baseline" type="chevron_right" aria-hidden="true"></i>
        //                                             </div>
        //                                             </div>
        //                                         </div>
        //                                     </div>
        //                                 </div>
        //                                 </div>
        //                             </div>
        //                             <div aria-expanded="false" className="c-virtual_list__item" tabindex="-1" role="listitem" id="1612548812.228700" data-qa="virtual-list-item" style="top: 977px;">
        //                                 <div role="document" className="c-message_kit__background p-message_pane_message__message c-message_kit__message" data-qa="message_container" data-qa-unprocessed="false" data-qa-placeholder="false">
        //                                 <div role="document" className="c-message_kit__hover" data-qa-hover="true">
        //                                     <div className="c-message_kit__actions c-message_kit__actions--default" style="position: relative;">
        //                                         <div className="c-message_kit__labels__offscreen_message" aria-live="assertive"></div>
        //                                         <div className="c-message_kit__gutter">
        //                                             <div className="c-message_kit__gutter__left" data-stringify-ignore="true"><button className="c-button-unstyled c-message_kit__avatar c-avatar c-avatar--interactive " aria-hidden="true" aria-label="View Ali Kim’s Profile" tabindex="-1" aria-haspopup="menu" aria-expanded="false" type="button" style="height: 36px; width: 36px;"><img src="https://ca.slack-edge.com/T03GU501J-U0161BM3DGU-gc581b9a2e54-48" srcset="https://ca.slack-edge.com/T03GU501J-U0161BM3DGU-gc581b9a2e54-72 2x" className="c-base_icon c-base_icon--image" aria-hidden="true" role="img" alt="" style="height: 36px; width: 36px;"></button></div>
        //                                             <div className="c-message_kit__gutter__right" data-qa="message_content">
        //                                             <span className="c-message__sender c-message_kit__sender" data-qa="message_sender" data-stringify-type="replace" data-stringify-text="Ali Kim"><a target="_blank" rel="noopener noreferrer" data-message-sender="U0161BM3DGU" data-qa="message_sender_name" aria-haspopup="menu" aria-expanded="false" className="c-link c-message__sender_link " href="/team/U0161BM3DGU">Ali Kim<span aria-label="(opens in new tab)"></span></a></span>&nbsp;&nbsp;<a data-stringify-type="replace" data-stringify-text="[10:13 AM]" data-stringify-requires-siblings="true" data-ts="1612548812.228700" delay="300" data-sk="tooltip_parent" className="c-link c-timestamp" href="https://app-academy.slack.com/archives/C03GU502Q/p1612548812228700"><span className="c-timestamp__label">10:13 AM</span></a><br>
        //                                             <div className="c-message_kit__blocks c-message_kit__blocks--rich_text">
        //                                                 <div className="c-message__message_blocks c-message__message_blocks--rich_text">
        //                                                     <div className="p-block_kit_renderer" data-qa="block-kit-renderer">
        //                                                         <div className="p-block_kit_renderer__block_wrapper p-block_kit_renderer__block_wrapper--first">
        //                                                         <div className="p-rich_text_block" dir="auto">
        //                                                             <div className="p-rich_text_section">Any recommendations of good developers or accounts to follow on Twitter for interesting tech news and such?</div>
        //                                                         </div>
        //                                                         </div>
        //                                                     </div>
        //                                                 </div>
        //                                             </div>
        //                                             <div className="c-message_kit__reaction_bar c-reaction_bar c-reaction_bar--dark" role="group" data-qa="reaction_bar" aria-label="Reactions" data-stringify-ignore="true">
        //                                                 <button className="c-button-unstyled c-reaction c-reaction--dark" aria-label="2 reactions, react with +1 emoji" aria-pressed="false" data-qa="reactji" delay="300" data-sk="tooltip_parent" type="button"><img src="https://a.slack-edge.com/production-standard-emoji-assets/13.0/apple-small/1f44d.png" aria-label="+1 emoji" alt=":+1:" className="c-emoji c-emoji__small" data-qa="emoji" data-stringify-type="emoji" data-stringify-emoji=":+1:"><span className="c-reaction__count">2</span></button>
        //                                                 <button className="c-button-unstyled c-reaction_add c-reaction_add--dark" aria-label="Add reaction..." data-qa="add_reaction_button" delay="300" aria-haspopup="true" data-sk="tooltip_parent" type="button">
        //                                                     <div className="c-reaction_add__container"><i className="c-icon c-reaction_add__icon c-reaction_add__icon--bg c-icon--small-reaction-bg" type="small-reaction-bg" aria-hidden="true"></i><i className="c-icon c-reaction_add__icon c-reaction_add__icon--fg c-icon--small-reaction" type="small-reaction" aria-hidden="true"></i></div>
        //                                                 </button>
        //                                             </div>
        //                                             <div role="presentation" className="c-message__reply_bar c-message_kit__thread_replies" data-qa="reply_bar" data-stringify-ignore="true">
        //                                                 <button className="c-button-unstyled c-avatar c-avatar--interactive " aria-label="View Donald Herndon’s Profile" tabindex="0" aria-haspopup="menu" aria-expanded="false" type="button" style="height: 24px; width: 24px;"><img src="https://ca.slack-edge.com/T03GU501J-U01315768SW-0e66d75fee0e-24" srcset="https://ca.slack-edge.com/T03GU501J-U01315768SW-0e66d75fee0e-48 2x" className="c-base_icon c-base_icon--image" aria-hidden="true" role="img" alt="" style="height: 24px; width: 24px;"></button><button className="c-button-unstyled c-avatar c-avatar--interactive " aria-label="View jacobleesinger’s Profile" tabindex="0" aria-haspopup="menu" aria-expanded="false" type="button" style="height: 24px; width: 24px;"><img src="https://ca.slack-edge.com/T03GU501J-U0B9HDKA9-g1a17fc604d4-24" srcset="https://ca.slack-edge.com/T03GU501J-U0B9HDKA9-g1a17fc604d4-48 2x" className="c-base_icon c-base_icon--image" aria-hidden="true" role="img" alt="" style="height: 24px; width: 24px;"></button><button className="c-button-unstyled c-avatar c-avatar--interactive " aria-label="View Matthew Martinez’s Profile" tabindex="0" aria-haspopup="menu" aria-expanded="false" type="button" style="height: 24px; width: 24px;"><img src="https://ca.slack-edge.com/T03GU501J-U971LDCH0-98c84a08e555-24" srcset="https://ca.slack-edge.com/T03GU501J-U971LDCH0-98c84a08e555-48 2x" className="c-base_icon c-base_icon--image" aria-hidden="true" role="img" alt="" style="height: 24px; width: 24px;"></button><button className="c-button-unstyled c-avatar c-avatar--interactive " aria-label="View Ali Kim’s Profile" tabindex="0" aria-haspopup="menu" aria-expanded="false" type="button" style="height: 24px; width: 24px;"><img src="https://ca.slack-edge.com/T03GU501J-U0161BM3DGU-gc581b9a2e54-24" srcset="https://ca.slack-edge.com/T03GU501J-U0161BM3DGU-gc581b9a2e54-48 2x" className="c-base_icon c-base_icon--image" aria-hidden="true" role="img" alt="" style="height: 24px; width: 24px;"></button><a target="_blank" rel="noopener noreferrer" aria-expanded="false" className="c-link c-message__reply_count" href="">5 replies<span aria-label="(opens in new tab)"></span></a>
        //                                                 <div className="c-message__reply_bar_description"><span className="c-message__reply_bar_last_reply">Last reply 1 day ago</span><span className="c-message__reply_bar_view_thread">View thread</span></div>
        //                                                 <i className="c-deprecated-icon c-message__reply_bar_arrow c-icon--chevron-right c-deprecated-icon--vertical-align-baseline" type="chevron_right" aria-hidden="true"></i>
        //                                             </div>
        //                                             </div>
        //                                         </div>
        //                                     </div>
        //                                 </div>
        //                                 </div>
        //                             </div>
        //                             <div aria-expanded="false" className="c-virtual_list__item" tabindex="-1" role="listitem" id="1612554672.233800" data-qa="virtual-list-item" style="top: 1117px;">
        //                                 <div role="document" className="c-message_kit__background p-message_pane_message__message c-message_kit__message" data-qa="message_container" data-qa-unprocessed="false" data-qa-placeholder="false">
        //                                 <div role="document" className="c-message_kit__hover" data-qa-hover="true">
        //                                     <div className="c-message_kit__actions c-message_kit__actions--default" style="position: relative;">
        //                                         <div className="c-message_kit__labels__offscreen_message" aria-live="assertive"></div>
        //                                         <div className="c-message_kit__gutter">
        //                                             <div className="c-message_kit__gutter__left" data-stringify-ignore="true"><button className="c-button-unstyled c-message_kit__avatar c-avatar c-avatar--interactive " aria-hidden="true" aria-label="View Hayden Linder’s Profile" tabindex="-1" aria-haspopup="menu" aria-expanded="false" type="button" style="height: 36px; width: 36px;"><img src="https://ca.slack-edge.com/T03GU501J-UQ5EAEAQN-c0ae8ce97ede-48" srcset="https://ca.slack-edge.com/T03GU501J-UQ5EAEAQN-c0ae8ce97ede-72 2x" className="c-base_icon c-base_icon--image" aria-hidden="true" role="img" alt="" style="height: 36px; width: 36px;"></button></div>
        //                                             <div className="c-message_kit__gutter__right" data-qa="message_content">
        //                                             <span className="c-message__sender c-message_kit__sender" data-qa="message_sender" data-stringify-type="replace" data-stringify-text="Hayden Linder"><a target="_blank" rel="noopener noreferrer" data-message-sender="UQ5EAEAQN" data-qa="message_sender_name" aria-haspopup="menu" aria-expanded="false" className="c-link c-message__sender_link " href="/team/UQ5EAEAQN">Hayden Linder<span aria-label="(opens in new tab)"></span></a></span>&nbsp;&nbsp;<a data-stringify-type="replace" data-stringify-text="[11:51 AM]" data-stringify-requires-siblings="true" data-ts="1612554672.233800" delay="300" data-sk="tooltip_parent" className="c-link c-timestamp" href="https://app-academy.slack.com/archives/C03GU502Q/p1612554672233800"><span className="c-timestamp__label">11:51 AM</span></a><br>
        //                                             <div className="c-message_kit__blocks c-message_kit__blocks--rich_text">
        //                                                 <div className="c-message__message_blocks c-message__message_blocks--rich_text">
        //                                                     <div className="p-block_kit_renderer" data-qa="block-kit-renderer">
        //                                                         <div className="p-block_kit_renderer__block_wrapper p-block_kit_renderer__block_wrapper--first">
        //                                                         <div className="p-rich_text_block" dir="auto">
        //                                                             <div className="p-rich_text_section">PSA <span className="c-mrkdwn__br" data-stringify-type="paragraph-break"></span><a target="_blank" className="c-link" data-stringify-link="https://youtu.be/pSUdOmrd2Wg" delay="150" data-sk="tooltip_parent" href="https://youtu.be/pSUdOmrd2Wg" rel="noopener noreferrer">https://youtu.be/pSUdOmrd2Wg</a></div>
        //                                                         </div>
        //                                                         </div>
        //                                                     </div>
        //                                                 </div>
        //                                             </div>
        //                                             <div className="c-message_kit__attachments">
        //                                                 <div className="c-message_attachment">
        //                                                     <div className="c-message_attachment__border"></div>
        //                                                     <div className="c-message_attachment__body">
        //                                                         <div className="c-message_attachment__row"><span className="c-message_attachment__author c-message_attachment__author--has_subname" data-qa="message_attachment_author"><span className="c-message_attachment__part"><a target="_blank" rel="noopener noreferrer" className="c-link c-message_attachment__author_link" href="https://www.youtube.com/"><img className="c-message_attachment__author_icon" alt="YouTube" src="https://slack-imgs.com/?c=1&amp;o1=wi32.he32.si&amp;url=https%3A%2F%2Fa.slack-edge.com%2F80588%2Fimg%2Funfurl_icons%2Fyoutube.png" width="16" height="16" data-qa="message_attachment_author_icon" data-stringify-ignore="true"><span aria-label="(opens in new tab)"></span></a><a target="_blank" rel="noopener noreferrer" className="c-link c-message_attachment__author_link" href="https://www.youtube.com/"><span className="c-message_attachment__author_name" dir="auto" data-qa="message_attachment_author_name">YouTube</span><span aria-label="(opens in new tab)"></span></a></span> | <a target="_blank" rel="noopener noreferrer" data-qa="message_attachment_link" className="c-link c-message_attachment__part c-message_attachment__author_link" href="https://www.youtube.com/c/BenAwad97"><span className="c-message_attachment__author_subname" dir="auto">Ben Awad</span><span aria-label="(opens in new tab)"></span></a></span></div>
        //                                                         <div className="c-message_attachment__row"><span className="c-message_attachment__title"><a target="_blank" rel="noreferrer noopener" data-qa="message_attachment_title_link" className="c-link c-message_attachment__title_link" href="https://youtu.be/pSUdOmrd2Wg"><span dir="auto">How to Google - You Suck at Coding [2]</span><span aria-label="(opens in new tab)"></span></a></span><span className="c-message_attachment__media_trigger" data-stringify-ignore="true"> <button className="c-button-unstyled c-expandable_trigger" title="collapse" data-qa-expandable-trigger-is-expanded="true" data-qa-expandable-trigger-key="vid_msg_1612554672.2338001" aria-expanded="true" type="button"><i className="c-deprecated-icon c-icon--caret-down c-deprecated-icon--inherit" type="caret_down" aria-hidden="true"></i></button></span></div>
        //                                                         <div className="c-message_attachment__row">
        //                                                         <div className="c-message_attachment__video" aria-label="toggle How to Google - You Suck at Coding [2] video" data-expanded="true" data-qa-expandable-container-is-expanded="true" data-qa-expandable-container-key="vid_msg_1612554672.2338001">
        //                                                             <div className="c-aspect_box__outer c-message_attachment__video_container" style="width: 360px;">
        //                                                                 <div className="c-aspect_box__inner" style="padding-top: 75%;">
        //                                                                     <div className="c-aspect_box__content">
        //                                                                     <div className="c-message_attachment__video_thumb" style="background-image: url(&quot;https://slack-imgs.com/?c=1&amp;o1=wi360.he270.si&amp;url=https%3A%2F%2Fi.ytimg.com%2Fvi%2FpSUdOmrd2Wg%2Fhqdefault.jpg&quot;);">
        //                                                                         <div className="c-message_attachment__video_buttons"><button className="c-button-unstyled c-message_attachment__video_play" type="button"><i className="c-deprecated-icon c-icon--play c-deprecated-icon--inherit" type="play" aria-hidden="true"></i></button><a target="_blank" rel="noopener noreferrer" className="c-link c-message_attachment__video_link" href="https://youtu.be/pSUdOmrd2Wg"><i className="c-deprecated-icon c-icon--external-link c-deprecated-icon--inherit" type="external_link" aria-hidden="true"></i><span aria-label="(opens in new tab)"></span></a></div>
        //                                                                     </div>
        //                                                                     </div>
        //                                                                 </div>
        //                                                             </div>
        //                                                         </div>
        //                                                         </div>
        //                                                     </div>
        //                                                 </div>
        //                                             </div>
        //                                             <div className="c-message_kit__reaction_bar c-reaction_bar c-reaction_bar--dark" role="group" data-qa="reaction_bar" aria-label="Reactions" data-stringify-ignore="true">
        //                                                 <button className="c-button-unstyled c-reaction c-reaction--dark" aria-label="6 reactions, react with joy emoji" aria-pressed="false" data-qa="reactji" delay="300" data-sk="tooltip_parent" type="button"><img src="https://a.slack-edge.com/production-standard-emoji-assets/13.0/apple-small/1f602.png" aria-label="joy emoji" alt=":joy:" className="c-emoji c-emoji__small" data-qa="emoji" data-stringify-type="emoji" data-stringify-emoji=":joy:"><span className="c-reaction__count">6</span></button><button className="c-button-unstyled c-reaction c-reaction--dark" aria-label="3 reactions, react with partyparrot emoji" aria-pressed="false" data-qa="reactji" delay="300" data-sk="tooltip_parent" type="button"><img src="https://emoji.slack-edge.com/T03GU501J/partyparrot/b2b4456aa2d03fa7.gif" aria-label="partyparrot emoji" alt=":partyparrot:" className="c-emoji c-emoji__small" data-qa="emoji" data-stringify-type="emoji" data-stringify-emoji=":partyparrot:"><span className="c-reaction__count">3</span></button><button className="c-button-unstyled c-reaction c-reaction--dark" aria-label="3 reactions, react with google emoji" aria-pressed="false" data-qa="reactji" delay="300" data-sk="tooltip_parent" type="button"><img src="https://emoji.slack-edge.com/T03GU501J/google/f42c28cf713d8b5e.png" aria-label="google emoji" alt=":google:" className="c-emoji c-emoji__small" data-qa="emoji" data-stringify-type="emoji" data-stringify-emoji=":google:"><span className="c-reaction__count">3</span></button><button className="c-button-unstyled c-reaction c-reaction--dark" aria-label="3 reactions, react with tru emoji" aria-pressed="false" data-qa="reactji" delay="300" data-sk="tooltip_parent" type="button"><img src="https://emoji.slack-edge.com/T03GU501J/tru/093ab01169d66229.png" aria-label="tru emoji" alt=":tru:" className="c-emoji c-emoji__small" data-qa="emoji" data-stringify-type="emoji" data-stringify-emoji=":tru:"><span className="c-reaction__count">3</span></button>
        //                                                 <button className="c-button-unstyled c-reaction_add c-reaction_add--dark" aria-label="Add reaction..." data-qa="add_reaction_button" delay="300" aria-haspopup="true" data-sk="tooltip_parent" type="button">
        //                                                     <div className="c-reaction_add__container"><i className="c-icon c-reaction_add__icon c-reaction_add__icon--bg c-icon--small-reaction-bg" type="small-reaction-bg" aria-hidden="true"></i><i className="c-icon c-reaction_add__icon c-reaction_add__icon--fg c-icon--small-reaction" type="small-reaction" aria-hidden="true"></i></div>
        //                                                 </button>
        //                                             </div>
        //                                             <div role="presentation" className="c-message__reply_bar c-message_kit__thread_replies" data-qa="reply_bar" data-stringify-ignore="true">
        //                                                 <button className="c-button-unstyled c-avatar c-avatar--interactive " aria-label="View dallashall’s Profile" tabindex="0" aria-haspopup="menu" aria-expanded="false" type="button" style="height: 24px; width: 24px;"><img src="https://ca.slack-edge.com/T03GU501J-U3TU027S5-ea36f29bc2a6-24" srcset="https://ca.slack-edge.com/T03GU501J-U3TU027S5-ea36f29bc2a6-48 2x" className="c-base_icon c-base_icon--image" aria-hidden="true" role="img" alt="" style="height: 24px; width: 24px;"></button><button className="c-button-unstyled c-avatar c-avatar--interactive " aria-label="View Fishman (El Bagre)’s Profile" tabindex="0" aria-haspopup="menu" aria-expanded="false" type="button" style="height: 24px; width: 24px;"><img src="https://ca.slack-edge.com/T03GU501J-U219VHNAG-b8cd706ebab3-24" srcset="https://ca.slack-edge.com/T03GU501J-U219VHNAG-b8cd706ebab3-48 2x" className="c-base_icon c-base_icon--image" aria-hidden="true" role="img" alt="" style="height: 24px; width: 24px;"></button><button className="c-button-unstyled c-avatar c-avatar--interactive " aria-label="View Ronil’s Profile" tabindex="0" aria-haspopup="menu" aria-expanded="false" type="button" style="height: 24px; width: 24px;"><img src="https://ca.slack-edge.com/T03GU501J-UAZ0WTXRU-eb5e07a51174-24" srcset="https://ca.slack-edge.com/T03GU501J-UAZ0WTXRU-eb5e07a51174-48 2x" className="c-base_icon c-base_icon--image" aria-hidden="true" role="img" alt="" style="height: 24px; width: 24px;"></button><button className="c-button-unstyled c-avatar c-avatar--interactive " aria-label="View Justin Cheasty’s Profile" tabindex="0" aria-haspopup="menu" aria-expanded="false" type="button" style="height: 24px; width: 24px;"><img src="https://ca.slack-edge.com/T03GU501J-U019DT2CNJZ-254953919f3f-24" srcset="https://ca.slack-edge.com/T03GU501J-U019DT2CNJZ-254953919f3f-48 2x" className="c-base_icon c-base_icon--image" aria-hidden="true" role="img" alt="" style="height: 24px; width: 24px;"></button><a target="_blank" rel="noopener noreferrer" aria-expanded="false" className="c-link c-message__reply_count" href="">5 replies<span aria-label="(opens in new tab)"></span></a>
        //                                                 <div className="c-message__reply_bar_description"><span className="c-message__reply_bar_last_reply">Last reply 18 hours ago</span><span className="c-message__reply_bar_view_thread">View thread</span></div>
        //                                                 <i className="c-deprecated-icon c-message__reply_bar_arrow c-icon--chevron-right c-deprecated-icon--vertical-align-baseline" type="chevron_right" aria-hidden="true"></i>
        //                                             </div>
        //                                             </div>
        //                                         </div>
        //                                     </div>
        //                                 </div>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                     </div>
        //                     </div>
        //                     <div role="presentation" className="c-scrollbar__track">
        //                     <div role="presentation" className="c-scrollbar__bar" tabindex="-1" style="height: 236.346px; transform: translateY(0px);"></div>
        //                     </div>
        //                 </div>
        //                 <div tabindex="0" style="position: absolute; width: 1px; height: 1px; outline: none; box-shadow: none; top: 0px;"></div>
        //             </div>
        //         </div>
        //         <div className="resize-triggers">
        //             <div className="expand-trigger">
        //                 <div style="width: 740px; height: 655px;"></div>
        //             </div>
        //             <div className="contract-trigger"></div>
        //         </div>
        //         </div>
        //     </div>
        //     <div className="workspace__primary_view_footer">
        //         <div className="p-message_pane_input" data-qa="message_input_container">
        //         <div className="p-message_pane_input_inner">
        //             <div className="p-workspace__input p-message_input p-message_input--dark">
        //                 <div className="c-texty_input__container c-texty_input__container--multi_line c-texty_input__container--sticky_composer" data-buttons="0">
        //                     <div className="p-message_input_field c-texty_input ql-container c-texty_input--double_decker" data-qa="message_input" data-message-input="true" data-channel-id="C03GU502Q" data-view-context="message-pane" data-min-lines="1">
        //                     <div className="ql-editor ql-blank" data-gramm="false" contenteditable="true" dir="auto" role="textbox" tabindex="0" data-team-id="T03GU501J" aria-label="Message general" aria-describedby="context_bar_text-1ad47753" aria-multiline="true" aria-autocomplete="list" aria-expanded="false" aria-owns="chat_input_tab_ui" spellcheck="true">
        //                         <p><code><span className="ql-cursor">﻿</span></code></p>
        //                     </div>
        //                     <div className="ql-clipboard" contenteditable="true" tabindex="-1" aria-hidden="true" role="presentation"></div>
        //                     <div className="ql-placeholder" aria-hidden="true" role="presentation" tabindex="-1" data-reactroot="">
        //                         <div className="c-texty_input__placeholder">Message <i className="c-icon c-texty_input__placeholder_icon--public c-icon--hash-small c-icon--inline" type="hash-small" aria-hidden="true"></i>general</div>
        //                     </div>
        //                     </div>
        //                     <div className="c-texty_buttons"><button className="c-button-unstyled c-icon_button c-icon_button--light c-icon_button--size_small c-texty_input__button c-texty_input__button--send c-texty_input__button--disabled" disabled="" data-qa="texty_send_button" aria-label="Send message" delay="150" data-sk="tooltip_parent" type="button"><i className="c-icon c-icon--paperplane-filled" type="paperplane-filled" aria-hidden="true"></i></button><button className="c-button-unstyled c-icon_button c-icon_button--light c-icon_button--size_small c-texty_input__button" aria-label="File menu" tabindex="-1" data-qa="msg_input_file_btn_inset" delay="500" aria-haspopup="menu" aria-expanded="false" data-sk="tooltip_parent" type="button"><i className="c-icon c-icon--paperclip" type="paperclip" aria-hidden="true"></i></button><input type="file" className="p-hidden_file_input" multiple="" aria-hidden="true" data-qa="file_upload" tabindex="-1"><button className="c-button-unstyled c-icon_button c-icon_button--light c-icon_button--size_small c-texty_input__button c-texty_input__button--emoji" data-qa="texty_emoji_button" tabindex="-1" aria-hidden="true" aria-label="Emoji" delay="500" aria-haspopup="true" data-sk="tooltip_parent" type="button"><i className="c-icon c-icon--smile-o" type="smile-o" aria-hidden="true"></i></button><button className="c-button-unstyled c-icon_button c-icon_button--light c-icon_button--size_small c-texty_input__button" data-qa="texty_mention_button" tabindex="-1" aria-hidden="true" aria-label="Mention someone" delay="500" data-sk="tooltip_parent" type="button"><i className="c-icon c-icon--mentions" type="mentions" aria-hidden="true"></i></button><button className="c-button-unstyled c-icon_button c-icon_button--light c-icon_button--size_small c-texty_input__button c-texty_input__button_composer c-texty_input__button_composer--active" data-qa="texty_composer_button" tabindex="-1" aria-hidden="true" aria-label="Hide formatting" delay="500" data-sk="tooltip_parent" type="button"><i className="c-icon c-icon--text" type="text" aria-hidden="true"></i></button></div>
        //                     <div className="p-texty_sticky_formatting_bar p-texty_sticky_formatting_bar--with_action_button">
        //                     <div style="overflow: visible; width: 0px;">
        //                         <div className="p-composer__body p-composer__body--visible p-composer__body--sticky" role="toolbar" aria-label="formatting"><button className="c-button-unstyled c-icon_button c-icon_button--light c-icon_button--size_small p-composer__button p-composer__button--sticky p-composer__button--legacy_disabled" tabindex="-1" aria-label="Bold" data-format="bold" aria-pressed="false" data-qa="bold-composer-button" delay="500" data-sk="tooltip_parent" type="button"><i className="c-icon c-icon--bold" type="bold" aria-hidden="true"></i></button><button className="c-button-unstyled c-icon_button c-icon_button--light c-icon_button--size_small p-composer__button p-composer__button--sticky p-composer__button--legacy_disabled" tabindex="-1" aria-label="Italic" data-format="italic" aria-pressed="false" data-qa="italic-composer-button" delay="500" data-sk="tooltip_parent" type="button"><i className="c-icon c-icon--italic" type="italic" aria-hidden="true"></i></button><button className="c-button-unstyled c-icon_button c-icon_button--light c-icon_button--size_small p-composer__button p-composer__button--sticky p-composer__button--legacy_disabled p-composer__button--adjoin-right" tabindex="-1" aria-label="Strikethrough" data-format="strike" aria-pressed="false" data-qa="strike-composer-button" delay="500" data-sk="tooltip_parent" type="button"><i className="c-icon c-icon--strikethrough" type="strikethrough" aria-hidden="true"></i></button><button className="c-button-unstyled c-icon_button c-icon_button--light c-icon_button--size_small p-composer__button p-composer__button--sticky p-composer__button--legacy_disabled p-composer__button--selected" tabindex="-1" aria-label="Code" data-format="code" aria-pressed="true" data-qa="code-composer-button" delay="500" data-sk="tooltip_parent" type="button"><i className="c-icon c-icon--code" type="code" aria-hidden="true"></i></button><button className="c-button-unstyled c-icon_button c-icon_button--light c-icon_button--size_small p-composer__button p-composer__button--sticky p-composer__button--legacy_disabled p-composer__button--adjoin-left" tabindex="-1" aria-label="Link" data-format="link" aria-pressed="false" data-qa="link-composer-button" delay="500" data-sk="tooltip_parent" type="button"><i className="c-icon c-icon--link" type="link" aria-hidden="true"></i></button><button className="c-button-unstyled c-icon_button c-icon_button--light c-icon_button--size_small p-composer__button p-composer__button--sticky p-composer__button--legacy_disabled" tabindex="-1" aria-label="Ordered list" data-format="ordered-list" aria-pressed="false" data-qa="ordered-list-composer-button" delay="500" data-sk="tooltip_parent" type="button"><i className="c-icon c-icon--numbered-list" type="numbered-list" aria-hidden="true"></i></button><button className="c-button-unstyled c-icon_button c-icon_button--light c-icon_button--size_small p-composer__button p-composer__button--sticky p-composer__button--legacy_disabled" tabindex="-1" aria-label="Bulleted list" data-format="bullet-list" aria-pressed="false" data-qa="bullet-list-composer-button" delay="500" data-sk="tooltip_parent" type="button"><i className="c-icon c-icon--bullet-list" type="bullet-list" aria-hidden="true"></i></button><button className="c-button-unstyled c-icon_button c-icon_button--light c-icon_button--size_small p-composer__button p-composer__button--sticky p-composer__button--legacy_disabled" tabindex="-1" aria-label="Blockquote" data-format="blockquote" aria-pressed="false" data-qa="blockquote-composer-button" delay="500" data-sk="tooltip_parent" type="button"><i className="c-icon c-icon--quote-post" type="quote-post" aria-hidden="true"></i></button><button className="c-button-unstyled c-icon_button c-icon_button--light c-icon_button--size_small p-composer__button p-composer__button--sticky p-composer__button--legacy_disabled" tabindex="-1" aria-label="Code block" data-format="code-block" aria-pressed="false" data-qa="code-block-composer-button" delay="500" data-sk="tooltip_parent" type="button"><i className="c-icon c-icon--code-block" type="code-block" aria-hidden="true"></i></button></div>
        //                     </div>
        //                     <div className="resize-triggers">
        //                         <div className="expand-trigger">
        //                             <div style="width: 698px; height: 41px;"></div>
        //                         </div>
        //                         <div className="contract-trigger"></div>
        //                     </div>
        //                     </div>
        //                 </div>
        //                 <div className="p-shortcuts_menu_trigger_button_left_column">
        //                     <div className="p-shortcuts_menu_trigger_button_container"><button className="c-button-unstyled c-icon_button c-icon_button--light c-icon_button--size_small p-shortcuts_menu_trigger_button p-shortcuts_menu_trigger_button--dark" data-qa="shortcuts_menu_trigger__message-pane" aria-label="Shortcuts" delay="150" aria-haspopup="true" data-sk="tooltip_parent" type="button"><i className="c-icon c-icon--bolt" type="bolt" aria-hidden="true"></i></button></div>
        //                 </div>
        //             </div>
        //             <div className="p-notification_bar p-notification_bar--flexpane_open p-notification_bar--double_decker">
        //                 <div className="p-notification_bar__section p-notification_bar__section--left"></div>
        //                 <div className="p-notification_bar__section p-notification_bar__section--right"><span className="p-notification_bar__formatting" aria-hidden="true"><span className="p-notification_bar__send"><b className="p-notification_bar__return">Return</b> to send</span><b className="p-notification_bar__return">Shift + Return</b> to add a new line</span></div>
        //             </div>
        //         </div>
        //         </div>
        //     </div>
        // </div>


// <div className="chatroom-container">
//     <h2>Channel</h2>
//     <div className="message-list">
//         {messageList}
//     </div>
//     <div ref={this.bottom} />
//     <br/>
//     <div className="message-input"><MessageFormContainer /></div>
//     <WebSocketContainer />
// </div>

// )