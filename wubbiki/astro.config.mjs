import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
    title: 'Wubbiki',
    customCss: [
    // Relative path to your custom CSS file
    './src/styles/custom.css'],
    social: {
      github: 'https://github.com/yourlocalonion/wubbiki',
      discord: 'https://discord.gg/wXZtfzRKWw'
    },
    logo: {
      src: './src/assets/wubbiki.svg'
    },
    editLink: {
      baseUrl: 'https://github.com/yourlocalonion/wubbiki/tree/main/wubbiki'
    },
    sidebar: [{
      label: 'Wubby',
      autogenerate: {
        directory: 'reference'
      }
    }, {
      label: 'Other',
      autogenerate: {
        directory: 'other'
      }
    }, {
      label: 'Community',
      autogenerate: {
        directory: 'community'
      },
      badge: {
        text: 'WIP',
        variant: 'caution'
      }
    }, {
      label: 'Contributing',
      autogenerate: {
        directory: 'contributing'
      }
    }],
    customCss: [
    // Relative path to your custom CSS file
    './src/styles/custom.css']
  }), sitemap()]
});