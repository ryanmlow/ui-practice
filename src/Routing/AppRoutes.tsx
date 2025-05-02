import { Routes, Route } from "react-router-dom";
import Landing from "../Landing";
import { routes, RouteType } from "./Routes";
import UiTask from "../pages/UiTask/UiTask";
import { uiMarkdownMap } from "../pages/UiTask/uiMarkdownMap";
import { testMarkdownMap } from "../pages/UiTask/testMarkdownMap";

export enum PATHS {
  UI_TASK = "ui-task",
}

const defaultRoutes = [
  {
    name: "landing",
    path: "/",
    component: () => <Landing />,
  },
  {
    name: "not-found",
    path: "*",
    component: () => (
      <div>
        <h1>404 - Page Not Found</h1>
      </div>
    ),
  },
];

const updateMdMap = (route: RouteType) => {
  uiMarkdownMap.set(route.path, route.codeMd);
  testMarkdownMap.set(route.path, route.testMd);
};

export const AppRoutes = () => {
  return (
    <Routes>
      {defaultRoutes.map((route) => (
        <Route
          key={route.name}
          path={route.path}
          element={<route.component />}
        />
      ))}
      {routes.map((route) => {
        updateMdMap(route);
        return (
          <Route
            key={route.name}
            path={`/${PATHS.UI_TASK}/${route.path}`}
            element={
              <UiTask
                codeLabel={route.name}
                renderComponent={route.component}
                componentProps={route.props}
              />
            }
          />
        );
      })}
    </Routes>
  );
};
