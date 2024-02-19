"use strict";(self.webpackChunkqbt_static_docs=self.webpackChunkqbt_static_docs||[]).push([[730],{6219:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var r=t(5893),i=t(1151);const s={title:"Installing nox",hide_title:!0},o=void 0,a={id:"install-qbittorrent",title:"Installing nox",description:"Once the script has successfully built qbittorrent-nox you can install the binary using this command:",source:"@site/docs/install-qbittorrent.md",sourceDirName:".",slug:"/install-qbittorrent",permalink:"/yme/docs/install-qbittorrent",draft:!1,unlisted:!1,editUrl:"https://github.com/userdocs/qbittorrent-nox-static/tree/master/docs/install-qbittorrent.md",tags:[],version:"current",frontMatter:{title:"Installing nox",hide_title:!0},sidebar:"qtb_sidebar",previous:{title:"Debugging",permalink:"/yme/docs/debugging"},next:{title:"Nginx proxy",permalink:"/yme/docs/nginx-proxypass"}},l={},c=[{value:"GitHub Releases",id:"github-releases",level:2},{value:"Configuring qbittorrent",id:"configuring-qbittorrent",level:2},{value:"Starting qbittorrent",id:"starting-qbittorrent",level:2},{value:"Web ui",id:"web-ui",level:2},{value:"Second instance",id:"second-instance",level:2}];function d(e){const n={admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components},{TabItem:t,Tabs:s}=n;return t||u("TabItem",!0),s||u("Tabs",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["Once the script has successfully built ",(0,r.jsx)(n.code,{children:"qbittorrent-nox"})," you can install the binary using this command:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"bash ~/qbittorrent-nox-static.sh install\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["If you built to a custom directory you will need to specify this to the install command using the ",(0,r.jsx)(n.code,{children:"-b"})," argument."]})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'bash ~/qbittorrent-nox-static.sh -b "/path/to/built/binary" install\n'})}),"\n",(0,r.jsx)(n.p,{children:"The default installation path is determined by type of user executing the script."}),"\n",(0,r.jsxs)(n.p,{children:["Built to - ",(0,r.jsx)(n.code,{children:"qbt-build"})]}),"\n",(0,r.jsxs)(n.p,{children:["Optionally installed to ",(0,r.jsx)(n.code,{children:"/usr/local/bin/qbittorrent-nox"})]}),"\n",(0,r.jsxs)(n.p,{children:["Built to - ",(0,r.jsx)(n.code,{children:"qbt-build"})]}),"\n",(0,r.jsxs)(n.p,{children:["Optionally installed to ",(0,r.jsx)(n.code,{children:"$HOME/bin/qbittorrent-nox"})]}),"\n",(0,r.jsx)(n.h2,{id:"github-releases",children:"GitHub Releases"}),"\n",(0,r.jsx)(n.p,{children:"Optionally you can just download the existing prebuilt binaries released using GitHub Actions."}),"\n",(0,r.jsxs)(s,{children:[(0,r.jsxs)(t,{value:"x86_64",label:"\ud83d\udd39 x86_64",default:!0,children:[(0,r.jsx)(n.p,{children:"Without ICU"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"mkdir -p ~/bin && source ~/.profile\r\nwget -qO ~/bin/qbittorrent-nox https://github.com/userdocs/qbittorrent-nox-static/releases/latest/download/x86_64-qbittorrent-nox\r\nchmod 700 ~/bin/qbittorrent-nox\n"})}),(0,r.jsx)(n.p,{children:"With ICU"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"mkdir -p ~/bin && source ~/.profile\r\nwget -qO ~/bin/qbittorrent-nox https://github.com/userdocs/qbittorrent-nox-static/releases/latest/download/x86_64-icu-qbittorrent-nox\r\nchmod 700 ~/bin/qbittorrent-nox\n"})})]}),(0,r.jsxs)(t,{value:"aarch64",label:"\ud83d\udd39 aarch64",children:[(0,r.jsx)(n.p,{children:"Without ICU"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"mkdir -p ~/bin && source ~/.profile\r\nwget -qO ~/bin/qbittorrent-nox https://github.com/userdocs/qbittorrent-nox-static/releases/latest/download/aarch64-qbittorrent-nox\r\nchmod 700 ~/bin/qbittorrent-nox\n"})}),(0,r.jsx)(n.p,{children:"With ICU"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"mkdir -p ~/bin && source ~/.profile\r\nwget -qO ~/bin/qbittorrent-nox https://github.com/userdocs/qbittorrent-nox-static/releases/latest/download/aarch64-icu-qbittorrent-nox\r\nchmod 700 ~/bin/qbittorrent-nox\n"})})]}),(0,r.jsxs)(t,{value:"armv7",label:"\ud83d\udd39 armv7",children:[(0,r.jsx)(n.p,{children:"Without ICU"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"mkdir -p ~/bin && source ~/.profile\r\nwget -qO ~/bin/qbittorrent-nox https://github.com/userdocs/qbittorrent-nox-static/releases/latest/download/armv7-qbittorrent-nox\r\nchmod 700 ~/bin/qbittorrent-nox\n"})}),(0,r.jsx)(n.p,{children:"With ICU"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"mkdir -p ~/bin && source ~/.profile\r\nwget -qO ~/bin/qbittorrent-nox https://github.com/userdocs/qbittorrent-nox-static/releases/latest/download/armv7-icu-qbittorrent-nox\r\nchmod 700 ~/bin/qbittorrent-nox\n"})})]}),(0,r.jsxs)(t,{value:"armhf",label:"\ud83d\udd39 armhf",children:[(0,r.jsx)(n.p,{children:"Without ICU"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"mkdir -p ~/bin && source ~/.profile\r\nwget -qO ~/bin/qbittorrent-nox https://github.com/userdocs/qbittorrent-nox-static/releases/latest/download/armhf-qbittorrent-nox\r\nchmod 700 ~/bin/qbittorrent-nox\n"})}),(0,r.jsx)(n.p,{children:"With ICU"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"mkdir -p ~/bin && source ~/.profile\r\nwget -qO ~/bin/qbittorrent-nox https://github.com/userdocs/qbittorrent-nox-static/releases/latest/download/armhf-icu-qbittorrent-nox\r\nchmod 700 ~/bin/qbittorrent-nox\n"})})]})]}),"\n",(0,r.jsx)(n.h2,{id:"configuring-qbittorrent",children:"Configuring qbittorrent"}),"\n",(0,r.jsx)(n.p,{children:"If you want to configure qBittorrent before you start it use this method:"}),"\n",(0,r.jsx)(n.p,{children:"Create the default configuration directory."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"mkdir -p ~/.config/qBittorrent\n"})}),"\n",(0,r.jsx)(n.p,{children:"Create the configuration file."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"touch ~/.config/qBittorrent/qBittorrent.conf\n"})}),"\n",(0,r.jsx)(n.p,{children:"Edit the file"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"nano ~/.config/qBittorrent/qBittorrent.conf\n"})}),"\n",(0,r.jsx)(n.p,{children:"Add this. Make sure to change your web ui port."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ini",children:"[LegalNotice]\r\nAccepted=true\r\n\r\n[Preferences]\r\nWebUI\\Port=PORT\n"})}),"\n",(0,r.jsx)(n.p,{children:"Default login:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"username: admin\r\npassword: adminadmin\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Some key start-up arguments to help you along. Using the command above with no arguments will loads the defaults or the settings defined in the ",(0,r.jsx)(n.code,{children:"~/.config/qBittorrent/qBittorrent.conf"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-none",children:"Usage:\r\n    ./qbittorrent-nox [options] [(<filename> | <url>)...]\r\nOptions:\r\n    -v | --version             Display program version and exit\r\n    -h | --help                Display this help message and exit\r\n    --webui-port=<port>        Change the Web UI port\r\n    -d | --daemon              Run in daemon-mode (background)\r\n    --profile=<dir>            Store configuration files in <dir>\r\n    --configuration=<name>     Store configuration files in directories\r\n                               qBittorrent_<name>\r\n    --relative-fastresume      Hack into libtorrent fastresume files and make\r\n                               file paths relative to the profile directory\r\n    files or URLs              Download the torrents passed by the user\r\n\r\nOptions when adding new torrents:\r\n    --save-path=<path>         Torrent save path\r\n    --add-paused=<true|false>  Add torrents as started or paused\r\n    --skip-hash-check          Skip hash check\r\n    --category=<name>          Assign torrents to category. If the category\r\n                               doesn't exist, it will be created.\r\n    --sequential               Download files in sequential order\r\n    --first-and-last           Download first and last pieces first\r\n    --skip-dialog=<true|false> Specify whether the \"Add New Torrent\" dialog\r\n                               opens when adding a torrent.\r\n\r\nOption values may be supplied via environment variables. For option named\r\n'parameter-name', environment variable name is 'QBT_PARAMETER_NAME' (in upper\r\ncase, '-' replaced with '_'). To pass flag values, set the variable to '1' or\r\n'TRUE'. For example, to disable the splash screen:\r\nQBT_NO_SPLASH=1 ./qbittorrent-nox\r\nCommand line parameters take precedence over environment variables\n"})}),"\n",(0,r.jsx)(n.h2,{id:"starting-qbittorrent",children:"Starting qbittorrent"}),"\n",(0,r.jsx)(n.p,{children:"Now you just run it and enjoy!"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"~/bin/qbittorrent-nox\n"})}),"\n",(0,r.jsx)(n.h2,{id:"web-ui",children:"Web ui"}),"\n",(0,r.jsx)(n.p,{children:"To get your external IP with the default qbittorrent command use this command:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"echo $(wget -qO - icanhazip.com):8080\n"})}),"\n",(0,r.jsx)(n.h2,{id:"second-instance",children:"Second instance"}),"\n",(0,r.jsxs)(n.p,{children:["When you simply call the binary using ",(0,r.jsx)(n.code,{children:"~/qbittorrent-nox "})," it will look for it's configuration in ",(0,r.jsx)(n.code,{children:"~/.config/qbittorrent"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"If you would like to run a second instance using another configuration you can do so like this"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"~/bin/qbittorrent-nox --configuration=NAME\n"})}),"\n",(0,r.jsx)(n.p,{children:"This will create a new configuration directory using this suffix."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"~/.config/qbittorrent_NAME\n"})}),"\n",(0,r.jsx)(n.p,{children:"You will also need a custom nginx proxypass and systemd service."}),"\n",(0,r.jsx)(n.p,{children:"And you can now configure this instance separately."})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}function u(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},1151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>o});var r=t(7294);const i={},s=r.createContext(i);function o(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);