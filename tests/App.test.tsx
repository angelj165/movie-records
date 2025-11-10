import { render, screen } from "@testing-library/react";
import App from "../src/App";

test("renders Movie Records header", () => {
    render(<App />);
    expect(screen.getByText(/movie records/i)).toBeInTheDocument();
});
