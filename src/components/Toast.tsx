import { ToastProps } from 'react-toast-notifications';
import { Transition } from '@headlessui/react';

export const Toast: React.FC<ToastProps> = ({ appearance, onDismiss, children }): JSX.Element => {
	return (
		<Transition
			show={true}
			enter='transform ease-out duration-300 transition'
			enterFrom='translate-y-2 opacity-0'
			enterTo='translate-y-0 opacity-100'
			leave='transition ease-in duration-100'
			leaveFrom='opacity-100'
			leaveTo='opacity-0'
		>
			<div
				role='status'
				className={`flex justify-between items-center my-2 rounded-lg border-l-4 border-${renderColor(appearance)}-400 bg-${renderColor(
					appearance
				)}-100`}
			>
				<div className='flex items-center py-2 pl-4'>
					<div>{renderIcon(appearance)}</div>
					<p className={`mx-4 font-medium text-${renderColor(appearance)}-400`}>{children}</p>
				</div>
				<div className='py-2 pr-4'>
					<button
						onClick={() => onDismiss()}
						className={`p-1 bg-${renderColor(appearance)}-100 rounded-md text-${renderColor(appearance)}-500 hover:bg-${renderColor(
							appearance
						)}-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-${renderColor(
							appearance
						)}-100 focus:ring-${renderColor(appearance)}-600`}
					>
						<span className='sr-only'>Dismiss</span>
						<svg className='w-6 h-6' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' aria-hidden='true'>
							<path
								fillRule='evenodd'
								d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
								clipRule='evenodd'
							/>
						</svg>
					</button>
				</div>
			</div>
		</Transition>
	);
};

const renderColor = appearance => {
	switch (appearance) {
		case `info`:
			return `blue`;
		case `success`:
			return `green`;
		case `warning`:
			return `yellow`;
		case `error`:
			return `red`;
	}
};

const renderIcon = appearance => {
	switch (appearance) {
		case `info`:
			return (
				<svg
					className={`w-6 h-6 text-${renderColor(appearance)}-400`}
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 20 20'
					fill='currentColor'
					aria-hidden='true'
				>
					<path
						fillRule='evenodd'
						d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z'
						clipRule='evenodd'
					/>
				</svg>
			);
		case `success`:
			return (
				<svg
					className={`w-6 h-6 text-${renderColor(appearance)}-400`}
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 20 20'
					fill='currentColor'
					aria-hidden='true'
				>
					<path
						fillRule='evenodd'
						d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
						clipRule='evenodd'
					/>
				</svg>
			);
		case `warning`:
			return (
				<svg
					className={`w-6 h-6 pt-0.5 text-${renderColor(appearance)}-400`}
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 20 20'
					fill='currentColor'
					aria-hidden='true'
				>
					<path
						fillRule='evenodd'
						d='M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z'
						clipRule='evenodd'
					/>
				</svg>
			);
		case `error`:
			return (
				<svg
					className={`w-6 h-6 text-${renderColor(appearance)}-400`}
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 20 20'
					fill='currentColor'
					aria-hidden='true'
				>
					<path
						fillRule='evenodd'
						d='M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z'
						clipRule='evenodd'
					/>
				</svg>
			);
	}
};
