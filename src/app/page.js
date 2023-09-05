'use client';
import { ThemeUIProvider } from 'theme-ui';
import theme from 'theme';
import { StickyProvider } from '../contexts/app/app.provider';
import Banner from 'sections/banner';
import Layout from 'components/layout';
import KeyFeature from 'sections/key-feature';
import ServiceSection from 'sections/service-section';

export default function Home() {
  return (
    <ThemeUIProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <Banner/>
          <KeyFeature />
          <ServiceSection />
        </Layout>
      </StickyProvider>
    </ThemeUIProvider>
  );
}
