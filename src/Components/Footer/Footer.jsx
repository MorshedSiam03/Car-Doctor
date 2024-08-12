const Footer = () => {
  return (
    <footer className="footer text-white bg-[#151515]  p-16">
  <aside> <img src="https://raw.githubusercontent.com/MorshedSiam03/Car-Doctor/57322f13fb6eed60c434ac2a6dec9aa5c55d33cd/src/assets/LogoFooter.svg" className=" size-32" alt="" />
    <p>
      ACME Industries Ltd.
      <br />
      Providing reliable tech since 1992
    </p>
    <div className="flex gap-2">
      <img src="/src/assets/icons/google 1.svg" className="bg-slate-800 p-3 w-10 h-10 rounded-full" alt="" />
      <img src="/src/assets/icons/bx_bxl-facebook.svg" className="bg-slate-800 p-3 w-10 h-10 rounded-full" alt="" />
      <img src="/src/assets/icons/bx_bxl-linkedin.svg" className="bg-slate-800 p-3 w-10 h-10 rounded-full" alt="" />
      <img src="/src/assets/icons/bx_bxl-linkedin.svg" className="bg-slate-800 p-3 w-10 h-10 rounded-full" alt="" />
    </div>
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
