export const CONFIG = {
  //   ENV: process.env.NODE_ENV,
  //   DOMAIN: requireEnv("NEXT_PUBLIC_DOMAIN", "https://yourhompage.com"),
  API_BASE_URL: "http://localhost:7000",
  // API_BASE_URL: "http://34.64.251.163:7000",
  //   APP_NAME: requireEnv("APP_NAME", "퍼스트 업로더"),
  AUTH_TOKEN_KEY: "ACCESS_TOKEN",
  //   ACCESSTOKEN: process.env.NEXT_PUBLIC_API_ACCESSTOKEN,
  //   /** For Script w:start */
  //   GITHUB_TOKEN: requireEnv("GITHUB_TOKEN"),
  //   GITHUB_REPO: requireEnv("GITHUB_REPO"),
  // } as const;
  // function requireEnv(key: string): string | undefined;
  // function requireEnv<T>(key: string, defaultValue: T): string | T;
  // function requireEnv<T>(key: string, defaultValue?: T) {
  //   const envValue = key;
  //   envValue ??
  //     console.error(`
  //   - Missing Env: ${key}
  //   ${defaultValue ? `- Default Value: ${defaultValue}` : ""}
  //   `);
  //   return envValue ?? defaultValue;
};
