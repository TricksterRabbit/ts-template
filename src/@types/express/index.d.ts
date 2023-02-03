declare namespace Express {
  interface Request {
    user: {
      id: int;
      email: string;
      name: string;
    };
  }
}
