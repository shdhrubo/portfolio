import React from "react";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className="bg-[#10121B] pt-20">
      <div className="bg-neutral text-neutral-content">
        <footer class="footer p-10 ">
          <div>
            <p className="text-xl text-[#44A076] font-bold">
              Shoriful Habib <br />
            </p>
            <span>Front-end Web Developer || MERN Stack Developer || React Developer</span>
          </div>
          <div>
            <span class="footer-title">Social</span>
            <div class="grid grid-flow-col gap-4">
              <a href=""></a>
              <a href=""></a>
              <a href=""></a>
            </div>
          </div>
        </footer>
        <div className="pb-10">
          &#169; {year} All rights reserved by{" "}
          <span className="text-[#44A076]">SHORIFUL</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
