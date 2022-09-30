import { renderToString } from "preact-render-to-string";

//////////
// The current work around for the issue is to uncomment the below import and re-vendor
// so that jsx-runtime is vendored
// import { h } from "preact/jsx-runtime";
//////////

// deno-lint-ignore ban-ts-comment
// @ts-ignore
const vdom = <div class="foo">content</div>;

const html = renderToString(vdom);
console.log(html);
