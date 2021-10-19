import { View } from '../view';
import '@vaadin/vaadin-charts';
import '@vaadin/vaadin-charts/src/vaadin-chart-series';
import { dashboardViewStore } from './dashboard-view-store';
import { uiStore } from 'Frontend/stores/app-store';
import { customElement } from 'lit/decorators';
import { html } from 'lit';

@customElement('dashboard-view')
export class DashboardView extends View {
  connectedCallback() {
    super.connectedCallback();
    this.classList.add('flex', 'flex-col', 'items-center', 'pt-xl');
  }

  render() {
    return html`
      <div class="text-xl mb-xl">
        ${dashboardViewStore.contactCount} contacts
      </div>

      ${this.getCompanyStats()}
    `;
  }

  getCompanyStats() {
    if (dashboardViewStore.companyStats.length === 0) {
      if (uiStore.offline) {
        return html`<p>Connect to the internet to view stats</p>`;
      } else {
        return html`<p>Loading stats...</p>`;
      }
    } else {
      return html`
        <vaadin-chart type="pie">
          <vaadin-chart-series
            .values=${dashboardViewStore.companyStats}></vaadin-chart-series>
        </vaadin-chart>
      `;
    }
  }
}
