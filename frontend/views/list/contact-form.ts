import { View } from 'Frontend/views/view';
import { html } from 'lit';
import { customElement } from 'lit/decorators';
import '@vaadin/vaadin-text-field';
import '@vaadin/vaadin-combo-box';
import '@vaadin/vaadin-button';
import { listViewStore } from './list-view-store';
import { Binder, field } from '@vaadin/form';
import ContactModel from 'Frontend/generated/com/example/application/data/entity/ContactModel';
import { crmStore, uiStore } from 'Frontend/stores/app-store';

@customElement('contact-form')
export class ContactForm extends View {
  protected binder = new Binder(this, ContactModel);
  constructor() {
    super();
    this.autorun(() =>
      this.binder.read(
        listViewStore.selectedContact || ContactModel.createEmptyValue()
      )
    );
  }
  render() {
    const { model } = this.binder;
    return html`
      <vaadin-text-field
        label="First name"
        ?disabled=${uiStore.offline}
        ${field(model.firstName)}></vaadin-text-field>
      <vaadin-text-field
        label="Last name"
        ?disabled=${uiStore.offline}
        ${field(model.lastName)}></vaadin-text-field>
      <vaadin-text-field
        label="Email"
        ?disabled=${uiStore.offline}
        ${field(model.email)}></vaadin-text-field>
      <vaadin-combo-box
        label="Status"
        .items=${crmStore.statuses}
        ?disabled=${uiStore.offline}
        item-label-path="name"
        ${field(model.status)}></vaadin-combo-box>
      <vaadin-combo-box
        label="Company"
        item-label-path="name"
        .items=${crmStore.companies}
        ?disabled=${uiStore.offline}
        ${field(model.company)}></vaadin-combo-box>
      <div class="buttons spacing-e-s">
        <vaadin-button
          theme="primary"
          @click=${this.save}
          ?disabled=${this.binder.invalid || uiStore.offline}>
          ${this.binder.value.id ? 'Save' : 'Create'}
        </vaadin-button>
        <vaadin-button
          theme="error"
          @click=${listViewStore.delete}
          ?disabled=${!this.binder.value.id || uiStore.offline}>
          Delete
        </vaadin-button>
        <vaadin-button theme="tertiary" @click=${listViewStore.cancelEdit}>
          Cancel
        </vaadin-button>
      </div>
    `;
  }

  async save() {
    await this.binder.submitTo(listViewStore.save);
    this.binder.clear();
  }
}
