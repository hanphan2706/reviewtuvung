import { redirect } from "next/navigation";

type PageProps = {
  params: Promise<{ unitId: string }>;
};

export default async function VocabularyUnitLegacyRedirect({ params }: PageProps) {
  const { unitId } = await params;
  redirect(`/tu-hoc/tu-vung/goi-y/${unitId}`);
}
