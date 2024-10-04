import PageContainer from "@layouts/PageContainer";
import Flexbox from "@components/surfaces/Flexbox";

const MainPage = () => {
  return (
    <PageContainer>
      <Flexbox $justify="space-around">
        <div>111</div>
        <div>222</div>
      </Flexbox>
    </PageContainer>
  );
}

export default MainPage;
