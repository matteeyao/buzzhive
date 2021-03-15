import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Item from './item';

class HiveUsers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // searchString: "",
        }
    }

    componentDidMount() {
        this.props.fetchUsers();
    }

    render() {
        const { closeModal, currentHive, allUsers, hiveUsers, createHiveUser, removeHiveUser } = this.props;

        const hiveAdmin = allUsers[currentHive.authorId];

        const users =  Object.values(allUsers)
            .filter(user => currentHive.authorId != user.id)
            .sort((a, b) => {
                if (a.username < b.username) { return -1; }
                if (a.username > b.username) { return 1; }
                return 0;
            })

        const hiveMembers = [hiveAdmin].concat(users);
        
        if (!hiveMembers.includes(undefined)) {
            return (
                <div className="ReactModal__Overlay ReactModal__Overlay--after-open c-popover c-search_modal c-search_modal--autocomplete c-search_modal--iap1_topnav c-search_modal--initial_autocomplete c-popover--z_above_fs" onClick={closeModal}>
                    <div className="hive-popover__content" aria-label="Search" style={{position: "absolute", outline: "none", marginTop: "0px"}} onClick={e => e.stopPropagation()}>
                        <div role="presentation">
                            <div className="c-search__input_and_close">
                                <div className="c-search__input_box" data-qa="search_input_box" role="presentation" style={{paddingRight: "0", height: "36px"}}>
                                    <div className="c-search__input_box__container c-basic_container c-basic_container--size_medium c-basic_container--prefixed c-basic_container--suffixed" aria-invalid="false">
                                        {currentHive.isPrivate ? <FontAwesomeIcon icon="lock" /> : <FontAwesomeIcon icon="hashtag" />} {currentHive.name} <span style={{fontWeight: "100"}}>|</span> Hive Members
                                    </div>
                                </div>
                                <button className="c-button-unstyled c-search__input_and_close__close" aria-label="Close" data-qa="search_input_close" type="button" onClick={closeModal}>
                                    <i className="c-icon c-icon--times" type="times" aria-hidden="true"></i>
                                </button>
                            </div>
                            <div className="c-search_autocomplete__container" data-qa="search_autocomplete">
                                <div className="c-search_autocomplete">
                                    <ol className="c-search_autocomplete__suggestion_list" role="listbox" id="c-search_autocomplete__suggestion_list">
                                        <li role="presentation">
                                            <header className="c-search_autocomplete_section_header c-search_autocomplete_section_header--first">
                                                <span className="c-search_autocomplete__header_label">
                                                    <span className="c-search_autocomplete__header_label_text">Add/remove members from this hive...</span>
                                                </span>
                                            </header>
                                        </li>
                                        <li className="c-search_autocomplete__guided_search_wrapper">
                                            <table>
                                                <tbody>
                                                    {hiveMembers.map((member, idx) => <Item 
                                                        key={idx} 
                                                        idx={idx}
                                                        member={member} 
                                                        currentHive={currentHive}
                                                        hiveUsers={hiveUsers} 
                                                        createHiveUser={createHiveUser}
                                                        removeHiveUser={removeHiveUser}
                                                    />)}
                                                </tbody>
                                            </table>
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <></>
            );
        }
    }
}

export default HiveUsers;
