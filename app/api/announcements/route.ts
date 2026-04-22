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
  publishedAt: string; // ISO 8601. Controls 7-day TTL in app.growhouse.co modal.
  slides: AnnouncementSlide[];
}

// Announcements data - edit this to add new announcements
// When you deploy a major feature, add an announcement here
// Add announcements here when shipping features.
// Use /release skill in Claude Code to generate these automatically.
const announcements: Announcement[] = [
  {
    id: '2026-03-11-threads-frames',
    version: '1.0.0',
    publishedAt: '2026-03-11T00:00:00Z',
    slides: [
      {
        id: 'slide-threads',
        title: 'Threads & Comments',
        description: 'Leave comments on your videos and images. Point to a specific second or region. @mention your team, or let AI agents comment through MCP.',
        // media: { type: 'loom', url: '' },
        cta: {
          label: 'See what\'s new',
          url: 'https://docs.growhouse.co/docs/releases',
        },
      },
      {
        id: 'slide-draw-text',
        title: 'Draw-to-Create Text',
        description: 'Click and drag to place a text box at the size you need. Text wraps inside it.',
        cta: {
          label: 'See what\'s new',
          url: 'https://docs.growhouse.co/docs/releases',
        },
      },
      {
        id: 'slide-frames',
        title: 'Frames',
        description: 'Structure your canvas with colored frames. Group nodes together, nest for layers, and move everything as one.',
        cta: {
          label: 'See what\'s new',
          url: 'https://docs.growhouse.co/docs/releases',
        },
      },
    ],
  },
];

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

export async function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: corsHeaders });
}

export async function GET() {
  return NextResponse.json({
    announcements,
    meta: {
      count: announcements.length,
      latestVersion: announcements[0]?.version || null,
      updatedAt: new Date().toISOString(),
    },
  }, {
    headers: {
      ...corsHeaders,
      'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600',
    },
  });
}
