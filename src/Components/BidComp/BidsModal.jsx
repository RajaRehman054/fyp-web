import React from 'react';
import UserOne from '../../assets/img1.png';
const data1 = [
	{
		img: UserOne,
		name: 'Papaya',
		items: 60,
	},
	{
		img: UserOne,
		name: 'Mango',
		items: 45,
	},
	{
		img: UserOne,
		name: 'keela',
		items: 60,
	},
	{
		img: UserOne,
		name: 'orange',
		items: 45,
	},
	{
		img: UserOne,
		name: 'keela',
		items: 60,
	},
	{
		img: UserOne,
		name: 'orange',
		items: 45,
	},
];
const BidsModal = ({ showmodal }) => {
	return (
		<dialog id='my_modal' className='modal '>
			<div className='modal-box w-[400px] bg-white'>
				<form method='dialog'>
					<button
						className='btn btn-circle btn-ghost btn-sm absolute right-2 top-2'
						onClick={showmodal}>
						✕
					</button>
				</form>
				<div>
					<h3 className='text-center text-lg font-bold text-[#FF8216]'>
						Top Creators
					</h3>
				</div>
				{data1.map(element => (
					<div className=' mb-[10px]  flex h-[80px] cursor-pointer flex-row items-center justify-between  rounded-[20px] bg-[white]  p-4  hover:bg-[#EBEBEB]'>
						<div className='avatar items-center'>
							<div className='w-[50px] rounded-full'>
								<img src={element.img} />
							</div>
						</div>
						<div className='mr-[auto] px-5'>
							<p className='font-bold text-[black]'>
								{element.name}
							</p>
							<p className='text-[black]'>
								{element.items} items
							</p>
						</div>
						<button
							className='h-[22px] w-[100px] justify-center rounded-[10px] border-[1px]  border-[#FF8216] text-[15px] text-[black] hover:bg-[#FF8216] hover:text-white active:bg-[#FFD583]'
							style={{ transition: '0.3s' }}>
							Follow
						</button>
					</div>
				))}
			</div>
		</dialog>
	);
};

export default BidsModal;
