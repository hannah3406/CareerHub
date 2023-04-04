import { QueryClient, QueryClientProvider } from "react-query";

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      refetchOnWindowFocus: false,
    },
  },
});
interface IReactQuerySettingProps {
  children: JSX.Element;
}
function ReactQuerySetting(props: IReactQuerySettingProps) {
  return (
    <QueryClientProvider client={queryClient}>
      {props.children}
    </QueryClientProvider>
  );
}
export default ReactQuerySetting;
