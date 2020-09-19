export interface GetRouteOptions {
  base?: string;
}

export const getRoute: Function = (
  sub: string,
  leaf?: string,
  options?: GetRouteOptions
): string => {
  if (!sub) {
    throw new Error("Invalid arguments");
  }
  const subPath: string = `/${sub.replace(/\/$/g, "")}`;
  const base: string = (options?.base || "/api/v1").replace(/\/$/g, "");
  if (leaf) {
    const leafPath: string = `/${leaf.replace(/\/$/g, "")}`;
    return `${base}${subPath}${leafPath}`;
  }
  return `${base}${subPath}`;
};
