import React, { useState } from 'react';
import { toast } from "react-toastify";
import { FaRegCalendar } from "react-icons/fa6";

const AllTickets = ({ tickets, setInProgressCount, setResolvedTaskCount, setTickets }) => {
	console.log(tickets)

	const [taskStatus, setTaskStatus] = useState([]);
	const [resolvedTasks, setResolvedTasks] = useState([]);


	const handleComplete = (task) => {
		setInProgressCount(prev => prev - 1);
		setResolvedTasks([...resolvedTasks, task]);
		setResolvedTaskCount(prev => prev + 1);
		setResolvedTasks([...resolvedTasks, task]);
		  setTickets(prev => prev.filter(t => t.id !== task.id));

		
		setTaskStatus(taskStatus.filter(t => t.id !== task.id));
		toast(`Task Completed`);

	};

	const handleAdd = (ticket) => {
		setTaskStatus([...taskStatus, ticket]);
		setInProgressCount(prev => prev + 1);
		toast(`Added "${ticket.title}" to Status`);
		  


	}

	return (
		<div>
			<h2 className='text-sm font-bold text-gray-800 mt-9'>Customer Tickets</h2>
			<div className=' md:flex gap-3 mt-3 '>
				<div className='grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-2'>
					{tickets.map((ticket) => (
						<div key={ticket.id}
							onClick={() => handleAdd(ticket)} className=' bg-white rounded-md shadow-md'>
							<div className='card-body p-1.5 '>
								<div className='flex justify-between items-center'>
									<h2 className='card-title text-xs font-semibold text-gray-700'>
										{ticket.title}
									</h2>
									<div
										className={`flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium
                                        ${ticket.status === "Open"
												? "bg-green-100 text-green-700"
												: ticket.status === "In Progress"
													? "bg-amber-200 text-amber-600"
													: "bg-red-100 text-red-700"
											}
                                        `}
									>
										<span
											className={`w-2.5 h-2.5 rounded-full
                                            ${ticket.status === "Open" ? "bg-green-600" : ticket.status === "In Progress" ? "bg-amber-500" : "bg-red-600"}
                                            `}
										></span>
										<span>{ticket.status}</span>
									</div>

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
										<FaRegCalendar className='text-gray-500' />
										<p className='text-xs text-gray-500'> {ticket.createdAt}</p>
									</div>
								</div>
								<div className='card-actions justify-end'></div>
							</div>
						</div>
					))}
				</div>
				<div>
					<div>
						<h2 className='mt-2 md:mt-[-35px] text-gray-800 text-sm font-bold mb-2'>
							Task Status
						</h2>
						<div className="text-gray-800 bg-white rounded-md p-2">
							{taskStatus.length === 0 ? (
								<p className="text-xs whitespace-nowrap">
									Select a ticket to add to Task Status
								</p>
							) : (
								taskStatus.map((task) => (
									<div>
										<p key={task.id} className="text-xs font-semibold whitespace-nowrap">
											{task.title}
										</p>
										<button onClick={() => handleComplete(task)} className='text-xs text-white justify-center bg-green-600 w-full py-1 mt-1 mb-3 rounded-md '>Complete</button>
									</div>
								))

							)}
						</div>

					</div>

					<div>
						<h2 className='mt-[-px] text-gray-800 text-sm font-bold mb-2'>
							Resolved Task
						</h2>
						<div className="text-gray-800 bg-white rounded-md p-2">
							{resolvedTasks.length === 0 ? (
								<p className="text-xs whitespace-nowrap">
									Complete task
								</p>
							) : (
								resolvedTasks.map((task) => (

									<p key={task.id} className="text-xs font-semibold whitespace-nowrap mb-1 bg-[#E0E7FF] py-1.5 rounded-md px-0.5">
										{task.title}
									</p>

								))

							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default AllTickets
