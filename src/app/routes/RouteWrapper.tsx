import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import routeMap from './routeMap';

interface Props {
  children: React.ReactNode
}

function RouteWrapper({ children }: Props): React.ReactNode {
  return (
    <BrowserRouter>
      {children}
      <Routes>
        {Object.keys(routeMap).map((pageName) => {
          const { RouteComponent, path } = routeMap[pageName];
          return (
            <Route
              key={pageName}
              path={path}
              element={<RouteComponent />}
            />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
}

export default RouteWrapper;
