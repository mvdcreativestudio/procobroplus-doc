import type { ZudokuConfig } from "zudoku";

const config: ZudokuConfig = {
  site: {
    logo: {
      src: { light: "/logos/procobroplus-light.svg", dark: "/logos/procobroplus-dark.svg" },
      alt: "ProCobroPlus API",
      width: "140px",
    },
  },

  navigation: [
    {
      type: "category",
      label: "Documentación",
      items: [
        {
          type: "category",
          label: "ProCobroPlus",
          icon: "server",
          items: [
            "/tenants-register",
            {
              type: "link",
              icon: "folder-cog",
              badge: {
                label: "v1",
                color: "green",
              },
              label: "Referencia API",
              to: "/api",
            },
          ],
        },
      ],
    },
    {
      type: "link",
      to: "/api",
      label: "API Reference",
    },
  ],

  redirects: [{ from: "/", to: "/tenants-register" }],

  apis: [
    {
      type: "file",
      input: "./apis/openapi.yaml",
      path: "/api",
    },
  ],
};

export default config;
