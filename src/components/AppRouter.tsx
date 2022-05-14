import React from 'react'
import { Routes, Route, Outlet, Navigate } from 'react-router-dom'
import { privateRoutes, publicRoutes, RouteNames } from '../routes'
import Login from '../pages/Login'
import Event from '../pages/Event'

const AppRouter = () => {
    const auth = false
    return (
        <Routes>
            {auth
                ? privateRoutes.map((route) => {
                      const Element = route.element
                      return (
                          <Route
                              path={route.path}
                              element={<Element />}
                              key={route.path}
                          />
                      )
                  })
                : publicRoutes.map((route) => {
                      const Element = route.element
                      return (
                          <Route
                              path={route.path}
                              element={<Element />}
                              key={route.path}
                          />
                      )
                  })}
        </Routes>
    )
}

function Layout() {
    return (
        <main>
            <Outlet />
        </main>
    )
}

export default AppRouter
