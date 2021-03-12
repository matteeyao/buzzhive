import { connect } from 'react-redux';
import { closeModal } from '../../../../actions/modal_actions';
import { searchHives } from '../../../../actions/hive_actions';
import Search from './component';

const mapStateToProps = ({ entities: { search } }) => ({
    search
});

const mapDispatchToProps = dispatch => ({
    searchHives: () => dispatch(searchHives()),
    closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
