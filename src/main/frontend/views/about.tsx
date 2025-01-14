import type { ViewConfig } from '@vaadin/hilla-file-router/types.js';

export const config: ViewConfig = {
  menu: {
    title: 'About',
  },
};

export default function About() {
  return (
    <div className="p-m">
      <h2>Hilla full-stack tutorial app</h2>
      <p>
        You can find the steps for building this app in the <a href="https://vaadin.com/docs/latest/hilla/tutorial">Hilla documentation</a>.
      </p>
    </div>
  );
}
