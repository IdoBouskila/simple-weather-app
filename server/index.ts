import cors from 'cors';
import { publicProcedure, router } from './utils/trpc';
import { createHTTPServer } from '@trpc/server/adapters/standalone';

export type AppRouter = typeof appRouter;

const appRouter = router({
});

const server = createHTTPServer({
	router: appRouter,
	middleware: cors(),
});

server.listen(process.env.PORT || 3001);
