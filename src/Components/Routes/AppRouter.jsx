// src/Components/Routes/AppRouter.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Layout from '../Layout/Layout';

// Lazy load pages for better performance
const Home = lazy(() => import("../Pages/Home/Home"));
const Explore = lazy(() => import("../Pages/Explore/Explore"));
const Places = lazy(() => import("../Pages/Places/Places"));
const Packages = lazy(() => import("../Pages/Packages/Packages"));
const CyclingTour = lazy(() => import("../Pages/CyclingTour/CyclingTour"));
const Contact = lazy(() => import("../Pages/Contact/Contact"));
const Auth = lazy(() => import("../Pages/Login/Auth/Auth"));
const NotFound = lazy(() => import("../Pages/NotFound/NotFound"));

// Simple inline loader component
const SimpleLoader = () => (
  <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
    <div className="w-16 h-16 border-8 border-gray-300 border-t-8 border-t-blue-500 rounded-full animate-spin"></div>
    <p className="mt-4 text-lg text-gray-700">Loading, please wait...</p>
  </div>
);

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route 
            path="/" 
            element={
              <Suspense fallback={<SimpleLoader />}>
                <Home />
              </Suspense>
            } 
          />
          
          <Route 
            path="/explore" 
            element={
              <Suspense fallback={<SimpleLoader />}>
                <Explore />
              </Suspense>
            } 
          />
          
          <Route 
            path="/places" 
            element={
              <Suspense fallback={<SimpleLoader />}>
                <Places />
              </Suspense>
            } 
          />
          
          <Route 
            path="/packages" 
            element={
              <Suspense fallback={<SimpleLoader />}>
                <Packages />
              </Suspense>
            } 
          />
          
          {/* Note: Changed from /CyclingTour to /cycling-tour for consistency */}
          <Route 
            path="/cyclingtour" 
            element={
              <Suspense fallback={<SimpleLoader />}>
                <CyclingTour />
              </Suspense>
            } 
          />
          
          <Route 
            path="/contact" 
            element={
              <Suspense fallback={<SimpleLoader />}>
                <Contact />
              </Suspense>
            } 
          />
        </Route>
        
        <Route 
          path="/auth" 
          element={
            <Suspense fallback={<SimpleLoader />}>
              <Auth />
            </Suspense>
          } 
        />
        
        <Route 
          path="*" 
          element={
            <Suspense fallback={<SimpleLoader />}>
              <NotFound />
            </Suspense>
          } 
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;