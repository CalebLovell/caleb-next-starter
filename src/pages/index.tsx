import { Container } from '@components/Container';
import { useToasts } from 'react-toast-notifications';
import { useTranslation } from '../../i18n';

const HomePage = (): JSX.Element => {
	const { addToast } = useToasts();
	const { t } = useTranslation(`home`);
	const { t: toasts } = useTranslation(`toasts`);

	return (
		<Container>
			<main className='container flex items-center justify-center min-h-content bg-brand-primary-light dark:bg-brand-primary-dark'>
				<div className='flex flex-col space-y-20 text-center'>
					<h1 className='text-3xl text-black dark:text-brand-primary-light'>{t(`h1`)}</h1>
					<h2 className='text-lg text-black dark:text-brand-primary-light'>
						<a
							className='rounded-md focus-brand hover:text-brand-accent-base'
							href='https://github.com/CalebLovell/caleb-next-starter'
							target='_blank'
							rel='noreferrer'
						>
							{t(`h2`)}
						</a>
					</h2>
					<div className='flex flex-col justify-around space-y-2 sm:flex-row'>
						<button
							type='button'
							onClick={() => addToast(toasts(`info`), { appearance: `info` })}
							className='inline-flex items-center justify-center px-4 py-2 text-base font-medium text-center text-indigo-700 bg-indigo-100 border border-transparent rounded-md hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
						>
							{toasts(`info`)}
						</button>
						<button
							type='button'
							onClick={() => addToast(toasts(`success`), { appearance: `success` })}
							className='inline-flex items-center justify-center px-4 py-2 text-base font-medium text-center text-green-700 bg-green-100 border border-transparent rounded-md hover:bg-green-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500'
						>
							{toasts(`success`)}
						</button>
						<button
							type='button'
							onClick={() => addToast(toasts(`warning`), { appearance: `warning` })}
							className='inline-flex items-center justify-center px-4 py-2 text-base font-medium text-center text-yellow-700 bg-yellow-100 border border-transparent rounded-md hover:bg-yellow-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500'
						>
							{toasts(`warning`)}
						</button>
						<button
							type='button'
							onClick={() => addToast(toasts(`error`), { appearance: `error` })}
							className='inline-flex items-center justify-center px-4 py-2 text-base font-medium text-center text-red-700 bg-red-100 border border-transparent rounded-md hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500'
						>
							{toasts(`error`)}
						</button>
					</div>
				</div>
			</main>
		</Container>
	);
};

export default HomePage;
