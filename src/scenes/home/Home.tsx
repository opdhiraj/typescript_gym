import React from "react";
import useMediaQuery from "../../hooks/useMediaQuery";
import ActionButton from "../../shared/ActionButton";
import { SelectedPage } from "../../shared/types";
import HomePageText from "../../assets/HomePageText.png";
import HomePageGraphic from "../../assets/HomePageGraphic.png";
import SponsorRedBull from "../../assets/SponsorRedBull.png";
import SponsorForbes from "../../assets/SponsorForbes.png";
import SponsorFortune from "../../assets/SponsorFortune.png";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  return (
    <section id="home" className="gap-4 bg-body-secondary p-4">
      {/* image and header */}
      <div
        className="d-flex mx-auto align-items-center justify-content-center"
        style={{ width: "83.3%" }}
      >
        {/* main header */}
        <div className="z-1">
          {/* heading */}
          <div className="mt-2">
            <div>
              <div>
                <img src={HomePageText} alt="home-page-text" />
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa
              veniam quidem, possimus mollitia vero blanditiis illum enim
              nesciunt sunt impedit quibusdam, hic, ad aspernatur ex quae
              laboriosam deserunt beatae ipsam.
            </p>
          </div>
          {/* actions */}
          <div>
            <ActionButton setSelectedPage={setSelectedPage}>
              Join Now
            </ActionButton>
            <a
              className=""
              href={`#${SelectedPage.ContactUs}`}
              onClick={() => setSelectedPage(SelectedPage.ContactUs)}
            >
              <p>Learn More</p>
            </a>
          </div>
        </div>
        {/* image  */}
        <div>
          <img src={HomePageGraphic} alt="home-page-graphic" />
        </div>
      </div>
      {/* spomsors */}
      {isAboveMediumScreens && (
        <div>
          <div className="mx-auto ">
            <div className="d-flex gap-4 align-items-center justify-content-between  ">
              <img src={SponsorRedBull} alt="rebull-sponsor" />
              <img src={SponsorForbes} alt="forbes-sponsor" />
              <img src={SponsorFortune} alt="fortune-sponsor" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;
