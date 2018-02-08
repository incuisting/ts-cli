// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { RootState } from '../store/rootState';
import { NavBar } from '../components/NavBar';
const mapStateToProps = (state: RootState) => ({});
export const Nav = connect(mapStateToProps, {
    changeNav: push,
})(NavBar);
