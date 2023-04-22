import React, { FC, useState } from "react";
import { Link } from "react-scroll";
import scss from "./Header.module.scss";

interface linksProps {
	label: any;
	href: string;
	to: string;
	spy: boolean;
	smooth: boolean;
	offset: number;
	duration: number;
}

const Header: FC = () => {
	const [activeLink, setActiveLink] = useState<string>("");

	const links: linksProps[] = [
		{
			label: "Home",
			href: "/",
			to: "/",
			spy: true,
			smooth: true,
			offset: 0,
			duration: 500
		},
		{
			label: "About",
			href: "/about_test",
			to: "about",
			spy: true,
			smooth: true,
			offset: 0,
			duration: 500
		}
	];

	const handleSetActive = (to: string) => {
		setActiveLink(to);
	};

	return (
		<>
			<div className={scss.header}>
				<div className={scss.content}>
					{links.map((link) => (
						<Link
							key={link.to}
							to={link.to}
							spy={link.spy}
							smooth={link.smooth}
							offset={link.offset}
							duration={link.duration}
							className={`${scss.link} ${
								activeLink === link.to ? scss.active : ""
							}`}
							onSetActive={() => handleSetActive(link.to)}
						>
							{link.label}
						</Link>
					))}
				</div>
			</div>
		</>
	);
};

export default Header;