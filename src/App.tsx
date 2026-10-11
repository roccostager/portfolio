import Header from '@components/Header/Header'
import { ScrollRestoration, Outlet } from 'react-router'



function App() {
  return (
    <>
      <ScrollRestoration />
      <Header />
      <Outlet />
    </>
  )
}

export default App
