// components/Layout.tsx
import { FunctionComponent, useState, useEffect } from "react";

interface LayoutProps {
  layoutJSON: any;
}

const Layout: FunctionComponent<LayoutProps> = ({ layoutJSON }) => {
  const [layout, setLayout] = useState(layoutJSON);

  useEffect(() => {
    setLayout(layoutJSON);
  }, [layoutJSON]);

  return (
    <div className="layout">
      {/* This is my layouts */}
      <hub-layout config="/data/layout2.json"></hub-layout>
    </div>
  );
};

export default Layout;
