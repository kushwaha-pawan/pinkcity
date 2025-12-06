// src/utils/NetworkDetector.js
export const checkSlowNetwork = () => {
  // Check for Navigation Timing API support
  const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
  
  if (connection) {
    // Detect slow connection types
    const slowConnections = ['slow-2g', '2g', '3g'];
    if (connection.saveData || slowConnections.includes(connection.effectiveType)) {
      return true;
    }

    // If we have downlink info, consider < 1 Mbps as slow
    if (connection.downlink && connection.downlink < 1) {
      return true;
    }

    // Check for high latency
    if (connection.rtt > 500) { // 500ms round trip time
      return true;
    }
  }
  return false;
};