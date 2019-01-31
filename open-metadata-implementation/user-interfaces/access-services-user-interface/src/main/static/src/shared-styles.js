/* SPDX-License-Identifier: Apache-2.0 */
/* Copyright Contributors to the ODPi Egeria project. */

import '@polymer/polymer/polymer-element.js';

const $_documentContainer = document.createElement('template');
$_documentContainer.innerHTML = `<dom-module id="shared-styles">
  <template>
    <style>
      .card {
        margin: 24px;
        padding: 16px;
        color: #757575;
        border-radius: 5px;
        background-color: #fff;
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
        max-width: 600px;
        min-width: 600px;
      }

      .circle {
        display: inline-block;
        width: 64px;
        height: 64px;
        text-align: center;
        color: #555;
        border-radius: 50%;
        background: #ddd;
        font-size: 30px;
        line-height: 64px;
      }

      h1 {
        margin: 16px 0;
        color: #24272a;
        font-size: 22px;
      }
      
      paper-button:not([disabled]) {
        background: #71ccdc;
        color: white;
      }
      
      paper-spinner-lite {
          --paper-spinner-color: #71ccdc;;
          --paper-spinner-stroke-width: 5px;
           width: 200px;
           height: 200px;              
      }

    </style>
  </template>
</dom-module>`;

document.head.appendChild($_documentContainer.content);