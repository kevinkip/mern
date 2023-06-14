import { Outlet } from "react-router-dom";

const Layout = () => {
    // render the children of the outlet component.
    // we'll make this the parent component
  return <Outlet />
}

export default Layout