// src/App.jsx
import AppRouter from './Components/Routes/AppRouter';
// import NetworkAwareLoading from './Components/Common/Layout/NetworkAwareLoading';
import NetworkAwareLoading from './Components/Layout/NetworkAwareLoading';
const App = () => {
  return (
    <NetworkAwareLoading>
      <AppRouter />
    </NetworkAwareLoading>
  );
};

export default App;