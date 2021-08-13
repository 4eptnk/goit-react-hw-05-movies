import React from "react";

import { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";

import Container from "./components/Container/Container";
import AppBar from "./components/AppBar/AppBar";
import { ToastContainer } from "react-toastify";
import LoaderSpinner from "./components/Loader/Loader";

import routePath from "./routesPath";

import "react-toastify/dist/ReactToastify.css";

const HomePage = lazy(() => import("./views/HomePage/HomePage"));
const MovieDetailsPage = lazy(() =>
  import("./views/MovieDetailsPage/MovieDetailsPage")
);
const MoviesPage = lazy(() => import("./views/MoviesPage/MoviesPage"));
const NotFoundView = lazy(() => import("./views/NotFoundView"));

const App = () => {
  return (
    <>
      <AppBar />
      <Container>
        <ToastContainer autoClose={3000} />

        <Suspense fallback={<LoaderSpinner />}>
          <Switch>
            <Route path={routePath.home} exact>
              <HomePage />
            </Route>

            <Route path={routePath.movies} exact>
              <MoviesPage />
            </Route>

            <Route path={routePath.details}>
              <MovieDetailsPage />
            </Route>

            <Route>
              <NotFoundView />
            </Route>
          </Switch>
        </Suspense>
      </Container>
    </>
  );
};

export default App;
