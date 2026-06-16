import { Outlet } from "react-router";
import { IPhoneFrame } from "./components/IPhoneFrame";
import { StatusBarProvider } from "./context/StatusBarContext";

export function AppLayout() {
  return (
    <StatusBarProvider>
      <IPhoneFrame>
        <Outlet />
      </IPhoneFrame>
    </StatusBarProvider>
  );
}