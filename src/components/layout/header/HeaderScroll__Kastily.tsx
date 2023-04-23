import React, { FC, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import scss from "./Header.module.scss";

interface linksProps {
	label: any;
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
			to: "/",
			spy: true,
			smooth: true,
			offset: 0,
			duration: 500
		},
		{
			label: "About",
			to: "about",
			spy: true,
			smooth: true,
			offset: 0,
			duration: 500
		},
		{
			label: "Contact",
			to: "contact",
			spy: true,
			smooth: true,
			offset: 0,
			duration: 500
		}
	];

	const handleSetActive = (to: string) => {
		setActiveLink(to);
	};

	const handleScroll = () => {
		window.scrollBy(0, 3);
		setTimeout(() => {
			window.scrollBy(0, 1);
		}, 600);
	};

	return (
		<>
			<div className={scss.header}>
				<div className={scss.content}>
					{links.map((link) => (
						<ScrollLink
							key={link.to}
							to={link.to}
							spy={link.spy}
							smooth={link.smooth}
							offset={link.offset}
							duration={link.duration}
							className={`${scss.link} ${
								activeLink === link.to ? scss.active : ""
							}`}
							activeClass={scss.active}
							onSetActive={() => handleSetActive(link.to)}
							onClick={() => {
								handleScroll();
							}}
						>
							{link.label}
						</ScrollLink>
					))}
				</div>
			</div>
		</>
	);
};

export default Header;
