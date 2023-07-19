import React from "react";
import { SelectedPage } from "./types";

type Props = {
  children: React.ReactNode;
  setSelectedPage: (value: SelectedPage) => void;
};

const ActionButton = ({ children, setSelectedPage }: Props) => {
  return (
    <a
      href={`#${SelectedPage.ContactUs}`}
      className="rounded bg-warning p-2  text-decoration-none"
      onClick={() => setSelectedPage(SelectedPage.ContactUs)}
    >
      {children}
    </a>
  );
};

export default ActionButton;
