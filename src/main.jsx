import React from "react";
import { createRoot } from "react-dom/client";
import { ArrowDown, ArrowRight, Apple, Monitor, Smartphone } from "lucide-react";
import "./styles.css";

const downloads = [
  { name: "iPhone", note: "iOS 版本", icon: Apple, href: "" },
  { name: "Android", note: "Android 版本", icon: Smartphone, href: "" },
  { name: "macOS", note: "桌面客户端", icon: Monitor, href: "" },
  { name: "Windows", note: "桌面客户端", icon: Monitor, href: "" },
];

const articles = [
  {
    title: "AI时代关系哲学：从信息社会到关系社会",
    summary: "信息社会以“连接”为中心，关系社会以“联结”为中心。本文从存在、记忆、主体、治理与技术等维度，重新追问人与关系在技术文明中的位置。",
    meta: "2026 · 哲学体系 · 约 40 分钟",
    href: "articles/relation-philosophy.html",
  },
  {
    title: "人的数字主体权：在AI时代，谁拥有你的数据、记忆与关系？",
    summary: "当AI能够读取、推断和重组人的数据、记忆、关系、信用与人格投影，个人应当拥有什么权利？本文提出“个人数字主体权优先”的原则。",
    meta: "2026 · FNB公开文章 · 约 28 分钟",
    href: "articles/digital-subject-rights.html",
  },
  {
    title: "从信息流到人生流：Flow、Node、Block 如何重新组织数字生活",
    summary: "我们已经拥有越来越强大的计算机，却依然没有一种真正适合“人生”的数据结构。FNB 以 Flow 记录发生，以 Node 形成结构，以 Block 保留由人确认的意义。",
    meta: "2026 · FNB公开文章 · 约 18 分钟",
    href: "articles/flow-node-block.html",
  },
  {
    title: "关系不是好友列表：AI时代，我们需要重新发明 Relationship",
    summary: "连接只能说明谁认识谁。真正的关系还拥有参与者、证据、时间、各自的解释、AI 推断、确认、纠错与审计，并最终由人自己治理。",
    meta: "2026 · FNB公开文章 · 约 20 分钟",
    href: "articles/relationship-first-class.html",
  },
];

function RelationshipField() {
  const paths = Array.from({ length: 13 }, (_, index) => {
    const shift = index * 12;
    return `M 20 ${330 - shift / 2} C 165 ${260 + shift}, 260 ${120 - shift / 3}, 420 ${205 + shift / 5} S 650 ${70 + shift}, 820 ${115 + shift / 3}`;
  });
  const nodes = [
    [132, 284, 7, "circle"], [224, 238, 12, "circle"], [303, 300, 9, "square"],
    [390, 190, 18, "circle"], [472, 232, 15, "square"], [552, 142, 28, "circle"],
    [646, 204, 24, "square"], [731, 112, 10, "circle"], [770, 248, 14, "circle"],
  ];
  return (
    <svg className="relationship-field" viewBox="0 0 840 390" role="img" aria-label="由流线、节点与块构成的关系场">
      {paths.map((d, index) => <path key={d} d={d} className={`field-line field-line-${index % 3}`} />)}
      {nodes.map(([x, y, size, type], index) => type === "circle"
        ? <circle key={index} cx={x} cy={y} r={size} className={`field-node field-node-${index % 3}`} />
        : <rect key={index} x={x - size} y={y - size} width={size * 2} height={size * 2} className={`field-node field-node-${index % 3}`} />)}
    </svg>
  );
}

function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="FNB 首页">FNB</a>
      <nav aria-label="主导航">
        <a href="#top">首页</a>
        <a href="#articles">文章</a>
        <a href="#about">关于</a>
      </nav>
    </header>
  );
}

function App() {
  return (
    <div id="top">
      <Header />
      <main>
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <h1 id="hero-title">让重要的人，<br />重新成为<br />关系的中心</h1>
            <p>FNB 是后平台时代的<br />人与社会关系操作系统</p>
            <a className="text-link" href="#downloads">查看多端计划 <ArrowDown size={18} /></a>
          </div>
          <RelationshipField />
        </section>

        <section className="downloads" id="downloads" aria-labelledby="download-title">
          <div className="section-heading">
            <h2 id="download-title">多端连接，<br />同一段关系</h2>
            <p>关系不应被某一块屏幕锁住。FNB 将跨越移动端与桌面端，让数据、记忆与关系由你掌握。</p>
          </div>
          <div className="download-list">
            {downloads.map(({ name, note, icon: Icon, href }) => (
              <a key={name} className="download-item" href={href || undefined} aria-disabled={!href} onClick={(event) => !href && event.preventDefault()}>
                <Icon aria-hidden="true" />
                <span><strong>{name}</strong><small>{note}</small></span>
                <span className="coming">敬请期待</span>
              </a>
            ))}
          </div>
        </section>

        <section className="articles" id="articles" aria-labelledby="articles-title">
          <div className="articles-head">
            <h2 id="articles-title">文章</h2>
            <span>关于人、关系与技术文明的持续写作</span>
          </div>
          {articles.map((article) => (
            <article className="featured-article" key={article.title}>
              <div className="article-copy">
                <p className="article-meta">{article.meta}</p>
                <h3>{article.title}</h3>
                <p>{article.summary}</p>
                <a className="article-link" href={article.href}>阅读文章 <ArrowRight size={19} /></a>
              </div>
            </article>
          ))}
          <div className="future-articles" aria-label="第一季文章状态">
            <div><span>第一季</span><strong>从关系哲学到 Relationship：四篇文章已完整发布</strong><small>SEASON 01</small></div>
          </div>
        </section>

        <section className="manifesto" id="about">
          <h2>关系，是人存在的方式。<br />技术，应服务于人的联结。<br />让重要的人，重新成为关系的中心。</h2>
          <p>FNB 不追求流量与注意力。它尝试建立可携带、可迁移、可被信任的关系基础设施。</p>
        </section>
      </main>
      <footer>
        <div className="footer-intro">
          <a className="brand footer-brand" href="#top">FNB</a>
          <p>后平台时代的人与社会关系操作系统</p>
          <a className="footer-email" href="mailto:yao@fnbapp.net">yao@fnbapp.net</a>
        </div>
        <div className="footer-links"><a href="#downloads">下载</a><a href="#articles">文章</a><a href="mailto:yao@fnbapp.net">联系</a><a href="https://github.com/FNB2026" target="_blank" rel="noreferrer">GitHub</a></div>
        <p className="copyright">© 2026 FNB</p>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
