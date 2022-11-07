import { router } from "../trpc";
import { authRouter } from "./auth";
import { productoRouter } from "./producto";

export const appRouter = router({
  auth: authRouter,
  producto: productoRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
