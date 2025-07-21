import { Field } from "@/types/schema";

let idCounter = 0;
export const generateId = () => `field-${idCounter++}`;

export const addNestedField = (nodes: Field[], parentId: string, newField: Field): Field[] => {
  return nodes.map((node) => {
    if (node.id === parentId) {
      const children = node.children || [];
      return { ...node, children: [...children, newField] };
    } else if (node.type === "Nested" && node.children) {
      return { ...node, children: addNestedField(node.children, parentId, newField) };
    }
    return node;
  });
};

export const updateNestedField = (nodes: Field[], id: string, key: string, value: any): Field[] => {
  return nodes.map((node) => {
    if (node.id === id) {
      return { ...node, [key]: value };
    } else if (node.type === "Nested" && node.children) {
      return { ...node, children: updateNestedField(node.children, id, key, value) };
    }
    return node;
  });
};

export const deleteNestedField = (nodes: Field[], id: string): Field[] => {
  return nodes
    .filter((node) => node.id !== id)
    .map((node) =>
      node.type === "Nested" && node.children
        ? { ...node, children: deleteNestedField(node.children, id) }
        : node
    );
};

export const generateSchema = (fields: Field[]): any => {
  const schema: any = {};
  fields.forEach((field) => {
    if (field.type === "String") schema[field.key] = "STRING";
    else if (field.type === "Number") schema[field.key] = "INT";
    else if (field.type === "Nested") schema[field.key] = generateSchema(field.children || []);
  });
  return schema;
};
