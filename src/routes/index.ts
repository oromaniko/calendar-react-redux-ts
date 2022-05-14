import React from "react";
import Login from "../pages/Login";
import Event from "../pages/Event";
import {Route} from "react-router-dom";

export interface IRoute {
    path: string;
    element: React.ElementType;
    exact?: boolean;
}

export enum RouteNames {
    LOGIN = 'login',
    EVENT = '/'

}

export const publicRoutes: IRoute[] = [
    {path: RouteNames.LOGIN, element: Login, exact: true}
]

export const privateRoutes: IRoute[] = [
    {path: RouteNames.EVENT, element: Event, exact: true}
]

