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

  return (
    <div className="py-6 flex flex-col items-center justify-center">
      <HeroTitle
        title="Welcome to JSON Schema Builder"
        description="Build your JSON schema visually with ease . Add , edit , and delete the fileds as nedded . Preview the json schema in real time "
      />
      <div className="flex flex-col md:flex-row gap-10 items-center justify-center my-7">
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
