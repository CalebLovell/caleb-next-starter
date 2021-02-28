import { ToastContainerProps } from 'react-toast-notifications';

export const ToastContainer: React.FC<ToastContainerProps> = ({ hasToasts, children }): JSX.Element => {
	return (
		<div
			className='container fixed bottom-0 z-50 max-h-full pb-2 overflow-hidden'
			style={{
				pointerEvents: hasToasts ? `auto` : `none`,
			}}
		>
			{children}
		</div>
	);
};
