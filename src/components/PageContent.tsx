import { Page, SiteSettings } from '@/sanity/lib/queries';
import { PortableText } from '@portabletext/react';
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
} from '@/components/PageSection';

interface PageContentProps {
  page: Page;
  siteSettings: SiteSettings;
}

const PageContent: React.FC<PageContentProps> = ({ page, siteSettings }) => {
  return (
    <div
      className="container h-screen py-4 mx-auto px-4"
      style={{ backgroundColor: siteSettings.backgroundColor?.hex }}
    >
      <div className="flex flex-col space-y-3 h-full">
        <NavigationSection
          title={page.navigationMenu?.title}
          items={page.navigationMenu?.items}
          logo={page.logo || siteSettings.logo}
        />
        {page.slug !== 'home-page' && (
          <div
            className="text-lg font-semibold p-6 rounded-lg transition duration-300 ease-in-out"
            style={{ color: page.titleColor?.hex, backgroundColor: page.titleBackgroundColor?.hex }}
          >
            {page.title}
          </div>
        )}
        <PortableText
          value={page.content}
          components={{
            types: {
              block: (props) => {
                return null;
              },
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
                    color={page.contentColor?.hex}
                    backgroundColor={page.contentBackgroundColor?.hex}
                  />
                );
              },
              navigationItemSection: ({ value }) => {
                return (
                  <NavigationItemSection
                    text={value.text}
                    slug={value.page.slug}
                    color={value.page.titleColor?.hex}
                    backgroundColor={value.page.titleBackgroundColor?.hex}
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
            },
            // This will handle inline span elements
            marks: {
              // Define custom mark serializers here if you have any
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
