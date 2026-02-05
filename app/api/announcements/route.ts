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
  {
    id: 'test-2026-02-05',
    version: '0.0.1',
    slides: [
      {
        id: 'slide-1',
        title: 'Testing Announcement System',
        description: 'This is a test announcement to verify the modal works end-to-end. If you see this, the system is working correctly.',
        cta: {
          label: 'View docs',
          url: 'https://docs.growhouse.co/docs',
        },
      },
      {
        id: 'slide-2',
        title: 'Multi-Slide Support',
        description: 'This is slide 2 of 2. Pagination dots and navigation arrows should be visible below.',
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
