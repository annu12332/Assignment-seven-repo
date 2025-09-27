import { useEffect, useState } from 'react'
import Navbar from './all-components/Navbar'
import Bannner from './all-components/Bannner'
import Footer from './all-components/Footer'
import AvailableTickets from './all-components/Available-tickets'
import './App.css'

function App() {
	const [tickets, setTickets] = useState([])

	useEffect(() => {
		const fetchTickets = async () => {
			const res = await fetch('/Ticket.json')
			const data = await res.json()
			setTickets(data)
		}
		fetchTickets()
	}, [])

	return (
		<div className='bg-gray-100'>
			<Navbar></Navbar>
			<div className='container mx-auto'>
				<Bannner></Bannner>

				<AvailableTickets tickets={tickets}></AvailableTickets>
			</div>
			<Footer></Footer>
		</div>
	)
}

export default App
