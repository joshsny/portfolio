import Container from 'components/Container';

export default function UsesLayout({ children }) {
  return (
    <Container
      title="Uses – Joshua Snyder"
      description="Here's what tech I'm currently using for coding, business development and research."
    >
      <article className="flex flex-col items-start justify-center w-full max-w-2xl mx-auto mb-16">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
          My Gear
        </h1>
        <p className="mt-2 mb-8 text-gray-700 dark:text-gray-300">
          Here's what tech I'm currently using for coding, business development
          and research. I change my tech quite often, since I always like to
          have a setup that is comfortable for work and like trying out new
          tech.
        </p>
        <div className="w-full prose dark:prose-dark">{children}</div>
      </article>
    </Container>
  );
}
