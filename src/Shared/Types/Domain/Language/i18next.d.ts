import 'i18next';

import {resources} from '@Language/i18n';

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNamespace: 'translation';
    resources: (typeof resources)['en'];
  }
}
