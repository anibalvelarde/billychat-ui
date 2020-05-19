export const getRoute = () => {
  return /^\/*\/map\/?$/i.test(window.location.pathname);
};
