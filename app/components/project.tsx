import { ArrowIcon } from 'app/components/icons/arrow'
import Link from 'next/link'

const projects = [
  {
    name: 'Databits',
    url: 'https://databits.co-id.id/',
  },
  {
    name: 'Databits Convert',
    url: 'https://databits.co-id.id/convert/',
  },
  {
    name: 'News Summary',
    url: 'https://news-summary-pink.vercel.app/',
  },
]

export function Project() {
  return (
    <div>
      {projects.map((project) => (
        <Link
          key={project.url}
          className="flex flex-col space-y-1 mb-4"
          href={project.url}
          target="_blank"
          rel="noreferrer"
        >
          <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2 items-center">
            <div className="flex items-center gap-2">
              <p className="text-neutral-900 dark:text-neutral-300 tracking-tight dark:hover:text-neutral-100">
                {project.name}
              </p>
              <ArrowIcon />
            </div>
            {/* <p className="text-neutral-600 dark:text-neutral-400">
              {project.url}
            </p> */}
          </div>
        </Link>
      ))}
    </div>
  )
}
