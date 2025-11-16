import LoginButton from './LoginButton.jsx';
import CartButton from './CartButton.jsx';
import SearchBar from './SearchBar.jsx';
import WebinarButton from './WebinarButton.jsx';
import CourseButton from './CourseButton.jsx';

function Navigation() {
    return (
        <div className='flex flex-row items-center justify-between'>
            <div className='flex items-center justify-center gap-10 py-1'>
                <a href='/'><img className='mt-3 ml-5 w-18 h-25' src="/logo.png" alt="Logo" /></a>
                <SearchBar />
            </div>

            <div className='flex items-center justify-center gap-4'>
                <CourseButton />
                <WebinarButton />
                <CartButton />
                <LoginButton />
            </div>
            
        </div>
        
    )
    
}

export default Navigation;