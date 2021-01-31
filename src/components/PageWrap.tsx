import { CustomHead } from '@components/CustomHead';
import { DarkModeButton } from '@components/DarkModeButton';

export const PageWrap: React.FC = ({ children }) => {
	return (
		<>
			<CustomHead />
			<DarkModeButton />
			{children}
		</>
	);
};
