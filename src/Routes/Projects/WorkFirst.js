import React from "react";
import Project from "../../Components/Project";
import { photos, textS, explan, pageAddress } from "../../dataContain";

const First = () => {
	return (
		<Project
			data={photos.newWave}
			textS={textS.newWave}
			explan={explan.newWave}
			pageAddress={pageAddress.newWave}
		/>
	);
};

export default First;
