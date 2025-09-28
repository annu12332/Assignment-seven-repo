import { useEffect, useState } from 'react'
import Navbar from './all-components/Navbar'
import Bannner from './all-components/Bannner'
import Footer from './all-components/Footer'
import AllTickets from './all-components/All-tickets'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import './App.css'

function App() {
  const [tickets, setTickets] = useState([])
  const [inProgressCount, setInProgressCount] = useState(0)
  const [resolvedTaskCount, setResolvedTaskCount] = useState(0);

 

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
      <Navbar />
      <div className='container mx-auto'>
        {/* Banner e count pathano */}
        <Bannner inProgressCount={inProgressCount} resolvedTaskCount={resolvedTaskCount} />

        {/* Tickets e setter pathano */}
        <AllTickets 
          tickets={tickets} 
		  setTickets={setTickets} 
          setInProgressCount={setInProgressCount} 
		  setResolvedTaskCount={setResolvedTaskCount}
        />
		<ToastContainer position="top-right" autoClose={2000} />
      </div>
      <Footer />
    </div>
  )
}

export default App
