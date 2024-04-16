import { ComponentType } from 'react';
import Home from '../../features/home/Home';

interface RouteType {
  RouteComponent: ComponentType;
  path: string;
  exact?: boolean;
}

const routeMap: { [pageName: string]: RouteType } = {
  HomePage: {
    RouteComponent: Home,
    path: '/home',
    exact: true,
  },
};

export default routeMap;
