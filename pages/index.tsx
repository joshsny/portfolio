import Image from 'next/image';
import Link from 'next/link';
import BlogPostCard from '../components/BlogPostCard';
import Container from '../components/Container';
import Subscribe from '../components/Subscribe';

export default function Home({ videos }) {
  return (
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
              startups to build the future of the web. If you would like to work
              together, get in{' '}
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
        <Link href="/blog">
          <a className="flex h-6 mt-8 leading-7 text-gray-600 transition-all rounded-lg dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200">
            Read all posts
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="w-6 h-6 ml-1"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"
              />
            </svg>
          </a>
        </Link>
        {/* <h3 className="mt-16 mb-4 text-2xl font-bold tracking-tight text-black md:text-4xl dark:text-white">
          Learn React & Next.js
        </h3>
        <p className="mb-4 text-gray-600 dark:text-gray-400">
          Build and deploy a modern SaaS application using the most popular
          open-source software. This course is 12 hours long and is completely
          live streamed.
        </p>
        <VideoCard
          index="01"
          href="https://www.youtube.com/watch?v=MxR5I5_hOKk&list=PL6bwFJ82M6FXgctyoWXqj7H0GK8_YIeF1&index=2"
          length="1:02:45"
          title="Introduction to React 2025"
        />
        <VideoCard
          index="02"
          href="https://www.youtube.com/watch?v=AGl52moyISU&list=PL6bwFJ82M6FXgctyoWXqj7H0GK8_YIeF1&index=3"
          length="54:22"
          title="Firestore, Chakra UI, Absolute Imports"
        />
        <VideoCard
          index="03"
          href="https://www.youtube.com/watch?v=3g6-v3_BNbM&list=PL6bwFJ82M6FXgctyoWXqj7H0GK8_YIeF1&index=4"
          length="1:08:30"
          title="Designing & Building the Dashboard"
        />
        <VideoCard
          index="04"
          href="https://www.youtube.com/watch?v=u8iv_yhSRI8&list=PL6bwFJ82M6FXgctyoWXqj7H0GK8_YIeF1&index=5"
          length="1:13:45"
          title="Firebase Admin with Next.js + SWR"
        />
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.youtube.com/playlist?list=PL6bwFJ82M6FXgctyoWXqj7H0GK8_YIeF1"
          className="flex h-6 mt-8 leading-7 text-gray-600 transition-all rounded-lg dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
        >
          Watch all videos
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="w-6 h-6 ml-1"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"
            />
          </svg>
        </a> */}
        <span className="h-16" />
        <Subscribe />
      </div>
    </Container>
  );
}
