import DOMPurify from "isomorphic-dompurify";

export default function cleanHTML(html = "") {
  return DOMPurify.sanitize(html);
}
