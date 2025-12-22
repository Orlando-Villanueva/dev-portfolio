// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import alpinejs from '@astrojs/alpinejs';

import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
    site: 'https://orlandovillanueva.com',
    i18n: {
        defaultLocale: 'en',
        locales: ['en', 'fr'],
        routing: {
            prefixDefaultLocale: false
        }
    },

    vite: {
        plugins: [tailwindcss()]
    },

    integrations: [alpinejs()],
    adapter: netlify()
});