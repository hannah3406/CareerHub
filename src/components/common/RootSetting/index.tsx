import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import AntdSetting from "./AntdSetting";
import ChakraSetting from "./ChakraSetting";
import ReactQuerySetting from "./ReactQueryProvider";

interface IRootSettingProps {
  children: JSX.Element;
}

function RootSetting(props: IRootSettingProps) {
  return (
    <ReactQuerySetting>
      <AntdSetting>
        <ChakraSetting>
          <RecoilRoot>
            <BrowserRouter>{props.children}</BrowserRouter>
          </RecoilRoot>
        </ChakraSetting>
      </AntdSetting>
    </ReactQuerySetting>
  );
}
export default RootSetting;
