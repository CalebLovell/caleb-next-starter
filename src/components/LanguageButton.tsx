import { i18n } from '../../i18n';

export const LanguageButton = (): JSX.Element => {
	return (
		<div className='w-20'>
			<label htmlFor='language-picker' className='block text-sm font-medium text-gray-700 sr-only'>
				Change Language
			</label>
			<select
				id='language-picker'
				name='language-picker'
				defaultValue='en'
				onChange={e => i18n.changeLanguage(e.target.value)}
				onBlur={e => i18n.changeLanguage(e.target.value)}
				className='block w-full text-base border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
			>
				<option value='en'>EN</option>
				<option value='es'>ES</option>
				<option value='pt'>PT</option>
			</select>
		</div>
	);
};
