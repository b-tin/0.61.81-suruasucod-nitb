"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[6556],{2415:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var s=t(4848),r=t(8453);const i={sidebar_position:4,toc_min_heading_level:2,toc_max_heading_level:3},a="Kubernetes",o={id:"ops/kubernetes",title:"Kubernetes",description:"Monitoring",source:"@site/docs/ops/kubernetes.mdx",sourceDirName:"ops",slug:"/ops/kubernetes",permalink:"/0.61.81-suruasucod-nitb/docs/ops/kubernetes",draft:!1,unlisted:!1,editUrl:"https://github.com/b-tin/0.61.81-suruasucod-nitb/tree/main/docs/ops/kubernetes.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,toc_min_heading_level:2,toc_max_heading_level:3},sidebar:"tutorialSidebar",previous:{title:"Troubleshooting for Daily Operations",permalink:"/0.61.81-suruasucod-nitb/docs/ops/troubleshoot"},next:{title:"Programming Languages",permalink:"/0.61.81-suruasucod-nitb/docs/category/programming-languages"}},l={},c=[{value:"Monitoring",id:"monitoring",level:2},{value:"1.0. Robusta-Dev",id:"10-robusta-dev",level:3},{value:"Overview",id:"overview",level:4},{value:"Installation",id:"installation",level:4},{value:"Integration With Existing Prometheus",id:"integration-with-existing-prometheus",level:4},{value:"Alert Example",id:"alert-example",level:4},{value:"Reference",id:"reference",level:4}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"kubernetes",children:"Kubernetes"}),"\n",(0,s.jsx)(n.h2,{id:"monitoring",children:"Monitoring"}),"\n",(0,s.jsx)(n.h3,{id:"10-robusta-dev",children:"1.0. Robusta-Dev"}),"\n",(0,s.jsx)(n.h4,{id:"overview",children:"Overview"}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["Robusta is an open-source observability tool for Kubernetes that extends Prometheus. With automation rules, Robusta automatically fetches the data needed to investigate issues and attaches it to your alerts. Learn more at Robusta Documentation ",(0,s.jsx)(n.a,{href:"https://docs.robusta.dev/",children:"https://docs.robusta.dev/"}),"."]})}),"\n",(0,s.jsx)(n.h4,{id:"installation",children:"Installation"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"Generate a Config"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Robusta requires settings to function, such as a Microsoft Team Token key if you use Microsoft Team. These settings are configured as Helm values."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:['For a quick start, use the Web Installation (recommended). Create the configuration via the free Robusta UI by clicking "Create Config."\n',(0,s.jsx)(n.img,{alt:"docsOpsKubernetes101",src:t(4954).A+"",width:"1320",height:"775"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Generate the generated_values.yaml file by registering for a free account at ",(0,s.jsx)(n.a,{href:"https://platform.robusta.dev/",children:"Robusta"})," and connect your existing EKS cluster with your chosen chat notification (Slack, Microsoft Teams, etc.).\n",(0,s.jsx)(n.img,{alt:"docsOpsKubernetes102",src:t(3937).A+"",width:"1320",height:"995"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"Helm Installation"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Add the Robusta Helm repository and update it:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"helm repo add robusta https://robusta-charts.storage.googleapis.com && helm repo update\nhelm search repo robusta/robusta\nhelm pull robusta/robusta --version 0.14.0\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Install Robusta with the generated values file and verify the connection:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"helm upgrade \\\n  --install \\\n  --create-namespace \\\n  --namespace monitoring \\\n  --timeout 30m monitoring-robusta robusta/robusta \\\n  //highlight-start\n  --file ./generated_values.yaml \\\n  //highlight-end\n  --set clusterName=b-tin-eks\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"docsOpsKubernetes103",src:t(1224).A+"",width:"1140",height:"556"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"integration-with-existing-prometheus",children:"Integration With Existing Prometheus"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Install Robusta alongside an existing Prometheus. Learn more at ",(0,s.jsx)(n.a,{href:"https://docs.robusta.dev/update-installation-docs/setup-robusta/installation/extend-prometheus-installation.html",children:"Extend Prometheus Installation."})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Modify the generated_values.yaml file and reinstall Robusta with Helm"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'globalConfig:\n  signing_key:\n  account_id:\n  // highlight-start\n  alertmanager_url: "http://monitoring-alert-manager.monitoring:9093"\n  prometheus_url: "http://monitoring-prometheus-server.monitoring"\n  // highlight-end\nsinksConfig:\n  - robusta_sink:\n      name: robusta_ui_sink\n      token:\n  - ms_teams_sink:\n      name: main_msteams_sink\n      webhook_url:\nenablePrometheusStack: false\nenablePlatformPlaybooks: true\n// highlight-start\nenabledManagedConfiguration: true\n// highlight-end\nrunner:\n  sendAdditionalTelemetry: true\n  additional_env_vars: []\n'})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Update your existing alertmanager configuration"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"apiVersion: v1\ndata:\n  alertmanager.yml: |\n    global: {}\n    receivers:\n    - name: default-receiver\n      webhook_configs:\n      - send_resolved: true\n        url: http://monitoring-prom2teams.monitoring:8089\n    // highlight-start\n    - name: 'robusta'\n      webhook_configs:\n        - url: 'http://monitoring-robusta-runner.monitoring/api/alerts'\n          send_resolved: true\n    // highlight-end\n    route:\n      group_interval: 5m\n      group_wait: 10s\n      receiver: default-receiver\n      repeat_interval: 24h\n      routes:\n      // highlight-start\n      - receiver: 'robusta'\n        group_by: [ '...' ]\n        group_wait: 1s\n        group_interval: 1s\n        matchers:\n          - severity =~ \".*\"\n        repeat_interval: 4h\n        continue: true\n      // highlight-end\n      - group_by:\n        - alertname\n        - priority\n        matchers:\n        - severity=\"High\"\n        receiver: default-receiver\n        repeat_interval: 1h\n      - matchers:\n        - severity=\"Warning\"\n        receiver: default-receiver\n        repeat_interval: 6h\n  allow-snippet-annotations: \"false\"\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"docsOpsKubernetes104",src:t(839).A+"",width:"634",height:"645"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"alert-example",children:"Alert Example"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Alerts from Robusta are sent to your configured chat notifications (e.g., Slack, Microsoft Teams) along with error logs. No need to access the ELK stack or Grafana Loki to check the error.\n",(0,s.jsx)(n.img,{alt:"docsOpsKubernetes105",src:t(7198).A+"",width:"628",height:"1207"})]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"reference",children:"Reference"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://docs.robusta.dev/master/configuration/alertmanager-integration/troubleshooting-alertmanager.html",children:"Integrating AlertManager with the UI"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://docs.robusta.dev/master/configuration/alertmanager-integration/alert-manager.html",children:"In-cluster Prometheus"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},4954:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/docsOpsKubernetes101-c798ab4cea259b10729fd80ab5744979.png"},3937:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/docsOpsKubernetes102-6532e5feb5fe2467157392dd1f4130fd.png"},1224:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/docsOpsKubernetes103-5c6a0d9d5654f1d23274980c1913bfb1.png"},839:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/docsOpsKubernetes104-0fa2b60318b2c61751c956ee297a1bd1.png"},7198:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/docsOpsKubernetes105-d0e0d031940becccf17dc8e79cc14620.png"},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>o});var s=t(6540);const r={},i=s.createContext(r);function a(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);