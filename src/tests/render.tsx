import { ReactNode } from "react";
import { render } from "@testing-library/react";

import { TolgeeProvider } from "@tolgee/react";
import { tolgee } from "@/i18n/tolgee";

export function renderWithProviders(ui: ReactNode) {
  return render(
    <TolgeeProvider tolgee={tolgee} fallback="Loading translation...">
      {ui}
    </TolgeeProvider>,
  );
}
