import {
  createBrowserRouter,
 
} from "react-router-dom";
import App from "../../App";
import { lazy, Suspense } from "react";


// const ListMovie = lazy(() => import("../pages/ListMoive/ListMovie"))
const Home = lazy(() => import("../pages/Home"))
const VideoPlay = lazy(()=>import('../VideoPlay/VideoPlay'))
const Detail = lazy(() => import("../Detail/Detail"))
const ListMoive = lazy(()=> import ('../MovieRow/MovieRow'))
const TvMovie =lazy(()=>import('../pages/TvMovie'))
// const Search = lazy(() => import("../pages/Search/Search"))
const ErrorPage = lazy(() => import("../pages/Error"))

const routeObj = [
  {
    path: '/',
    element: <App />, 
    children: [
      {
        path: "/",
        element: <Suspense > <Home media_type="movies"/></Suspense>
      },
 
      {
        path: "/tv-series/",
        element: <Suspense > <TvMovie media_type="tv"  /></Suspense>
      },
      {
        path: "/movies/:name/:id",
        element: <Suspense ><Detail media_type="movie" /></Suspense>
      },
      {
        path: "/tv/:id",
        element: <Suspense ><Detail media_type="tv" /></Suspense>
      },
      {
        path: "/video",
        element: <Suspense ><VideoPlay /></Suspense>
      },
     ]
    }, 
  
  {
    path: "/notfound",
    element: <Suspense > <ErrorPage /></Suspense>
  },
  {
    path: "*",
    element: <Suspense> <ErrorPage /></Suspense>
  }
]
const routers = createBrowserRouter(routeObj)


export default routers