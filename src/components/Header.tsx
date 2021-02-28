import { DarkModeButton } from './DarkModeButton';
import { LanguageButton } from './LanguageButton';
import { Link } from './Link';
import { Logo } from './Logo';
import { MobileMenuButton } from './MobileMenuButton';
import { useTranslation } from '../../i18n';

export const Header = (): JSX.Element => {
	const { t } = useTranslation(`components`);
	return (
		<header className='container bg-white shadow dark:bg-brand-primary-base h-14'>
			<div className='flex items-center justify-between h-full md:hidden'>
				<MobileMenuButton />
				<div className='flex items-center space-x-2'>
					<LanguageButton />
					<DarkModeButton />
				</div>
			</div>
			<nav className='items-center justify-between hidden h-full md:flex'>
				<div className='flex items-center md:space-x-2'>
					<Logo label={t(`header.home`)} />
					<Link href='/about' label={t(`header.about`)} />
					<Link href='/blog' label={t(`header.blog`)} />
					<Link href='/contact' label={t(`header.contact`)} />
				</div>
				<div className='flex items-center md:space-x-2 xl:space-x-10'>
					<div className='flex items-center space-x-2'>
						<LanguageButton />
						<DarkModeButton />
					</div>
					<div className='flex items-center md:space-x-2'>
						<Link href='/signin' label={t(`header.signin`)} />
						<Link href='/signup' label={t(`header.signup`)} type='button' />
					</div>
				</div>
			</nav>
		</header>
	);
};
