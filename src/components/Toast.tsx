import { ToastProps } from 'react-toast-notifications';

export const Toast: React.FC<ToastProps> = ({ appearance, children, onDismiss }): JSX.Element => {
	const thingy = () => {
		switch (appearance) {
			case `info`:
				return `bg-green-500`;
			case `success`:
				return `bg-blue-500`;
			case `warning`:
				return `bg-yellow-500`;
			case `error`:
				return `bg-red-500`;
		}
	};
	return (
		<div className='p-4 mb-2 rounded-md w-72 bg-green-50'>
			<div className='flex'>
				<div className='flex-shrink-0'>
					<svg className='w-5 h-5 text-green-400' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' aria-hidden='true'>
						<path
							fillRule='evenodd'
							d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
							clipRule='evenodd'
						/>
					</svg>
				</div>
				<div className='ml-3'>
					<p className='text-sm font-medium text-green-800'>{children}</p>
				</div>
				<div className='pl-3 ml-auto'>
					<div className='-mx-1.5 -my-1.5'>
						<button onClick={() => onDismiss()} className='inline-flex bg-green-50 rounded-md p-1.5 text-green-500 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-50 focus:ring-green-600'>
							<span className='sr-only'>Dismiss</span>
							<svg className='w-5 h-5' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' aria-hidden='true'>
								<path
									fillRule='evenodd'
									d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
									clipRule='evenodd'
								/>
							</svg>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
