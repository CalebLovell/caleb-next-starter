import NextLink from 'next/link';

interface Props {
	href: string;
	label: string;
}

{
	/* <a className='flex items-center p-3 -m-3 space-x-4 transition duration-150 ease-in-out rounded-lg hover:bg-gray-50'>
<div className='text-base font-medium leading-6 text-base-secondary'>Create a Poll</div>
</a> */
}

export const MobileLink = ({ href = `This is the default title`, label = `Default Label` }: Props): JSX.Element => {
	return (
		<NextLink href={href}>
			<a
				href={href}
				className='p-2 font-medium text-center transition duration-150 ease-in-out rounded-md focus-brand hover-brand lg:px-4 text-brand-accent-base'
			>
				{label}
			</a>
		</NextLink>
	);
};
