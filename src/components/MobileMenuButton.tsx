import { useGlobalDispatch, useGlobalState } from '@utils/GlobalProvider';

export const MobileMenuButton = (): JSX.Element => {
	const { mobileNavOpen } = useGlobalState();
	const globalDispatch = useGlobalDispatch();
	return (
		<button
			name='menu'
			type='button'
			onClick={() => globalDispatch({ type: `SET_MOBILE_NAV_OPEN`, payload: !mobileNavOpen })}
			aria-expanded={mobileNavOpen}
		>
			<svg className='w-8 h-8 text-accent-primary' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
				{mobileNavOpen ? (
					// Close Icon
					<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
				) : (
					// Menu Icon
					<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
				)}
			</svg>
		</button>
	);
};
