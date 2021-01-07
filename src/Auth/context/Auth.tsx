import React from "react";

export interface IUserContext {
    login: (username: string, password: string) => void;
    logout: () => void;
    tokenVerifyLoading: boolean;
    user?: any; // noqa
 }

 export const UserContext = React.createContext<IUserContext>({} as IUserContext);