import ContactsView from 'Frontend/views/contacts/ContactsView.js';
import MainLayout from 'Frontend/views/MainLayout.js';
import { lazy } from 'react';
import { createBrowserRouter, RouteObject } from 'react-router-dom';

const AboutView = lazy(async () => import('Frontend/views/about/AboutView.js'));

export const routes = [
  {
    element: <MainLayout />,
    handle: { title: 'Hilla CRM' },
    children: [
      { path: '/', element: <ContactsView />, handle: { title: 'Contacts' } },
      { path: '/about', element: <AboutView />, handle: { title: 'About' } },
    ],
  },
] as RouteObject[];

export default createBrowserRouter(routes, {
  future: {
    // eslint-disable-next-line camelcase
    v7_fetcherPersist: true,
    // eslint-disable-next-line camelcase
    v7_normalizeFormMethod: true,
    // eslint-disable-next-line camelcase
    v7_partialHydration: true,
    // eslint-disable-next-line camelcase
    v7_relativeSplatPath: true,
    // eslint-disable-next-line camelcase
    v7_skipActionErrorRevalidation: true,
},});
