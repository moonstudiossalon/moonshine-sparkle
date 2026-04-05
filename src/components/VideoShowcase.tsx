import { Play, Instagram } from 'lucide-react';
import { useState } from 'react';

interface VideoItem {
  type: 'instagram';
  embedUrl: string;
  caption: string;
}

const videos: VideoItem[] = [
  {
    type: 'instagram',
    embedUrl: 'https://www.instagram.com/reel/REEL_ID_1/embed',
    caption: 'Balayage transformation ✨',
  },
  {
    type: 'instagram',
    embedUrl: 'https://www.instagram.com/reel/REEL_ID_2/embed',
    caption: 'Hydra Facial glow up',
  },
  {
    type: 'instagram',
    embedUrl: 'https://www.instagram.com/reel/REEL_ID_3/embed',
    caption: 'Nanoplastia hair treatment',
  },
];

const VideoShowcase = () => {
  const [loadedCount, setLoadedCount] = useState(0);

  return (
    <section id="videos" className="py-20 px-4 lg:px-8 bg-secondary/30">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
            <Instagram className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Follow Our Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-semibold text-foreground mb-4">
            See Our Work In Action
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Watch stunning transformations, styling tips, and behind-the-scenes moments from our salon
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {videos.map((video, index) => (
            <div
              key={index}
              className="relative bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-hover transition-shadow duration-300 group"
            >
              {/* Loading placeholder */}
              {loadedCount <= index && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-muted z-10 pointer-events-none">
                  <Play className="w-12 h-12 text-primary/60 mb-2" />
                  <span className="text-sm text-muted-foreground">Loading...</span>
                </div>
              )}

              <iframe
                src={video.embedUrl}
                width="100%"
                height="550"
                frameBorder="0"
                scrolling="no"
                allowFullScreen
                className="w-full"
                title={video.caption}
                onLoad={() => setLoadedCount((prev) => prev + 1)}
              />

              {/* Caption overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-sm font-medium">{video.caption}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA to follow on social */}
        <div className="text-center mt-12">
          <a
            href="https://www.instagram.com/moonstudiossalon"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors font-medium"
          >
            <Instagram className="w-5 h-5" />
            Follow us on Instagram for more transformations
          </a>
        </div>
      </div>
    </section>
  );
};

export default VideoShowcase;
