(window.webpackJsonp=window.webpackJsonp||[]).push([[132],{626:function(t,a,e){"use strict";e.r(a);var s=e(30),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"git-操作规范"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git-操作规范"}},[t._v("#")]),t._v(" Git 操作规范")]),t._v(" "),e("h2",{attrs:{id:"新建分支开发需求"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#新建分支开发需求"}},[t._v("#")]),t._v(" 新建分支开发需求")]),t._v(" "),e("p",[t._v("修复线上 bug 或开发新功能时都要从 "),e("code",[t._v("master")]),t._v(" 新建分支，版本发布用 "),e("code",[t._v("feature/*")]),t._v("，修复线上问题用 "),e("code",[t._v("hotfix/*")]),t._v("，如：")]),t._v(" "),e("blockquote",[e("p",[e("code",[t._v("feature/baofenpei-v2")]),e("br"),t._v(" "),e("code",[t._v("hotfix/quota-edit")])])]),t._v(" "),e("h3",{attrs:{id:"创建新分支的命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建新分支的命令"}},[t._v("#")]),t._v(" 创建新分支的命令")]),t._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 在本地创建新分支")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout -b "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("分支名"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 第一次提交到远程分支，需要跟远程分支关联起来")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push -u origin "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("分支名"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 执行过上一条命令后，以后在新分支就可以直接通过 `git push` 提交代码了")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br")])]),e("h2",{attrs:{id:"转测时提-pr"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#转测时提-pr"}},[t._v("#")]),t._v(" 转测时提 pr")]),t._v(" "),e("p",[t._v("具体步骤：")]),t._v(" "),e("ol",[e("li",[t._v("进入 Gitlab 项目页面")]),t._v(" "),e("li",[t._v("点击左侧 Merge Requests 菜单")]),t._v(" "),e("li",[t._v("点击 New merge request 按钮发起合并请求")]),t._v(" "),e("li",[t._v("选择 Source branch（源分支）与 Target branch（目标分支，即 master）")]),t._v(" "),e("li",[t._v("Compare branches and continue，比较分支内容并继续")]),t._v(" "),e("li",[t._v("填写相关信息并提交")])]),t._v(" "),e("h2",{attrs:{id:"合并分支后删除"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#合并分支后删除"}},[t._v("#")]),t._v(" 合并分支后删除")]),t._v(" "),e("p",[t._v("管理员合并分支后应该及时将已合并的分支删除")]),t._v(" "),e("h2",{attrs:{id:"每次-commit-前要-review-自己的代码"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#每次-commit-前要-review-自己的代码"}},[t._v("#")]),t._v(" 每次 commit 前要 review 自己的代码")]),t._v(" "),e("p",[t._v("每次提交 commit 前，需通过可视化界面（如 Sourcetree 或 VScode 的 SOURCE CONTROL）检查本次改动")]),t._v(" "),e("h2",{attrs:{id:"语义化的-commit-信息"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#语义化的-commit-信息"}},[t._v("#")]),t._v(" 语义化的 commit 信息")]),t._v(" "),e("p",[t._v("提交 commit 信息时，需要表达清楚本次改动的内容，无需 "),e("code",[t._v("fix:")]),t._v(" 和 "),e("code",[t._v("feat:")]),t._v(" 等前缀，如：")]),t._v(" "),e("blockquote",[e("p",[e("code",[t._v('git commit -m "修复订单列表样式问题"')])])])])}),[],!1,null,null,null);a.default=r.exports}}]);