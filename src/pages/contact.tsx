import { Container } from '@components/Container';
import { useTranslation } from '../../i18n';

const ContactPage = (): JSX.Element => {
	const { t } = useTranslation(`contact`);
	return (
		<Container>
			<main className='container flex items-center justify-center min-h-content bg-brand-primary-light dark:bg-brand-primary-dark'>
				<h1 className='text-3xl text-black dark:text-brand-primary-light'>{t(`h1`)}</h1>
			</main>
		</Container>
	);
};

export default ContactPage;
