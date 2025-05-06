const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p>&copy; 2023 Your Company. All rights reserved.</p>
        <p>
          Follow us on{' '}
          <a href="https://twitter.com/yourcompany" className="text-blue-400">
            Twitter
          </a>{' '}
          and{' '}
          <a href="https://www.facebook.com/yourcompany" className="text-blue-400">
            Facebook
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
