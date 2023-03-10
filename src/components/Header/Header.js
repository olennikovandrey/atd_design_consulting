import React from "react";

const Header = () => {
  const navs = ["Services", "About", "Contacts"];

  return (
    <header>
        <span className="logo">ATD Design and Consultancy FZ-LLC</span>
        <div className="navs-wrapper">
        { navs.map(item =>
            <nav onClick={ () =>
              document.getElementById(item)
                .scrollIntoView({ block: "center", behavior: "smooth" })
            }
            >{ item }</nav>
          ) }
      </div>
    </header>
  );
};

export default Header;
