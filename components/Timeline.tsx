import { useState } from 'react';

const Divider = () => {
  return (
    <div className="w-full my-8 border border-gray-200 dark:border-gray-600" />
  );
};

const Year = ({ children }) => {
  return (
    <h3 className="mb-4 text-lg font-bold tracking-tight text-gray-900 md:text-xl dark:text-gray-100">
      {children}
    </h3>
  );
};

const Step = (props) => {
  return (
    <li className="mb-4 ml-2">
      <div className="flex items-center mb-2 text-green-700 dark:text-green-300">
        <span className="sr-only">Check</span>
        <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24">
          <g
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
            <path d="M22 4L12 14.01l-3-3" />
          </g>
        </svg>
        <p className="font-medium text-gray-900 dark:text-gray-100">
          {props.title}
        </p>
      </div>
      <p className="ml-6 text-gray-700 dark:text-gray-400">{props.children}</p>
    </li>
  );
};

const FullTimeline = () => (
  <>
    <Divider />
    <Year>2018</Year>
    <ul>
      <Step title="First Internship 🤘🏻">
        I did an internship in an actuarial company in London because my parents
        thought it was a good idea. Should have gone travelling instead. Let's
        just say I knew I wouldn't be an actuary.
      </Step>
    </ul>
    <Divider />
    <Year>2017</Year>
    <ul>
      <Step title="Went travelling 🏃‍♂️">
        This was the year I went exploring. I travelled to many places in
        Eastern Europe and South East Asia in particular.
      </Step>
    </ul>
    <Divider />
    <Year>2016</Year>
    <ul>
      <Step title="Started University 🎓">
        I started studying maths at the University of Cambridge.
      </Step>
      <Step title="Family Roadtrip 🚗">
        To celebrate finishing school, my Dad and I went on a road trip to Costa
        Rica.
      </Step>
    </ul>
    <Divider />
    <Year>2011</Year>
    <ul>
      <Step title="Launched First Startup 🚀">
        In 2011, when I was 13 years old, I started my first startup. I bought
        and sold domains on the internet, and made a few thousand pounds, which
        I was very proud of.
      </Step>
    </ul>
    <Divider />
    <Year>2010</Year>
    <ul>
      <Step title="Learned How To Program 👨‍💻">
        I started programming for the first time, developing websites for family
        friends using PHP. I was excited about it, and I was hooked.
      </Step>
    </ul>
    <Divider />
    <Year>1998</Year>
    <ul>
      <Step title="Born 👶🏼" />
    </ul>
  </>
);

export default function Timeline() {
  const [isShowingFullTimeline, showFullTimeline] = useState(false);

  return (
    <>
      <h3 className="mt-8 mb-4 text-2xl font-bold tracking-tight text-black md:text-4xl dark:text-white">
        Timeline
      </h3>
      <Year>2021</Year>
      <ul>
        <Step title="Started Freelancing 🧑‍💻">
          In 2021 I started to take freelancing opportunities. I've enjoyed
          working on other people's business ideas and helping them build their
          businesses.
        </Step>
      </ul>
      <ul>
        <Step title="Got Married 🥳">
          Great year for a wedding, huh? We managed to get 40 of our family and
          friends to the wedding and it was fantastic.
        </Step>
      </ul>
      <Divider />
      <Year>2020</Year>
      <ul>
        <Step title="Started working on TimeNavi full time ⏰">
          After graduating, I started working on TimeNavi full time, joining my
          girlfriend who had already started.
        </Step>
      </ul>
      <ul>
        <Step title="Graduated  🎓">
          I graduated from my masters degree in the middle of the COVID-19
          pandemic. It was a rough year, since I was unable to write for most of
          it, but I got there in the end.
        </Step>
      </ul>

      {isShowingFullTimeline ? (
        <FullTimeline />
      ) : (
        <button
          type="button"
          className="flex items-center px-4 py-2 mx-auto my-4 text-sm font-medium text-gray-900 rounded-md dark:text-gray-100"
          onClick={() => showFullTimeline(true)}
        >
          See More
          <svg
            className="w-4 h-4 ml-1"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      )}
    </>
  );
}
