export interface GetRouteOptions {
  base?: string;
}

const replaceFirstSlash: Function = (path: string): string => {
  return path.replace(/\/(.*)/g, "$1");
};

export const getRoute = (
  sub: string,
  leaf?: string,
  options?: GetRouteOptions
): string => {
  if (!sub) {
    throw new Error("Invalid arguments");
  }
  const subPath: string = `/${replaceFirstSlash(sub).replace(/\/$/g, "")}`;
  const base: string = replaceFirstSlash(options?.base || "/api/v1").replace(
    /\/$/g,
    ""
  );
  if (leaf) {
    const leafPath: string = `/${replaceFirstSlash(leaf).replace(/\/$/g, "")}`;
    return `/${base}${subPath}${leafPath}`;
  }
  return `/${base}${subPath}`;
};
