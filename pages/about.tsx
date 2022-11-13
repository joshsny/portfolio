import Link from 'next/link';

import Container from 'components/Container';
import Timeline from '../components/Timeline';

export default function About() {
  return (
    <Container title="About – Joshua Snyder">
      <div className="flex flex-col items-start justify-center max-w-2xl mx-auto mb-16">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
          About Me
        </h1>
        <div className="mb-8 leading-6 prose text-gray-600 dark:text-gray-400">
          <p>
            Hey, I’m Joshua. I'm a developer, freelancer, and the creator
            of&nbsp;
            <span className="font-bold no-underline">
              <a
                href="https://timenavi.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#1ba41b' }}
              >
                TimeNavi
              </a>
            </span>
            .
          </p>
          <p>
            I write about software and the future of the web in&nbsp;
            <Link href="/newsletter">
              <a>my newsletter.</a>
            </Link>
          </p>
          <p>
            I grew up in a rural village in the Lake District, the most
            beautiful part of England. I studied Maths at the University of
            Cambridge, graduating with an MMath.
          </p>
          <p>
            I spend my free time contributing to open source, swimming and
            enjoying time with friends and family.
          </p>
        </div>
        <div className="mb-8">
          <Timeline />
        </div>
        <iframe
          height="280"
          src="https://www.google.com/maps/d/embed?mid=1yc5xH_3pGHxryRC4yS_oGokmJviO4ybC&hl=en"
          title="Travel Map"
          width="100%"
        />
      </div>
    </Container>
  );
}
