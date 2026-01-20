import React from "react";

const GlobalOverlay = () => {
  return (
    <div className="fixed inset-0 z-[2] pointer-events-none">
      {/* subtle neon atmosphere */}
      <div className="absolute inset-0 bg-gradient-to-b 
        from-cyan-00/0 
        via-purple-00/0 
        to-indigo-0/0" />
    </div>
  );
};

export default GlobalOverlay;
