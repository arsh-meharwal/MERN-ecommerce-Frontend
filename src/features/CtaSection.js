import React from "react";

function CtaSection() {
  return (
    <div className="mx-auto max-w-7xl px-2 sm:py-4 lg:px-8 mb-8">
      <div className="relative isolate overflow-hidden bg-slate-700 px-6 pt-2 shadow-4xl rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
        <svg
          viewBox="0 0 1024 1024"
          className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
          aria-hidden="true"
        >
          <circle
            cx={512}
            cy={512}
            r={512}
            fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
            fillOpacity="0.7"
          />
          <defs>
            <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
              <stop stopColor="#5553cf" />
              <stop offset={1} stopColor="#E935C1" />
            </radialGradient>
          </defs>
        </svg>
        <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto py-8 lg:py-32 lg:text-left">
          <h2 className="font-bold tracking-tight text-white text-3xl  lg:text-4xl">
            Welcome to JacketMan's
            <br />
            {/* Shop Today for Style. */}
          </h2>
          <p className="lg:mt-6 mt-3 lg:text-lg text-md leading-8 text-gray-300">
            and to a collection of Authentic Leather Jackets Store
          </p>
          <div className="lg:mt-10 mt-4 flex items-center justify-center gap-x-6 lg:justify-start">
            <a
              href="#"
              className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              View Jackets
            </a>
            <a href="#" className="text-sm font-semibold leading-6 text-white">
              About Us<span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
        <div className="relative mt-4 h-60 lg:h-60 lg:mt-8">
          <img
            className="absolute  top-0 w-[47rem] max-w-xl rounded-md  ring ring-yellow-950 ring-opacity-10"
            src="https://images.unsplash.com/photo-1489286696299-aa7486820bd5?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Jackets"
            width={1824}
            height={1080}
          />
        </div>
      </div>
    </div>
  );
}

export default CtaSection;
