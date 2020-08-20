import React from "react";
import Project from "../../Components/Project";
import { photos, textS, explan } from "../../dataContain";

const InstaWebClone = () => (
	<Project data={photos.instaWeb} textS={textS.instaWeb} explan={explan.instaWeb} />
);

export default InstaWebClone;
