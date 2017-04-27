"use strict";
const sidebar_metadata_1 = require('./sidebar.metadata');
exports.ROUTES = [
    { path: '', title: 'Dashboard', menuType: sidebar_metadata_1.MenuType.LEFT, icon: 'pe-7s-graph' },
    { path: 'user', title: 'User profile', menuType: sidebar_metadata_1.MenuType.LEFT, icon: 'pe-7s-user' },
    { path: 'newsurvey', title: 'NewSurvey', menuType: sidebar_metadata_1.MenuType.LEFT, icon: 'pe-7s-map-marker' },
    { path: 'map', title: 'map', menuType: sidebar_metadata_1.MenuType.LEFT, icon: 'pe-7s-note2' },
    { path: 'typography', title: 'Typography', menuType: sidebar_metadata_1.MenuType.LEFT, icon: 'pe-7s-news-paper' },
    { path: 'icons', title: 'Icons', menuType: sidebar_metadata_1.MenuType.LEFT, icon: 'pe-7s-science' },
    { path: 'notifications', title: 'notifications', menuType: sidebar_metadata_1.MenuType.LEFT, icon: 'pe-7s-bell' },
    { path: 'test', title: 'test', menuType: sidebar_metadata_1.MenuType.LEFT, icon: 'pe-7s-bell' },
    { path: 'upgrade', title: 'Upgrade to Vuk²', menuType: sidebar_metadata_1.MenuType.LEFT, icon: 'pe-7s-rocket' }
];
//# sourceMappingURL=sidebar-routes.config.js.map