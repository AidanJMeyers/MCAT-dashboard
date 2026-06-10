import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import remarkDirective from 'remark-directive';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';
import { Callout, AnchorImage } from './Visual.jsx';

/*
 * Markdown renderer for authored study-note content.
 * Supports: **bold**, nested lists, GFM tables, $inline$ / $$block$$ KaTeX,
 * #### / ##### sub-headings, and callout container directives:
 *
 *   :::keyconcept
 *   Body markdown...
 *   :::
 *
 * Directive names → callout styling (override the heading with {title="…"}):
 *   keyconcept · mnemonic · bridge · realworld · expertise · tip · warn · danger · note
 */

const DIRECTIVES = {
  keyconcept: { kind: 'concept', title: '⭐ Key Concept' },
  mnemonic:   { kind: 'mnemonic', title: '🧠 Mnemonic' },
  bridge:     { kind: 'bridge', title: '🌉 Bridge' },
  realworld:  { kind: 'realworld', title: '🌍 Real World' },
  expertise:  { kind: 'expertise', title: '🎯 MCAT Expertise' },
  tip:        { kind: 'tip', title: '💡 Tip' },
  warn:       { kind: 'warn', title: '⚠️ Watch Out' },
  danger:     { kind: 'danger', title: '🚫 Common Trap' },
  note:       { kind: 'info', title: '' }
};

// remark plugin: turn container/leaf directives into a <callout> hast node.
function remarkCallouts() {
  return (tree) => {
    const walk = (node) => {
      if (!node || !node.children) return;
      for (const child of node.children) {
        if (
          (child.type === 'containerDirective' ||
            child.type === 'leafDirective' ||
            child.type === 'textDirective') &&
          DIRECTIVES[child.name]
        ) {
          const def = DIRECTIVES[child.name];
          const attrs = child.attributes || {};
          const data = child.data || (child.data = {});
          data.hName = 'callout';
          data.hProperties = {
            dkind: def.kind,
            dtitle: attrs.title != null ? attrs.title : def.title
          };
        }
        walk(child);
      }
    };
    walk(tree);
  };
}

const components = {
  callout({ node, children, dkind, dtitle }) {
    const props = node?.properties || {};
    const kind = dkind || props.dkind || 'info';
    const title = dtitle != null ? dtitle : props.dtitle;
    return <Callout kind={kind} title={title || undefined}>{children}</Callout>;
  },
  p: ({ node, children }) => {
    // Unwrap paragraphs that contain only an image so <figure> isn't nested in <p>.
    const kids = node?.children || [];
    const onlyImg = kids.length === 1 && kids[0].type === 'element' && kids[0].tagName === 'img';
    if (onlyImg) return <>{children}</>;
    return <p className="text-[15px] leading-relaxed text-slate-800 my-2">{children}</p>;
  },
  strong: ({ children }) => <strong className="font-semibold text-slate-900">{children}</strong>,
  em: ({ children }) => <em className="italic text-slate-800">{children}</em>,
  a: ({ href, children }) => (
    <a href={href} target="_blank" rel="noreferrer" className="text-sky-700 underline hover:text-sky-900">{children}</a>
  ),
  ul: ({ children }) => (
    <ul className="list-disc pl-5 my-2 space-y-1 text-[15px] text-slate-800 marker:text-slate-400">{children}</ul>
  ),
  ol: ({ children }) => (
    <ol className="list-decimal pl-5 my-2 space-y-1 text-[15px] text-slate-800 marker:text-slate-400">{children}</ol>
  ),
  li: ({ children }) => <li className="leading-relaxed [&>ul]:mt-1 [&>ol]:mt-1">{children}</li>,
  h2: ({ children }) => <h3 className="text-lg font-bold text-slate-900 mt-5 mb-2">{children}</h3>,
  h3: ({ children }) => <h4 className="text-base font-bold text-slate-900 mt-4 mb-1.5">{children}</h4>,
  h4: ({ children }) => (
    <h4 className="text-[15px] font-bold text-slate-900 mt-4 mb-1 pl-2 border-l-4 border-slate-300">{children}</h4>
  ),
  h5: ({ children }) => (
    <h5 className="text-xs font-bold uppercase tracking-wide text-slate-500 mt-3 mb-1">{children}</h5>
  ),
  blockquote: ({ children }) => (
    <blockquote className="border-l-4 border-slate-300 bg-slate-50 rounded-r pl-3 py-1 my-2 text-slate-700 italic">{children}</blockquote>
  ),
  code: ({ inline, children }) =>
    inline
      ? <code className="px-1 py-0.5 rounded bg-slate-100 text-slate-800 font-mono text-[13px]">{children}</code>
      : <pre className="bg-slate-900 text-slate-100 rounded-lg p-3 my-3 overflow-x-auto text-[13px]"><code>{children}</code></pre>,
  hr: () => <hr className="my-4 border-slate-200" />,
  img: ({ src, alt, title }) => <AnchorImage src={src} alt={alt} caption={title} />,
  table: ({ children }) => (
    <div className="overflow-x-auto my-3">
      <table className="min-w-full text-sm border border-slate-200 rounded">{children}</table>
    </div>
  ),
  thead: ({ children }) => <thead className="bg-slate-100">{children}</thead>,
  tbody: ({ children }) => <tbody>{children}</tbody>,
  tr: ({ children }) => <tr className="even:bg-slate-50 align-top">{children}</tr>,
  th: ({ children }) => <th className="px-3 py-2 text-left font-semibold text-slate-700 border-b border-slate-200">{children}</th>,
  td: ({ children }) => <td className="px-3 py-2 border-b border-slate-100 align-top text-slate-800">{children}</td>
};

export default function Markdown({ children, className = '' }) {
  if (!children) return null;
  return (
    <div className={className}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkMath, remarkDirective, remarkCallouts]}
        rehypePlugins={[rehypeKatex]}
        components={components}
      >
        {children}
      </ReactMarkdown>
    </div>
  );
}
