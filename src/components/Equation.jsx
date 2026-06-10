import React from 'react';
import katex from 'katex';
import 'katex/dist/katex.min.css';

export function Eq({ tex, block = false }) {
  let html = tex;
  try { html = katex.renderToString(tex, { throwOnError: false, displayMode: block }); } catch (e) {}
  return (
    <span
      className={block ? 'block my-2 text-center overflow-x-auto' : ''}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
export default Eq;
