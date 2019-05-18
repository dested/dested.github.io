export let url = (path: string) => `url(${path})`;

export let centerMargin = {marginLeft: 'auto', marginRight: 'auto'};

export let media = {
  bigDesktop: '@media (min-width: 1600px)',
  desktop: '@media (min-width: 1200px)',
  tablet: '@media (min-width: 992px)',
  bigPhone: '@media (min-width: 768px)',
  smallPhone: '@media (min-width: 576px)',
  phone: '@media (max-width: 769px)'
};
