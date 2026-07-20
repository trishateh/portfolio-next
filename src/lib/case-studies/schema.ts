import { z } from "zod";

// A single image or video shown in a story beat's media column.
export const MediaItemSchema = z
  .object({
    type: z.enum(["image", "video"]),
    src: z.string(),
    poster: z.string().optional(),
    alt: z.string(),
    // Controls the frame the media sits in. "tall" is for phone/portrait
    // screenshots; "auto" renders at the image's intrinsic ratio.
    aspect: z.enum(["video", "wide", "tall", "square", "auto"]).optional(),
    caption: z.string().optional(),
  })
  .refine((m) => m.type !== "video" || !!m.poster, {
    message: "Video media requires a poster image",
  });

export type MediaItem = z.infer<typeof MediaItemSchema>;

// One numbered narrative section: sticky prose beside a scrolling media stack.
export const BeatSchema = z.object({
  eyebrow: z.string(),
  heading: z.string(),
  body: z.array(z.string()).min(1),
  media: z.array(MediaItemSchema),
});

export type Beat = z.infer<typeof BeatSchema>;

export const CaseStudySchema = z.object({
  // Must match a Project slug in src/lib/projects.ts.
  slug: z.string(),
  eyebrow: z.string(),
  title: z.string(),
  // The single word/phrase inside the title rendered with .gradient-text.
  // Must be a substring of title. Only one gradient per viewport (brand rule).
  gradientWord: z.string().optional(),
  // Card/OG image override for case studies whose slug has no matching
  // project entry (e.g. arcaden, which is represented by three projects).
  cardImage: z.string().optional(),
  intro: z.string(),
  role: z.string().optional(),
  timeline: z.string().optional(),
  stack: z.array(z.string()),
  stats: z
    .array(z.object({ value: z.string(), label: z.string() }))
    .max(4),
  links: z.object({
    live: z.string().optional(),
    repo: z.string().optional(),
    store: z.string().optional(),
  }),
  beats: z.array(BeatSchema).min(1),
  outcome: z
    .object({ heading: z.string(), body: z.array(z.string()).min(1) })
    .optional(),
  // Project slugs for the "more case studies" section (each must have a
  // case study of its own).
  related: z.array(z.string()).max(3),
  seo: z.object({ title: z.string(), description: z.string() }),
});

export type CaseStudy = z.infer<typeof CaseStudySchema>;
