import React from 'react'

const AvailableTickets = ({ tickets }) => {
	console.log(tickets)

	return (
		<div>
			<h2 className='text-sm font-bold text-gray-800 mt-9'>Customer Tickets</h2>
			<div className='flex gap-3 mt-3 '>
				<div className=' gap-2 grid grid-cols-3'>
					{tickets.map((ticket) => (
						<div key={ticket.id} className=' bg-white rounded-md shadow-md'>
							<div className='card-body p-1.5 '>
								<div className='flex justify-between items-center'>
									<h2 className='card-title text-xs font-semibold text-gray-700'>
										{ticket.title}
									</h2>
									<h3>Open</h3>
								</div>
								<p className='text-gray-500 text-xs'>{ticket.description}</p>
								<div className='flex justify-between'>
									<div className='flex gap-1'>
										<p className='text-gray-500 text-xs'>{ticket.id}</p>
										<p
											className={`priority-${ticket.priority.toLowerCase()} font-semibold text-xs`}
										>
											{ticket.priority} priority
										</p>
									</div>
									<div className='flex gap-0.5'>
										<p className='text-xs text-gray-500'>{ticket.customer}</p>
										<p className='text-xs text-gray-500'>{ticket.createdAt}</p>
									</div>
								</div>
								<div className='card-actions justify-end'></div>
							</div>
						</div>
					))}
				</div>
				<div>
					<div>
						<h2 className='mt-[-35px] text-gray-800 text-sm font-bold mb-2'>
							Task Status
						</h2>
						<div className='text-gray-800 bg-white  rounded-md p-2'>
							<h1 className='text-sm font-semibold'></h1>
							<p className='text-xs whitespace-nowrap'>
								Select a ticket to add to Task Status
							</p>
						</div>
					</div>

					<div>
						<h2 className='mt-[-px] text-gray-800 text-sm font-bold mb-2'>
							Task Status
						</h2>
						<div className='text-gray-800 bg-white  rounded-md p-2'>
							<h1 className='text-sm font-semibold'></h1>
							<p className='text-xs whitespace-nowrap'>
								Select a ticket to add to Task Status
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default AvailableTickets
