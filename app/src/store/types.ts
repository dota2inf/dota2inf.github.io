export interface Patch {
  patch_number: string;
  patch_name: string;
  patch_timestamp: number;
}


export interface Patches {
  [id: number]: Patch;
}


export interface Hero {
  id: number;
  name: string;
  name_loc: string;
  name_english_loc: string;
  primary_attr: number;
  complexity: number;
}

export interface Heroes {
  [id: number]: Hero;
}




export interface HeroFull {
  id: number | null;
  name_loc: string | null;

  bio_loc: string | null;
  hype_loc: string | null;
  npe_desc_loc: string | null;

  complexity: number | null;
  primary_attr: number | null;
}

// TODO++ fix tis types
export interface PatchFull {
  heroes: any[],
  neutral_items: any[],
  items: any[]
}