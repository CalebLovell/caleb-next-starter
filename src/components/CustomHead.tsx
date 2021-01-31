import NextHead from 'next/head';

interface Props {
	title?: string;
	description?: string;
	image?: string;
}

// Customize this on a per page basis as needed

export const CustomHead: React.FC<Props> = ({
	title = `Caleb Next Starter`,
	description = `Caleb Next Starter`,
	// image = ``,
}): JSX.Element => {
	return (
		<NextHead>
			<title>{title}</title>
			<link rel='icon' href='/favicon.ico' />
			<meta name='description' content={description} />
			<meta charSet='UTF-8' />
			<meta name='viewport' content='width=device-width, initial-scale=1' />
			{/* <link rel='apple-touch-icon' sizes='180x180' href='/favicons/apple-touch-icon.png' />
			<link rel='icon' type='image/png' sizes='32x32' href='/favicons/favicon-32x32.png' />
			<link rel='icon' type='image/png' sizes='16x16' href='/favicons/favicon-16x16.png' />
			<link rel='manifest' href='/favicons/site.webmanifest' />
			<link rel='mask-icon' href='/favicons/safari-pinned-tab.svg' color='#5bbad5' />
			<meta name='msapplication-TileColor' content='#22b8fb' />
			<meta name='theme-color' content='#fff' />
			<meta property='og:image' content={image} key='ogimage' />
			<meta property='og:image:width' content='1200' key='ogimagewidth' />
			<meta property='og:image:height' content='630' key='ogimageheight' />
			<meta property='og:url' content={url} key='ogurl' />
			<meta property='og:title' content={title} key='ogtitle' />
			<meta property='og:description' content={description} key='ogdesc' />
			<meta property='og:type' content='website' key='ogtype' />
			<meta name='twitter:card' content='summary_large_image' key='twcard' />
			<meta name='twitter:site' content='@Caleb__Lovell' key='twhandle' />
			<meta name='twitter:title' content={title} key='twtitle' />
			<meta name='twitter:image' content={image} key='twimage' />
			<meta name='twitter:description' content={description} key='twdesc' />
			<meta name='twitter:image:alt' content={description} key='twimagealt' /> */}
		</NextHead>
	);
};
