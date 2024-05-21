import { useEffect } from "react";

export function List({ langs }) {
  useEffect(() => {
    console.log(`list.jsx:useEffect`);

    return () => {
      console.log(`list.jsx:useEffect:unmount`);
    };
  });

  return (
    <div>
      {langs.map((lang, index) => {
        return <div key={index}>{lang}</div>;
      })}
    </div>
  );
}
