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
// Add announcements here when shipping features.
// Use /release skill in Claude Code to generate these automatically.
const announcements: Announcement[] = [];

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
