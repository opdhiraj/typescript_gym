import React, { useState } from "react";
import "./navbar.css";
import logo from "../../assets/Logo.png";
import Link from "./Link";
import { SelectedPage } from "../../shared/types";
import useMediaQuery from "../../hooks/useMediaQuery";
import ActionButton from "../../shared/ActionButton";

type Props = {
  selectedPage: SelectedPage;
  isTopOfPage: boolean;
  setSelectedPage: (value: SelectedPage) => void; //function
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const navbarBackground = isTopOfPage ? "bg-secondary" : "bg-primary";
  return (
    <nav>
      <div className={`${navbarBackground} flexBetween navbar p-2`}>
        <div className="flexBetween navbarInner">
          <div className="flexBetween navbarLeft gap-4 w-100">
            {/* left side */}
            <img src={logo} alt="logo" />
            {/* right side  */}
            {isAboveMediumScreens ? (
              <div className="flexBetween navbarRight w-100">
                <div className=" flexBetween navbarInnerLeft gap-2">
                  <Link
                    page="Home"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />

                  <Link
                    page="Benifits"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />

                  <Link
                    page="Our classes"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />

                  <Link
                    page="contact us"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                </div>
                <div className="navbarInnerRight flexBetween gap-4">
                  <p>Sign In</p>

                  <ActionButton setSelectedPage={setSelectedPage}>
                    Become a member
                  </ActionButton>
                </div>
              </div>
            ) : (
              <button
                className="rounded-circle bg-warning p-2"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <i className="bi bi-list text-light d-flex w-50 h-50"></i>
              </button>
            )}
          </div>
        </div>
      </div>
      {/* mobile menu */}
      {!isAboveMediumScreens && isMenuToggled && (
        <div className="mobileMenu bg-warning">
          {/* close icon */}
          <div className="d-flex justify-content-end p-4">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <i className="bi bi-x-lg w-100 h-100" />
            </button>
          </div>

          {/* menu items */}
          <div className=" d-flex flex-column ms-4 gap-4">
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />

            <Link
              page="Benifits"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />

            <Link
              page="Our classes"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />

            <Link
              page="contact us"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
