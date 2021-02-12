import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
	render(): JSX.Element {
		return (
			<Html lang='en'>
				<Head>
					<link rel='preload' href='/fonts/Inter-VariableFont_slnt,wght.ttf' as='font' type='font/ttf' crossOrigin='anonymous' />
				</Head>
				<body className='text-black bg-white dark:bg-black dark:text-white'>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
