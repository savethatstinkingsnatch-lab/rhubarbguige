import { createFileRoute } from "@tanstack/react-router";
import { FieldGuide } from "@/components/field-guide";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return <FieldGuide />;
}
