import Link from 'next/link';
import { Footer } from '@/types/Footer';

const dynamicColumnsClass = '[repeat(auto-fit,_minmax(1rem,_1fr))]';

const FooterSection: React.FC<Footer> = ({ mission, socialMedia, columns, copyright }) => (
  <footer className="bg-white" aria-labelledby="footer-heading">
    <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 lg:px-8">
      <div className="xl:grid xl:grid-cols-4 xl:gap-8">
        <div className="space-y-8">
          <p className="text-sm leading-6 text-gray-600">{mission}</p>
          <div className="flex space-x-6">
            {socialMedia &&
              socialMedia.map((item, index) => (
                <Link key={index} href={item.url ?? ''} className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">{item.icon}</span>
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
      </div>
      <div className="border-t border-gray-900/10 pt-8 mt-2">
        <p className="text-xs leading-5 text-gray-500">{copyright}</p>
      </div>
    </div>
  </footer>
);

export default FooterSection;
