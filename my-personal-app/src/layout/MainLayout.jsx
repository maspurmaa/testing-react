import Navbar from "../components/Navbar";

/* eslint-disable react/prop-types */
export default function MainLayout({ children }) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}
