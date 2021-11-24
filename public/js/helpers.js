export const setElementAttrs = (el, attrs) =>
  Object.entries(attrs).forEach(([attr, value]) => {
    el[attr] = value;
  });