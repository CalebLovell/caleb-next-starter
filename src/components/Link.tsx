import NextLink from 'next/link';

interface Props {
	href: string;
	label: string;
	type?: string;
	style?: string
}

export const Link = ({ href = `This is the default title`, label = `Default Label`, type, style }: Props): JSX.Element => {
	const className =
		type === `button`
			? `p-2 text-center box-border font-medium transition duration-150 ease-in-out bg-brand-accent-base rounded-md focus-brand hover-brand-inverse lg:px-4 text-white`
			: `p-2 font-medium transition duration-150 ease-in-out rounded-md focus-brand hover-brand lg:px-4 text-brand-accent-base`;
	return (
		<NextLink href={href}>
			<a
				href={href}
				className={`${className} ${style && style}`}
			>
				{label}
			</a>
		</NextLink>
	);
};
