const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <footer className="mt-auto">
        <div className="bg-black text-white py-3 text-sm">
          <div className="container">
            <div className="flex justify-between">
              <div> © {year} All Rights Reserved</div>
              <div>
                Crafted with 💓 by:
                <a
                  className="hover:text-orange-400"
                  href="https://www.linkedin.com/in/dm-lalwani/"
                  target="_blank"
                  title="Dinesh Lalwani LinkedIn profile"
                >
                  {" "}
                  DMLalwani
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
