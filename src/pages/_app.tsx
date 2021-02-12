import '../styles/global.css';

import App, { AppContext } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';

import { ThemeProvider } from 'next-themes';
import { ToastProvider } from 'react-toast-notifications';
import { appWithTranslation } from '../../i18n';

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

MyApp.getInitialProps = async (appContext: AppContext) => {
	const appProps = await App.getInitialProps(appContext);
	return { ...appProps };
};

export default appWithTranslation(MyApp);
