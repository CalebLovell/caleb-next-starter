import { CustomHead } from '@components/CustomHead';
import { NavBar } from './NarBar';

export const Container: React.FC = ({ children }) => {
	return (
		<>
			<CustomHead />
			<NavBar />
			{children}
		</>
	);
};
