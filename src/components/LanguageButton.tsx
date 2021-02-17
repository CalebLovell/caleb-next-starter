import * as React from 'react';
import { i18n } from '../../i18n';

export const LanguageButton = (): JSX.Element => {
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
