function Process() {
  return (
    <section>
      <div className="max-w-6xl px-4 mx-auto sm:px-6">
        <div className="pt-10 pb-12 md:pt-16 md:pb-20">
          {/* Section header */}
          <div className="max-w-3xl pb-12 mx-auto text-center md:pb-20">
            <h2 className="mb-4 h2" data-aos="fade-up">
              Built exclusively for you
            </h2>
            <p
              className="text-xl text-gray-400"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit laborum — semper quis lectus nulla.
            </p>
          </div>

          {/* Items */}
          <div className="grid items-start max-w-sm gap-8 mx-auto md:grid-cols-3 lg:gap-16 md:max-w-none">
            {/* 1st item */}
            <div
              className="relative flex flex-col items-center"
              data-aos="fade-up"
            >
              <div
                aria-hidden="true"
                className="absolute hidden h-1 border-t border-gray-700 border-dashed md:block"
                style={{
                  width: 'calc(100% - 32px)',
                  left: 'calc(50% + 48px)',
                  top: '32px'
                }}
                data-aos="fade-in"
                data-aos-delay="200"
              ></div>
              <svg
                className="w-16 h-16 mb-4"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  className="text-purple-600 fill-current"
                  width="64"
                  height="64"
                  rx="32"
                />
                <path
                  className="text-purple-300 stroke-current"
                  strokeWidth="2"
                  strokeLinecap="square"
                  d="M21 23h22v18H21z"
                  fill="none"
                  fillRule="evenodd"
                />
                <path
                  className="text-purple-100 stroke-current"
                  d="M26 28h12M26 32h12M26 36h5"
                  strokeWidth="2"
                  strokeLinecap="square"
                />
              </svg>
              <h4 className="mb-2 h4">
                <span className="text-gray-400">1</span>. Acquisition
              </h4>
              <p className="text-lg text-center text-gray-400">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur.
              </p>
            </div>

            {/* 2nd item */}
            <div
              className="relative flex flex-col items-center"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div
                aria-hidden="true"
                className="absolute hidden h-1 border-t border-gray-700 border-dashed md:block"
                style={{
                  width: 'calc(100% - 32px)',
                  left: 'calc(50% + 48px)',
                  top: '32px'
                }}
                data-aos="fade-in"
                data-aos-delay="400"
              ></div>
              <svg
                className="w-16 h-16 mb-4"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  className="text-purple-600 fill-current"
                  width="64"
                  height="64"
                  rx="32"
                />
                <g fill="none" fillRule="evenodd">
                  <path
                    className="text-purple-300 stroke-current"
                    d="M40 22a2 2 0 012 2v16a2 2 0 01-2 2H24a2 2 0 01-2-2V24a2 2 0 012-2"
                    strokeWidth="2"
                    strokeLinecap="square"
                  />
                  <path
                    className="text-purple-100 stroke-current"
                    strokeWidth="2"
                    strokeLinecap="square"
                    d="M36 32l-4-3-4 3V22h8z"
                  />
                </g>
              </svg>
              <h4 className="mb-2 h4">
                <span className="text-gray-400">2</span>. Activation
              </h4>
              <p className="text-lg text-center text-gray-400">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur.
              </p>
            </div>

            {/* 3rd item */}
            <div
              className="relative flex flex-col items-center"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <svg
                className="w-16 h-16 mb-4"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  className="text-purple-600 fill-current"
                  width="64"
                  height="64"
                  rx="32"
                />
                <path
                  className="text-purple-300 stroke-current"
                  strokeWidth="2"
                  strokeLinecap="square"
                  d="M21 35l4 4 12-15"
                  fill="none"
                  fillRule="evenodd"
                />
                <path
                  className="text-purple-100 stroke-current"
                  d="M42 29h-3M42 34h-7M42 39H31"
                  strokeWidth="2"
                  strokeLinecap="square"
                />
              </svg>
              <h4 className="mb-2 h4">
                <span className="text-gray-400">3</span>. Retention
              </h4>
              <p className="text-lg text-center text-gray-400">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Process;
