/** @jsxImportSource @emotion/react */

import { Header } from "../header";
import "./Layout.styles.css";

interface LayoutProps {
  children: React.ReactNode;
  onLogin: () => void;
}

export const Layout: React.FC<LayoutProps> = ({ children, onLogin }) => {
  return (
    <main className="layout">
      <Header onLogin={onLogin} />
      {children}
    </main>
  );
};
