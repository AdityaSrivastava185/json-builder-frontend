export type FieldType = "String" | "Number" | "Boolean" | "Nested";

export interface Field {
  id: string;
  key: string;
  type: FieldType;
  children?: Field[];
}
