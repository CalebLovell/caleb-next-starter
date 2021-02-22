import { Container } from '@components/Container';
import { TFunction } from 'next-i18next';
import { useToasts } from 'react-toast-notifications';
import { withTranslation } from '../../i18n';

const HomePage = ({ t }: { readonly t: TFunction }): JSX.Element => {
	const { addToast } = useToasts();
	return (
		<Container>
			<main className='flex items-center justify-center min-h-content bg-brand-primary-light dark:bg-brand-primary-dark'>
				<div className='flex flex-col text-center'>
					<h1 className='text-3xl text-black dark:text-brand-primary-light'>{t(`h1`)}</h1>
					<h2 className='mt-2 text-lg text-black dark:text-brand-primary-light'>
						<a href='https://github.com/CalebLovell/caleb-next-starter' target='_blank' rel='noreferrer'>
							{t(`h2`)}
						</a>
					</h2>
					<div className='flex justify-around mt-8'>
						<button
							type='button'
							onClick={() => addToast(`Info...`, { appearance: `info` })}
							className='inline-flex items-center px-4 py-2 text-base font-medium text-indigo-700 bg-indigo-100 border border-transparent rounded-md hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
						>
							Info...
						</button>
						<button
							type='button'
							onClick={() => addToast(`Success!`, { appearance: `success` })}
							className='inline-flex items-center px-4 py-2 text-base font-medium text-indigo-700 bg-indigo-100 border border-transparent rounded-md hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
						>
							Success!
						</button>
						<button
							type='button'
							onClick={() => addToast(`Warning!`, { appearance: `warning` })}
							className='inline-flex items-center px-4 py-2 text-base font-medium text-indigo-700 bg-indigo-100 border border-transparent rounded-md hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
						>
							Warning!
						</button>
						<button
							type='button'
							onClick={() => addToast(`Error!`, { appearance: `error` })}
							className='inline-flex items-center px-4 py-2 text-base font-medium text-indigo-700 bg-indigo-100 border border-transparent rounded-md hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
						>
							Error!
						</button>
					</div>
				</div>
			</main>
		</Container>
	);
};

HomePage.getInitialProps = async () => ({
	namespacesRequired: [`home`],
});

export default withTranslation(`home`)(HomePage);
