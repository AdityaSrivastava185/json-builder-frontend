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
    <div className="py-6 flex flex-col items-center justify-center">
      <HeroTitle
        title="Welcome to JSON Schema Builder"
        description="Build your JSON schema visually with ease . Add , edit , and delete the fileds as nedded . Preview the json schema in real time "
      />
      <div className="flex flex-row gap-10 items-center justify-center my-7">
        <div className="md:mb-7">
          <SocialsButtons
            ButtonName="Check out on Github"
            ButtonLink="https://github.com/AdityaSrivastava185/json-builder-frontend"
          />
        </div>
        <div className="md:mb-7">
          <SocialsButtons
            ButtonName="Check out the JSON Builder"
            ButtonLink="/json-builder"
          />
        </div>
      </div>

      <NoteList
        highlightedText="Add field button"
        normalText="will add the button at the root level of the JSON schema"
      />
      <NoteList
        highlightedText="Add nested field button"
        normalText="will add the button at the root nested level of the root field in the JSON schema"
      />

    </div>
  );
}
