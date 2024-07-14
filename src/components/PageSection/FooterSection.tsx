import DynamicIcon from '@/components/DynamicIcon';
import { Footer } from '@/types/Footer';
import Link from 'next/link';

const dynamicColumnsClass = '[repeat(auto-fit,_minmax(1rem,_1fr))]';

const FooterSection: React.FC<Footer> = ({ companyMission, socialMedia, columns, newsletter, copyright }) => (
  <footer className="bg-white" aria-labelledby="footer-heading">
    <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 lg:px-8">
      <div className="xl:grid xl:grid-cols-4 xl:gap-8">
        <div className="space-y-8">
          <p className="text-sm leading-6 text-gray-600">{companyMission}</p>
          <div className="flex space-x-6">
            {socialMedia &&
              socialMedia.map((item, index) => (
                <Link key={index} href={item.url ?? ''} className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">{item.icon}</span>
                  <DynamicIcon name={item.icon} className="h-6 w-6" ariaHidden />
                </Link>
              ))}
          </div>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 xl:col-span-2 xl:mt-0">
          <div className={`md:grid md:grid-cols-${dynamicColumnsClass} md:gap-8`}>
            {columns &&
              columns.map((column, index) => (
                <div key={index}>
                  <h3 className="text-sm font-semibold leading-6 text-gray-900">{column.title}</h3>
                  <ul className="mt-6 space-y-4">
                    {column.links &&
                      column.links.map((link, index) => (
                        <li key={index}>
                          <Link href={link.url ?? ''} className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                            {link.text}
                          </Link>
                        </li>
                      ))}
                  </ul>
                </div>
              ))}
          </div>
        </div>
        <div className="mt-10 xl:mt-0">
          {newsletter &&
            newsletter.map((newsletterItem, index) => (
              <div className="mt-10 xl:mt-0" key={index}>
                <h3 className="text-sm font-semibold leading-6 text-gray-900">{newsletterItem.title}</h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">{newsletterItem.subtitle}</p>
                <form className="mt-6 sm:flex sm:max-w-md">
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    type="email"
                    name="email-address"
                    id="email-address"
                    autoComplete="email"
                    required
                    className="w-full min-w-0 appearance-none rounded-md border-0 bg-white px-3 py-1.5 text-base text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:w-64 sm:text-sm sm:leading-6 xl:w-full"
                    placeholder="Enter your email"
                  />
                  <div className="mt-4 sm:ml-4 sm:mt-0 sm:flex-shrink-0">
                    <button
                      type="submit"
                      className="flex w-full items-center justify-center rounded-md bg-brand px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>
            ))}
        </div>
      </div>
      <div className="border-t border-gray-900/10 pt-8 mt-2">
        <p className="text-xs leading-5 text-gray-500">{copyright}</p>
      </div>
    </div>
  </footer>
);

export default FooterSection;
