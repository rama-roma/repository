import { Button } from 'antd'
import { Link, Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <header className='max-w-[1400px] m-auto p-4'>
        <nav className='flex items-center gap-[20px] justify-center'>
            <Link to='/home'>
              <Button>Home</Button>
            </Link>
            <Link to='/counter'>
              <Button>Counter</Button>            
            </Link>
            <Link to='/sync'>
              <Button>Sync</Button>
            </Link>
            <Link to='/async'>
              <Button>Async</Button>
            </Link>
        </nav>
      </header>

      <main className='max-w-[1400px] m-auto p-4'>
        <Outlet/>
      </main>
    </>
  )
}

export default Layout