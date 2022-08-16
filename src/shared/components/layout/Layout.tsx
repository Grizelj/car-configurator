/** @jsxImportSource @emotion/react */

import { Header } from "../header";
import "./Layout.styles.css";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <main className="layout">
      <Header />
      {children}
    </main>
  );
};
