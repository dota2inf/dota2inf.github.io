export interface Patches {
  patch_number: string;
  patch_name: string;
  patch_timestamp: number;
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
