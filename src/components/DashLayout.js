import { Outlet } from "react-router-dom";
import DashHeader from "./DashHeader";
import DashFooter from "./DashFooter";

const DashLayout = () => {
  return (
   <>
        {/* dashheader will be above everything in every page */}
        <DashHeader />
        <div className="dash-container">
            <Outlet />
        </div>
        <DashFooter />
   </>
  )
}

export default DashLayout