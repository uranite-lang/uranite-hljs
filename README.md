
<!--
@author hxAri (hxari)
@create 2025-02-24 15:15
@update 2026-06-17 23:58
@github https://github.com/uranite-lang/uranite

Uranite - Uranite Copyright (c) 2025 - hxAri <hxari@proton.me>
Uranite Licence under GNU General Public Licence v3

Highlight.js syntax highlighting extension for the Uranite programming language.

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
any later version.

You should have received a copy of the GNU General Public License
along with this program. If not, see <https://www.gnu.org/licenses/>.
-->

# Uranite highlight.js Extension

This directory contains the language definition for `highlight.js` to support Uranite syntax highlighting.

## Usage

To use this extension, register it with `highlight.js`:

```javascript
import hljs from 'highlight.js';
import uranite from './uranite.js';

hljs.registerLanguage('uranite', uranite);
hljs.highlightAll();
```

Or via script tags:

```html
<script src="path/to/highlight.min.js"></script>
<script src="path/to/uranite.js"></script>
<script>hljs.highlightAll();</script>
```
