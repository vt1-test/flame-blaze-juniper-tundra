export type Rank = {
  id: string;
  title: string;
  minPercent: number;
  blurb: string;
};

export const RANKS: Rank[] = [
  {
    id: "distinguished",
    title: "Distinguished",
    minPercent: 90,
    blurb: "Board-ready. You read rooms, messages, and risk with unusual clarity.",
  },
  {
    id: "professional",
    title: "Professional",
    minPercent: 80,
    blurb: "You communicate like someone people trust with the room.",
  },
  {
    id: "certified",
    title: "Certified",
    minPercent: 70,
    blurb: "Passing mark. You know the craft; tighten a few habits and you will lead it.",
  },
  {
    id: "developing",
    title: "Developing",
    minPercent: 50,
    blurb: "The principles are coming into focus. Review the misses and sit the exam again.",
  },
  {
    id: "novice",
    title: "Novice",
    minPercent: 0,
    blurb: "This exam is a map. Walk the missed questions and try another pass.",
  },
];

export function rankFor(percent: number): Rank {
  return RANKS.find((rank) => percent >= rank.minPercent) ?? RANKS[RANKS.length - 1]!;
}
