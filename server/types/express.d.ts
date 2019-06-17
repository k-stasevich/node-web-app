declare module Express {
  interface Request {
    user: { userId: string };
  }
}
