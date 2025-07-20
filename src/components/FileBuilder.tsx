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
import HeroTitle from "./HeroTitle";
import SocialsButtons from "./SocialsButtons";
import NoteList from "./NoteList";

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
    <div className="py-6">
      <HeroTitle
        title="Welcome to JSON Schema Builder"
        description="Build your JSON schema visually with ease . Add , edit , and delete the fileds as nedded . Preview the json schema in real time "
      />
      <div className="mb-10">
        <SocialsButtons
          ButtonName="Check out on Github"
          ButtonLink="https://github.com/AdityaSrivastava185/json-builder-frontend"
        />
      </div>
      <Tabs defaultValue="builder">
        <TabsList>
          <TabsTrigger value="builder" className="cursor-pointer">JSON Builder</TabsTrigger>
          <TabsTrigger value="json" className="cursor-pointer">JSON Preview</TabsTrigger>
        </TabsList>

        <TabsContent value="builder">
          <div className="mb-4">
            <Button onClick={() => addField()} className="bg-foreground text-background cursor-pointer">
              + Add Field
            </Button>
          </div>
          <NoteList
            highlightedText="Add field button"
            normalText="will add the button at the root level of the JSON schema"
          />
          <NoteList
            highlightedText="Add nested field button"
            normalText="will add the button at the root nested level of the root field in the JSON schema"
          />
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
