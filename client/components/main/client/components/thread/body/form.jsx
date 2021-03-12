import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class ReplyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            body: "",
            author_id: this.props.currentUser.id,
            parent_message_id: this.props.message.id,
            msgeable_id: this.props.currentHive.id,
            msgeable_type: "Hive"
        };
        this.formType = 'Post Message';
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    update(field) {
        return e =>
            this.setState({
                [field]: e.currentTarget.value
            });
    };

    handleSubmit(e) {
        e.preventDefault();
        console.log(this.state);
        this.props.action(this.state, this.props.currentHive.id, this.props.currentThread.id)
            .then(() => this.props.closeForm())
    };

    render() {
        return (
            <div className="workspace__primary_view_footer">
                <div className="p-message_pane_input" data-qa="message_input_container">
                    <div className="p-message_pane_input_inner">
                        <form onSubmit={this.handleSubmit} className="p-workspace__input p-message_input p-message_input--dark">
                            <div className="c-texty_input__container c-texty_input__container--multi_line c-texty_input__container--sticky_composer" data-buttons="0">
                                <div className="p-message_input_field c-texty_input ql-container c-texty_input--double_decker" data-qa="message_input" data-message-input="true" data-channel-id="C03GU502Q" data-view-context="message-pane" data-min-lines="1">
                                    <div className="ql-editor ql-blank" data-gramm="false" /* contentEditable="true" */ dir="auto" role="textbox" tabIndex="0" data-team-id="T03GU501J" aria-label="Message general" aria-describedby="context_bar_text-1ad47753" aria-multiline="true" aria-autocomplete="list" aria-expanded="false" aria-owns="chat_input_tab_ui" spellCheck="true" style={{marginTop: "9px"}}>
                                        <input 
                                            className="ql-clipboard" /* contentEditable="true" */ 
                                            tabIndex="-1" 
                                            aria-hidden="true" 
                                            role="presentation" 
                                            type="text"
                                            value={this.state.body}
                                            onChange={this.update('body')}
                                            className="c-texty_input__placeholder"
                                            placeholder={`Reply to ${this.props.hiveUsers[this.props.message.authorId].username}`}
                                            style={{width: "100%"}}
                                        />
                                    </div>                       
                                </div>
                                <div className="c-texty_buttons">
                                    <button className="c-button-unstyled c-icon_button c-icon_button--light c-icon_button--size_small c-texty_input__button c-texty_input__button--send" data-qa="texty_send_button" aria-label="Send message" delay="150" data-sk="tooltip_parent" type="submit" value={this.formType}>
                                        <i className="c-icon c-icon--paperplane-filled" type="paperplane-filled" aria-hidden="true"></i>
                                    </button>
                                    <button className="c-button-unstyled c-icon_button c-icon_button--light c-icon_button--size_small c-texty_input__button c-texty_input__button--cancel" delay="150" data-sk="tooltip_parent" onClick={this.props.closeForm}>
                                        <FontAwesomeIcon icon="times" />
                                    </button>
                                    <button className="c-button-unstyled c-icon_button c-icon_button--light c-icon_button--size_small c-texty_input__button" aria-label="File menu" tabIndex="-1" data-qa="msg_input_file_btn_inset" delay="500" aria-haspopup="menu" aria-expanded="false" data-sk="tooltip_parent" type="button" style={{opacity: "0.2", cursor: "default"}}>
                                        <i className="c-icon c-icon--paperclip" type="paperclip" aria-hidden="true"></i>
                                    </button>
                                    <input type="file" className="p-hidden_file_input" multiple="" aria-hidden="true" data-qa="file_upload" tabIndex="-1" />
                                    <button className="c-button-unstyled c-icon_button c-icon_button--light c-icon_button--size_small c-texty_input__button c-texty_input__button--emoji" data-qa="texty_emoji_button" tabIndex="-1" aria-hidden="true" aria-label="Emoji" delay="500" aria-haspopup="true" data-sk="tooltip_parent" type="button" style={{opacity: "0.2", cursor: "default"}}>
                                        <i className="c-icon c-icon--smile-o" type="smile-o" aria-hidden="true"></i>
                                    </button>
                                    <button className="c-button-unstyled c-icon_button c-icon_button--light c-icon_button--size_small c-texty_input__button" data-qa="texty_mention_button" tabIndex="-1" aria-hidden="true" aria-label="Mention someone" delay="500" data-sk="tooltip_parent" type="button" style={{opacity: "0.2", cursor: "default"}}>
                                        <i className="c-icon c-icon--mentions" type="mentions" aria-hidden="true"></i>
                                    </button>
                                </div>
                                <div className="p-texty_sticky_formatting_bar p-texty_sticky_formatting_bar--with_action_button">
                                    <div style={{overflow: "visible", width: "0px"}}>
                                        <div className="p-composer__body p-composer__body--visible p-composer__body--sticky" role="toolbar" aria-label="formatting">
                                            <button className="c-button-unstyled c-icon_button c-icon_button--light c-icon_button--size_small p-composer__button p-composer__button--sticky p-composer__button--legacy_disabled" tabIndex="-1" aria-label="Bold" data-format="bold" aria-pressed="false" data-qa="bold-composer-button" delay="500" data-sk="tooltip_parent" type="button">
                                                <i className="c-icon c-icon--bold" type="bold" aria-hidden="true"></i>
                                            </button>
                                            <button className="c-button-unstyled c-icon_button c-icon_button--light c-icon_button--size_small p-composer__button p-composer__button--sticky p-composer__button--legacy_disabled" tabIndex="-1" aria-label="Italic" data-format="italic" aria-pressed="false" data-qa="italic-composer-button" delay="500" data-sk="tooltip_parent" type="button">
                                                <i className="c-icon c-icon--italic" type="italic" aria-hidden="true"></i>
                                            </button>
                                            <button className="c-button-unstyled c-icon_button c-icon_button--light c-icon_button--size_small p-composer__button p-composer__button--sticky p-composer__button--legacy_disabled p-composer__button--adjoin-right" tabIndex="-1" aria-label="Strikethrough" data-format="strike" aria-pressed="false" data-qa="strike-composer-button" delay="500" data-sk="tooltip_parent" type="button">
                                                <i className="c-icon c-icon--strikethrough" type="strikethrough" aria-hidden="true"></i>
                                            </button>
                                        </div>
                                    </div>  
                                    <div className="resize-triggers">
                                        <div className="expand-trigger">
                                            <div style={{width: `${(window.innerWidth)*.45-40}px`, height: "41px"}}></div>
                                        </div>
                                        <div className="contract-trigger"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-shortcuts_menu_trigger_button_left_column">
                                <div className="p-shortcuts_menu_trigger_button_container">
                                    <button className="c-button-unstyled c-icon_button c-icon_button--light c-icon_button--size_small p-shortcuts_menu_trigger_button p-shortcuts_menu_trigger_button--dark" data-qa="shortcuts_menu_trigger__message-pane" aria-label="Shortcuts" delay="150" aria-haspopup="true" data-sk="tooltip_parent" type="button" style={{opacity: "0.2", cursor: "default"}}>
                                        <i className="c-icon c-icon--bolt" type="bolt" aria-hidden="true"></i>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    };
}

export default ReplyForm;
