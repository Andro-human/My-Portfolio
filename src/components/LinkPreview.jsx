/* eslint-disable react/prop-types */
"use client";
import { LinkPreview } from "./ui/link-preview";

export function LinkPreviewDemo({ word, url, children }) {
  return (
    <LinkPreview url={url} className="font-bold">
      {children || word}
    </LinkPreview>
  );
}
