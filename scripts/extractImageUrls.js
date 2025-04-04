const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to extract URLs from a file's content
function extractImageUrls(content) {
  const urls = [];
  
  // Match src attributes in Image components and img tags
  const srcRegex = /src=["'](https?:\/\/[^"']+|\/[^"']+)["']/g;
  let match;
  
  while ((match = srcRegex.exec(content)) !== null) {
    urls.push(match[1]);
  }
  
  // Match image URLs in urlFor() functions (Sanity images)
  const urlForRegex = /urlFor\(([^)]+)\)/g;
  while ((match = urlForRegex.exec(content)) !== null) {
    urls.push(`Sanity Image: ${match[1]}`);
  }
  
  // Match background image URLs in CSS/tailwind
  const bgRegex = /background(?:-image)?:\s*url\(['"]?(https?:\/\/[^'"]+)['"]?\)/g;
  while ((match = bgRegex.exec(content)) !== null) {
    urls.push(match[1]);
  }

  return urls;
}

// Function to recursively search through project files
async function findAllImageUrls() {
  const imageUrls = {
    remoteUrls: [],
    localPaths: [],
    sanityImages: []
  };

  // Define directories to search
  const searchPaths = [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
    './styles/**/*.{css,scss}'
  ];

  // Get all matching files
  for (const searchPath of searchPaths) {
    const files = glob.sync(searchPath);
    
    for (const file of files) {
      const content = fs.readFileSync(file, 'utf8');
      const urls = extractImageUrls(content);
      
      urls.forEach(url => {
        if (url.startsWith('Sanity Image:')) {
          imageUrls.sanityImages.push({
            file,
            reference: url.replace('Sanity Image: ', '')
          });
        } else if (url.startsWith('http')) {
          imageUrls.remoteUrls.push({
            file,
            url
          });
        } else {
          imageUrls.localPaths.push({
            file,
            path: url
          });
        }
      });
    }
  }

  return imageUrls;
}

// Execute and save results
async function main() {
  try {
    const imageUrls = await findAllImageUrls();
    
    fs.writeFileSync(
      'image-urls.json',
      JSON.stringify(imageUrls, null, 2),
      'utf8'
    );
    
    console.log('Image URLs have been extracted and saved to image-urls.json');
    console.log(`Found:
      ${imageUrls.remoteUrls.length} remote URLs
      ${imageUrls.localPaths.length} local paths
      ${imageUrls.sanityImages.length} Sanity images`
    );
  } catch (error) {
    console.error('Error extracting image URLs:', error);
  }
}

main();