import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className='flex gap-4 border-b border-b-gray-700 px-5'>
      <Link to='/' className='hover:text-blue-400'>
        Home
      </Link>
      <Link to='/about' className='hover:text-blue-400'>
        About
      </Link>
    </nav>
  );
};

export default Nav;
