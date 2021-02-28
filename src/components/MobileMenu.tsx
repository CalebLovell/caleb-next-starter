import { Link } from '@components/Link';
import { Logo } from '@components/Logo';
import { MobileMenuButton } from '@components/MobileMenuButton';

export const MobileMenu: React.FC = () => {
	return (
		<div className='absolute inset-x-0 top-0 z-20 m-2 transition origin-top-right transform'>
			<div className='bg-white divide-y-2 rounded-lg shadow-lg divide-gray-50 dark:divide-brand-primary-dark dark:bg-brand-primary-base'>
				<div className='flex items-center justify-between p-2'>
					<Logo />
					<MobileMenuButton />
				</div>
				<nav className='flex flex-col items-start p-2 space-y-2'>
					<Link href='/about' label='About' />
					<Link href='/blog' label='Blog' />
					<Link href='/contact' label='Contact' />
				</nav>
				<div className='flex flex-col p-2'>
					<Link href='/' label='Sign up' type='button' />
				</div>
				<div className='flex items-center justify-center p-2'>
					<p className='pr-2 font-medium text-center text-gray-500 dark:text-white'>Already have an account?</p>
					<a href='/signin' className='text-base font-semibold text-brand-accent-base hover:text-brand-accent-light'>
						Sign in
					</a>
				</div>
			</div>
		</div>
	);
};
