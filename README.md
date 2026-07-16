# AVNOTE

배우의 인기 흐름을 기록하는 밝은 데이터 노트형 월간 랭킹 저널입니다. 작품·품번·다운로드 정보 없이 배우 랭킹과 인물 소개에만 집중합니다.

- 공개 사이트: https://avnote.injani279299.chatgpt.site
- GitHub 저장소: https://github.com/mktperiod-a11y/avnote

## 주요 기능

- 2026년 6월 FANZA 통판 구매수 기준 월간 배우 랭킹
- 2026년 5월과 비교한 상승·하락·신규 진입
- 월간 판매·급상승·신규 진입·2개월 연속 필터
- 한글명·일본어명·영문명 통합 검색
- 배우별 상세 소개와 확인된 기본 정보
- 출처·확인일·산정 기준 공개
- Wikimedia Commons 사진 저작자·라이선스·원본 표시
- 데스크톱·태블릿·모바일 반응형 화면

## 데이터 원칙

- FANZA 통판·디지털·렌탈 랭킹은 서로 지표가 다르므로 합산하지 않습니다.
- 원시 구매 건수나 판매량이 공개되지 않으면 임의 점수를 만들지 않습니다.
- 변동 폭은 같은 통판 월간 지표의 2026년 5월과 6월 순위만 비교합니다.
- 공개 근거가 부족한 인물 정보는 `정보 확인 중`으로 표시합니다.
- 사이트 전체에서 작품명과 품번 목록을 제공하지 않습니다.

## 기술 구성

- Next.js / Vinext
- React 19
- TypeScript
- Tailwind CSS 4 기반 글로벌 스타일
- Cloudflare Workers 호환 빌드

## 로컬 실행

Node.js 22.13 이상과 Linux 환경이 필요합니다.

```bash
npm ci
npm run dev
```

프로덕션 빌드와 검증은 다음 명령으로 실행합니다.

```bash
npm run build
npm test
```

## 주요 파일

- `app/data.ts`: 배우·랭킹·출처 데이터
- `components/RankingJournal.tsx`: 검색·필터·배우 소개 화면
- `app/globals.css`: AVNOTE 리서치 저널 디자인
- `app/layout.tsx`: 검색 노출용 메타데이터

## 출처

- [FANZA 통판 월간 배우 랭킹](https://www.dmm.co.jp/mono/dvd/-/ranking/=/mode=actress/term=monthly/)
- [2026년 6월 공개 순위 확인 자료](https://taishurx.jp/detail/32733/)
- 배우 사진: Wikimedia Commons의 파일별 Creative Commons 라이선스

기사 이미지와 소개문은 복사하지 않았습니다. 랭킹 순위·기간·지표 같은 사실 정보만 확인했으며, 프로필 사진은 별도 공개 라이선스 자료를 사용합니다.

## 전달 및 운영 참고

이 저장소의 `.openai/hosting.json`은 현재 ChatGPT Sites 배포 설정입니다. 다른 계정이나 환경에서 배포할 때는 새 프로젝트 설정으로 교체해야 합니다.

별도의 코드 `LICENSE` 파일이 없으므로 코드 사용·수정·재배포 범위는 저장소 소유자와 협의해야 합니다. 사진은 각 원본의 Creative Commons 조건을 따릅니다.
