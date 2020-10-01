import '../../node_modules/@polymer/polymer/polymer-legacy.js';
import '../../node_modules/@polymer/paper-dialog/paper-dialog.js';
import '../../node_modules/@polymer/paper-input/paper-input.js';
import '../../node_modules/@polymer/paper-input/paper-input-error.js';
import '../../node_modules/@polymer/paper-input/paper-textarea.js';
import '../../node_modules/@polymer/iron-ajax/iron-ajax.js';
import '../../node_modules/@mistio/mist-list/mist-list-actions.js';
import { MistListActionsBehavior } from '../../node_modules/@mistio/mist-list/mist-list-actions-behavior.js';
import '../tags/tags-form.js';
import '../helpers/dialog-element.js';
import { CSRFToken } from '../helpers/utils.js';
import { Polymer } from '../../node_modules/@polymer/polymer/lib/legacy/polymer-fn.js';
import { html } from '../../node_modules/@polymer/polymer/lib/utils/html-tag.js';
const RECORD_ACTIONS = {
  /*'tag': {
    'name': 'tag',
    'icon': 'label',
    'confirm': true,
    'multi': true
  },*/
  'delete': {
    'name': 'delete',
    'icon': 'delete',
    'confirm': true,
    'multi': true
  }
}
Polymer({
  _template: html`
    <style include="shared-styles">
      :host {
        display: inline;
      }
      mist-list-actions {
        width: 100%;
      }
    </style>

    <tags-form id="tagsdialog" model="[[model]]" items="[[items]]" type="[[type]]"></tags-form>
    <dialog-element id="confirm"></dialog-element>
    <slot>
        <mist-list-actions actions="[[actions]]"></mist-list-actions>
    </slot>
    <iron-ajax id="request" handle-as="json" loading="{{loadingData}}" on-response="handleResponse" on-error="handleError"></iron-ajax>
`,

  is: 'record-actions',
  behaviors: [MistListActionsBehavior],

  properties: {
    items: {
      type: Array,
      value: function () {
        return [];
      }
    },
    actions: {
      type: Array,
      value: function () {
        return [];
      },
      notify: true
    },
    type: {
      type: String,
      value: 'record'
    }
  },

  listeners: {
    'select-action': 'selectAction',
    'confirmation': 'confirmAction'
  },

  attached: function () {
    this.$.request.headers["Content-Type"] = 'application/json';
    this.$.request.headers["Csrf-Token"] = CSRFToken.value;
    this.$.request.method = "POST";
  },

  computeItemActions: function (record) {
    // single record actions
    var arr = [];
    if (record) {
      // arr.push('tag');
      arr.push('delete');
    }
    return arr;
  },

  computeActionListDetails: function (actions) {
    var ret = [];
    for (var i = 0; i < actions.length; i++) {
      ret.push(RECORD_ACTIONS[actions[i]]);
    }
    return ret;
  },

  _delete: function () {
    //set up iron ajax
    this.$.request.headers["Content-Type"] = 'application/json';
    this.$.request.headers["Csrf-Token"] = CSRFToken.value;
    this.$.request.method = "DELETE";
    for (var i = 0; i < this.items.length; i++) {
      this.$.request.url = "/api/v1/clouds/" + this.cloud + "/zones/" + this.items[i].zone + "/records/" +
        this.items[i].id
      this.$.request.generateRequest();
      this.dispatchEvent(new CustomEvent('toast', {
        bubbles: true,
        composed: true,
        detail: {
          msg: 'Deleting ' + this.items[i].name,
          duration: 1000
        }
      }))
    }
  },

  _showDialog: function (info) {
    var dialog = this.shadowRoot.querySelector('dialog-element');
    for (var i in info) {
      dialog[i] = info[i];
    }
    dialog._openDialog();
  },

  confirmAction: function (e) {
    if (e.detail.confirmed)
      this.performAction(this.action, this.items);
  },

  selectAction: function (e) {
    if (this.items.length) {
      var action = e.detail.action;
      this.set('action', action);
      // console.log('perform action mist-action', this.items);
      if (action.confirm && action.name != 'tag') {
        var property = ['zone'].indexOf(this.type) == -1 ? "name" : "domain",
          plural = this.items.length == 1 ? '' : 's',
          count = this.items.length > 1 ? this.items.length + ' ' : '';
        //this.tense(this.action.name) + " " + this.type + "s can not be undone. 
        this._showDialog({
          title: this.action.name + ' ' + count + this.type + plural + '?',
          body: "You are about to " + this.action.name + " " + this.items.length + " " + this.type +
            plural + ".",
          list: this._makeList(this.items, property),
          action: action.name,
          danger: true,
          reason: this.type + "." + this.action.name
        });
      } else if (action.name == "tag") {
        this.$.tagsdialog._openDialog();
      } else {
        this.performAction(this.action, this.items);
      }
    }
  },

  performAction: function (action, items) {
    if (action.name == 'delete') {
      this._delete();
    }
  },

  handleResponse: function (e) {
    if (this.$.request && this.$.request.body && this.$.request.body.action)
      this.dispatchEvent(new CustomEvent('toast', {
        bubbles: true,
        composed: true,
        detail: {
          msg: 'Action: ' + this.$.request.body.action + ' successfull',
          duration: 3000
        }
      }))
  },

  handleError: function (e) {
    // console.log(e.detail.request.xhr.statusText);
    this.dispatchEvent(new CustomEvent('toast', {
      bubbles: true,
      composed: true,
      detail: {
        msg: 'Error: ' + e.detail.request.xhr.status + " " + e.detail.request.xhr.statusText,
        duration: 5000
      }
    }));
  },

  _makeList: function (items, property) {
    if (items && items.length)
      return items.map(function (item) {
        return item[property];
      });
  }
});
