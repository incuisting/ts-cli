import * as React from 'react';

interface NavProps {
    changeNav: (path: string) => any;
}

export const NavBar: React.SFC<NavProps> = (props) => {
    const { changeNav } = props;
    const handleNavToFetch = () => { changeNav('/fetch'); };
    const handleNavToHome = () => { changeNav('/'); };
    return (
        <>
            <button onClick={handleNavToFetch}>fetch</button>
            <button onClick={handleNavToHome}>home</button>
        </>
    );
};