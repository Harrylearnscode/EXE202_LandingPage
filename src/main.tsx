
  import { createRoot } from "react-dom/client";
  import App from "./app/App.tsx";
  import "./styles/index.css";
import posthog from 'posthog-js'


posthog.init('phc_mqcTUJUHruEKyDK4exW4Yb5QedkUXZzTZ3JrESvis4Jr', {
    api_host: '/ph',
    ui_host: 'https://us.posthog.com',
    defaults: '2026-05-30'
})
createRoot(document.getElementById("root")!).render(<App />);
  