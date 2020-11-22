import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './src/store';
import { ThemeProvider } from 'styled-components';
import theme from './src/utils/theme';
import GlobalStyle from './src/utils/globals';
import App from './src/containers/App';

import '../node_modules/react-modal-video/scss/modal-video.scss';
import '../node_modules/slick-carousel/slick/slick.css';
import '../node_modules/slick-carousel/slick/slick-theme.css';

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Fragment>
        <Helmet>
          <title>soribazis</title>
          <meta
            name="description"
            content="testelek"
          />
          <link rel="canonical" href="" />
        </Helmet>
        <App />
        <GlobalStyle />
      </Fragment>
    </ThemeProvider>
  </Provider>,
  document.querySelector('#root')
);

const port = process.env.PORT || 8080;
