function FeaturesHome() {
  return (
    <section>
      <div className="max-w-6xl px-4 mx-auto sm:px-6">
        <div className="py-12 border-t border-gray-800 md:py-20">
          {/* Items */}
          <div className="grid gap-20" data-aos-id-features-home>
            {/* Item */}
            <div className="items-center md:grid md:grid-cols-12 md:gap-6">
              {/* Image */}
              <div
                className="max-w-xl mx-auto mb-8 md:max-w-none md:w-full md:col-span-5 lg:col-span-6 md:mb-0 md:order-1"
                data-aos="fade-up"
                data-aos-anchor="[data-aos-id-features-home]"
              >
                <div className="relative">
                  <img
                    className="md:max-w-none"
                    src={'/static/images/open/features-illustration.png'}
                    width="540"
                    height="520"
                    alt="Features illustration"
                  />
                  <svg
                    className="absolute inset-0 h-auto max-w-full mx-auto md:max-w-none"
                    width="540"
                    height="520"
                    viewBox="0 0 540 520"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g className="text-purple-600 fill-current">
                      <circle className="pulse" cx="270" cy="260" r="64" />
                      <circle
                        className="pulse pulse-1"
                        cx="270"
                        cy="260"
                        r="64"
                      />
                      <circle
                        className="pulse pulse-2"
                        cx="270"
                        cy="260"
                        r="64"
                      />
                      <circle
                        className="pulse pulse-3"
                        cx="270"
                        cy="260"
                        r="64"
                      />
                    </g>
                  </svg>
                </div>
              </div>
              {/* Content */}
              <div
                className="max-w-xl mx-auto md:max-w-none md:w-full md:col-span-7 lg:col-span-6"
                data-aos="fade-right"
                data-aos-anchor="[data-aos-id-features-home]"
              >
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <div className="mb-2 text-xl text-purple-600 font-architects-daughter">
                    Lighting fast workflow
                  </div>
                  <h3 className="mb-3 h3">Say hello to research data</h3>
                  <p className="mb-4 text-xl text-gray-400">
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa.
                  </p>
                  <ul className="flex flex-wrap -mx-2 -my-1 text-lg text-gray-400">
                    <li className="flex items-center mx-2 my-1">
                      <svg
                        className="flex-shrink-0 w-3 h-3 mr-2 text-green-500 fill-current"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Premium statistics</span>
                    </li>
                    <li className="flex items-center mx-2 my-1">
                      <svg
                        className="flex-shrink-0 w-3 h-3 mr-2 text-green-500 fill-current"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Unlimited jobs</span>
                    </li>
                    <li className="flex items-center mx-2 my-1">
                      <svg
                        className="flex-shrink-0 w-3 h-3 mr-2 text-green-500 fill-current"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Free goods</span>
                    </li>
                    <li className="flex items-center mx-2 my-1">
                      <svg
                        className="flex-shrink-0 w-3 h-3 mr-2 text-green-500 fill-current"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>No code required</span>
                    </li>
                    <li className="flex items-center mx-2 my-1">
                      <svg
                        className="flex-shrink-0 w-3 h-3 mr-2 text-green-500 fill-current"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Always up to date</span>
                    </li>
                  </ul>
                  <div className="flex items-start mt-8">
                    <img
                      className="flex-shrink-0 mr-4 rounded-full"
                      src={'/static/images/open/features-avatar.jpg'}
                      width="40"
                      height="40"
                      alt="Features avatar"
                    />
                    <div>
                      <blockquote className="mb-3 italic text-gray-400">
                        "Lorem ipsum is placeholder text commonly used in the
                        graphic, print, and publishing".
                      </blockquote>
                      <div className="font-medium text-gray-700">
                        <cite className="not-italic text-gray-200">
                          — Anastasia Dan
                        </cite>{' '}
                        -{' '}
                        <a
                          className="text-purple-600 transition duration-150 ease-in-out hover:text-gray-200"
                          href="#0"
                        >
                          UX Board
                        </a>
                      </div>
                    </div>
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

export default FeaturesHome;
