// https://primereact.org/tieredmenu/
import React from "react";
import { TieredMenu } from "primereact/tieredmenu";
import { Badge } from "primereact/badge";

export default function TemplateDemo() {
  const itemRenderer = (item) => (
    <a className="flex align-items-center p-menuitem-link">
      <span className={item.icon} />
      <span className="mx-2">{item.label}</span>
      {item.badge && <Badge className="ml-auto" value={item.badge} />}
      {item.shortcut && (
        <span className="ml-auto border-1 surface-border border-round surface-100 text-xs p-1">
          {item.shortcut}
        </span>
      )}
    </a>
  );
  const items = [
    {
      label: "File",
      icon: "pi pi-file",
      items: [
        {
          label: "New",
          icon: "pi pi-plus",
          items: [
            {
              label: "Document",
              icon: "pi pi-file",
              shortcut: "⌘+N",
              template: itemRenderer,
            },
            {
              label: "Image",
              icon: "pi pi-image",
              shortcut: "⌘+I",
              template: itemRenderer,
            },
            {
              label: "Video",
              icon: "pi pi-video",
              shortcut: "⌘+L",
              template: itemRenderer,
            },
          ],
        },
        {
          label: "Open",
          icon: "pi pi-folder-open",
          shortcut: "⌘+O",
          template: itemRenderer,
        },
        {
          label: "Print",
          icon: "pi pi-print",
          shortcut: "⌘+P",
          template: itemRenderer,
        },
      ],
    },
    {
      label: "Edit",
      icon: "pi pi-file-edit",
      items: [
        {
          label: "Copy",
          icon: "pi pi-copy",
          shortcut: "⌘+C",
          template: itemRenderer,
        },
        {
          label: "Delete",
          icon: "pi pi-times",
          shortcut: "⌘+D",
          template: itemRenderer,
        },
      ],
    },
    {
      label: "Search",
      icon: "pi pi-search",
      shortcut: "⌘+S",
      template: itemRenderer,
    },
    {
      separator: true,
    },
    {
      label: "Share",
      icon: "pi pi-share-alt",
      items: [
        {
          label: "Slack",
          icon: "pi pi-slack",
          badge: 2,
          template: itemRenderer,
        },
        {
          label: "Whatsapp",
          icon: "pi pi-whatsapp",
          badge: 3,
          template: itemRenderer,
        },
      ],
    },
  ];

  return <TieredMenu model={items} breakpoint="767px" />;
}
