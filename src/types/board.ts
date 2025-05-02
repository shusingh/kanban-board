export interface CardType {
  id: string;
  columnId: string;
  title: string;
  position: number;
  content?: string;
}

export interface ColumnType {
  id: string;
  title: string;
  position: number;
  cards: CardType[];
}

export interface BoardType {
  id: string;
  title: string;
  columns: ColumnType[];
}
