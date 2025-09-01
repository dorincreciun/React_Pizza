import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { RoutesProvider } from "../../app/providers/RoutesProvider.tsx";

export const AppLayout = () => {
  return (
    <>
      <RoutesProvider />
      <ReactQueryDevtools initialIsOpen={false} />
    </>
  );
};
