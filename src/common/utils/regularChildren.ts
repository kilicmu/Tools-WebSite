export const regularChildren = (
  children: JSX.Element[] | JSX.Element | null
) => {
  if (!children) return [];

  if (!Array.isArray(children)) {
    return [children];
  } else {
    return children;
  }
};
