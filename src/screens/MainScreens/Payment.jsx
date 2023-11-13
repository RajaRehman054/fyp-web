import React, { useState } from 'react';
import { IoWalletOutline } from 'react-icons/io5';

const Payment = () => {
	return (
		<div className='flex w-full flex-col'>
			{/*Top Heading */}
			<div className='flex w-full '>
				<h1 className='text-[20px] font-bold'>My Wallet</h1>
			</div>

			{/*View Area divided in two */}
			<div className='flex flex-wrap justify-between'>
				{/*First Column */}
				<div className='w-full sm:w-[75%]'>
					<div className='relative my-[22px] flex w-full flex-row  rounded-xl bg-white p-4 shadow-xl'>
						<div className=' w-full  bg-[#FF8216] flex flex-row justify-between items-center bg-opacity-30 p-4 rounded-xl'>
							<div>
								<div className='flex flex-row items-center'>
									<p className='text-[#FF8216] text-[25px] font-bold mr-[10px]'>
										1240.56$
									</p>
									<IoWalletOutline
										size={24}
										color='#FF8216'
									/>
								</div>

								<p className='text-[#FF8216] text-[15px] font-bold'>
									current Balance
								</p>
							</div>
							<button
								className='h-[22px] w-[100px] justify-center rounded-[10px] bg-[#FF8216]  text-[15px]   text-white hover:bg-[#F7A541] active:bg-[#FFD583] sm:h-[35px] sm:w-[200px]'
								style={{ transition: '0.3s' }}>
								+ Add Money to wallet
							</button>
						</div>
					</div>

					<div className='my-[22px] flex flex-row items-center justify-between'>
						<h1 className='text-[20px] font-bold'>
							Payment History
						</h1>
					</div>
				</div>

				{/* Second Column View */}
				<div className='hidden w-full sm:block sm:w-[23%]'></div>
			</div>
		</div>
	);
};

export default Payment;
