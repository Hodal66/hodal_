'use client'
import { Button } from 'flowbite-react'

export default function HelloArea() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-12 px-4 mx-auto max-w-screen-xl text-center lg:py-24 lg:px-12">
        <a
          href="#"
          className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full hover:bg-gray-200"
        >
          <span className="text-xs bg-blue-600 rounded-full text-white px-4 py-1.5 mr-3">
            New
          </span>
          <span className="text-sm font-medium">
            Announcing our next round of funding.
          </span>
          <svg
            className="ml-2 w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M12.293 3.293a1 1 0 011.414 0L18 7.586a1 1 0 010 1.414l-4.293 4.293a1 1 0 01-1.414-1.414L15.586 9H3a1 1 0 110-2h12.586l-3.293-3.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </a>
        <h1 className="mb-4 text-4xl font-extrabold leading-tight tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
          Data to enrich your online business
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48">
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
          fugiat veniam occaecat.
        </p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <Button href="#" color="primary">
            Get started
          </Button>
          <Button href="#" color="light">
            Learn more →
          </Button>
        </div>
      </div>
    </section>
  )
}
