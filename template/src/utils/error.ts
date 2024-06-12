export const getError = (error: unknown) =>
  error instanceof Error ? error : new Error(String(error));
