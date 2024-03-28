import React from 'react';

const SignedInContext = React.createContext();

export const SignedInProvider = SignedInContext.Provider;
export const SignedInConsumer = SignedInContext.Consumer;

export default SignedInContext;