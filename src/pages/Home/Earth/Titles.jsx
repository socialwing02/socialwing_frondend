import React from "react";

export default function Titles({ data }) {
  return (
    <div>
      {data.map((item, i) => (
        <Title key={item.title} item={{ ...item, i }} />
      ))}
    </div>
  );
}

function Title({ item }) {
  const { title, i } = item;

  return <>title</>;
}
