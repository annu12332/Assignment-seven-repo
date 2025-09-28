import React from 'react'

const Navbar = () => {
	return (
		<nav className=' w-full items-center justify-between px-8 py-3 bg-white shadow text-center md:flex '>
			<div className='text-xl font-bold text-gray-800 max-sm:text-sm'>CS-Ticket System</div>

			<div className='md:flex gap-2 '>
				<div className='text-xs mb-1 md:flex items-center space-x-6'>
				<a href='#home' className='text-gray-700 hover:text-gray-900'>
					Home
				</a>
				<a href='#faq' className='text-gray-700 hover:text-gray-900'>
					FAQ
				</a>
				<a href='#changelog' className='text-gray-700 hover:text-gray-900'>
					Changelog
				</a>
				<a href='#blog' className='text-gray-700 hover:text-gray-900'>
					Blog
				</a>
				<a href='#download' className='text-gray-700 hover:text-gray-900'>
					Download
				</a>
				<a href='#contact' className='text-gray-700 hover:text-gray-900'>
					Contact
				</a>
			</div>
			<button className='bg-gradient-to-r from-[#422AD5] to-purple-600 text-white px-4 py-2 rounded-md'>
				+ New Ticket
			</button>
			</div>
		</nav>
	)
}

export default Navbar
