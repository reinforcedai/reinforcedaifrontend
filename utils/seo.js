import { getStrapiMedia } from "./medias";

export function getMetaTags(seo) {
  const tags = [];

  if (seo.metaTitle) {
    tags.push(
      {
        hid: 'og:title',
        property: "og:title",
        content: seo.metaTitle,
      },
      {
        hid: 'twitter:title',
        name: "twitter:title",
        content: seo.metaTitle,
      }
    );
  }
  if (seo.metaDescription) {
    tags.push(
      {
        hid: 'description',
        name: "description",
        content: seo.metaDescription,
      },
      {
        hid: 'og:description',
        property: "og:description",
        content: seo.metaDescription,
      },
      {
        hid: 'twitter:description',
        name: "twitter:description",
        content: seo.metaDescription,
      }
    );
  }
  if (seo.shareImage) {
    const imageUrl = getStrapiMedia(seo.shareImage.url);
    tags.push(
      {
        hid: 'image',
        name: "image",
        content: imageUrl,
      },
      {
        hid: 'og:image',
        property: "og:image",
        content: imageUrl,
      },
      {
        hid: 'twitter:image',
        name: "twitter:image",
        content: imageUrl,
      },
      {
        hid: 'og:image:secure_url',
        property: 'og:image:secure_url',
        content: imageUrl
      }
    );
  }
  if (seo.article) {
    tags.push({
      hid: 'og:type',
      property: "og:type",
      content: "article",
    });
  }
  tags.push({ hid: 'twitter:card', name: "twitter:card", content: "summary_large_image" });
  tags.push({ hid: 'twitter:image:alt', name: 'twitter:image:alt', content: seo.metaTitle });
  tags.push({ hid: 'twitter:site', name: 'twitter:site', content: 'Reinforced AI' });
  tags.push({ hid: 'twitter:url', name: 'twitter:url', content: 'https://reinforcedai.com' });
  tags.push({ hid: 'og:image:alt', property: 'og:image:alt', content: seo.metaTitle });
  tags.push({ hid: 'og:site_name', property: 'og:site_name', content: 'Reinforced AI' });
  tags.push({ hid: 'og:type', property: 'og:type', content: 'Reinforced AI website' });
  tags.push({ hid: 'og:url', property: 'og:url', content: 'https://reinforcedai.com' });

  return tags;
}
