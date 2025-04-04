import { useEffect } from 'react';
import imageUrls from '../image-urls.json';

const ImagePreloader = () => {
  useEffect(() => {
    // Combine all remote URLs and local paths
    const urlsToPreload = [
      ...imageUrls.remoteUrls.map(item => item.url),
      ...imageUrls.localPaths.map(item => item.path)
    ];

    // Filter out non-image URLs (like .js files)
    const imageUrlsOnly = urlsToPreload.filter(url => {
      const isScript = url.endsWith('.js');
      const isImage = /\.(jpg|jpeg|png|gif|webp|svg)($|\?)/i.test(url);
      return !isScript && (isImage || url.includes('images'));
    });

    // Preload images
    imageUrlsOnly.forEach(url => {
      const img = new Image();
      img.src = url;
    });
  }, []);

  // This component doesn't render anything
  return null;
};

export default ImagePreloader;