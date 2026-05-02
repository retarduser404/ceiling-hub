import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden border-b border-white/10 pt-32">

      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-55"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>

        {/* Lighter overlay */}
        <div className="absolute inset-0 bg-black/45" />

        {/* Premium side gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
      </div>

      <div className="relative z-10 container-width">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div>
            <p className="text-accent tracking-[0.3em] text-sm uppercase mb-6">
              Premium Ceiling & Insulation Solutions
            </p>

            <h1 className="font-heading text-5xl md:text-7xl leading-tight mb-8 max-w-4xl">
              Complete Ceiling Systems
              <br />
              For Modern
              <span className="text-accent"> Construction</span>
            </h1>

            <p className="text-gray-200 text-lg leading-relaxed max-w-2xl mb-10">
              Trusted supplier of gypsum boards, false ceiling systems,
              insulation materials, and premium construction solutions
              for commercial, residential, and industrial projects
              across India.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 mb-14">
              <Link
                to="/products"
                className="bg-white text-black px-8 py-4 rounded-xl font-semibold hover:scale-105 transition duration-300"
              >
                Explore Products
              </Link>

              <Link
                to="/support"
                className="border border-white/20 px-8 py-4 rounded-xl font-semibold hover:border-white/50 transition duration-300"
              >
                Get Consultation
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div>
                <h3 className="text-2xl font-bold mb-1">25+</h3>
                <p className="text-gray-300 text-sm">
                  Product Categories
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-1">10+</h3>
                <p className="text-gray-300 text-sm">
                  Premium Brands
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-1">Pan India</h3>
                <p className="text-gray-300 text-sm">
                  Commercial Supply
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-1">Fast</h3>
                <p className="text-gray-300 text-sm">
                  Bulk Quotations
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="hidden lg:flex justify-end">
            <div className="relative w-full max-w-xl">
              <div className="bg-white/[0.05] border border-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-2xl">
                <p className="text-accent text-sm uppercase tracking-widest mb-4">
                  Trusted Brands
                </p>

                <h3 className="text-3xl font-semibold mb-6">
                  Built With Industry Leaders
                </h3>

                <div className="space-y-4 text-gray-200">
                  <div className="flex justify-between border-b border-white/10 pb-3">
                    <span>Saint Gobain Gyproc</span>
                    <span>Premium Supply</span>
                  </div>

                  <div className="flex justify-between border-b border-white/10 pb-3">
                    <span>Armstrong</span>
                    <span>False Ceilings</span>
                  </div>

                  <div className="flex justify-between border-b border-white/10 pb-3">
                    <span>Rockwool India</span>
                    <span>Insulation</span>
                  </div>

                  <div className="flex justify-between">
                    <span>UP Twiga</span>
                    <span>Glasswool</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}