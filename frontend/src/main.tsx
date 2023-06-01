import { ConfigProvider } from 'antd';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

import store from './redux/store';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ConfigProvider direction="ltr">
          <App />
        </ConfigProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
);
