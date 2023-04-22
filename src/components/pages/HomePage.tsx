import Head from "next/head";
import React, { FC } from "react";
import scss from "@/components/pages/Style.module.scss";

const HomePage: FC = () => {
	return (
		<>
			<Head>
				<title>Home</title>
			</Head>
			<div id="/" className={scss.home__page}>
				<h4>lorem ipsum dolor sit amet, consectetur adip</h4>
			</div>
		</>
	);
};
export default HomePage;
