// src/Components/Routes/AppRouter.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Layout from '../Layout/Layout';
import NetworkAwareLoading from '../Layout/NetworkAwareLoading';
import Loading from '../Layout/Loading';

// Lazy load pages for better performance
const Home = lazy(() => import("../Pages/Home/Home"));
const Explore = lazy(() => import("../Pages/Explore/Explore"));
const Places = lazy(() => import("../Pages/Places/Places"));
const Packages = lazy(() => import("../Pages/Packages/Packages"));
const CyclingTour = lazy(() => import("../Pages/CyclingTour/CyclingTour"));
const Contact = lazy(() => import("../Pages/Contact/Contact"));
const Auth = lazy(() => import("../Pages/Login/Auth/Auth"));
const NotFound = lazy(() => import("../Pages/NotFound/NotFound"));

const AppRouter = () => {
  return (
    <BrowserRouter>
      <NetworkAwareLoading>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={
              <Suspense fallback={<Loading />}>
                <Home />
              </Suspense>
            } />
            <Route path="/explore" element={
              <Suspense fallback={<Loading />}>
                <Explore />
              </Suspense>
            } />
            <Route path="/places" element={
              <Suspense fallback={<Loading />}>
                <Places />
              </Suspense>
            } />
            <Route path="/Packages" element={
              <Suspense fallback={<Loading />}>
                <Packages />
              </Suspense>
            } />
            <Route path="/CyclingTour" element={
              <Suspense fallback={<Loading />}>
                <CyclingTour />
              </Suspense>
            } />
            <Route path="/contact" element={
              <Suspense fallback={<Loading />}>
                <Contact />
              </Suspense>
            } />
          </Route>
          <Route path="/auth" element={
            <Suspense fallback={<Loading />}>
              <Auth />
            </Suspense>
          } />
          <Route path="*" element={
            <Suspense fallback={<Loading />}>
              <NotFound />
            </Suspense>
          } />
        </Routes>
      </NetworkAwareLoading>
    </BrowserRouter>
  );
};

export default AppRouter;