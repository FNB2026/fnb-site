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
    href: "/articles/relation-philosophy.html",
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
              <div className="article-visual" aria-hidden="true"><span /><span /><span /></div>
              <div className="article-copy">
                <p className="article-meta">{article.meta}</p>
                <h3>{article.title}</h3>
                <p>{article.summary}</p>
                <a className="article-link" href={article.href}>阅读文章 <ArrowRight size={19} /></a>
              </div>
            </article>
          ))}
          <div className="future-articles" aria-label="未来文章">
            <div><span>下一篇</span><strong>人的数字主体权</strong><small>正在写作</small></div>
            <div><span>持续更新</span><strong>更多文章，敬请期待</strong><small>COMING SOON</small></div>
          </div>
        </section>

        <section className="manifesto" id="about">
          <h2>关系，是人存在的方式。<br />技术，应服务于人的联结。<br />让重要的人，重新成为关系的中心。</h2>
          <p>FNB 不追求流量与注意力。它尝试建立可携带、可迁移、可被信任的关系基础设施。</p>
        </section>
      </main>
      <footer>
        <div><a className="brand footer-brand" href="#top">FNB</a><p>后平台时代的人与社会关系操作系统</p></div>
        <div className="footer-links"><a href="#downloads">下载</a><a href="#articles">文章</a><a href="https://github.com/FNB2026" target="_blank" rel="noreferrer">GitHub</a></div>
        <p className="copyright">© 2026 FNB</p>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
