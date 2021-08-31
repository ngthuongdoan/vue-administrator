import '@toast-ui/editor/dist/toastui-editor.css';
import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';

import 'prismjs/themes/prism.css';
import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';

// Step 1. Import Prism.js
import Prism from 'prismjs';

// Step 2. Import language files of Prism.js that you need
import 'prismjs/components/prism-clojure.js';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';

import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';

export default {
  // ...
  plugins: [colorSyntax, [codeSyntaxHighlight, { highlighter: Prism }]],
};
