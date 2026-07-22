"use client";

import { useMemo, useState } from "react";
import { ACTRESSES, ARCHIVE_PERIODS, METHODOLOGY, PRIMARY_SOURCE, type Actress, type ArchivePeriod, type Trend } from "../app/data";

const trendCopy: Record<Trend, { symbol: string; label: string }> = {
  up: { symbol: "▲", label: "상승" }, down: { symbol: "▼", label: "하락" },
  same: { symbol: "—", label: "유지" }, new: { symbol: "●", label: "신규" },
};

function buildActresses(period: ArchivePeriod): Actress[] {
  const index = ARCHIVE_PERIODS.findIndex((item) => item.key === period.key);
  const previous = period.kind === "annual" ? [] : (ARCHIVE_PERIODS[index + 1]?.rankings ?? []);
  return period.rankings.map(([nameKo, nameJp, nameEn], rankIndex) => {
    const base = ACTRESSES.find((item) => item.nameJp === nameJp);
    const previousIndex = previous.findIndex((item) => item[1] === nameJp);
    const rank = rankIndex + 1;
    const previousRank = previousIndex >= 0 ? previousIndex + 1 : undefined;
    const trend: Trend = previousRank === undefined ? "new" : previousRank > rank ? "up" : previousRank < rank ? "down" : "same";
    const movement = previousRank === undefined ? undefined : Math.abs(previousRank - rank);
    const scope = period.kind === "annual" ? "연간 종합" : "통판 월간";
    return {
      ...(base ?? {}), slug: `${period.key}-${nameEn.toLowerCase().replaceAll(" ", "-")}`, rank,
      nameKo, nameJp, nameEn, status: base?.status ?? "활동 정보 기록 중", trend, previousRank, movement,
      categories: ["overall", ...(trend === "up" ? ["rising" as const] : []), ...(trend === "new" ? ["newcomer" as const] : []), ...(previousRank ? ["steady" as const] : [])],
      headline: `${period.label} ${scope} ${rank}위`,
      summary: `${period.label} 공개 순위에서 ${rank}위로 기록됐습니다.`,
      introduction: [`${nameKo}는 ${period.label} ${scope} 순위에서 ${rank}위로 확인된 배우입니다.`, "AVNOTE는 작품·품번 없이 공개된 순위와 배우 이름만 기록합니다."],
      keywords: [period.label, `${scope} ${rank}위`, previousRank ? `직전 기록 ${previousRank}위` : "아카이브 진입"],
      image: base?.image ?? "", imagePosition: base?.imagePosition ?? "50% 18%", photoCredit: base?.photoCredit ?? "사진 자료 없음", photoLicense: base?.photoLicense ?? "", photoSource: base?.photoSource ?? "",
    } as Actress;
  });
}

function ActressImage({ actress, eager = false }: { actress: Actress; eager?: boolean }) {
  const initials = actress.nameEn.split(" ").map((part) => part[0]).join("");
  return <div className="portrait-frame"><div className="portrait-fallback" aria-hidden="true">{initials}</div>{actress.image && <img src={actress.image} alt={`${actress.nameKo} 프로필 사진`} loading={eager ? "eager" : "lazy"} referrerPolicy="no-referrer" style={{ objectPosition: actress.imagePosition }} onError={(e) => { e.currentTarget.hidden = true; }} />}<span className="portrait-index">N.{String(actress.rank).padStart(2,"0")}</span></div>;
}

function TrendMark({ actress }: { actress: Actress }) {
  const item = trendCopy[actress.trend];
  return <span className={`trend-mark trend-${actress.trend}`}><span>{item.symbol}</span><span>{item.label}{actress.movement ? ` ${actress.trend === "up" ? "+" : actress.trend === "down" ? "-" : ""}${actress.movement}` : ""}</span></span>;
}

function ProfileNote({ actress, period }: { actress: Actress; period: ArchivePeriod }) {
  return <article className="profile-note" id="profile-note" aria-live="polite"><div className="profile-note__clip"/><header className="profile-note__header"><span>PROFILE NOTE</span><span>{period.period}</span></header><ActressImage actress={actress}/><div className="profile-note__rank"><strong>#{String(actress.rank).padStart(2,"0")}</strong><TrendMark actress={actress}/></div><div className="profile-note__names"><p>{actress.nameJp}</p><h2>{actress.nameKo}</h2><span>{actress.nameEn}</span></div><p className="profile-note__headline">{actress.headline}</p><dl className="profile-facts"><div><dt>현재 기록</dt><dd>{period.kind === "annual" ? "연간 종합" : "통판 월간"} {actress.rank}위</dd></div><div><dt>직전 기록</dt><dd>{actress.previousRank ? `${actress.previousRank}위` : "비교 기록 없음"}</dd></div><div><dt>활동 상태</dt><dd>{actress.status}</dd></div></dl><div className="profile-note__copy">{actress.introduction.map(p => <p key={p}>{p}</p>)}</div><ul className="keyword-list">{actress.keywords.map(k => <li key={k}>#{k.replaceAll(" ","_")}</li>)}</ul>{actress.photoSource && <div className="photo-credit"><span>PHOTO</span><p>{actress.photoCredit} · {actress.photoLicense}</p><a href={actress.photoSource} target="_blank" rel="noreferrer">원본 및 라이선스 확인 ↗</a></div>}</article>;
}

export default function RankingJournal() {
  const [periodKey, setPeriodKey] = useState("2026-06");
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState("");
  const period = ARCHIVE_PERIODS.find(p => p.key === periodKey)!;
  const actresses = useMemo(() => buildActresses(period), [period]);
  const filtered = actresses.filter(a => [a.nameKo,a.nameJp,a.nameEn].join(" ").toLowerCase().includes(query.trim().toLowerCase()));
  const active = actresses.find(a => a.slug === selected) ?? filtered[0] ?? actresses[0];
  const top = actresses[0];
  const choosePeriod = (key: string) => { setPeriodKey(key); setSelected(""); setQuery(""); };
  return <main>
    <header className="site-header"><a className="brand" href="#top"><span className="brand-mark">A/N</span><span><strong>AVNOTE</strong><small>ACTRESS RANKING JOURNAL</small></span></a><nav className="desktop-nav"><a href="#archive">기간별 랭킹</a><a href="#ranking">배우 찾기</a><a href="#methodology">산정 기준</a></nav><span className="header-issue">ISSUE {period.issue}</span></header>
    <section className="cover" id="top"><div className="cover-copy"><div className="issue-line"><span>ISSUE {period.issue}</span><span>{period.checkedAt} CHECKED</span></div><p className="cover-kicker">ACTRESS RANKING ARCHIVE</p><h1>{period.kind === "annual" ? "한 해," : "이번 달,"}<br/>통판에서 가장<br/><em>선택된 배우</em></h1><p className="cover-description">{period.label} 배우 순위를 기록했습니다. 작품과 품번 없이 배우와 기간별 흐름만 살펴보세요.</p><div className="cover-actions"><a className="primary-link" href="#archive">기간 고르기 ↓</a><a className="text-link" href="#methodology">기록 기준</a></div><div className="cover-footnote"><span>ARCHIVE {period.issue}</span><p>{period.label} · 상위 10명 · 공개 순서 보존</p></div></div><article className="cover-feature"><div className="cover-feature__label"><span>NO. 01</span><TrendMark actress={top}/></div><ActressImage actress={top} eager/><div className="cover-feature__caption"><div><p>{top.nameJp}</p><h2>{top.nameKo}</h2><span>{top.nameEn}</span></div><button onClick={() => document.getElementById("ranking")?.scrollIntoView({behavior:"smooth"})}>프로필 읽기 ↗</button></div></article></section>
    <section className="archive-strip" id="archive"><div className="archive-strip__title"><span>ARCHIVE INDEX</span><strong>기간별 랭킹 노트</strong></div><div className="archive-tabs">{ARCHIVE_PERIODS.map(p => <button key={p.key} className={p.key === periodKey ? "is-active" : ""} aria-pressed={p.key === periodKey} onClick={() => choosePeriod(p.key)}><small>{p.kind === "annual" ? "YEAR" : p.period.slice(0,4)}</small><span>{p.shortLabel}</span></button>)}</div></section>
    <section className="ranking-section" id="ranking"><header className="section-heading"><div><p>RANKING LEDGER · {period.period}</p><h2>{period.label} 배우 랭킹</h2></div><p>총 {filtered.length}명 · 확인 {period.checkedAt}</p></header><div className="ranking-controls"><p className="category-note">{period.sourceLabel}의 상위 10위 기록</p><label className="ranking-search"><span>배우 찾기</span><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="한글 · 일본어 · 영문 이름" type="search"/><span>⌕</span></label></div><div className="ranking-layout"><div className="ranking-ledger"><div className="ledger-labels"><span>RANK</span><span>ACTRESS / NOTE</span><span>STATUS</span></div><ol>{filtered.map((a,index)=><li className={`ranking-row ${active?.slug===a.slug?"is-selected":""} ${index<3?"is-featured":""}`} key={a.slug}><button onClick={()=>setSelected(a.slug)}><span className="row-rank">{String(a.rank).padStart(2,"0")}</span>{index<3&&<div className="row-photo"><ActressImage actress={a}/></div>}<span className="row-main"><span className="row-name"><strong>{a.nameKo}</strong><span>{a.nameJp}</span><small>{a.nameEn}</small></span><span className="row-summary">{a.summary}</span></span><span className="row-status"><TrendMark actress={a}/><span className="row-arrow">↗</span></span></button></li>)}</ol>{filtered.length===0&&<div className="empty-result"><strong>찾는 배우가 없습니다.</strong><button onClick={()=>setQuery("")}>검색 초기화</button></div>}</div>{active&&<aside className="profile-column"><ProfileNote actress={active} period={period}/></aside>}</div></section>
    <section className="methodology-section" id="methodology"><header className="methodology-heading"><p>EDITORIAL STANDARD</p><h2>순위보다 먼저,<br/>기준을 공개합니다.</h2><span>월별 기록은 통판 월간 순서를, 연간 기록은 별도 연간 베스트 자료를 사용합니다. 서로 다른 기간의 순위를 하나의 임의 점수로 합치지 않습니다.</span></header><ol className="methodology-list">{METHODOLOGY.map(i=><li key={i.index}><span>{i.index}</span><div><h3>{i.title}</h3><p>{i.description}</p></div></li>)}</ol><div className="source-note"><div><span>SOURCE NOTE</span><strong>{period.label} 랭킹</strong></div><p>{period.sourceLabel}에 표시된 순서를 아카이브했습니다. 원시 판매 건수는 공개되지 않아 표시하지 않습니다.</p><p><a href={period.sourceUrl} target="_blank" rel="noreferrer">선택 기간 공개 자료 ↗</a><br/><a href={PRIMARY_SOURCE.officialUrl} target="_blank" rel="noreferrer">FANZA 공식 월간 랭킹 ↗</a></p></div></section>
    <footer className="site-footer"><div className="footer-brand"><span className="brand-mark">A/N</span><div><strong>AVNOTE</strong><p>배우의 인기 흐름을 기록하는 랭킹 저널</p></div></div><div className="footer-meta"><p>성인 대상 배우 정보를 다루는 19세 이상 열람 페이지입니다.</p><p>작품·품번·다운로드 정보는 제공하지 않습니다.</p><span>© 2026 AVNOTE · ARCHIVE 01–08</span></div></footer>
    <nav className="mobile-nav"><a href="#archive"><span>▤</span>기간</a><a href="#ranking"><span>01</span>랭킹</a><a href="#methodology"><span>i</span>기준</a></nav>
  </main>;
}
