import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import SearchedDefaultDesktop from "pages/SearchedDefaultDesktop";
import HomeDefaultDesktop from "pages/HomeDefaultDesktop";
import SearchedErrorDesktop from "pages/SearchedErrorDesktop";
import HomeErrorDesktop from "pages/HomeErrorDesktop";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "searcheddefaultdesktop",
      element: <SearchedDefaultDesktop />,
    },
    {
      path: "homedefaultdesktop",
      element: <HomeDefaultDesktop />,
    },
    {
      path: "searchederrordesktop",
      element: <SearchedErrorDesktop />,
    },
    {
      path: "homeerrordesktop",
      element: <HomeErrorDesktop />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
