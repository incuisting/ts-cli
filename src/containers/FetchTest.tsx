import * as React from 'react';
import { RootState } from '../store/rootState';
// import { RootAction } from '../store/rootAction';
import { fetchAcitons, Id, FirstName, LastName } from '../actions/fetchAction';
// import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
// import styled from 'styled-components';
interface DispatchProps {
    fetchUser: typeof fetchAcitons.fetchUser;
    cancelFetchUser: typeof fetchAcitons.cancelFetchUser;

}
export interface FetchProps extends DispatchProps {
    id: Id;
    firstName: FirstName;
    lastName: LastName;
}
export class Fetch extends React.Component<FetchProps, {}> {
    constructor(props: FetchProps) {
        super(props);
    }
    fetch = () => {
        this.props.fetchUser('paulx');
    }
    cancleFetch = () => {
        this.props.cancelFetchUser.call(this);
    }
    render() {
        // const { fetchUser} = this.props;
        const { id, firstName, lastName } = this.props;
        console.log('render', id);
        return (
            <div>
                <button onClick={this.fetch}>fethch</button>
                <button onClick={this.cancleFetch}>cancel</button>
                <p>
                    {`id;${id},firstName:${firstName},lastName:${lastName}`}
                </p>
            </div>
        );
    }
}

const mapStateToProps = (state: RootState) => {
    const _fetch = state.fetch.users;
    return {
        id: _fetch.id,
        firstName: _fetch.firstName,
        lastName: _fetch.lastName
    };
};

const mapDispatchToProps: DispatchProps = {
    fetchUser: fetchAcitons.fetchUser,
    cancelFetchUser: fetchAcitons.cancelFetchUser
};

export default connect(mapStateToProps, mapDispatchToProps)(Fetch);