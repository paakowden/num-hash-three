import React from "react";

const Media = () => {
  return (
    <div className="container mx-auto">
      <section className="h-[40vh] xl:h-[50vh] xl:w-[40] relative">
        <video
          autoPlay
          loop
          muted
          playsInline
          controls
          className="absolute left-0 w-[90vh] h-full py-2"
        >
          <source src="/images/video1.mp4" type="video/mp4" />
        </video>
      </section>
    </div>
  );
};

export default Media;
