
export interface Field {
  id: string;
  key: string;
  type: "String" | "Number" | "Nested";
  children?: Field[];
}

export interface heroTitleProps{
    title : string;
    description : string;
}