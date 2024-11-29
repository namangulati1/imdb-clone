interface ImportMetaEnv {
    VITE_API_KEY: string;
    VITE_BASE_URL: string;
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }