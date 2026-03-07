import { render } from 'solid-js/web';
import { Router, Route } from '@solidjs/router';
import './index.css';
import SlidePage from './pages/SlidePage';

render(
  () => (
    <Router>
      <Route path="/slides/:id" component={SlidePage} />
      <Route path="*" component={() => <SlidePage />} />
    </Router>
  ),
  document.getElementById('root') as HTMLElement,
);
