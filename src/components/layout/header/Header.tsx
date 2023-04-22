import React, { FC } from "react";
import { Link } from "react-scroll";
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
							className="link__faegrtdhd"
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
