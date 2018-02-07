import * as React from 'react';

class Nav extends React.Component<{}, {}> {
    goFetchTab = () => {
        console.log('11');
    }
    render() {
        return (
            <div>
                <button>fetch</button>
            </div>
        );
    }
}

export default Nav;