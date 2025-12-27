import Navbar from '@/components/shared/navigation/Navbar';

const Header = () => {
  return (
    <header className='border-b border-gray-700/30 shadow-md dark:shadow-none'>
      <div className='container'>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
