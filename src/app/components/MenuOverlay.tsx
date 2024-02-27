import React from "react";
import NavLink from "./NavLink";

interface ILinks {
  links: any;
}

const MenuOverlay = (props: ILinks) => {
  return (
    <ul className="flex flex-col py-4 items-center">
      {props.links.map((link: any, index: number) => (
        <li key={index}>
          <NavLink href={link.path} title={link.title} />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
