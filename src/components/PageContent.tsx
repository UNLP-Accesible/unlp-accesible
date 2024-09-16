import Image from 'next/image';
import { Page, SiteSettings } from '@/sanity/lib/queries';
import { urlForImage } from '@/sanity/lib/utils';
import {
  NavigationSection,
  FooterSection,
  ImageSection,
  TextSection,
  NavigationItemSection,
  FormSection,
  IconsWithUrlAndTextSection,
  YouTubeVideoSection,
  SendEmailSection,
  ExternalLinkSection,
} from '@/components/PageSection';
import CustomPortableText from './CustomPortableText';

interface PageContentProps {
  page: Page;
  siteSettings: SiteSettings;
}

const PageContent: React.FC<PageContentProps> = ({ page, siteSettings }) => {
  const pageLogoSrc = page.logo ? urlForImage(page.logo)?.url() : '';

  return (
    <div
      className="container h-screen py-4 mx-auto px-4"
      style={{ backgroundColor: siteSettings.backgroundColor?.hex }}
    >
      <div className="flex flex-col space-y-3 h-full">
        <NavigationSection
          title={page.navigationMenu?.title}
          items={page.navigationMenu?.items}
          logo={siteSettings.logo}
        />
        {page.slug !== 'home-page' && (
          <div
            className="flex flex-row items-center p-5 rounded-lg transition duration-300 ease-in-out"
            style={{ color: page.titleColor?.hex, backgroundColor: page.titleBackgroundColor?.hex }}
          >
            {pageLogoSrc && <Image src={pageLogoSrc} alt="Logo" width={65} height={65} />}
            <div className="flex-1">
              <p className="text-lg text-center font-semibold">{page.siteTitle || page.title}</p>
            </div>
          </div>
        )}
        <CustomPortableText
          value={page.content}
          types={{
            imageSection: ({ value }) => {
              return (
                <ImageSection
                  image={value.image}
                  contentWidth={value.contentWidth}
                  color={page.contentColor?.hex}
                  backgroundColor={page.contentBackgroundColor?.hex}
                />
              );
            },
            textSection: ({ value }) => {
              return (
                <TextSection
                  header={value.header}
                  text={value.text}
                  content={value.content}
                  color={page.contentColor?.hex}
                  backgroundColor={page.contentBackgroundColor?.hex}
                />
              );
            },
            navigationItemSection: ({ value }) => {
              const logoSrc = value.page.logo ? urlForImage(value.page.logo)?.url() : undefined;

              // If the current page is not the home page, we want to use
              // the color and background color for the content
              // of the current page instead of the value.page
              let color = value.page.titleColor?.hex;
              let backgroundColor = value.page.titleBackgroundColor?.hex;

              if (page.slug !== 'home-page') {
                color = page.contentColor?.hex;
                backgroundColor = page.contentBackgroundColor?.hex;
              }

              return (
                <NavigationItemSection
                  text={value.text}
                  slug={value.page.slug}
                  logo={logoSrc}
                  color={color}
                  backgroundColor={backgroundColor}
                />
              );
            },
            formSection: ({ value }) => {
              return (
                <FormSection
                  formId={value.formId}
                  submitButtonText={value.submitButtonText}
                  url={value.url}
                  method={value.method}
                  inputs={value.inputs}
                  color={page.contentColor?.hex}
                  backgroundColor={page.contentBackgroundColor?.hex}
                />
              );
            },
            iconsWithUrlAndTextSection: ({ value }) => {
              return (
                <IconsWithUrlAndTextSection
                  icons={value.icons}
                  maxItemsPerRow={value.maxItemsPerRow}
                  color={page.contentColor?.hex}
                  backgroundColor={page.contentBackgroundColor?.hex}
                />
              );
            },
            youtubeVideoSection: ({ value }) => {
              return (
                <YouTubeVideoSection
                  videoUrl={value.videoUrl}
                  title={value.title}
                  contentAfter={value.contentAfter}
                  textAfter={value.textAfter}
                  contentBefore={value.contentBefore}
                  textBefore={value.textBefore}
                  color={page.contentColor?.hex}
                  backgroundColor={page.contentBackgroundColor?.hex}
                />
              );
            },
            sendEmailSection: ({ value }) => {
              return (
                <SendEmailSection
                  emailTo={value.emailTo}
                  color={page.contentColor?.hex}
                  backgroundColor={page.contentBackgroundColor?.hex}
                />
              );
            },
            externalLinkSection: ({ value }) => {
              return (
                <ExternalLinkSection
                  text={value.text}
                  url={value.url}
                  color={page.contentColor?.hex}
                  backgroundColor={page.contentBackgroundColor?.hex}
                />
              );
            },
          }}
        />
        {!!page.footer && (
          <FooterSection
            mission={page.footer.mission}
            columns={page.footer.columns}
            socialMedia={page.footer.socialMedia}
            copyright={page.footer.copyright}
          />
        )}
      </div>
    </div>
  );
};

export default PageContent;
