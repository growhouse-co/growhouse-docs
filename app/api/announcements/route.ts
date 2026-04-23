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
    id: '2026-04-23-relational-canvas',
    version: '1.1.0',
    publishedAt: '2026-04-23T11:00:00Z',
    slides: [
      {
        id: 'slide-arrows',
        title: 'Arrows that mean something',
        description: 'Draw arrows between any two elements to show how they connect. Anchor to a spot inside a node, not just its edge. When you rearrange things, the arrows follow. Every relationship is data Claude can read through MCP, so your canvas stays structured for both you and your agents.',
        // media: { type: 'loom', url: '' },
        cta: {
          label: 'See what\'s new',
          url: 'https://docs.growhouse.co/docs/releases',
        },
      },
      {
        id: 'slide-frame-comments',
        title: 'Comment on a whole frame, not just one piece',
        description: 'Before, you could drop a thread on a node or a text element, but not on the frame that grouped them. Now frames carry comments too. Open a thread on a Campaign Q2 frame or Research Sources frame to discuss the grouping itself. Your team can talk about sections, not just pieces.',
        cta: {
          label: 'See what\'s new',
          url: 'https://docs.growhouse.co/docs/releases',
        },
      },
      {
        id: 'slide-tidy-files',
        title: 'Tidy any pile of files',
        description: 'Drop 20 videos at once, or select a scattered group that has been piling up on your canvas. Pick a layout (Row, Column, Grid) and a sort order (position, newest, name, or kind). Your content calendar, asset review, or research dump snaps into a readable shape. Works on three files, or three hundred.',
        cta: {
          label: 'See what\'s new',
          url: 'https://docs.growhouse.co/docs/releases',
        },
      },
      {
        id: 'slide-audio',
        title: 'Audio on the canvas',
        description: 'Drop an MP3 or WAV, get a waveform, trim without leaving the canvas. Comment on a specific second so your team can review a podcast the same way you review a video.',
        cta: {
          label: 'See what\'s new',
          url: 'https://docs.growhouse.co/docs/releases',
        },
      },
    ],
  },
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
