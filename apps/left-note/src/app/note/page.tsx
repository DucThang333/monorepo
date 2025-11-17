'use client';
import { withAuth } from '@left-note/hoocs/auth';

const NotePage = () => {
  return (
    <main className={`min-h-screen flex items-center p-6 flex-col w-full`}>
      <header className="flex items-start justify-between mb-6">
        <div>
          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight text-gray-900 dark:text-gray-50">Notebook</h1>
          <p className="mt-2 text-sm md:text-base text-gray-600 dark:text-gray-300">Notebook</p>
        </div>
      </header>

      <article className="space-y-6 text-gray-700 dark:text-gray-200">
        <section>
          <h2 className="text-lg font-semibold">Welcome</h2>
          <p className="mt-2 text-sm md:text-base">
            This notebook is your personal space to capture ideas, experiments, and reflections. Use it for learning, planning projects, or keeping a
            creative log.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold">Purpose</h2>
          <p className="mt-2 text-sm md:text-base">
            Organize your thoughts, track progress, and build a searchable archive of what you learn. Short notes, sketches, code snippets, and links
            all belong here.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold">How to use</h2>
          <ul className="list-disc list-inside mt-2 text-sm md:text-base space-y-1">
            <li>Write freely — prioritize clarity over perfection.</li>
            <li>Use headings and tags to structure entries for easier search.</li>
            <li>Review notes weekly to extract next actions and keep ideas alive.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold">Vision</h2>
          <p className="mt-2 text-sm md:text-base">
            Over time this notebook will reveal your progress and thinking patterns. Treat it as a living document that grows with you.
          </p>
        </section>
      </article>
    </main>
  );
};

export default withAuth(NotePage);
