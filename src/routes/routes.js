import AllNotes from '../components/AllNotes';
import App from '../components/App';

export const ROUTES = {
  HOME: {
    path: '/',
    Component: App,
    linkTo: () => '/'
  },
  ALL_NOTES: {
    path: '/notes',
    Component: AllNotes,
    linkTo: () => '/notes'
  }
};
