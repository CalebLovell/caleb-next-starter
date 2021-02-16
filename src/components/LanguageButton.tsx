import { i18n } from '../../i18n';

export const LanguageButton = (): JSX.Element => {
	return (
		<div className='w-20'>
			<label htmlFor='language-picker' className='block text-sm font-medium text-black sr-only'>
				Change Language
			</label>
			<select
				id='language-picker'
				name='language-picker'
				defaultValue='en'
				onChange={e => i18n.changeLanguage(e.target.value)}
				onBlur={e => i18n.changeLanguage(e.target.value)}
				className='block w-full font-bold text-gray-600 bg-white border-2 rounded-md dark:bg-brand-primary-base dark:text-brand-primary-light border-brand-accent-base sm:text-sm'
			>
				<option value='en'>EN</option>
				<option value='es'>ES</option>
				<option value='pt'>PT</option>
			</select>
		</div>
	);
};
