import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { privateRoutes, publicRoutes } from '../routes'

const AppRouter = () => {
    const auth = false
    return (
        <Routes>
            {auth
                ? privateRoutes
                      .map((route) => {
                          const Element = route.element
                          return (
                              <Route
                                  path={route.path}
                                  element={<Element />}
                                  key={route.path}
                              />
                          )
                      })
                      .concat(
                          <Route
                              path='*'
                              element={<Navigate replace to='/' />}
                          />
                      )
                : publicRoutes
                      .map((route) => {
                          const Element = route.element
                          return (
                              <Route
                                  path={route.path}
                                  element={<Element />}
                                  key={route.path}
                              />
                          )
                      })
                      .concat(
                          <Route
                              path='*'
                              element={<Navigate replace to='/login' />}
                          />
                      )}
        </Routes>
    )
}

export default AppRouter
