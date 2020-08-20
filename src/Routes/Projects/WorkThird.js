import React from "react";
import ProjectApp from "../../Components/ProjectApp";
import { photos, textS, explan, address } from "../../dataContain";

const InstaWebClone = () => (
	<ProjectApp
		data={photos.instaApp}
		textS={textS.instaApp}
		explan={explan.instaApp}
		address={address.instaApp}
		serverGit={address.prismaServer}
	/>
);

export default InstaWebClone;
