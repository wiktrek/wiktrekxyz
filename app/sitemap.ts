import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://wiktrek.xyz',
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
  ];
}
