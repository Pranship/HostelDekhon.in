import React from 'react';
import { RouterProvider, Route } from './utils/router';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import HostelsPage from './pages/HostelsPage';
import HostelDetailPage from './pages/HostelDetailPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <RouterProvider>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Route path="/" component={<HomePage />} />
          <Route path="/hostels" component={<HostelsPage />} />
          <Route path="/hostel/:id" component={<HostelDetailPage />} />
          <Route path="/about" component={<AboutPage />} />
          <Route path="/contact" component={<ContactPage />} />
        </main>
        <Footer />
      </div>
    </RouterProvider>
  );
}

export default App;