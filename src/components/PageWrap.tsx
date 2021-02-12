import { CustomHead } from '@components/CustomHead';
import { DarkModeButton } from '@components/DarkModeButton';
import { LanguageButton } from '@components/LanguageButton';

export const PageWrap: React.FC = ({ children }) => {
	return (
		<>
			<CustomHead />
			<DarkModeButton />
			<LanguageButton />
			{children}
		</>
	);
};
