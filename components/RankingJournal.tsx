"use client";

import { useMemo, useState } from "react";
import {
  ACTRESSES,
  CATEGORY_LABELS,
  ISSUE,
  METHODOLOGY,
  PRIMARY_SOURCE,
  type Actress,
  type RankingCategory,
  type Trend,
} from "../app/data";

const categoryOrder: RankingCategory[] = [
  "overall",
  "rising",
  "newcomer",
  "steady",
];

const trendCopy: Record<
  Trend,
  { symbol: string; label: string; short: string }
> = {
  up: { symbol: "▲", label: "상승", short: "UP" },
  down: { symbol: "▼", label: "하락", short: "DOWN" },
  same: { symbol: "—", label: "유지", short: "STAY" },
  new: { symbol: "●", label: "신규", short: "NEW" },
};

function ActressImage({
  actress,
  eager = false,
}: {
  actress: Actress;
  eager?: boolean;
}) {
  return (
    <div className="portrait-frame">
      <div className="portrait-fallback" aria-hidden="true">
        {actress.nameEn
          .split(" ")
          .map((part) => part[0])
          .join("")}
      </div>
      {/* Remote Commons images are intentionally left unproxied so their source remains explicit. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={actress.image}
        alt={`${actress.nameKo} 프로필 사진`}
        loading={eager ? "eager" : "lazy"}
        referrerPolicy="no-referrer"
        style={{ objectPosition: actress.imagePosition }}
        onError={(event) => {
          event.currentTarget.hidden = true;
        }}
      />
      <span className="portrait-index" aria-hidden="true">
        N.{String(actress.rank).padStart(2, "0")}
      </span>
    </div>
  );
}

function TrendMark({
  trend,
  movement,
}: {
  trend: Trend;
  movement?: number;
}) {
  const item = trendCopy[trend];
  const movementLabel =
    trend === "up" && movement
      ? ` +${movement}`
      : trend === "down" && movement
        ? ` -${movement}`
        : "";
  return (
    <span className={`trend-mark trend-${trend}`}>
      <span aria-hidden="true">{item.symbol}</span>
      <span>
        {item.label}
        {movementLabel}
      </span>
    </span>
  );
}

function ProfileNote({ actress }: { actress: Actress }) {
  return (
    <article className="profile-note" id="profile-note" aria-live="polite">
      <div className="profile-note__clip" aria-hidden="true" />
      <header className="profile-note__header">
        <span>PROFILE NOTE</span>
        <span>{ISSUE.period}</span>
      </header>

      <ActressImage actress={actress} />

      <div className="profile-note__rank">
        <strong>#{String(actress.rank).padStart(2, "0")}</strong>
        <TrendMark trend={actress.trend} movement={actress.movement} />
      </div>

      <div className="profile-note__names">
        <p>{actress.nameJp}</p>
        <h2>{actress.nameKo}</h2>
        <span>{actress.nameEn}</span>
      </div>

      <p className="profile-note__headline">{actress.headline}</p>

      <dl className="profile-facts">
        <div>
          <dt>현재 기록</dt>
          <dd>통판 월간 {actress.rank}위</dd>
        </div>
        <div>
          <dt>활동 시작</dt>
          <dd>{actress.debut ? `${actress.debut}년` : "정보 확인 중"}</dd>
        </div>
        <div>
          <dt>활동 상태</dt>
          <dd>{actress.status}</dd>
        </div>
      </dl>

      <div className="profile-note__copy">
        {actress.introduction.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      <ul className="keyword-list" aria-label="배우 기록 키워드">
        {actress.keywords.map((keyword) => (
          <li key={keyword}>#{keyword.replaceAll(" ", "_")}</li>
        ))}
      </ul>

      <div className="photo-credit">
        <span>PHOTO</span>
        <p>
          {actress.photoCredit} · {actress.photoLicense}
        </p>
        <a href={actress.photoSource} target="_blank" rel="noreferrer">
          원본 및 라이선스 확인 ↗
        </a>
      </div>
    </article>
  );
}

export default function RankingJournal() {
  const [category, setCategory] = useState<RankingCategory>("overall");
  const [query, setQuery] = useState("");
  const [selectedSlug, setSelectedSlug] = useState(ACTRESSES[0].slug);

  const filtered = useMemo(() => {
    const normalized = query.trim().toLocaleLowerCase();
    return ACTRESSES.filter((actress) => {
      const categoryMatch =
        category === "overall" || actress.categories.includes(category);
      const nameMatch =
        normalized.length === 0 ||
        [actress.nameKo, actress.nameJp, actress.nameEn]
          .join(" ")
          .toLocaleLowerCase()
          .includes(normalized);
      return categoryMatch && nameMatch;
    }).sort((a, b) => {
      if (category === "rising") {
        return (b.movement ?? 0) - (a.movement ?? 0) || a.rank - b.rank;
      }
      return a.rank - b.rank;
    });
  }, [category, query]);

  const activeSelected =
    filtered.find((actress) => actress.slug === selectedSlug) ??
    filtered[0] ??
    null;

  const chooseCategory = (next: RankingCategory) => {
    setCategory(next);
    const selectedActress = ACTRESSES.find(
      (actress) => actress.slug === selectedSlug,
    );
    const selectedMatches =
      next === "overall" || selectedActress?.categories.includes(next);

    if (!selectedMatches) {
      const firstMatch = ACTRESSES.find((actress) =>
        actress.categories.includes(next),
      );
      if (firstMatch) setSelectedSlug(firstMatch.slug);
    }

    window.setTimeout(() => {
      document.getElementById("ranking")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 0);
  };

  const chooseActress = (slug: string) => {
    setSelectedSlug(slug);
    if (window.matchMedia("(max-width: 899px)").matches) {
      window.setTimeout(() => {
        document.getElementById("profile-note")?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 0);
    }
  };

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="AVNOTE 홈">
          <span className="brand-mark">A/N</span>
          <span>
            <strong>AVNOTE</strong>
            <small>ACTRESS RANKING JOURNAL</small>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="주요 메뉴">
          <button type="button" onClick={() => chooseCategory("overall")}>
            월간 판매
          </button>
          <button type="button" onClick={() => chooseCategory("rising")}>
            급상승
          </button>
          <button type="button" onClick={() => chooseCategory("newcomer")}>
            신규 진입
          </button>
          <a href="#methodology">산정 기준</a>
        </nav>

        <span className="header-issue">ISSUE {ISSUE.number}</span>
      </header>

      <section className="cover" id="top">
        <div className="cover-copy">
          <div className="issue-line">
            <span>ISSUE {ISSUE.number}</span>
            <span>{ISSUE.checkedAt} UPDATED</span>
          </div>
          <p className="cover-kicker">ACTRESS RANKING JOURNAL</p>
          <h1>
            이번 달,
            <br />
            통판에서 가장
            <br />
            <em>선택된 배우</em>
          </h1>
          <p className="cover-description">
            2026년 6월 FANZA 통판 구매수 기준 배우 순위를 기록했습니다.
            작품과 품번 없이 오직 배우와 전월 대비 흐름만 읽어보세요.
          </p>
          <div className="cover-actions">
            <a className="primary-link" href="#ranking">
              랭킹 읽기 <span aria-hidden="true">↓</span>
            </a>
            <a className="text-link" href="#methodology">
              이번 호 산정 기준
            </a>
          </div>
          <div className="cover-footnote">
            <span>NOTE 001</span>
            <p>{ISSUE.description}</p>
          </div>
        </div>

        <article className="cover-feature">
          <div className="cover-feature__label">
            <span>NO. 01</span>
            <TrendMark
              trend={ACTRESSES[0].trend}
              movement={ACTRESSES[0].movement}
            />
          </div>
          <ActressImage actress={ACTRESSES[0]} eager />
          <div className="cover-feature__caption">
            <div>
              <p>{ACTRESSES[0].nameJp}</p>
              <h2>{ACTRESSES[0].nameKo}</h2>
              <span>{ACTRESSES[0].nameEn}</span>
            </div>
            <button
              type="button"
              onClick={() => {
                chooseActress(ACTRESSES[0].slug);
                document
                  .getElementById("ranking")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              프로필 읽기 <span aria-hidden="true">↗</span>
            </button>
          </div>
        </article>
      </section>

      <section className="ranking-section" id="ranking">
        <header className="section-heading">
          <div>
            <p>RANKING LEDGER · {ISSUE.period}</p>
            <h2>배우 랭킹 노트</h2>
          </div>
          <p>
            총 {filtered.length}명 · 마지막 확인 {ISSUE.checkedAt}
          </p>
        </header>

        <div className="ranking-controls">
          <div className="category-tabs" aria-label="랭킹 분류">
            {categoryOrder.map((item) => (
              <button
                type="button"
                aria-pressed={category === item}
                className={category === item ? "is-active" : ""}
                onClick={() => chooseCategory(item)}
                key={item}
              >
                {CATEGORY_LABELS[item].label}
              </button>
            ))}
          </div>
          <label className="ranking-search">
            <span>배우 찾기</span>
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="한글 · 일본어 · 영문 이름"
              type="search"
            />
            <span aria-hidden="true">⌕</span>
          </label>
        </div>

        <p className="category-note">{CATEGORY_LABELS[category].note}</p>

        <div className="ranking-layout">
          <div className="ranking-ledger">
            <div className="ledger-labels" aria-hidden="true">
              <span>RANK</span>
              <span>ACTRESS / NOTE</span>
              <span>STATUS</span>
            </div>

            {filtered.length > 0 ? (
              <ol>
                {filtered.map((actress, index) => (
                  <li
                    className={[
                      "ranking-row",
                      activeSelected?.slug === actress.slug ? "is-selected" : "",
                      index < 3 ? "is-featured" : "",
                    ].join(" ")}
                    key={actress.slug}
                  >
                    <button
                      type="button"
                      onClick={() => chooseActress(actress.slug)}
                      aria-label={`${actress.nameKo} 프로필 읽기`}
                    >
                      <span className="row-rank">
                        {String(actress.rank).padStart(2, "0")}
                      </span>

                      {index < 3 && (
                        <div className="row-photo">
                          <ActressImage actress={actress} />
                        </div>
                      )}

                      <span className="row-main">
                        <span className="row-name">
                          <strong>{actress.nameKo}</strong>
                          <span>{actress.nameJp}</span>
                          <small>{actress.nameEn}</small>
                        </span>
                        <span className="row-summary">{actress.summary}</span>
                      </span>

                      <span className="row-status">
                        <TrendMark
                          trend={actress.trend}
                          movement={actress.movement}
                        />
                        <small>
                          {actress.debut ? `${actress.debut}–` : "활동 연도 확인 중"}
                        </small>
                        <span className="row-arrow" aria-hidden="true">
                          ↗
                        </span>
                      </span>
                    </button>
                  </li>
                ))}
              </ol>
            ) : (
              <div className="empty-result">
                <strong>찾는 배우가 없습니다.</strong>
                <p>검색어를 지우거나 다른 랭킹 분류를 선택해 보세요.</p>
                <button
                  type="button"
                  onClick={() => {
                    setQuery("");
                    setCategory("overall");
                  }}
                >
                  검색 초기화
                </button>
              </div>
            )}
          </div>

          {activeSelected && (
            <aside className="profile-column" aria-label="선택한 배우 소개">
              <ProfileNote actress={activeSelected} />
            </aside>
          )}
        </div>
      </section>

      <section className="methodology-section" id="methodology">
        <header className="methodology-heading">
          <p>EDITORIAL STANDARD</p>
          <h2>
            순위보다 먼저,
            <br />
            기준을 공개합니다.
          </h2>
          <span>
            AVNOTE는 자동 수집 실시간 차트가 아닙니다. FANZA 통판 월간
            배우 랭킹을 확인하고, 같은 지표의 전월 순위와 비교해 남기는
            기록입니다.
          </span>
        </header>

        <ol className="methodology-list">
          {METHODOLOGY.map((item) => (
            <li key={item.index}>
              <span>{item.index}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="source-note">
          <div>
            <span>SOURCE NOTE</span>
            <strong>{ISSUE.title}</strong>
          </div>
          <p>
            기준 지표는 FANZA 통판 구매수입니다. 2026년 6월 공식 순서를
            그대로 표시하고, 5월 월간 순위와 비교해 상승·하락·신규 진입을
            계산했습니다. 원시 구매 건수는 공개되지 않았습니다.
          </p>
          <p>
            <a href={PRIMARY_SOURCE.officialUrl} target="_blank" rel="noreferrer">
              FANZA 공식 월간 랭킹 ↗
            </a>
            <br />
            <a href={PRIMARY_SOURCE.referenceUrl} target="_blank" rel="noreferrer">
              공개 순위 확인 자료 ↗
            </a>
            <br />
            프로필 사진은 Wikimedia Commons 공개 라이선스 자료입니다.
          </p>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-brand">
          <span className="brand-mark">A/N</span>
          <div>
            <strong>AVNOTE</strong>
            <p>배우의 인기 흐름을 기록하는 월간 랭킹 저널</p>
          </div>
        </div>
        <div className="footer-meta">
          <p>성인 대상 배우 정보를 다루는 19세 이상 열람 페이지입니다.</p>
          <p>작품·품번·다운로드 정보는 제공하지 않습니다.</p>
          <span>© 2026 AVNOTE · ISSUE {ISSUE.number}</span>
        </div>
      </footer>

      <nav className="mobile-nav" aria-label="모바일 빠른 메뉴">
        <button type="button" onClick={() => chooseCategory("overall")}>
          <span aria-hidden="true">01</span>
          랭킹
        </button>
        <button type="button" onClick={() => chooseCategory("rising")}>
          <span aria-hidden="true">↗</span>
          급상승
        </button>
        <button type="button" onClick={() => chooseCategory("newcomer")}>
          <span aria-hidden="true">●</span>
          신규
        </button>
      </nav>
    </main>
  );
}
