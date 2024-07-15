const Footer = () => {
  return (
    <footer className="footer text-white bg-[#151515]  p-16">
  <aside> <img src="/src/assets/LogoFooter.svg" className=" size-32" alt="" />
    <p>
      ACME Industries Ltd.
      <br />
      Providing reliable tech since 1992
    </p>
  </aside>
  <nav>
    <h6 className="font-bold py-5 text-white">About</h6>
    <a className="link link-hover">Home</a>
    <a className="link link-hover">Service</a>
    <a className="link link-hover">Contact</a>
  </nav>
  <nav>
    <h6 className="font-bold py-5 text-white">Company</h6>
    <a className="link link-hover">Why Car Doctor</a>
    <a className="link link-hover">About us</a>
  </nav>
  <nav>
    <h6 className="font-bold py-5 text-white">Support</h6>
    <a className="link link-hover">Support Center</a>
    <a className="link link-hover">Feedback</a>
    <a className="link link-hover">Accessibility</a>
  </nav>
</footer>
  );
};

export default Footer;
