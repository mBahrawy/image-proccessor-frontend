import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Create from './pages/Create'
import Edit from './pages/Edit'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <BrowserRouter>
        <main className='min-vh-100 d-flex flex-column'>
          <Header />
          <div className='px-5 flex-grow-1'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='create' element={<Create />} />
              <Route path='edit' element={<Edit />} />
            </Routes>
          </div>
          <Footer />
        </main>
      </BrowserRouter>
    </>
  )
}

export default App
