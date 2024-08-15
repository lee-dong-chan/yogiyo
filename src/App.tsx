import Layout from "./Component/layout/layout";
import { list, storelist, storenotice } from "./Data/Data";

function App(): JSX.Element {
  return <Layout list={list} storelist={storelist} storenotice={storenotice} />;
}

export default App;
