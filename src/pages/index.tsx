import { PageWrap } from '@components/PageWrap';
import { TFunction } from 'next-i18next';
import { withTranslation } from '../../i18n';

const HomePage = ({ t }: { readonly t: TFunction }): JSX.Element => {
	return (
		<PageWrap>
			<main className='flex items-center justify-center min-h-screen m-2'>
				<div className='flex flex-col text-center'>
					<h1 className='text-3xl'>{t(`h1`)}</h1>
					<h2 className='mt-2 text-lg'>
						<a href='https://github.com/CalebLovell/caleb-next-starter' target='_blank' rel='noreferrer'>
							{t(`h2`)}
						</a>
					</h2>
				</div>
			</main>
		</PageWrap>
	);
};

HomePage.getInitialProps = async () => ({
	namespacesRequired: [`home`],
});

export default withTranslation(`home`)(HomePage);
