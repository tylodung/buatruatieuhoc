import ReactGA from 'react-ga';
ReactGA.initialize('UA-here-1');

exports.onRouteUpdate = (state, page, pages) => {
  ReactGA.pageview(state.pathname);
};
