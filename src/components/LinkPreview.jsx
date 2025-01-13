/* eslint-disable react/prop-types */
"use client";;
import { LinkPreview } from "./ui/link-preview";

export function LinkPreviewDemo({word, url}) {
  return (
    
        <LinkPreview url={url} className="font-bold">
          {word}
        </LinkPreview>
  );
}
