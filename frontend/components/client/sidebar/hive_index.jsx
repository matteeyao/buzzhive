import React from 'react';
import HiveIndexItem from './hive_index_item';

class HiveIndex extends React.Component {
    componentDidMount() {
        this.props.fetchHives();
    }
    
    render() {
        const { hives } = this.props;
        return (
            <div>
                <h2>Channels: </h2>
                <ul>
                    {hives.map(hive => (<HiveIndexItem
                            hive={hive}
                            key={hive.id}
                        />
                    ))}
                </ul>
            </div>
        )
    }
};

export default HiveIndex;
