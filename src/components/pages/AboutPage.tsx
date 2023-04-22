import React, { FC } from "react";
import scss from "@/components/pages/Style.module.scss";

const AboutPage: FC = () => {
	return (
		<>
			<div id="about" className={scss.about__page}>
				<h3>AboutPage</h3>
			</div>
		</>
	);
};
export default AboutPage;
