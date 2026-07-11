import { CaseStudySchema, type CaseStudy } from "./schema";
import { arcaden } from "./arcaden";
import { lavarageDapp } from "./lavarage-dapp";
import { lendersPortal } from "./lenders-portal";
import { partnersPortal } from "./partners-portal";
import { yeiFinance } from "./yei-finance";
import { clovis } from "./clovis";
import { mapacsAsm2026 } from "./mapacs-asm-2026";
import { solanaNftDrop } from "./solana-nft-drop";
import { domainService } from "./domain-service";
import { pinjocep } from "./pinjocep";

// Registry of all case studies. Each entry is validated at module load so a
// malformed case study fails the build instead of rendering a broken page.
const entries: CaseStudy[] = [
  arcaden,
  lavarageDapp,
  lendersPortal,
  partnersPortal,
  yeiFinance,
  clovis,
  mapacsAsm2026,
  solanaNftDrop,
  domainService,
  pinjocep,
];

export const caseStudies: CaseStudy[] = entries.map((entry) =>
  CaseStudySchema.parse(entry)
);

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}

export function getAllCaseStudies(): CaseStudy[] {
  return caseStudies;
}
