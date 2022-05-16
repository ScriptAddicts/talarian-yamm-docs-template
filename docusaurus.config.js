module.exports = {
  "title": "Yet Another Mail Merge Documentation",
  "tagline": "The tagline of my site",
  "url": "https://your-docusaurus-test-site.com",
  "baseUrl": "/",
  "onBrokenLinks": "throw",
  "favicon": "img/favicon.ico",
  "organizationName": "your-org",
  "projectName": "docusaurus",
  "themeConfig": {
    "docs": {
		"sidebar": {
		  "hideable": true,
		},
	},
    "navbar": {
      "style": "primary",
      "logo": {
        "alt": "Yet Another Mail Merge Documentation",
        "src": "img/yamm-support-logo.svg"
      },
      "items": [
        {
          "type": 'search',
          "position": 'right',
        }
      ],
    },
    "footer": {
      "links": [
        { 
          "items": [
            {
              "html": `
                    <img src="/img/yamm-logo-text.svg" alt="YAMM" width="189" height="34" />
                    <ul class="footer-social-items">
                      <li>
                        <a href="https://twitter.com/yamm_mail_merge" target="_blank" rel="noreferrer noopener" aria-label="YAMM on Twitter">
                          <img src="/img/social-twitter-icon.svg" alt="YAMM on Twitter" width="25" height="25" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.youtube.com/channel/UCoC_M40gn7JsL4HBpFyZq3Q" target="_blank" rel="noreferrer noopener" aria-label="YAMM on YouTube">
                          <img src="/img/social-youtube-icon.svg" alt="YAMM on YouTube" width="25" height="25" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com/showcase/yet-another-mail-merge/" target="_blank" rel="noreferrer noopener" aria-label="YAMM on LinkedIn">
                          <img src="/img/social-linkedin-icon.svg" alt="YAMM on LinkedIn" width="25" height="25" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.facebook.com/yetanothermailmerge/" target="_blank" rel="noreferrer noopener" aria-label="YAMM on Facebook">
                          <img src="/img/social-facebook-icon.svg" alt="YAMM on Facebook" width="25" height="25" />
                        </a>
                      </li>
                    </ul>
                `,
            },
          ]
        },
        {
          "title": "Product",
          "items": [
            { 
              "label": "How it works",
              "to": "https://yamm.com/#HowItWorks"
            },
            {
              "label": "Features",
              "to": "https://yamm.com/#Features"
            },
            {
              "label": "Pricing",
              "to": "https://yamm.com/pricing"
            },
            {
              "label": "Install YAMM",
              "to": "https://app.yamm.com/signup"
            }
          ],
        },
        {
          "title": "Resources",
          "items": [
            { 
              "label": "Getting started",
              "to": "https://support.yet-another-mail-merge.com/hc/en-us/categories/201313669-Getting-Started"
            },
            {
              "label": "Help center",
              "to": "https://support.yet-another-mail-merge.com/hc/en-us"
            },
            {
              "label": "Contact support",
              "to": "https://support.yet-another-mail-merge.com/hc/en-us/requests/new"
            },
            {
              "label": "Release notes",
              "to": "https://support.yet-another-mail-merge.com/hc/en-us/sections/202873045"
            },
            {
              "label": "Blog",
              "to": "https://yamm.com/blog/"
            }
          ],
        },
        {
          "title": "Legal",
          "items": [
            { 
              "label": "Terms of service",
              "to": "https://yamm.com/terms-of-service"
            },
            {
              "label": "Privacy policy",
              "to": "https://yamm.com/privacy-policy"
            },
            {
              "label": "Cookie policy",
              "to": "https://yamm.com/cookie-policy"
            },
            {
              "label": "Google disclosure",
              "to": "https://yamm.com/google-disclosure"
            },
            {
              "label": "DPA",
              "to": "https://yamm.com/data-processing-agreement"
            },
            {
              "label": "Impressum",
              "to": "https://yamm.com/impressum"
            },
          ],
        },
        {
          "title": "Our other products",
          "items": [
            { 
              "label": "Awesome Table",
              "to": "https://workspace.google.com/marketplace/app/awesome_table/56088344336"
            },
            {
              "label": "Form Publisher",
              "to": "https://workspace.google.com/marketplace/app/form_publisher/827172627657"
            },
          ],
        },
      ],
      "copyright": "Copyright © 2022 Talarian Sàrl. All rights reserved.",
    }
  },
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "routeBasePath": "/",
          "sidebarPath": require.resolve('./sidebars.js'),
          "remarkPlugins": [
            require('./src/remark/convertYoutubeEmbeds.js'), 
            require('./src/remark/swapContextAndPrereq.js'),
            require('./src/remark/createAwesomeTableEmbeds.js')],
        },
        "theme": {
          "customCss": require.resolve('./src/css/custom.css')
        }
      }
    ]
  ],
  "plugins": []
};