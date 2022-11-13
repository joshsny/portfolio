import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';
import BlogPostCard from '../components/BlogPostCard';
import Container from '../components/Container';
import Subscribe from '../components/Subscribe';

export default function Home() {
  return (
    <Suspense fallback={null}>
      <Container>
        <div className="flex flex-col items-start justify-center max-w-2xl pb-16 mx-auto border-gray-200 dark:border-gray-700">
          <div className="flex flex-col-reverse items-start sm:flex-row">
            <div className="flex flex-col pr-8">
              <h1 className="mb-1 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
                Joshua Snyder
              </h1>
              <h2 className="mb-4 text-gray-700 dark:text-gray-200">
                Software Developer.
                {/* Currently working with{' '}
              <a
                className="font-semibold"
                href="https://101.xyz"
                style={{ color: '#ea3370' }}
              >
                101
              </a> */}
              </h2>
              <p className="mb-16 text-gray-600 dark:text-gray-400">
                Full-stack Typescript developer. Working with industry leading
                startups to build the future of the web. If you would like to
                work together, get in{' '}
                <a href="mailto:joshua@mindful.ai" style={{ color: '#ea3370' }}>
                  touch
                </a>
                .
              </p>
            </div>
            <div className="w-[80px] sm:w-[176px] relative mb-8 sm:mb-0 mr-auto">
              <Image
                alt="Joshua Snyder"
                height={176}
                width={176}
                src="/avatar.png"
                className="rounded-full"
              />
            </div>
          </div>
          <h3 className="mb-6 text-2xl font-bold tracking-tight text-black md:text-4xl dark:text-white">
            Featured Posts
          </h3>
          <div className="flex flex-col gap-6 md:flex-row">
            <BlogPostCard
              title="2021 Year in Review - Reflections and goals for the coming year"
              slug="2021-year-in-review"
              gradient="from-[#D8B4FE] to-[#818CF8]"
            />
            {/* <BlogPostCard
            title="Blog Post 2"
            slug="rust"
            gradient="from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]"
          />
          <BlogPostCard
            title="Blog Post 3"
            slug="react-state-management"
            gradient="from-[#FDE68A] via-[#FCA5A5] to-[#FECACA]"
          /> */}
          </div>
          <Link
            href="/blog"
            className="flex items-center mt-8 text-gray-600 dark:text-gray-400 leading-7 rounded-lg hover:text-gray-800 dark:hover:text-gray-200 transition-all h-6"
          >
            <>
              {'Read all posts'}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="h-6 w-6 ml-1"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"
                />
              </svg>
            </>
          </Link>
          <span className="h-16" />
          <Subscribe />
        </div>
      </Container>
    </Suspense>
  );
}
