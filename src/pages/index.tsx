import { Container } from '@components/Container';
import { TFunction } from 'next-i18next';
import { withTranslation } from '../../i18n';

const HomePage = ({ t }: { readonly t: TFunction }): JSX.Element => {
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
				</div>
			</main>
		</Container>
	);
};

HomePage.getInitialProps = async () => ({
	namespacesRequired: [`home`],
});

export default withTranslation(`home`)(HomePage);
