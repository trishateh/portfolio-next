import Link from "next/link";

interface INavLink {
  href: string;
  title: string;
}

const NavLink = (props: INavLink) => {
  return (
    <a
      href={props.href}
      className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm: text-xl rounded md:p-0 hover:text-white "
    >
      {props.title}
    </a>
  );
};

export default NavLink;
