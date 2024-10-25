import { ApolloProvider } from '@apollo/client';
import { createUseStyles } from 'react-jss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Nav } from '../components';
import { LayoutProvider } from '../contexts';
import { Home, ListPage } from '../screens';
import { client } from './client';

function App() {
  const classes = useStyles();
  return (
    <ApolloProvider client={client}>
      <LayoutProvider>
        <div className={classes.root}>
          <BrowserRouter>
            <Nav />
            <div className={classes.content}>
              <div className={classes.scrollableArea}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route
                    path="/pokemon"
                    element={<ListPage showModal={false} />}
                  />
                  <Route
                    path="/pokemon/:id/:name"
                    element={<ListPage showModal />}
                  />
                </Routes>
              </div>
            </div>
          </BrowserRouter>
        </div>
      </LayoutProvider>
    </ApolloProvider>
  );
}

const useStyles = createUseStyles(
  {
    root: {
      background: '#171E2b',
      minHeight: '100vh',
      minWidth: '100vw',
      height: '100%',
      width: '100%',
      display: 'flex',
    },
    content: {
      flex: '1',
      overflow: 'hidden',
      position: 'relative',
    },
    scrollableArea: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      overflow: 'auto',
    },
  },
  { name: 'App' }
);

export default App;
