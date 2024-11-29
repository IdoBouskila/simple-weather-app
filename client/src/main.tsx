import App from './app.tsx';
import { StrictMode } from 'react';
import { trpc } from './utils/trpc.ts';
import { createRoot } from 'react-dom/client';
import { httpBatchLink } from '@trpc/react-query';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

const trpcClient = trpc.createClient({
	links: [
		httpBatchLink({
			url: import.meta.env.VITE_API_URL,
		}),
	],
});

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<trpc.Provider client={ trpcClient } queryClient={ queryClient }>
			<QueryClientProvider client={ queryClient }>
				<App />
			</QueryClientProvider>
		</trpc.Provider>
	</StrictMode>
);
