import React from "react";

const style = {
  backgroundColor: "black",
  padding: "20px",
  color: "white",
  margin: "30px",
};
const call = {
  marginTop: "20px",
  display: "flex",
  justifyContent: "space-between",
};

export default function Project({
  image1,
  image2,
  projectName,
  githubLink,
  btn,
}) {
  return (
    <div className="project" style={style}>
      <div>
        <>{image1}</> <></>
        <>{image2}</>
      </div>
      <div style={call}>
        <div>
          <div className="projectName">{projectName}</div>
          <code className="githubLink">{githubLink}</code>
        </div>
        <div> {btn}</div>
      </div>
    </div>
  );
}
