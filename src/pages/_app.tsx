import '../styles/global.css';

import { QueryClient, QueryClientProvider } from 'react-query';

import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { ToastProvider } from 'react-toast-notifications';

const queryClient = new QueryClient();

const MyApp: React.FC<AppProps> = ({ Component, pageProps }): JSX.Element => {
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
