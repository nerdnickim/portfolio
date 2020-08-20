import React from "react";
import ProjectApp from "../../Components/ProjectApp";
import { photos, textS, explan } from "../../dataContain";

const InstaWebClone = () => (
	<ProjectApp data={photos.instaApp} textS={textS.instaApp} explan={explan.instaApp} />
);

export default InstaWebClone;
