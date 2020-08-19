import React from "react";
import Project from "../../Components/Project";
import { photos, textS, explan } from "../../dataContain";

const First = () => {
	return <Project data={photos.newWave} textS={textS.newWave} explan={explan.newWave} />;
};

export default First;
