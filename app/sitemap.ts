import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const sitemap = [
    {
      url: 'https://wiktrek.xyz',
      lastModified: new Date(),
    },
    {
      url: 'https://wiktrek.xyz/projects',
      lastModified: new Date(),
    },
    {
      url: 'https://svelte.wiktrek.xyz',
      lastModified: new Date(),
    },

    {
      url: 'https://terminal.wiktrek.xyz',
      lastModified: new Date(),
    },
    {
      url: 'https://project.wiktrek.xyz',
      lastModified: new Date(),
    },
    {
      url: 'https://wiktrek.xyz/blog',
      lastModified: new Date(),
    },
    {
      url: 'https://project.wiktrek.xyz/projects/url',
      lastModified: new Date(),
    },
    {
      url: 'https://project.wiktrek.xyz/projects/poll',
      lastModified: new Date(),
    },
  ];

  return sitemap;
}
