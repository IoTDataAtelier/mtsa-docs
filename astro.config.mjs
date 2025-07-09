// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'MTSA',
      social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/IoTDataAtelier/mtsa' }],
      sidebar: [
        {
          label: 'General',
          items: [
            { label: 'Introduction', slug: 'general/introduction' },
            { label: 'Features', slug: 'general/features' },
            { label: 'Installation', slug: 'general/installation' },
          ],
        },
        {
          label: 'Guides',
          items: [
            { label: 'Models', slug: 'guides/using-models' },
          ],
        },
        {
          label: 'How to Contribute',
          items: [
            
            {
              label: 'Types of Contributions',
              items: [
                { label: 'Fix Bugs', slug: 'dev-guide/types-of-contributions/fix-bugs' },
                { label: 'Implement Features', slug: 'dev-guide/types-of-contributions/implement-features' },
                { label: 'Report Bugs', slug: 'dev-guide/types-of-contributions/report-bugs' },
                { label: 'Write Documentation', slug: 'dev-guide/types-of-contributions/write-documentation' },
                { label: 'Submit Feedback', slug: 'dev-guide/types-of-contributions/submit-feedback' },
              ],
            },
            { label: 'Get Started!', slug: 'dev-guide/get-started' },
            { label: 'Pull Request Guidelines', slug: 'dev-guide/pr-guidelines' },

          ],
        },
        {
          label: 'Api Documentation',
					items: [
            { label: 'Base Classes', slug: 'api-docs/base-classes' },
          ],
        },
      ],
    }),
  ],
});