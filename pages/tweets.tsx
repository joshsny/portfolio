import Container from 'components/Container';
import Tweet from 'components/Tweet';
import { getTweets } from 'lib/twitter';

export default function Tweets({ tweets }) {
  return (
    <Container
      title="Tweets – Joshua Snyder"
      description="A collection of tweets that inspire me, make me laugh, and make me think."
    >
      <div className="flex flex-col items-start justify-center max-w-2xl mx-auto mb-16">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
          Tweets
        </h1>
        <p className="mb-4 text-gray-600 dark:text-gray-400">
          This is a collection of tweets I've enjoyed. I use Twitter quite a
          bit, so I wanted a place to publicly share what inspires me, makes me
          laugh, and makes me think.
        </p>
        {tweets.map((tweet) => (
          <Tweet key={tweet.id} {...tweet} />
        ))}
      </div>
    </Container>
  );
}

export async function getStaticProps() {
  const tweets = await getTweets([]);

  return { props: { tweets } };
}
