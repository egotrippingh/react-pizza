import React from "react";
import ContentLoader from "react-content-loader";

const PizzaSkeleton = (props) => (
  <ContentLoader
    speed={1.5}
    width={366}
    height={631}
    viewBox="0 0 366 631"
    backgroundColor="#f4f4f6"
    foregroundColor="#ea7000"
    {...props}
  >
    <circle cx="184" cy="154" r="98" />
    <rect x="87" y="23" rx="10" ry="10" width="191" height="19" />
    <rect x="156" y="282" rx="10" ry="10" width="53" height="19" />
    <rect x="137" y="316" rx="10" ry="10" width="91" height="19" />
    <rect x="152" y="368" rx="10" ry="10" width="61" height="19" />
    <circle cx="128" cy="377" r="20" />
    <rect x="85" y="506" rx="10" ry="10" width="195" height="45" />
    <rect x="19" y="565" rx="10" ry="10" width="327" height="45" />
    <rect x="80" y="432" rx="10" ry="10" width="205" height="45" />
    <circle cx="237" cy="377" r="20" />
  </ContentLoader>
);

export default PizzaSkeleton;
