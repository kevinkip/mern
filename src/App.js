import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
{/*         we'll put everything inside of this and Layout will be the parent */}
      </Route>
    </Routes>
  );
}

export default App;
