import { createFileRoute, notFound } from "@tanstack/react-router";

import { tours } from "@/data/tours";
import { useTranslate } from "@tolgee/react";

export const Route = createFileRoute("/tours/$tourId")({
  component: TourPage,
});

function TourPage() {
  const { tourId } = Route.useParams();
  const { t } = useTranslate();

  const tour = tours.find((t) => t.id === tourId);

  if (!tour) {
    throw notFound();
  }

  return (
    <main>
      <h1>{t(`tours.items.${tour.id}.title`)}</h1>

      <p>{t(`tours.items.${tour.id}.description`)}</p>

      <img
        src={tour.image}
        alt={t(`tours.items.${tour.id}.title`)}
        width={1280}
        height={1600}
        loading="lazy"
      />
    </main>
  );
}
