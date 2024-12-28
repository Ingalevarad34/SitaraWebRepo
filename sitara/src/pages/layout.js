import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <main>
        <Outlet /> {/* This is where the specific page content will be rendered */}
      </main>
    </>
  );
}

export default Layout;
