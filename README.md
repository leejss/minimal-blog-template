# Minimal Blog Template

## How to use

### 블로그 글 작성하기

1. `src/content/notes` 디렉토리에 새로운 마크다운 파일을 생성합니다.
2. 다음과 같은 형식으로 파일 상단에 frontmatter를 추가합니다:

```markdown
---
title: "글 제목"
publishedAt: 2025-05-10
tags: ["태그1", "태그2"]
---

여기에 본문 내용을 작성합니다.
```

### 사이트 설정 변경하기

`src/config.ts` 파일을 수정하여 다음 설정을 변경할 수 있습니다:

- 사이트 제목
- 사이트 설명
- 기본 언어
- 기본 URL
- 작성자 이름
