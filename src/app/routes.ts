import { createElement } from "react";
import { createBrowserRouter, Navigate } from "react-router";

// ── Landing page ──
import { Landing } from "./landing/Landing";

export const router = createBrowserRouter([
  { path: "*", Component: Landing },
]);
