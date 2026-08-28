function Profile() {
  return (
    <section
      id="profile"
      className="
        relative w-full overflow-hidden
        bg-black
        px-8 py-20
        sm:px-12
        lg:px-[10%]
        lg:py-24
      "
    >
      {/* Grid Background */}
      <div
        className="
          pointer-events-none absolute inset-0
          opacity-40
          [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)]
          [background-size:40px_40px]
        "
      />

      {/* Content */}
      <div
        className="
          relative z-10
          mx-auto
          grid max-w-[1200px]
          grid-cols-1
          items-center
          gap-12
          lg:grid-cols-2
          lg:gap-16
        "
      >
        {/* ================= LEFT CONTENT ================= */}
        <div className="flex flex-col">
          {/* Main Heading */}
          <h2
            className="
              text-4xl
              font-bold
              leading-tight
              text-white
              sm:text-5xl
            "
          >
            Welcome to <span className="text-[#ff1738]">ASTRR</span>
          </h2>

          {/* Sub Heading */}
          <h3
            className="
              mt-4
              text-xl
              font-medium
              text-[#bcbcbc]
              sm:text-2xl
            "
          >
            Exporting to 18 Countries in 3 continents.
          </h3>

          {/* Description */}
          <p
            className="
              mt-8
              max-w-[560px]
              text-[15px]
              leading-[1.7]
              text-[#969696]
              sm:text-base
            "
          >
            3 Decade of devotion to Customer Service and satisfaction, ASTRR
            welcomes you to an enterprise born out of principal and social
            responsibility. Generations of passion into leather manufacturing.
            ASTRR has built its reputation as one of the most innovative and
            creative Shoe Maker of the industry, delivering products for the
            Moments.
          </p>

          {/* Raw To Finished Shoe */}
          <div className="mt-12">
            <h3
              className="
                text-2xl
                font-bold
                text-[#ff3150]
                sm:text-3xl
              "
            >
              Raw To Finished Shoe
            </h3>

            <p
              className="
                mt-3
                max-w-[600px]
                text-base
                font-semibold
                leading-7
                text-white
                sm:text-lg
              "
            >
              50% to 70% vertically integrated company producing Inhouse
              material from raw hide to finished leather shoe.
            </p>
          </div>
        </div>

        {/* ================= RIGHT IMAGE ================= */}
        <div
          className="
            flex
            items-center
            justify-center
            lg:justify-end
          "
        >
          <video
            src="/videos/about_video.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="
    h-auto
    w-full
    max-w-[430px]
    object-contain
  "
          />
        </div>
      </div>
    </section>
  );
}

export default Profile;
