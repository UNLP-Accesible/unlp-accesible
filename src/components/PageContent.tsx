import { Page, SiteSettings } from '@/sanity/lib/queries';
import { PortableText } from '@portabletext/react';
import { urlForImage } from '@/sanity/lib/utils';
import { NavigationSection, FooterSection, ImageSection } from '@/components/PageSection';

interface PageContentProps {
  page: Page;
  siteSettings: SiteSettings;
}

const PageContent: React.FC<PageContentProps> = ({ page, siteSettings }) => {
  if (!page?.content) {
    return <div>No content yet</div>;
  }

  const siteLogoSrc = urlForImage(siteSettings?.logo)?.url() ?? '';
  const pageLogoSrc = urlForImage(page?.logo)?.url() ?? '';

  return (
    <>
      {!!page.navigationMenu && (
        <NavigationSection title={page.navigationMenu.title} items={page.navigationMenu.items} />
      )}
      <PortableText
        value={page.content}
        components={{
          types: {
            block: (props) => {
              return null;
            },
            imageSection: ({ value }) => {
              return <ImageSection image={value.image} contentWidth={value.contentWidth} />;
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
          companyMission={page.footer.companyMission}
          columns={page.footer.columns}
          socialMedia={page.footer.socialMedia}
          newsletter={page.footer.newsletter}
          copyright={page.footer.copyright}
        />
      )}
    </>
  );
};

export default PageContent;
