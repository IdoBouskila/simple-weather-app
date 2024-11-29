import { z } from 'zod';
import cors from 'cors';
import { router, publicProcedure } from './utils/trpc';
import { fetchSearch } from './utils/fetchers/fetchers';
import { createHTTPServer } from '@trpc/server/adapters/standalone';

export type AppRouter = typeof appRouter;

const appRouter = router({
	searchLocations: publicProcedure
		.input(z.string())
		.query(async ({ input }) => {
			const results = await fetchSearch(input);

			return results;
		}),
});

const server = createHTTPServer({
	router: appRouter,
	middleware: cors({ origin: '*' }),
});

server.listen(process.env.PORT || 3000, () => {
	console.log(`🚀 Server ready at http://localhost:${ process.env.PORT || 3000 }`);
});
