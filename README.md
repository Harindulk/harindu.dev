# harindu.dev

Welcome to my personal website, [harindu.dev](https://harindu.dev)! This repository contains the source code and configuration for my website built using various technologies and frameworks. 

## Technologies Used

### Frameworks

- **Next.js**: Next.js is a React.js framework used for building static site generator apps. It provides an efficient and optimized way to create dynamic web applications. Learn more about Next.js [here](https://nextjs.org).
- **Mantine**: Mantine is a library of React components that I've used to enhance the UI and functionality of my website. It offers a wide range of customizable components, making development faster and easier. Find out more about Mantine [here](https://mantine.dev).

### Content Delivery Network (CDN)

- **Cloudinary**: Cloudinary is a powerful CDN that I've integrated into my website to optimize the delivery of images and other media files. It helps improve performance and user experience by ensuring fast and reliable content delivery. Explore Cloudinary's features [here](https://cloudinary.com).

### Web Hosting Provider

- **Vercel**: I'm using Vercel as my serverless hosting platform to deploy and serve my website. Vercel, previously known as ZEIT, offers a seamless deployment process and ensures high availability and scalability. Learn more about Vercel [here](https://vercel.com).

### Person Schema

- **Person Schema**: I have implemented Person Schema on my website to provide structured data about myself as a human being. This schema helps search engines understand and present information about me more accurately. Learn more about Person Schema [here](https://schema.org/Person).

## Additional Dependencies

Here are the additional dependencies used in this project:

- **[@emotion/react](https://www.npmjs.com/package/@emotion/react)** and **[@emotion/server](https://www.npmjs.com/package/@emotion/server)**: Libraries for styling and managing CSS-in-JS in React applications.
- **[@mantine/carousel](https://www.npmjs.com/package/@mantine/carousel)**, **[@mantine/core](https://www.npmjs.com/package/@mantine/core)**, **[@mantine/dates](https://www.npmjs.com/package/@mantine/dates)**, **[@mantine/form](https://www.npmjs.com/package/@mantine/form)**, **[@mantine/hooks](https://www.npmjs.com/package/@mantine/hooks)**, **[@mantine/notifications](https://www.npmjs.com/package/@mantine/notifications)**, **[@mantine/nprogress](https://www.npmjs.com/package/@mantine/nprogress)**, **[@mantine/prism](https://www.npmjs.com/package/@mantine/prism)**: Mantine components and utility libraries.
- **[@next/bundle-analyzer](https://www.npmjs.com/package/@next/bundle-analyzer)**: Analyzes the bundle size and composition of the Next.js application.
- **[@next/font](https://www.npmjs.com/package/@next/font)**: Simplifies adding custom fonts to the Next.js application.
- **[@tabler/icons](https://www.npmjs.com/package/@tabler/icons)**: Provides a collection of icons from the Tabler Icons project.
- **[cookies-next](https://www.npmjs.com/package/cookies-next)**: Handles cookies in Next.js applications.
- **[dayjs](https://www.npmjs.com/package/dayjs)**: Manipulates, parses, and formats dates and times.
- **[embla-carousel-react](https://www.npmjs.com/package/embla-carousel-react)**: React wrapper for the Embla Carousel library for interactive carousels.
- **[gray-matter](https://www.npmjs.com/package/gray-matter)**: Parses front matter in Markdown files to extract metadata.
- **[next-mdx-remote](https://www.npmjs.com/package/next-mdx-remote)**: Renders MDX content (Markdown with JSX) on the server in Next.js.
- **[next-seo](https://www.npmjs.com/package/next-seo)**: Manages SEO metadata, such as title, description, and Open Graph tags, in Next.js applications.
- **[next-sitemap](https://www.npmjs.com/package/next-sitemap)**: Generates a sitemap for the website to aid search engine crawling and indexing.
- **[reading-time](https://www.npmjs.com/package/reading-time)**: Calculates the estimated reading time of a text based on average reading speed.


## Getting Started

### Build and dev scripts

- `npm run dev` – start dev server
- `npm run build` – bundle application for production
- `npm run export` – exports static website to `out` folder
- `npm run analyze` – analyzes application bundle with [@next/bundle-analyzer](https://www.npmjs.com/package/@next/bundle-analyzer)

### To Generate Sitemap & Robots.txt
- `npm run build` 
- `npm run sitemap`

To run this project locally, follow these steps:

1. Clone this repository
2. Install the project dependencies: `npm install`
3. Start the development server: `npm run dev`
4. Open your browser and visit `http://localhost:3000` to see the website in action.


## Contributing

If you find any issues or have suggestions for improvement, please feel free to open an issue or submit a pull request. I appreciate your contributions!

### Known Issue
There is currently a bug causing the website to load very fast but with delayed CSS rendering. This issue is impacting the initial visual display of the website. The bug needs to be fixed to ensure proper loading and rendering of CSS files.


