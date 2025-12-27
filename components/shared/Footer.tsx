const Footer = () => {
  return (
    <footer className='border-t border-gray-700/30 shadow-md dark:shadow-none'>
      <div className='container py-4 text-center'>
        <p>© {new Date().getFullYear()} Tech Forum. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
