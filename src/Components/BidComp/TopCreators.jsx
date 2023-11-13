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
const TopCreators = props => {
	const { num1, num2 } = props;
	return (
		<table className='w-[49%] table-auto  text-[12px] font-normal text-text  md:text-[14px] '>
			<tbody>
				{data1.slice(num1, num2).map(element => (
					<tr className='h-[90px] bg-[transparent]'>
						<td>
							<div className=' mb-[20px]  flex h-[80px] cursor-pointer flex-row items-center justify-between  rounded-[20px] bg-[white]  p-4  shadow-xl hover:bg-[#EBEBEB]'>
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
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default TopCreators;
