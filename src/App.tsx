import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import Flexbox from "@components/surfaces/Flexbox";
import PageContainer from "@layouts/PageContainer";

function App() {
  return (
    <PageContainer>
      <Flexbox $justify="space-around">
        <div>111</div>
        <div>222</div>
      </Flexbox>
    </PageContainer>
  )
}

export default App;
