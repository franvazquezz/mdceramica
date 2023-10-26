import { Provider } from 'react-redux';
import store from '../redux/store';

function MyApp({ Home, pageProps }) {
  return (
    <Provider store={store}>
      <Home {...pageProps} />
    </Provider>
  );
}

export default MyApp;