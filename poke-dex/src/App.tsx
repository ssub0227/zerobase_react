import { BrowserRouter } from 'react-router-dom';
import PageNavigator from './PageNavigator'
import PageHeader from './Common/PageHeader'

function App() {
  return (
    <BrowserRouter>
      <PageHeader />
      <PageNavigator/ >
    </BrowserRouter>
  );
}

export default App;
