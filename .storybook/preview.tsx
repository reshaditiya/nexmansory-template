import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import '@mantine/code-highlight/styles.css';
import '@mantine/notifications/styles.css';
import '@mantine/spotlight/styles.css';
import '@mantine/carousel/styles.css';
import '@mantine/dropzone/styles.css';
import '@mantine/nprogress/styles.css';
import '@mantine/tiptap/styles.css';
import React, { useEffect } from 'react';
import { addons } from '@storybook/preview-api';
import { DARK_MODE_EVENT_NAME } from 'storybook-dark-mode';
import { MantineProvider, useMantineColorScheme } from '@mantine/core';
import { theme } from '../theme';
import { Preview } from '@storybook/react';

const channel = addons.getChannel();

function ColorSchemeWrapper({ children }: { children: React.ReactNode }) {
  const { setColorScheme } = useMantineColorScheme();
  const handleColorScheme = (value: boolean) => setColorScheme(value ? 'dark' : 'light');

  useEffect(() => {
    channel.on(DARK_MODE_EVENT_NAME, handleColorScheme);
    return () => channel.off(DARK_MODE_EVENT_NAME, handleColorScheme);
  }, [channel]);

  return <>{children}</>;
}

export const decorators = [
  (renderStory: any) => <ColorSchemeWrapper>{renderStory()}</ColorSchemeWrapper>,
  (renderStory: any) => <MantineProvider theme={theme}>{renderStory()}</MantineProvider>,
];

const preview: Preview = {
  parameters: {
    controls: { sort: 'requiredFirst' },
    actions: { argTypesRegex: '^(handle|on)[A-Z].*' },
  },
};

export default preview;
