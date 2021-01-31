import '../styles/global.css';

import { QueryClient, QueryClientProvider } from 'react-query';

import { ThemeProvider } from 'next-themes';
import { ToastProvider } from 'react-toast-notifications';

const queryClient = new QueryClient();

const MyApp = ({ Component, pageProps }) => {
	return (
		<QueryClientProvider client={queryClient}>
			<ThemeProvider attribute='class'>
				<ToastProvider>
					<Component {...pageProps} />
				</ToastProvider>
			</ThemeProvider>
		</QueryClientProvider>
	);
};

export default MyApp;
