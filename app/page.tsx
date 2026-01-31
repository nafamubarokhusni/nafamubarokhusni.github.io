import { BlogPosts } from 'app/components/posts'
import { Project } from 'app/components/project'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        HNMtech
      </h1>
      <p className="mb-4">
        {`Building tools that useful for me (hopefully for you too!!!)`}
      </p>
      <h2 className="mt-16 mb-4 text-xl font-semibold tracking-tighter">
        Projects
      </h2>
      <div className="my-8">
        <Project />
      </div>
      <h2 className="mt-16 mb-4 text-xl font-semibold tracking-tighter">
        Recent Posts
      </h2>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
