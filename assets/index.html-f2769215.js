import{_ as d,Q as r,S as o,U as t,W as l,X as n,a8 as e,a9 as c,H as s}from"./framework-d7e1aa10.js";const h={},y=t("h1",{id:"mysql",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#mysql","aria-hidden":"true"},"#"),e(" MySQL")],-1),u={class:"table-of-contents"},p={class:"hint-container info"},g=t("p",{class:"hint-container-title"},"相关文章",-1),x={href:"https://blog.csdn.net/qq_26442553/article/details/79467243",target:"_blank",rel:"noopener noreferrer"},m={href:"https://blog.csdn.net/weter_drop/article/details/84729822",target:"_blank",rel:"noopener noreferrer"},_=c('<h2 id="数据库的优点" tabindex="-1"><a class="header-anchor" href="#数据库的优点" aria-hidden="true">#</a> 数据库的优点</h2><ol><li>可以持久化数据到本地</li><li>结构化查询</li></ol><h2 id="数据库的常见概念" tabindex="-1"><a class="header-anchor" href="#数据库的常见概念" aria-hidden="true">#</a> 数据库的常见概念</h2><ol><li>DB：数据库，存储数据的仓库</li><li>DBMS：数据库管理系统，又称为数据库软件或数据库产品，用于创建与管理数据库</li><li>SQL：结构化查询语言，用于和数据库通讯的语言，不是某个数据库软件特有的，而是几乎所有的主流数据库软件的通用语言</li></ol><h2 id="数据库存储数据的特点" tabindex="-1"><a class="header-anchor" href="#数据库存储数据的特点" aria-hidden="true">#</a> 数据库存储数据的特点</h2><ol><li>数据存放到表中，然后表再放到库中</li><li>一个库中可以有多张表，每张表具有唯一的表名来表示自身</li><li>表中有一个或多个列，列又被称为“字段”，相当于Java中的“属性”</li><li>表中的每一行数据，相当于Java中的“对象”</li></ol><h2 id="常见的数据库管理系统" tabindex="-1"><a class="header-anchor" href="#常见的数据库管理系统" aria-hidden="true">#</a> 常见的数据库管理系统</h2><ol><li>MySQL</li><li>Oracle</li><li>DB2</li><li>SQLserver</li></ol><h2 id="mysql的背景" tabindex="-1"><a class="header-anchor" href="#mysql的背景" aria-hidden="true">#</a> MySQL的背景</h2><ul><li>前身属于瑞典的一家公司，MySQL AB，后被Sun公司收购，最后Sun公司被Oracle收购</li></ul><h2 id="mysql的优点" tabindex="-1"><a class="header-anchor" href="#mysql的优点" aria-hidden="true">#</a> MySQL的优点</h2><ul><li>开源、免费、成本低</li><li>性能高、移植性好</li><li>体积小，便于安装</li></ul><h2 id="mysql的安装" tabindex="-1"><a class="header-anchor" href="#mysql的安装" aria-hidden="true">#</a> MySQL的安装</h2><blockquote><p>属于c/s架构的软件，既有服务端又有客户端，一般安装服务端</p></blockquote><p><strong>相关命令：</strong></p><div class="table-wrapper"><table><thead><tr><th style="text-align:center;">序号</th><th style="text-align:center;">命令</th><th style="text-align:center;">解释</th></tr></thead><tbody><tr><td style="text-align:center;">1</td><td style="text-align:center;">net start mysql</td><td style="text-align:center;">启动 mysql</td></tr><tr><td style="text-align:center;">2</td><td style="text-align:center;">net stop mysql</td><td style="text-align:center;">关闭 mysql</td></tr><tr><td style="text-align:center;">3</td><td style="text-align:center;">mysql -uroot -p / mysql -h localhost -P 3306 -u root -p (+password)</td><td style="text-align:center;">登入 MySQL</td></tr><tr><td style="text-align:center;">4</td><td style="text-align:center;">mysql --version / mysql -V</td><td style="text-align:center;">查看数据库版本</td></tr><tr><td style="text-align:center;">5</td><td style="text-align:center;">exit / ctrl+c</td><td style="text-align:center;">退出 MySQL</td></tr></tbody></table></div><h2 id="事务四大特性与隔离级别" tabindex="-1"><a class="header-anchor" href="#事务四大特性与隔离级别" aria-hidden="true">#</a> 事务四大特性与隔离级别</h2><ul><li>原子性</li><li>一致性</li><li>隔离性</li><li>持久性</li></ul><div class="table-wrapper"><table><thead><tr><th style="text-align:center;">隔离级别（Isolation Level）</th><th style="text-align:center;">脏读（Dirty Reads）</th><th style="text-align:center;">不可重复读（Nonrepeatable Reads）</th><th style="text-align:center;">幻读（Phantoms）</th></tr></thead><tbody><tr><td style="text-align:center;">读未提交</td><td style="text-align:center;">允许</td><td style="text-align:center;">允许</td><td style="text-align:center;">允许</td></tr><tr><td style="text-align:center;">读已提交</td><td style="text-align:center;">不允许</td><td style="text-align:center;">允许</td><td style="text-align:center;">允许</td></tr><tr><td style="text-align:center;">可重复读</td><td style="text-align:center;">不允许</td><td style="text-align:center;">不允许</td><td style="text-align:center;">允许</td></tr><tr><td style="text-align:center;">串行化</td><td style="text-align:center;">不允许</td><td style="text-align:center;">不允许</td><td style="text-align:center;">不允许</td></tr></tbody></table></div><h2 id="数据库的备份-命令行方式" tabindex="-1"><a class="header-anchor" href="#数据库的备份-命令行方式" aria-hidden="true">#</a> 数据库的备份（命令行方式）</h2><p><strong>备份：</strong></p><ul><li>进入 <code>mysql</code> 的 <code>bin</code> 目录，输入如下命令</li><li>将其中的 <code>username</code> 替换成 <code>root</code> 或其他用户，<code>password</code> 替换成数据库的真实密码，<code>databasename</code> 替换成需要备份的数据库名</li></ul><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>mysqldump <span class="token operator">-</span>u username <span class="token operator">-</span>ppassword databasename <span class="token operator">&gt;</span> databasename<span class="token punctuation">.</span><span class="token keyword">sql</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>恢复：</strong></p><ul><li><p>进入 <code>mysql</code> 的 <code>bin</code> 目录，再登入mysql，输入如下命令</p></li><li><p>将其中的 <code>databasename</code> 更换成对应的备份文件的名称</p></li></ul><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>source databasename<span class="token punctuation">.</span><span class="token keyword">sql</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="mysql中的注意点" tabindex="-1"><a class="header-anchor" href="#mysql中的注意点" aria-hidden="true">#</a> MySQL中的注意点</h2><ol><li>MySQL中没有字符串的概念，只有字符，用‘’单引号表示（不区分单双引号，一般用单引号）</li><li>MySQL中+只是运算符，若字符相加则先将字符转化成数值再相加，若是转化失败，则将字符直接转换成数值0再相加；若用+的表达式中有一个值为null，结果一定为null</li><li>MySQL中为了区别特殊字段和关键字时，有时会将特殊字段用双引号区别开来</li><li>着重符号为：``</li><li>转义符为：\\ 或者自己指定转义符（见下面的模糊查询）</li></ol><h2 id="mysql-中四种语言" tabindex="-1"><a class="header-anchor" href="#mysql-中四种语言" aria-hidden="true">#</a> MySQL 中四种语言</h2><ol><li>DQL语言（Data Query Language）</li><li>DML语言（Data Manipulation Language）</li><li>DDL语言（Data Define Language）</li><li>TCL语言（Transaction Control Language）</li></ol>',30);function q(b,f){const a=s("router-link"),i=s("ExternalLinkIcon");return r(),o("div",null,[y,t("nav",u,[t("ul",null,[t("li",null,[l(a,{to:"#mysql"},{default:n(()=>[e("MySQL")]),_:1}),t("ul",null,[t("li",null,[l(a,{to:"#数据库的优点"},{default:n(()=>[e("数据库的优点")]),_:1})]),t("li",null,[l(a,{to:"#数据库的常见概念"},{default:n(()=>[e("数据库的常见概念")]),_:1})]),t("li",null,[l(a,{to:"#数据库存储数据的特点"},{default:n(()=>[e("数据库存储数据的特点")]),_:1})]),t("li",null,[l(a,{to:"#常见的数据库管理系统"},{default:n(()=>[e("常见的数据库管理系统")]),_:1})]),t("li",null,[l(a,{to:"#mysql的背景"},{default:n(()=>[e("MySQL的背景")]),_:1})]),t("li",null,[l(a,{to:"#mysql的优点"},{default:n(()=>[e("MySQL的优点")]),_:1})]),t("li",null,[l(a,{to:"#mysql的安装"},{default:n(()=>[e("MySQL的安装")]),_:1})]),t("li",null,[l(a,{to:"#事务四大特性与隔离级别"},{default:n(()=>[e("事务四大特性与隔离级别")]),_:1})]),t("li",null,[l(a,{to:"#数据库的备份-命令行方式"},{default:n(()=>[e("数据库的备份（命令行方式）")]),_:1})]),t("li",null,[l(a,{to:"#mysql中的注意点"},{default:n(()=>[e("MySQL中的注意点")]),_:1})]),t("li",null,[l(a,{to:"#mysql-中四种语言"},{default:n(()=>[e("MySQL 中四种语言")]),_:1})])])])])]),t("div",p,[g,t("p",null,[t("a",x,[e("sql语句的执行顺序以及流程（分分钟掌握版）"),l(i)]),t("a",m,[e("mysql 内连接、自然连接、外连接的区别"),l(i)])])]),_])}const v=d(h,[["render",q],["__file","index.html.vue"]]);export{v as default};