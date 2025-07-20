import { Field } from "@/types/schema";

let idCounter = 0;
export const generateId = () => `field-${idCounter++}`;

export const updateFieldById = (
  fields: Field[],
  id: string,
  key: keyof Field,
  value: any
): Field[] =>
  fields.map((field) =>
    field.id === id
      ? { ...field, [key]: value }
      : field.type === "Nested" && field.children
      ? { ...field, children: updateFieldById(field.children, id, key, value) }
      : field
  );


export const deleteFieldById = (fields: Field[], id: string): Field[] =>
  fields
    .filter((field) => field.id !== id)
    .map((field) =>
      field.type === "Nested" && field.children
        ? { ...field, children: deleteFieldById(field.children, id) }
        : field
    );

export const addNestedFieldById = (
  fields: Field[],
  parentId: string,
  newField: Field
): Field[] =>
  fields.map((field) =>
    field.id === parentId
      ? {
          ...field,
          children: [...(field.children || []), newField],
        }
      : field.type === "Nested" && field.children
      ? {
          ...field,
          children: addNestedFieldById(field.children, parentId, newField),
        }
      : field
  );


export const buildJsonSchema = (fields: Field[]): Record<string, any> => {
  const result: Record<string, any> = {};
  fields.forEach((field) => {
    if (field.type === "String") result[field.key] = "";
    else if (field.type === "Number") result[field.key] = 0;
    else if (field.type === "Nested")
      result[field.key] = buildJsonSchema(field.children || []);
  });
  return result;
};
