import { MenuType, RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
    { path: '', title: 'Dashboard', menuType: MenuType.LEFT, icon: 'pe-7s-graph' },
    { path: 'user', title: 'User profile', menuType: MenuType.LEFT, icon:'pe-7s-user' },
    { path: 'newsurvey', title: 'NewSurvey', menuType: MenuType.LEFT, icon:'pe-7s-map-marker' },
    { path: 'map', title: 'map', menuType: MenuType.LEFT, icon:'pe-7s-note2' },
    { path: 'typography', title: 'Typography', menuType: MenuType.LEFT, icon:'pe-7s-news-paper' },
    { path: 'icons', title: 'Icons', menuType: MenuType.LEFT, icon:'pe-7s-science' },
    { path: 'notifications', title: 'notifications', menuType: MenuType.LEFT, icon:'pe-7s-bell' },
    { path: 'test', title: 'test', menuType: MenuType.LEFT, icon:'pe-7s-bell' },
    { path: 'upgrade', title: 'Upgrade to Vuk²', menuType: MenuType.LEFT, icon:'pe-7s-rocket' }
];
