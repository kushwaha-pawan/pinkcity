// src/Components/Common/Layout/NetworkAwareLoading.jsx
import React, { useState, useEffect } from "react";
import Loading from "./Loading";

const NetworkAwareLoading = ({ children }) => {
  const [showLoading, setShowLoading] = useState(false);

  useEffect(() => {
    // Skip network detection in development
    if (import.meta.env.MODE === 'development') {
      return;
    }

    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    
    // Debug: Log network info
    console.log('Network Info:', {
      effectiveType: connection?.effectiveType,
      downlink: connection?.downlink,
      rtt: connection?.rtt,
      saveData: connection?.saveData
    });

    // Check for slow network conditions
    if (connection) {
      const slowConnections = ['slow-2g', '2g'];
      if (
        connection.saveData || 
        slowConnections.includes(connection.effectiveType) || 
        (connection.downlink && connection.downlink < 1) ||
        (connection.rtt && connection.rtt > 500)
      ) {
        setShowLoading(true);
        return;
      }
    }

    // Fallback timeout (5 seconds in production)
    const timer = setTimeout(() => {
      setShowLoading(true);
    }, import.meta.env.MODE === 'development' ? 10000 : 5000);

    return () => clearTimeout(timer);
  }, []);

  return showLoading ? <Loading /> : children;
};

export default NetworkAwareLoading;