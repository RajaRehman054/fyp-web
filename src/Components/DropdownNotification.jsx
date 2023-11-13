import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { MdNotifications } from 'react-icons/md';

const DropdownNotification = () => {
	const [dropdownOpen, setDropdownOpen] = useState(false);

	const trigger = useRef(null);
	const dropdown = useRef(null);

	useEffect(() => {
		const clickHandler = ({ target }) => {
			if (!dropdown.current) return;
			if (
				!dropdownOpen ||
				dropdown.current.contains(target) ||
				trigger.current.contains(target)
			)
				return;
			setDropdownOpen(false);
		};
		document.addEventListener('click', clickHandler);
		return () => document.removeEventListener('click', clickHandler);
	});

	// close if the esc key is pressed
	useEffect(() => {
		const keyHandler = ({ keyCode }) => {
			if (!dropdownOpen || keyCode !== 27) return;
			setDropdownOpen(false);
		};
		document.addEventListener('keydown', keyHandler);
		return () => document.removeEventListener('keydown', keyHandler);
	});

	return (
		<li className='relative'>
			<div
				className='b-black flex h-10 w-10 cursor-pointer items-center justify-center rounded-[8px]'
				onClick={() => setDropdownOpen(!dropdownOpen)}
				ref={trigger}>
				<MdNotifications size={28} color='#48525B' />
			</div>

			<div
				ref={dropdown}
				onFocus={() => setDropdownOpen(true)}
				onBlur={() => setDropdownOpen(false)}
				className={`h-90 border-stroke absolute right-0 mt-2.5 flex w-72 flex-col rounded-lg border bg-white shadow-md sm:left-0 sm:w-80 ${
					dropdownOpen === true ? 'block' : 'hidden'
				}`}>
				<div className='px-4 py-3'>
					<h5 className='text-sm font-medium text-heading'>
						Notification
					</h5>
				</div>

				<ul className='flex h-auto flex-col overflow-y-auto'>
					<li>
						<Link
							className='flex flex-col gap-2 border-t border-gray-200 px-4 py-3 hover:bg-gray-100'
							to='#'>
							<p className='text-sm'>
								<span>Edit your information in a swipe</span>{' '}
								Sint occaecat cupidatat non proident, sunt in
								culpa qui officia deserunt mollit anim.
							</p>

							<p className='text-xs'>12 May, 2025</p>
						</Link>
					</li>
					<li>
						<Link
							className='flex flex-col gap-2 border-t border-gray-200 px-4 py-3 hover:bg-gray-100'
							to='#'>
							<p className='text-sm'>
								<span>Edit your information in a swipe</span>{' '}
								Sint occaecat cupidatat non proident, sunt in
								culpa qui officia deserunt mollit anim.
							</p>

							<p className='text-xs'>12 May, 2025</p>
						</Link>
					</li>
					<li>
						<Link
							className='flex flex-col gap-2 border-t border-gray-200 px-4 py-3 hover:bg-gray-100'
							to='#'>
							<p className='text-sm'>
								<span>Edit your information in a swipe</span>{' '}
								Sint occaecat cupidatat non proident, sunt in
								culpa qui officia deserunt mollit anim.
							</p>

							<p className='text-xs'>12 May, 2025</p>
						</Link>
					</li>
					<li>
						<Link
							className='flex flex-col gap-2 border-t border-gray-200 px-4 py-3 hover:bg-gray-100'
							to='#'>
							<p className='text-sm'>
								<span>Edit your information in a swipe</span>{' '}
								Sint occaecat cupidatat non proident, sunt in
								culpa qui officia deserunt mollit anim.
							</p>

							<p className='text-xs'>12 May, 2025</p>
						</Link>
					</li>
				</ul>
			</div>
		</li>
	);
};

export default DropdownNotification;
