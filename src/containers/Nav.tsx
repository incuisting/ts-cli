// import { bindActionCreators } from 'redux';
import * as React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { RootState } from '../store/rootState';
import { NavBar } from '../components/NavBar';

interface DispatchProps {
    changeNav: typeof push;
}
interface NavProps extends DispatchProps {

}
class Nav extends React.Component<NavProps, {}> {
    constructor(props: NavProps) {
        super(props);
    }
    render() {
        return (
            <>
                <NavBar changeNav={push} />
            </>
        );
    }
}
const mapStateToProps = (state: RootState) => ({});
const mapDispatchToProps: DispatchProps = {
    changeNav: push
};

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
