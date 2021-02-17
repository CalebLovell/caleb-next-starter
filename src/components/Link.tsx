import NextLink from 'next/link';

type Props = {
	href: string;
	label: string;
	type?: string;
	style?: string;
};

export const Link = ({ href = `This is the default title`, label = `Default Label`, type }: Props): JSX.Element => {
	// const styles =
	// 	type === `button`
	// 		? `text-center font-medium transition ease-in-out duration-150 px-2 lg:px-4 py-2 rounded-md ring-offset-brand-primary focus:outline-none ring-yellow-500 focus:ring-2 ring-offset-2 text-white bg-brand-accent-base hover:bg-brand-accent-dark rounded-lg`
	// 		: `text-center font-medium transition ease-in-out duration-150 px-2 lg:px-4 py-2 rounded-md ring-offset-brand-primary focus:outline-none ring-yellow-500 focus:ring-2 ring-offset-2 text-brand-accent-base hover:text-brand-accent-dark`;
	return (
		<NextLink href={href}>
			<a href={href} className='px-2 py-2 font-medium text-center transition duration-150 ease-in-out focus-brand hover-brand lg:px-4 text-brand-accent-base'>
				{label}
			</a>
		</NextLink>
	);
};
