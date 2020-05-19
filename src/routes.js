/*!

=========================================================
* Material Dashboard React - v1.8.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
// import LibraryBooks from "@material-ui/icons/LibraryBooks";
// import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
// import Unarchive from "@material-ui/icons/Unarchive";
// import Language from "@material-ui/icons/Language";

// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.js";
import UserProfile from "views/UserProfile/UserProfile.js";
import TableList from "views/TableList/TableList.js";
// import Typography from "views/Typography/Typography.js";
// import Icons from "views/Icons/Icons.js";
import Maps from "views/Maps/Maps.js";
import NotificationsPage from "views/Notifications/Notifications.js";
// import UpgradeToPro from "views/UpgradeToPro/UpgradeToPro.js";
// core components/views for RTL layout
// import RTLPage from "views/RTLPage/RTLPage.js";
import { COMPANY_NAME } from "./constants";

const makeRoutesFor = [
  { type: "admin", layout: "/admin" },
  { type: "provider", layout: "/provider" }
];
const templateRoutes = [
  {
    path: "/dashboard",
    name: `${COMPANY_NAME} Dashboard`,
    rtlName: "لوحة القيادة",
    icon: Dashboard,
    component: DashboardPage,
    addTo: ["admin", "provider"]
  },
  {
    path: "/user",
    name: "User Profile",
    rtlName: "ملف تعريفي للمستخدم",
    icon: Person,
    component: UserProfile,
    addTo: ["admin", "provider"]
  },
  {
    path: "/table",
    name: "Table List",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: TableList,
    addTo: ["admin", "provider"]
  },
  {
    path: "/maps",
    name: "Maps",
    rtlName: "خرائط",
    icon: LocationOn,
    component: Maps,
    addTo: ["admin", "provider"]
  },
  {
    path: "/notifications",
    name: "Notifications",
    rtlName: "إخطارات",
    icon: Notifications,
    component: NotificationsPage,
    addTo: ["admin", "provider"]
  }
];

export const dashboardRoutes = targetLayout => {
  const listOfRoutes = templateRoutes.reduce((acc, routeItem) => {
    // spin through the list of items in templateRoutes
    // produce the individual parts by adding the layout to be used
    const layoutsForItem = routeItem.addTo.reduce((templateAcc, addToItem) => {
      var workOn = makeRoutesFor.find(i => i.type === addToItem);

      if (workOn) {
        templateAcc.push({
          path: routeItem.path,
          name: routeItem.name,
          rtlName: routeItem.rtlName,
          icon: routeItem.icon,
          component: routeItem.component,
          layout: workOn.layout
        });
        return templateAcc;
      }
    }, []);
    console.log(acc);
    acc = acc.concat(...layoutsForItem);
    return acc;
  }, []);
  return listOfRoutes.filter(r => r.layout === targetLayout);
};
