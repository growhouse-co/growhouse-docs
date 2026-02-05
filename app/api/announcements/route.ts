import { NextResponse } from 'next/server';

interface AnnouncementSlide {
  id: string;
  title: string;
  description: string;
  media?: {
    type: 'image' | 'video' | 'loom';
    url: string;
  };
  cta?: {
    label: string;
    url: string;
  };
}

interface Announcement {
  id: string;
  version: string;
  slides: AnnouncementSlide[];
}

// Announcements data - edit this to add new announcements
// When you deploy a major feature, add an announcement here
const announcements: Announcement[] = [
  // Example announcement (uncomment when you have a real one):
  // {
  //   id: '2026-02-05-realtime-collab',
  //   version: '1.2.0',
  //   slides: [
  //     {
  //       id: 'slide-1',
  //       title: 'Real-time Collaboration is Here',
  //       description: 'Now you can see when teammates are online and what they\'re working on. No more accidental overwrites.',
  //       media: {
  //         type: 'loom',
  //         url: 'https://www.loom.com/share/your-video-id',
  //       },
  //       cta: {
  //         label: 'Learn more in docs',
  //         url: 'https://docs.growhouse.co/docs/canvas/collaboration',
  //       },
  //     },
  //     {
  //       id: 'slide-2',
  //       title: 'See Who\'s Online',
  //       description: 'Colored cursors and presence indicators show you exactly where your team is working.',
  //       media: {
  //         type: 'image',
  //         url: 'https://docs.growhouse.co/images/collab-cursors.png',
  //       },
  //     },
  //   ],
  // },
];

export async function GET() {
  return NextResponse.json({
    announcements,
    // Metadata for the client
    meta: {
      count: announcements.length,
      latestVersion: announcements[0]?.version || null,
      updatedAt: new Date().toISOString(),
    },
  }, {
    headers: {
      // Cache for 5 minutes, revalidate in background
      'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600',
    },
  });
}
