export interface NFT {
  id: number;
  title: string;
  collection: string;
  rarity?: string;
  price: number;
  originalPrice?: number;
  image: string;
  tag?: 'lancamento' | 'alta' | string;
}

export interface UpcomingDrop {
  id: number;
  title: string;
  creator: string;
  date: string;
  price: string;
  supply: string;
  status: string;
  image: string;
}

export interface StatRanking {
  rank: number;
  collection: string;
  volume: string;
  floor: string;
  owners: string;
  items: string;
}export interface NFT {
  id: number;
  title: string;
  collection: string;
  rarity?: string;
  price: number;
  originalPrice?: number;
  image: string;
  tag?: 'lancamento' | 'alta' | string;
}

export interface UpcomingDrop {
  id: number;
  title: string;
  creator: string;
  date: string;
  price: string;
  supply: string;
  status: string;
  image: string;
}

export interface StatRanking {
  rank: number;
  collection: string;
  volume: string;
  floor: string;
  owners: string;
  items: string;
}
