
export interface Field {
  id: string;
  key: string;
  type: "String" | "Number" | "Nested";
  children?: Field[];
}

export interface nestedFieldProps {
  fields: Field[];
  updateField: (id: string, key: string, value: any) => void;
  deleteField: (id: string) => void;
  addField: (parentId?: string) => void;
  parentId?: string;
}

export interface NotesList{
  highlightedText?:string;
  normalText:string;
}

export interface heroTitleProps{
    title : string;
    description : string;
}

export interface socialButtonsProps{
  ButtonName:string;
  ButtonLink:string;
}