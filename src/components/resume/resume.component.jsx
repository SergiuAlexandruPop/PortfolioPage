import resume from '../../assets/images/resume.jpg'
import downloadResume from '../../assets/resume.pdf'

import React from "react";


import ModifiedHeader from "../modifiedHeader/modifiedHeader.component";
import {Blockquote, DownloadLink, ResumeContainer} from "./resume.styles";


const Resume = () => {

  return (
    <>
      <ModifiedHeader/>
      <Blockquote>
        ⚠️ For clickable links download the pdf version
      </Blockquote>
      <DownloadLink to={downloadResume} target="_blank" download="Sergiu's Resume">Download résumé</DownloadLink>
      <ResumeContainer src={resume} alt="resume"/>
    </>
  );
}

export default Resume;