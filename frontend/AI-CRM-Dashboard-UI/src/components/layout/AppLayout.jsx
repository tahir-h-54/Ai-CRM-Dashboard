import { Sidebar } from 'lucide-react'
import {useState} from 'react'

const AppLayout = () => {
    const [mobileOpen, setmobileOpen] = useState(false)
  return (
    <div className='flex h-screen overflow-hidden bg-canvas' >
    <div className='hidden shrink-0 pl-3 lg:flex'>
        <IconRail />
    </div>
    {mobileOpen && (
        <div className='fixed inset-0 z-50 lg:gidden'> 
            <div className='absolute inset-0 bg:ink/40 backdrop-blur-sm' onClick={() => setmobileOpen(false)} />
            <div className='absolute left-0 top-0 h-full animate-[slidein_.25s_ease]'>
                <Sidebar onNavigate={() => setmobileOpen(false)} />
            </div>
        </div>
    )}
    <div className='flex flex-1 flex-col overflow-hidden'>
        <div className='px-4 pt-4 md:px-6 md:pt-5'>
            <TopNav onMenuClick={()=> setmobileOpen(true)} />
        </div>
        <main className='flex-1 overflow-y-auto px-4 py-6 md:px-6'>
            <div className='mx:auto max-w-7xl'>
                <Outlet />
            </div>
        </main>
    </div>
    </div>
  );
}

export default AppLayout