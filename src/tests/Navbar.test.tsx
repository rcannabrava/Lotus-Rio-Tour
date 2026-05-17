import { render, screen } from "@testing-library/react";

import { Navbar } from "@/components/layout/Navbar";

describe("Navbar", () => {
  it("renders navigation", () => {
    render(<Navbar />);

    expect(screen.getByRole("navigation")).toBeInTheDocument();
  });
});
