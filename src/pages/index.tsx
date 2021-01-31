import { PageWrap } from '@components/PageWrap';

const IndexPage = (): JSX.Element => {
	return (
		<PageWrap>
			<main className='flex items-center justify-center min-h-screen m-2'>
				<div className='flex flex-col text-center'>
					<h1 className='text-3xl'>Caleb&apos;s Next.js Starter Template, built with Tailwind, TypeScript, React Query, etc.</h1>
					<h2 className='mt-2 text-lg'>
						<a href='https://github.com/CalebLovell/caleb-next-starter' target='_blank' rel='noreferrer'>
							Click here to check out the repository on Github
						</a>
					</h2>
				</div>
			</main>
		</PageWrap>
	);
};

export default IndexPage;
