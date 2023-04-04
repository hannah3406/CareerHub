import { ConfigProvider } from "antd";

interface IAntdProviderProps {
  children: JSX.Element;
}

function AntdSetting(props: IAntdProviderProps) {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#33d78d",
        },
      }}
    >
      {props.children}
    </ConfigProvider>
  );
}
export default AntdSetting;
