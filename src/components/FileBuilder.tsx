"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Field } from "@/types/schema";
import {
  addNestedField,
  deleteNestedField,
  generateId,
  generateSchema,
  updateNestedField
} from "@/lib/builder-utility";
import { FieldRenderer } from "@/components/JsonPreview"

export default function JsonSchemaBuilder() {
  const [fields, setFields] = useState<Field[]>([]);

  const addField = (parentId?: string) => {
    const newField: Field = {
      id: generateId(),
      key: "",
      type: "String"
    };

    if (!parentId) {
      setFields([...fields, newField]);
    } else {
      setFields(addNestedField(fields, parentId, newField));
    }
  };

  const updateField = (id: string, key: string, value: any) => {
    setFields(updateNestedField(fields, id, key, value));
  };

  const deleteField = (id: string) => {
    setFields(deleteNestedField(fields, id));
  };

  return (
    <div className="p-6">
      <Tabs defaultValue="builder">
        <TabsList>
          <TabsTrigger value="builder">Builder</TabsTrigger>
          <TabsTrigger value="json">JSON Preview</TabsTrigger>
        </TabsList>

        <TabsContent value="builder">
          <div className="mb-4">
            <Button onClick={() => addField()} variant="default">
              + Add Field
            </Button>
          </div>
          <FieldRenderer
            fields={fields}
            updateField={updateField}
            deleteField={deleteField}
            addField={addField}
          />
        </TabsContent>

        <TabsContent value="json">
          <pre className="bg-sidebar p-4 rounded overflow-auto text-sm">
            {JSON.stringify(generateSchema(fields), null, 2)}
          </pre>
        </TabsContent>
      </Tabs>
    </div>
  );
}
