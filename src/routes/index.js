import DashboardPage from "../containers/AdminTemplate/DashboardPage";
import FilmPage from "../containers/AdminTemplate/FilmPage";
import UserPage from "../containers/AdminTemplate/UserPage";
import DetailCinemaPage from "../containers/HomeTemplate/DetailCinemaPage";
import DetailFilmPage from "../containers/HomeTemplate/DetailFilmPage";
import DetailNewsPage from "../containers/HomeTemplate/DetailNewsPage";
import HomePage from "../containers/HomeTemplate/HomePage";

const routesHome = [
  {
    exact: true,
    path: "/",
    component: HomePage,
  },
  {
    exact: false,
    path: "/phim/:id",
    component: DetailFilmPage,
  },
  {
    exact: false,
    path: "/rap-chieu-phim",
    component: DetailCinemaPage,
  },
  {
    exact: false,
    path: "/tin-tuc",
    component: DetailNewsPage,
  },
];

const routesAdmin = [
  {
    exact: false,
    path: "/dashboard",
    component: DashboardPage,
  },
  {
    exact: false,
    path: "/user-admin",
    component: UserPage,
  },
  {
    exact: false,
    path: "/film-admin",
    component: FilmPage,
  },
];

export { routesAdmin, routesHome };
