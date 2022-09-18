import { CacheProvider, EmotionCache, ThemeProvider } from '@emotion/react';
import type { AppProps } from 'next/app';
import createEmotionCache from '../style/material-ui/createEmotionCache';
import theme from '../style/material-ui/theme';
import '../style/app.scss';
import UserAppLayout from '../layout/UserAppLayout';

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const clientSideEmotionCache = createEmotionCache();

function MyApp({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps,
}: MyAppProps) {
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <UserAppLayout>
          <Component {...pageProps} />
        </UserAppLayout>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default MyApp;
