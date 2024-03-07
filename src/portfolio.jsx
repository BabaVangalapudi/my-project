/**
 * v0 by Vercel.
 * @see https://v0.dev/t/CDJHRjIacah
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
// import a from "next/a"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <a className="flex items-center justify-center" href="#">
          <MountainIcon className="h-6 w-6" />
          <span className="sr-only">Acme Inc</span>
        </a>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Projects
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#">
            About
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Contact
          </a>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container flex flex-col items-center justify-center space-y-2 px-4 md:px-6">
            <div className="text-center">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                Web Developer
              </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl/relaxed">Jane Smith</h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                I build beautiful and responsive web experiences.
              </p>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Skills</h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                I have experience with a variety of web technologies and frameworks.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 sm:gap-8 lg:gap-12">
              <div className="flex items-center gap-4">
                <FacebookIcon className="w-8 h-8" />
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">HTML5</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Markup language for the World Wide Web.</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <CodepenIcon className="w-8 h-8" />
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">CSS3</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Style sheet language used for describing the presentation of a document.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <CodepenIcon className="w-8 h-8" />
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">JavaScript</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">High-level programming language.</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <DribbbleIcon className="w-8 h-8" />
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">React</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    A JavaScript library for building user interfaces.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <CodepenIcon className="w-8 h-8" />
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Vue.js</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">The Progressive JavaScript Framework.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Projects</h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Check out some of my recent projects.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold tracking-tighter">My Awesome Project</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  A brief description of my awesome project. It is a really cool project that I've been working on.
                </p>
              </div>
              <div className="mx-auto w-full max-w-sm space-y-2">
                <Button>View Project</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contact Me</h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Send me a message if you'd like to work together.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <form className="space-y-4">
                <div className="grid grid-cols-1 gap-4">
                  <Input className="w-full border-gray-200" placeholder="Name" type="text" />
                  <Input className="w-full border-gray-200" placeholder="Email" type="email" />
                  <Input className="w-full border-gray-200" placeholder="Subject" type="text" />
                  <Textarea className="border-gray-200" placeholder="Message" />
                </div>
                <Button type="submit">Send Message</Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Jane Smith. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </a>
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </a>
        </nav>
      </footer>
    </div>
  )
}

function CodepenIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
      <line x1="12" x2="12" y1="22" y2="15.5" />
      <polyline points="22 8.5 12 15.5 2 8.5" />
      <polyline points="2 15.5 12 8.5 22 15.5" />
      <line x1="12" x2="12" y1="2" y2="8.5" />
    </svg>
  )
}


function DribbbleIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94" />
      <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32" />
      <path d="M8.56 2.75c4.37 6 6 9.42 8 17.72" />
    </svg>
  )
}


function FacebookIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}


function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}
