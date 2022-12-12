import {
  CheckCircleIcon,
  MagnifyingGlassIcon as SearchIcon,
} from "@heroicons/react/24/outline";
import { Form, Link, useLocation } from "@remix-run/react";

interface Props {
  enableJS: boolean;
}

export function Header({ enableJS }: Props) {
  let location = useLocation();

  return (
    <header className="mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div className="px-4 border-b border-gray-200 sm:px-0">
        <div className="flex items-center justify-between h-16">
          <div className="flex">
            <Link prefetch="intent" to="/">
              <span className="sr-only">Digital Design Assets</span>
              <svg
                className="w-8 h-8 text-purple-600"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M31.3207 5.40445C30.9569 5.4229 30.5906 5.43224 30.2222 5.43224C24.7583 5.43224 19.7742 3.37813 15.9999 0C12.2256 3.378 7.24157 5.43202 1.77778 5.43202C1.40938 5.43202 1.04316 5.42269 0.679341 5.40423C0.23592 7.11732 0 8.91393 0 10.7656C0 20.7061 6.79879 29.0587 16 31.4269C25.2012 29.0587 32 20.7061 32 10.7656C32 8.91401 31.7641 7.11747 31.3207 5.40445ZM16 27.2641C22.9654 25.0149 28 18.4736 28 10.7656C28 10.2819 27.9803 9.80343 27.9417 9.33081C23.542 8.93766 19.4628 7.41836 15.9998 5.06562C12.5369 7.41824 8.45792 8.93745 4.05834 9.33059C4.01972 9.80328 4 10.2819 4 10.7656C4 18.4736 9.03462 25.0149 16 27.2641Z"
                  fill="currentColor"
                ></path>
              </svg>
            </Link>
          </div>
          <div className="flex items-center justify-end">
            <Form action="/?index" method="post" replace reloadDocument>
              <input type="hidden" name="returnTo" value={location.pathname} />
              <label>
                <input
                  name="enableJS"
                  defaultValue={String(!enableJS)}
                  className="sr-only"
                />
                <button type="submit" className="flex items-center">
                  {enableJS ? (
                    <CheckCircleIcon className="w-6 h-6 text-purple-500" />
                  ) : (
                    <svg
                      className="w-6 h-6 text-purple-500"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <circle cx="12" cy="12" r="9" strokeWidth="2" />
                    </svg>
                  )}
                  <span className="ml-2 text-sm text-gray-600">
                    Enable JavaScript?
                  </span>
                </button>
              </label>
            </Form>
            <a href="#" className="p-2 text-gray-400 hover:text-gray-500">
              <span className="sr-only">Search</span>
              <SearchIcon className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
