function Footer() {
  const footerYear = new Date().getFullYear();
  return (
    <div className="footer p-10 bg-gray-800 text-primary-content footer-center">
      <div>
        <p>Copyright &copy; {footerYear} All rights reserved</p>
      </div>
    </div>
  );
}

export default Footer;
