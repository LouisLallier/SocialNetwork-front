import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import {
  Navbar,
  MobileNav,
  Typography,
  IconButton,
} from "@material-tailwind/react";

export const refs = {
  xpRef: "xpRef",
  portfolioRef: "portfolioRef",
  contactRef: "contactRef",
};

const sections = [
  { name: "Experience", ref: refs.xpRef },
  { name: "Portfolio", ref: refs.portfolioRef },
  { name: "Contact", ref: refs.contactRef },
];

const FancyNavLink = ({ name, to }) => (
  <Typography
    as="li"
    variant="small"
    color="blue-gray"
    className="p-1 font-normal cursor-pointer hover:underline underline-offset-4"
  >
    <Link
      activeClass="active"
      className="flex items-center"
      to={to}
      spy={true}
      smooth={true}
      offset={50}
      duration={500}
    >
      {name}
    </Link>
  </Typography>
);

const Nav = () => {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {sections.map(({ name, ref }) => (
        <FancyNavLink key={name} name={name} to={ref} />
      ))}
    </ul>
  );

  return (
    <Navbar className="fixed max-w-screen-xlpy-2 px-4 lg:px-8 lg:py-4">
      <div className="p-4 container mx-auto flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          variant="small"
          className="mr-4 cursor-pointer py-1.5 font-normal"
        >
          <span>Social Network</span>
        </Typography>
        <div className="hidden lg:block">{navList}</div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>{navList}</MobileNav>
    </Navbar>
  );
};

export default Nav;
