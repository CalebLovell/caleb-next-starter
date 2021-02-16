import { DarkModeButton } from './DarkModeButton';
import { LanguageButton } from './LanguageButton';
import { Link } from './Link';
import { Logo } from './Logo';
import { MobileMenuButton } from './MobileMenuButton';

export const NavBar = (): JSX.Element => {
	return (
		<div className='container bg-white dark:bg-brand-primary-base h-14'>
			<div className='flex items-center justify-between h-full md:hidden'>
				<MobileMenuButton />
				<div className='flex items-center space-x-2'>
					<LanguageButton />
					<DarkModeButton />
				</div>
			</div>
			<nav className='items-center justify-between hidden h-full md:flex'>
				<div className='flex items-center'>
					<Logo />
					<Link href='/create' label='Create' />
					<Link href='/polls/zHvJssTJ3Goqyemz60T4' label='Poll' />
					<Link href='/result' label='Result' />
				</div>
				<div className='flex items-center md:space-x-2 lg:space-x-10'>
					<div className='flex items-center space-x-2'>
						<LanguageButton />
						<DarkModeButton />
					</div>
					<div className='flex items-center space-x-2'>
						<Link href='/signin' label='Sign in' />
						<Link href='/signup' label='Sign up' type='button' />
					</div>
				</div>
			</nav>
		</div>
	);
};
