import React from 'react';
import { withRouter } from 'react-router-dom';

class IndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const hiveId = this.props.hive.id;
        this.props.history.push(`/hives/${hiveId}`);
    }

    render() {
        const { name, description } = this.props.hive;
        return (
            <div
                className="hive-index-item"
                onClick={this.handleClick}
            >
                <div className="index-item-info">
                    <span className="index-item-copy">{name}</span>
                </div>
            </div>
        );
    }
}

export default withRouter(IndexItem);
