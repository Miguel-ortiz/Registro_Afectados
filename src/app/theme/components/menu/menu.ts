export const menuItems = [
  {
    title: 'Dashboard',
    routerLink: 'dashboard',
    icon: 'fa-home',
    selected: false,
    expanded: false,
    order: 0
  }, 
  {
    title: 'Eventos',
    routerLink: 'listar-eventos',
    icon: 'fa-bar-chart',
    selected: false,
    expanded: false,
    order: 100,
    subMenu: [
      {
        title: 'Listar',
        routerLink: 'listar-eventos',
      },
      {
        title: 'Registrar',
        routerLink: 'registar-eventos',
      },      
    ]
  },  
  {
    title: 'Reportes',
    routerLink: 'charts',
    icon: 'fa-bar-chart',
    selected: false,
    expanded: false,
    order: 200,
    subMenu: [
      {
        title: 'Graficos',
        routerLink: 'charts/ng2charts',
      },
      {
        title: 'Mapas',
        routerLink: 'maps/vectormaps'
      },      
    ]
  }
];
