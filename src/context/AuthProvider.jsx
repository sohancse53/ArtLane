import React from 'react';
import Authcontext from './Authcontext';

const AuthProvider = ({children}) => {
    return (
       <Authcontext>{children}</Authcontext>
    );
};

export default AuthProvider;