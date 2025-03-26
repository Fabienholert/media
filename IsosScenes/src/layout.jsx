import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/footer";
import Header from "./components/Header/header";

export default function Layout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
