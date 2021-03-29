(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{600:function(s,t,a){"use strict";a.r(t);var n=a(4),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"title"}),a("ul",[a("li",[s._v("vuepress 简洁易用")]),s._v(" "),a("li",[s._v("Github Pages配合github好管理")]),s._v(" "),a("li",[s._v("travis-ci足够自动化")])])]),a("h1",{attrs:{id:"创建github工程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建github工程"}},[s._v("#")]),s._v(" 创建github工程")]),s._v(" "),a("h3",{attrs:{id:"创建一个-username-github-io-的仓库-username是你github的名称"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建一个-username-github-io-的仓库-username是你github的名称"}},[s._v("#")]),s._v(" 创建一个 username.github.io  的仓库，username是你github的名称")]),s._v(" "),a("p",[s._v("https://username.github.io/blog访问到的只能是master分支的内容，这会带出一个很棘手的问题：“为何我什么都配置了，最后只能显示master代码分支的README.md文件，不是预期的gh-pages分支里的静态文件?”。")]),s._v(" "),a("p",[s._v("解决的办法也有，那就是顺着它的思路，使用mater分支当做build后静态资源存放的分支，代码分支放到别处去。参考"),a("a",{attrs:{href:"https://juejin.im/post/5d0715f6f265da1ba56b1e01",target:"_blank",rel:"noopener noreferrer"}},[s._v("拯救懒癌文档君 - VuePress + Travis CI + Github Pages 自动线上生成文档"),a("OutboundLink")],1)]),s._v(" "),a("h1",{attrs:{id:"根据vuepress-theme-reco创建出vuepress工程-qiuzhongrun老哥的教程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#根据vuepress-theme-reco创建出vuepress工程-qiuzhongrun老哥的教程"}},[s._v("#")]),s._v(" 根据vuepress-theme-reco创建出vuepress工程（qiuzhongrun老哥的教程）")]),s._v(" "),a("ol",[a("li",[s._v("下载空github工程")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 注意你clone你自己的路径哈，下面这个是我的举例")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/qiuzhongrun/blog.git\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 进入工程")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" blog\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("ol",{attrs:{start:"2"}},[a("li",[s._v("初始化vuepress工程\n在主题的"),a("a",{attrs:{href:"https://github.com/vuepress-reco/vuepress-theme-reco",target:"_blank",rel:"noopener noreferrer"}},[s._v("Github地址"),a("OutboundLink")],1),s._v("有很清晰的初始化方式，下面贴出我的。")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 添加theme-cli工具")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" global "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" @vuepress-reco/theme-cli\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 请注意这里的 . 意思是当前blog目录下")]),s._v("\ntheme-cli init "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# install ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# run")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" dev\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# build")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" build\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("p",[s._v("在theme-cli工具init一个工程的时候，会让你选style，我选了afternoon-grocery，会带来很多已存在的文章，但是也给了很多我参考，后续删除即可。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("? What"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'s the title of your project? blog\n? What'")]),s._v("s the description of your project? 个人博客\n? What"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'s the author'")]),s._v("s name? Qiu Zhongrun\n? What style "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v(" you want your home page to be?"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Select afternoon-grocery, "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" you want to download alexwjj"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'s '")]),s._v("午后南杂'"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  blog\n  doc\n❯ afternoon-grocery\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("ol",{attrs:{start:"3"}},[a("li",[s._v("修正偏差\n①添加base\n②修改title\n③修正dest目标路径为docs/.vuepress/dist")])]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[s._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  base"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/blog/'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" # ①添加base"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" 为了后面访问的时候有上下文，没有这玩意儿，你访问就会出问题\n  title"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"欢迎你，这是我的博客！"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" # ②修改title，自己看着办哈\n  description"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Enjoy when you can, and endure when you must.'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  dest"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'docs/.vuepress/dist'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" # ③修正dest目标路径为docs"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("vuepress"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("dist，这个必须和稍后的自动部署的local_dir保持一致\n  head"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'link'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" rel"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'icon'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" href"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/favicon.ico'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'meta'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'viewport'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" content"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'width=device-width,initial-scale=1,user-scalable=no'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  theme"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'reco'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  themeConfig"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  markdown"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    lineNumbers"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  plugins"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'@vuepress/medium-zoom'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'flowchart'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])]),a("h1",{attrs:{id:"travis-ci部署"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#travis-ci部署"}},[s._v("#")]),s._v(" travis-ci部署")]),s._v(" "),a("p",[s._v("参考这里的"),a("a",{attrs:{href:"https://vuepress-theme-reco.alexwjj.com/views/other/deploy.html#%E8%87%AA%E5%8A%A8%E9%83%A8%E7%BD%B2",target:"_blank",rel:"noopener noreferrer"}},[s._v("自动部署"),a("OutboundLink")],1),s._v("，这里不展开讲，只讲一些注意点。")]),s._v(" "),a("ol",[a("li",[s._v("build命令里面写的是"),a("code",[s._v("npm run build")]),s._v("，如果你看着不顺眼，可以修改为"),a("code",[s._v("yarn build")]),s._v("意思是一个意思。")]),s._v(" "),a("li",[s._v("设置token的时候，除了delete repo的权限不给，其他都给上吧。")]),s._v(" "),a("li",[s._v("授权travis-ci Manage repositories on GitHub的时候，不要全选，就选你要的就行")]),s._v(" "),a("li",[s._v("要在https://github.com/qiuzhongrun/blog/settings，也就是你的github repository的Settings里修改Github Pages的Source为gh-pages，这个分支你可以自己建，也可以等第一次跑完travis-ci它自动创建好后再选。")])]),s._v(" "),a("p",[s._v("到此，只要push一次代码，就会触发travis-ci自动build，推送到指定分支(gh-pages)，然后你在https://qiuzhongrun.github.io/blog就可以访问到了。")]),s._v(" "),a("h1",{attrs:{id:"后记"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#后记"}},[s._v("#")]),s._v(" 后记")]),s._v(" "),a("p",[s._v("后续使用的时候，发现一些问题，这里也记录下来以供参考。")]),s._v(" "),a("h3",{attrs:{id:"热部署hot-reload"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#热部署hot-reload"}},[s._v("#")]),s._v(" 热部署Hot Reload")]),s._v(" "),a("p",[s._v("没错，vuepress 1.x这个功能是有问题的，在这个"),a("a",{attrs:{href:"https://github.com/vuejs/vuepress/issues/1283",target:"_blank",rel:"noopener noreferrer"}},[s._v("#issue"),a("OutboundLink")],1),s._v("里有讲，至今未见关闭。\n解决办法也有多人提出多种方案，我采用"),a("a",{attrs:{href:"https://github.com/pepsifan",target:"_blank",rel:"noopener noreferrer"}},[s._v("pepsifan"),a("OutboundLink")],1),s._v("提出的nodemon解决方案，亲测有效。\n下面是"),a("a",{attrs:{href:"https://github.com/pepsifan",target:"_blank",rel:"noopener noreferrer"}},[s._v("pepsifan"),a("OutboundLink")],1),s._v("的方案：")]),s._v(" "),a("ol",[a("li",[s._v("安装nodemon")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" i -D nodemon\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ol",{attrs:{start:"2"}},[a("li",[s._v("修改package.json，增加命令")])]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[s._v("  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"scripts"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"test"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"echo \\"Error: no test specified\\" && exit 1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"dev"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vuepress dev docs"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"build"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vuepress build docs"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"start"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"nodemon --ext md,vue --watch .vuepress --watch . --exec vuepress dev docs"')]),s._v(" # 新增的启动命令\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("ol",{attrs:{start:"3"}},[a("li",[s._v("start启动")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" start\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("这个方案监控了.vue和.md文件的变动，会触发vuepress工程reload，浏览器刷新可见新内容。")]),s._v(" "),a("h2",{attrs:{id:"参考文章"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考文章"}},[s._v("#")]),s._v(" 参考文章")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://juejin.im/post/6844903869558816781",target:"_blank",rel:"noopener noreferrer"}},[s._v("拯救懒癌文档君 - VuePress + Travis CI + Github Pages 自动线上生成文档"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://juejin.im/post/6844903558106578957",target:"_blank",rel:"noopener noreferrer"}},[s._v("GitHub Pages自定义域名"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=e.exports}}]);