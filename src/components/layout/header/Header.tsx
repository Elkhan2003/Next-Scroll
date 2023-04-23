import React, { FC } from "react";
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
	const durationScroll = 500;

	const links: linksProps[] = [
		{
			label: "Home",
			to: "/",
			spy: true,
			smooth: true,
			offset: 0,
			duration: durationScroll
		},
		{
			label: "About",
			to: "about",
			spy: true,
			smooth: true,
			offset: 0,
			duration: durationScroll
		},
		{
			label: "Contact",
			to: "contact",
			spy: true,
			smooth: true,
			offset: 0,
			duration: durationScroll
		}
	];

	const handleScroll = () => {
		setTimeout(() => {
			window.scrollBy(0, 1);
		}, durationScroll);
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
							className={scss.link}
							activeClass={scss.active}
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
