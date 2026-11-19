import React from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <>
      <a className="skip" href="#main">
        跳到内容
      </a>
      <header className="topbar">
        <div className="wrap topinner">
          <a className="brand" href="#top" aria-label="FNB 首页">
            <span className="mark">FNB</span>
            <span className="brandtype">
              <strong>FNB</strong>
              <small>RELATIONSHIP OPERATING SYSTEM</small>
            </span>
          </a>
          <nav className="nav" aria-label="主导航">
            <a href="#vision">理念</a>
            <a href="#experience">产品构想</a>
            <a href="#articles">阅读</a>
            <a
              className="actionlink"
              href="https://github.com/FNB2026/fnb-open"
              target="_blank"
              rel="noopener noreferrer"
            >
              开放项目 ↗
            </a>
          </nav>
        </div>
      </header>
      <main id="main" tabIndex="-1">
        <section className="hero" id="top">
          <div className="wrap">
            <div>
              <div className="eyebrow">POST-PLATFORM · HUMAN-CENTERED</div>
              <h1>
                让重要的人，
                <br />
                重新成为
                <br />
                <em>关系的中心。</em>
              </h1>
              <p className="intro">
                FNB 探索后平台 AI
                时代的人与社会关系操作系统。让关系由参与者定义，让记忆保留出处，让
                AI 的建议可追溯、可修正。
              </p>
              <div className="actions">
                <a className="btn btn-primary" href="#vision">
                  了解 FNB 的理念 <span aria-hidden="true">↓</span>
                </a>
                <a
                  className="btn btn-secondary"
                  href="https://github.com/FNB2026/fnb-open"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  公开协议与研究 <span aria-hidden="true">↗</span>
                </a>
              </div>
              <p className="hero-fine" id="downloads">
                项目仍在研发中 · 目前没有面向公众的正式 APP 下载
              </p>
            </div>
            <div
              className="field"
              role="img"
              aria-label="FNB 产品构想图。此刻记录生活，关系由参与者共同定义，记忆保留来源，我的入口管理数据如何使用。"
            >
              <svg className="mesh" viewBox="0 0 500 490" aria-hidden="true">
                <path d="M250 245 Q175 87 100 84 M250 245 Q350 95 435 139 M250 245 Q125 332 85 397 M250 245 Q400 345 400 421" />
                <path
                  className="secondary"
                  d="M100 84 Q260 17 435 139 M85 397 Q255 464 400 421 M100 84 Q27 245 85 397"
                />
                <circle cx="100" cy="84" r="7" />
                <circle cx="435" cy="139" r="7" />
                <circle cx="85" cy="397" r="7" />
                <circle cx="400" cy="421" r="7" />
                <circle cx="250" cy="245" r="36" className="core" />
              </svg>
              <div className="core-label">
                <strong>FNB</strong>
                <small>关系场</small>
              </div>
              <div className="float f1">
                <small>
                  <span className="dot"></span>MOMENT
                </small>
                <b>此刻</b>
                <p>关注正在发生的生活</p>
              </div>
              <div className="float f2">
                <small>
                  <span className="dot"></span>RELATIONSHIP
                </small>
                <b>关系</b>
                <p>联系由参与者共同定义</p>
              </div>
              <div className="float f3">
                <small>
                  <span className="dot"></span>MEMORY
                </small>
                <b>记忆</b>
                <p>保留有出处的意义</p>
              </div>
              <div className="float f4">
                <small>
                  <span className="dot"></span>OWNERSHIP
                </small>
                <b>我的</b>
                <p>决定数据如何被使用</p>
              </div>
            </div>
          </div>
        </section>
        <section className="section alt" id="experience">
          <div className="wrap">
            <span className="overline">A DIFFERENT DIGITAL LIFE</span>
            <h2>从日常生活到长期关系</h2>
            <p className="section-lead">
              FNB
              设想让生活记录、人与人的联结、长期记忆和数据治理在同一套体验中彼此关联。
            </p>
            <div className="grid">
              <article className="tile">
                <span className="tile-label">MOMENT</span>
                <h3>此刻</h3>
                <p>
                  让对话、动态和正在发生的事件回到统一的情境中，而不只是无限滚动的信息流。
                </p>
              </article>
              <article className="tile">
                <span className="tile-label">RELATIONSHIP</span>
                <h3>关系</h3>
                <p>
                  关系不只是好友列表，而是参与者、时间、事实、解释及权限的持续组合。
                </p>
              </article>
              <article className="tile">
                <span className="tile-label">MEMORY</span>
                <h3>记忆</h3>
                <p>
                  重要内容不应被埋没于消息历史。记忆需要来源、修正机制和生命周期。
                </p>
              </article>
              <article className="tile">
                <span className="tile-label">SELF</span>
                <h3>我的</h3>
                <p>
                  让人决定自己的信息如何存在、被谁看到，以及 AI 能替自己做什么。
                </p>
              </article>
            </div>
            <p className="concept">产品设计方向 · 功能仍在研发与验证中</p>
          </div>
        </section>
        <section className="section" id="vision" aria-labelledby="vision-title">
          <div className="wrap pair" id="about">
            <div>
              <span className="overline">WHY FNB</span>
              <h2 className="statement" id="vision-title">
                把关系、记忆和决定权
                <br />
                <em>交还给人</em>
              </h2>
              <p className="section-lead">
                传统社交平台通常通过好友列表和推荐组织联结，通用 AI
                助手主要围绕问答和任务工作。FNB
                从人的生活记录与长期关系出发，探索让参与者管理关系的边界，让每条重要记忆保留出处，让
                AI 的建议有据可查、可由人确认和修正。
              </p>
            </div>
            <div className="principles">
              <div className="principle">
                <div>
                  <strong>人优先于平台</strong>
                  <p>由人选择记录什么，和谁分享，何时收回授权。</p>
                </div>
              </div>
              <div className="principle">
                <div>
                  <strong>参与者共同定义关系</strong>
                  <p>AI 可以提出解释，参与者可以查阅依据、确认或修正。</p>
                </div>
              </div>
              <div className="principle">
                <div>
                  <strong>记忆应当有证据和出处</strong>
                  <p>重要记录保留出处、时间和修订线索。</p>
                </div>
              </div>
              <div className="principle">
                <div>
                  <strong>数据控制权属于使用者</strong>
                  <p>以本地优先、最小授权与明确的治理边界为设计原则。</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section alt" id="articles">
          <div className="wrap">
            <span className="overline">IDEAS & RESEARCH</span>
            <h2>从技术问题，回到人的问题。</h2>
            <p className="section-lead">
              了解 FNB 的思想来源与公开的技术讨论。
            </p>
            <div className="read-list">
              <a
                className="read-item"
                href="./articles/relation-philosophy.html"
              >
                <div>
                  <strong>AI 时代关系哲学：从信息社会到关系社会</strong>
                  <p>一份关于人、关系、记忆与技术文明的长期思考。</p>
                </div>
                <span className="arrow" aria-hidden="true">
                  →
                </span>
              </a>
              <a
                className="read-item"
                href="./articles/digital-subject-rights.html"
              >
                <div>
                  <strong>人的数字主体权</strong>
                  <p>当 AI 可以解读人生，人应当保有哪些权利？</p>
                </div>
                <span className="arrow" aria-hidden="true">
                  →
                </span>
              </a>
              <a className="read-item" href="./articles/flow-node-block.html">
                <div>
                  <strong>从信息流到人生流</strong>
                  <p>Flow、Node、Block 的原始系统设计逻辑。</p>
                </div>
                <span className="arrow" aria-hidden="true">
                  →
                </span>
              </a>
              <a
                className="read-item"
                href="./articles/relationship-first-class.html"
              >
                <div>
                  <strong>关系不是好友列表</strong>
                  <p>关系作为具有证据与治理边界的一等对象。</p>
                </div>
                <span className="arrow" aria-hidden="true">
                  →
                </span>
              </a>
            </div>
          </div>
        </section>
        <section className="final">
          <div className="wrap">
            <span className="overline">BUILDING WITH CARE</span>
            <h2>让关系重新属于人。</h2>
            <p>
              FNB 仍处于研发与验证阶段。公开协议、研究资料和治理边界可在 GitHub
              查阅。
            </p>
            <a
              className="btn btn-primary"
              href="https://github.com/FNB2026/fnb-open"
              target="_blank"
              rel="noopener noreferrer"
            >
              访问 FNB Open ↗
            </a>
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="wrap">
          <div className="foot">
            <a href="#top" className="brand">
              <span className="mark">FNB</span>
              <span className="brandtype">
                <strong>FNB</strong>
                <small>RELATIONSHIP OPERATING SYSTEM</small>
              </span>
            </a>
            <nav aria-label="页脚">
              <a href="#articles">公开文章</a>
              <a href="https://github.com/FNB2026">GitHub</a>
              <a href="https://github.com/FNB2026/fnb-open">开放项目</a>
              <a href="mailto:yao@fnbapp.net">联系</a>
            </nav>
          </div>
          <div className="legal">© 2026 FNB</div>
        </div>
      </footer>
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);
