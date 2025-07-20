// app/components/schema-builder/types.ts
export interface Field {
  id: string;
  key: string;
  type: "String" | "Number" | "Nested";
  children?: Field[];
}
