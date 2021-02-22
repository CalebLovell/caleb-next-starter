import * as React from 'react';

import { Listbox } from '@headlessui/react';
import { i18n } from '../../i18n';

export const LanguageButtonX = (): JSX.Element => {
	return (
		<React.Fragment>
			<label htmlFor='language-picker' className='block text-sm font-medium sr-only'>
				Change Language
			</label>
			<select
				id='language-picker'
				name='language-picker'
				defaultValue='en'
				onChange={e => i18n.changeLanguage(e.target.value)}
				onBlur={e => i18n.changeLanguage(e.target.value)}
				className='block py-2 font-bold bg-white border-2 w-14 text-brand-accent-base focus-brand hover-brand dark:bg-brand-primary-base border-brand-accent-base sm:text-sm'
			>
				<option value='en' className='font-bold'>
					EN
				</option>
				<option value='es' className='font-bold'>
					ES
				</option>
				<option value='pt' className='font-bold'>
					PT
				</option>
			</select>
		</React.Fragment>
	);
};

const languages = [
	{ id: 1, name: `English`, locale: `en` },
	{ id: 2, name: `Español`, locale: `es` },
	{ id: 3, name: `Português`, locale: `pt` },
];

export const LanguageButton = (): JSX.Element => {
	const [selectedLanguage, setSelectedLanguage] = React.useState(languages[0]);

	React.useEffect(() => {
		i18n.changeLanguage(selectedLanguage.locale);
	}, [selectedLanguage.locale]);

	return (
		<Listbox value={selectedLanguage} onChange={setSelectedLanguage} as='div' className='relative focus-brand'>
			<Listbox.Button className='relative flex px-2 py-2 focus-brand hover-brand text-brand-accent-base hover:text-white hover:dark:text-brand-accent-base'>
				<span className='mr-2 font-bold'>{selectedLanguage.locale.toUpperCase()}</span>
				<svg className='w-6 h-6' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
					<path
						fillRule='evenodd'
						d='M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z'
						clipRule='evenodd'
					/>
				</svg>
			</Listbox.Button>
			<Listbox.Options className='absolute bg-white dark:bg-brand-primary-base rounded-md right-0.5 top-12'>
				{languages.map(language => (
					<Listbox.Option key={language.id} value={language}>
						{({ active }) => (
							<li
								className={`px-2 py-1 cursor-default text-right font-bold text-brand-accent-base ${
									active ? `bg-brand-primary-light dark:bg-gray-700` : `bg-white dark:bg-brand-primary-base`
								}`}
							>
								{language.name}
							</li>
						)}
					</Listbox.Option>
				))}
			</Listbox.Options>
		</Listbox>
	);
};
