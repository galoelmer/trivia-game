const isDev = process.env.NODE_ENV === "development";

export const DEFAULT_COUNTDOWN = isDev ? 5 : 15;
export const NEXT_QUESTION_DELAY = isDev ? 2000 : 4800;
