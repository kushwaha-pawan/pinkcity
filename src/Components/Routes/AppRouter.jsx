// src/Components/Routes/AppRouter.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Layout from '../Layout/Layout';
import NetworkAwareLoading from '../Layout/NetworkAwareLoading';
import Loading from '../Layout/Loading';

// Lazy load pages
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

        {/* 🟢 Suspense only once — best practice */}
        <Suspense fallback={<Loading />}>

          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/explore" element={<Explore />} />
              <Route path="/places" element={<Places />} />
              <Route path="/packages" element={<Packages />} />
              <Route path="/cyclingtour" element={<CyclingTour />} />
              <Route path="/contact" element={<Contact />} />
            </Route>

            <Route path="/auth" element={<Auth />} />
            <Route path="*" element={<NotFound />} />

          </Routes>

        </Suspense>

      </NetworkAwareLoading>
    </BrowserRouter>
  );
};

export default AppRouter;
