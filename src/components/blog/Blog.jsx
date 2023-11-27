import React from "react";

export default function Blog(blogTitle, blogImage, shortInfo, readMore) {
  return (
    <div className="project">
      <div>
        <>{blogTitle}</> <></>
        <>{blogImage}</>
      </div>
      <div>
        <div>
          <div className="projectName">{shortInfo}</div>
          <code className="githubLink">{readMore}</code>
        </div>
        <div> {}</div>
      </div>
    </div>
  );
}
