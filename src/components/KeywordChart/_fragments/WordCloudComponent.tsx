import { Box } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { Button } from "antd";
import { DummyList, WordCloudData } from "container/Statistics/types";
import { useEffect, useState } from "react";
import WordCloud from "react-d3-cloud";
interface IWordCloudComponentProps {
  dummy: DummyList;
}
const WordCloudComponent = (props: IWordCloudComponentProps) => {
  const [wordcloud, setWordcloud] = useState<WordCloudData>([]);
  const { dummy } = props;
  //wordCloud import image
  const downloadChart = () => {
    const svg = document.querySelector(".wordCloud svg");
    const canvas = document.createElement("canvas");

    if (svg === null) return;
    canvas.width = svg.clientWidth;
    canvas.height = svg.clientHeight;
    const img = new Image();
    img.src = `data:image/svg+xml;utf8,${new XMLSerializer().serializeToString(
      svg
    )}`;

    img.onload = function () {
      canvas.getContext("2d")?.drawImage(img, 0, 0);
      const a = document.createElement("a");
      a.download = "wordCloud.png";
      a.href = canvas.toDataURL();
      a.click();
    };
  };
  useEffect(() => {
    const _wordcloud = dummy.map((el) => ({
      text: el.label,
      value: el.value * 500,
    }));
    setWordcloud(_wordcloud);
  }, [dummy]);

  return (
    <>
      <Box textAlign="right" p="15px 0">
        <div
          style={{
            width: 100,
            display: "inline-block",
            border: "1px solid #ddd",
          }}
        >
          <ButtonStyle onClick={downloadChart}> 다운로드</ButtonStyle>
        </div>
      </Box>
      <WordCloudWrapper className="wordCloud">
        <WordCloud
          data={wordcloud}
          width={800}
          font="Noto Sans KR"
          height={400}
          padding={15}
          fontSize={(word) => Math.log2(word.value) * 4}
        />
      </WordCloudWrapper>
    </>
  );
};

export default WordCloudComponent;

const WordCloudWrapper = styled.div`
  width: 85%;
  margin: 50px auto;
`;
const ButtonStyle = styled(Button)`
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  box-shadow: none;
  transition: 0.3s;
  &:hover {
    transition: 0.3s;
    background: #d89999;
    span {
      font-weight: bold;
      color: #fff;
    }
  }
  &:focus {
    background: #d89999;
    span {
      font-weight: bold;
      color: #fff;
    }
  }
`;
