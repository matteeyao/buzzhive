import { connect } from 'react-redux';
import { closeModal } from '../../../../actions/modal_actions';
import { searchHives } from '../../../../actions/hive_actions';
import Search from './component';

const mapStateToProps = (state) => ({
    currentHive: state.entities.currentHive
});

const mapDispatchToProps = dispatch => ({
    closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
