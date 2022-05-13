module.exports = {
  generalSidebar: [
    {
      type: 'category',
      label: '🔀 Git',
      items: [
        "git/basic", "git/gpg", "git/lfs", "git/reset", "git/hooks",
        {
          type: 'category',
          label: '🐙 Github',
          items: ["github/pages", "github/actions", "github/references"],
        },
      ],
    },
    {
      type: 'category',
      label: '🏎 Operating System',
      items: [
        {
          type: 'category',
          label: '🐧 Linux',
          items: [
            "linux/system-info",
            "linux/networking",
            "linux/user-permission-management",
            "linux/disk-management",
            {
              type: 'category',
              label: 'Tools/CLI',
              items: ["linux/certbot", "linux/curl", "linux/rsync", "dns/dig", "ssh/basic"],
            }
          ],
        },
      ],
    },
    {
      type: 'category',
      label: '🌐 Web Development',
      items: [
        {
          type: 'category',
          label: '🐘 PHP',
          items: ["php/troubleshooting"],
        },
        {
          type: 'category',
          label: '⚛️ React',
          items: ["react/basic"],
        },
        {
          type: 'category',
          label: '⚙️ WordPress',
          items: ["wordpress/clear-database"],
        }
      ]
    },
    {
      type: 'category',
      label: '🐛 Customization/Fixes',
      items: [
        "custom-fixes/mac-os",
        "custom-fixes/global-protect-vpn",
      ],
    },
    {
      type: 'category',
      label: '💰 Finances',
      items: [
        "finance/bc/bc-tax-info",
      ],
    },
    {
      type: 'category',
      label: '📋 Awesome Lists!',
      items: [
        "awesome/awesome-lists",
        "awesome/graphics-tools",
      ],
    },
    {
      type: 'category',
      label: '🖲 Virtulization',
      items: [
        {
          type: 'category',
          label: 'VMWare',
          items: [
            "virtulization/vmware/esxi-troubleshooting",
          ],
        },
        {
          type: 'category',
          label: 'BSD',
          items: [
            "virtulization/bsd/bsd-troubleshooting",
          ],
        },
      ],
    },
    {
      type: 'category',
      label: '🚛 Containerization',
      items: [
        {
          type: 'category',
          label: '🐳 Docker',
          items: [
            "containerization/docker-basics",
          ],
        },
        {
          type: 'category',
          label: '☸️ Kubernetes',
          items: [
            "containerization/kubectl",
          ],
        },
        {
          type: 'category',
          label: '⚓️ Helm',
          items: [
            "containerization/helm/helm",
            "containerization/helm/helm-commands",
          ],
        },
        {
          type: 'category',
          label: '🐮 Rancher',
          items: [
            "rancher/cli",
            "rancher/host-installation",
            "rancher/longhorn",
            "rancher/single-node-installation",
            "rancher/cleaning-node",
            "rancher/references",
          ],
        }
      ],
    },
    {
      type: 'category',
      label: '🧮 Database',
      items: [
        {
          type: 'category',
          label: '📚 PostgresSQL',
          items: [
            "database/postgres/postgres-migration",
          ],
        },
        {
          type: 'category',
          label: '💾 MySQL',
          items: [
            "database/mysql/mysql-backup",
          ],
        },
      ],
    }
  ],
};
