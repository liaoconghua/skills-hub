export function apiFetch(path: string, init?: RequestInit): Promise<Response> {
  const basePath = "/skills-hub";
  const url = path.startsWith("/") ? `${basePath}${path}` : path;
  return fetch(url, init);
}
