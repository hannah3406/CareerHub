import { ConfigProvider } from "antd";

interface IAntdProviderProps {
  children: JSX.Element;
}

function AntdSetting(props: IAntdProviderProps) {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#D89999",
        },
      }}
    >
      {props.children}
    </ConfigProvider>
  );
}
export default AntdSetting;
