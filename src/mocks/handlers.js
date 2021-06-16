// mocks/handlers.js

import { rest } from "msw";
import users from "./data/users";
export const handlers = [
  rest.get("/users", (req, res, ctx) => {
    return res(ctx.json(users));
  }),
];
