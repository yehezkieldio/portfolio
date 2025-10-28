# Changelog

All notable changes to this project will be documented in this file.

**NOTE:** Changes are ordered by date, starting with the most oldest to the most recent.

> This project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html) and uses [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) for commit messages.

## portfolio@2.0.0-alpha.5 (October 28, 2025)

### <!-- 11 -->🛠️ Miscellaneous
- [`84ee9b7`](https://github.com/yehezkieldio/portfolio/commit/84ee9b75718abfa1c590f79e8eb6a8c82f52d53a) cliff.toml: Enhance commit grouping and release note formatting for clarity and broader keyword support

### <!-- 3 -->🚀 New Features
- [`f6c3aca`](https://github.com/yehezkieldio/portfolio/commit/f6c3aca062cd8898bbb7d1904d9ec2a3c5d8ed48) projects: Add three new web application projects with images and metadata
- [`b38800f`](https://github.com/yehezkieldio/portfolio/commit/b38800fec566e84342976c0a99a4e4958597fceb) projects: Add viewUrl for ProjectileHP project to provide video demo link

### <!-- 4 -->🐛 Bug Fixes
- [`b0667f2`](https://github.com/yehezkieldio/portfolio/commit/b0667f2d63e8451386efba6e6131bb3038483ef1) projects: Update technologies list for Astral project to only include Astro
## portfolio@2.0.0-alpha.4 (October 28, 2025)

### <!-- 2 -->🧩 Dependencies Updates

- [`1ef7ecf`](https://github.com/yehezkieldio/portfolio/commit/1ef7ecfbb18a905bcb85aef2361ddaa57e2d9a8f) deps: Update dependency ultracite to v6.0.4 ([#15](https://github.com/yehezkieldio/portfolio/issues/15))by renovate[bot]


### <!-- 3 -->🚀 New Features

- [`972109a`](https://github.com/yehezkieldio/portfolio/commit/972109a221e9c21d43cca4d19afece574112dbf4) ui: Add command palette, dialog, and separator components with supporting dependencies


- [`e8b60e8`](https://github.com/yehezkieldio/portfolio/commit/e8b60e8492a185e96b54d26f6269287b7ef22f71) Add advanced MultiSelect UI component with responsive, animated, and accessible options plus updated biome.json rules


- [`de85557`](https://github.com/yehezkieldio/portfolio/commit/de85557e8db347827a2a82d3573ce1dbd88ec1e3) projects: Standardize discord.js casing and add Antimony API project entry


- [`d084a60`](https://github.com/yehezkieldio/portfolio/commit/d084a60c1ee107e64c013b1e6b2b279dbeb0306b) projects: Add Imperia AI Discord bot project to data list


- [`50f0cd0`](https://github.com/yehezkieldio/portfolio/commit/50f0cd043d85165b7b16ba57cb155ae7fe24a3d5) ui: Enhance accessibility with keyboard support and replace tech badge filter with searchable multi-select


- [`6149442`](https://github.com/yehezkieldio/portfolio/commit/6149442fbe0386b3b0477710f3611b0d50ec8e63) home: Add footer with author info and GitHub link, adjust header spacing, and refine input focus styles


### <!-- 4 -->🐛 Bug Fixes

- [`1afb1c6`](https://github.com/yehezkieldio/portfolio/commit/1afb1c6531629a898c251bd37e49b6748d31d96a) projects: Update sourceUrl for starrlight Rust project to correct repo link


- [`f77d9f6`](https://github.com/yehezkieldio/portfolio/commit/f77d9f6e533d55f7798624e34ae6bbe0d4203c8f) multi-select: Adjust mobile width calculation and refine select all label formatting


- [`dc2b295`](https://github.com/yehezkieldio/portfolio/commit/dc2b295ca3c19f987655b03aabd55c74597a33e7) multi-select: Replace button with div and add keyboard handling for option removal


- [`4269e08`](https://github.com/yehezkieldio/portfolio/commit/4269e08801c9d6796b590370faf613f33e57ff4d) multi-select: Replace nested buttons with divs and add keyboard support for accessibility


### <!-- 7 -->🚜 Refactor

- [`d2141b6`](https://github.com/yehezkieldio/portfolio/commit/d2141b6b8885c1055963b8b4eaf12f7215b64e65) multi-select: Replace div role buttons with semantic button elements for accessibility and cleaner event handling


### <!-- 9 -->🎨 Code Styling

- [`9a41386`](https://github.com/yehezkieldio/portfolio/commit/9a413863bbc2b9a7188e27f158efc0f0fea2c582) filters: Make select inputs full width on small screens for better responsiveness


- [`1561d57`](https://github.com/yehezkieldio/portfolio/commit/1561d576d4fc01c4bc62aa290ed8a93d20b9b022) filters: Add text color and dark mode background to dropdown


- [`1dd92cf`](https://github.com/yehezkieldio/portfolio/commit/1dd92cf177d6cb1d7c7728f804a54386bf873bf0) multi-select: Update checkbox styling for consistency and remove close button


- [`c1586b6`](https://github.com/yehezkieldio/portfolio/commit/c1586b6fef560d1055b7da196e7030f8376f8af2) multi-select: Adjust clear button container styles for better alignment and spacing

## portfolio@2.0.0-alpha.3 (October 27, 2025)

### <!-- 3 -->🚀 New Features

- [`d932d62`](https://github.com/yehezkieldio/portfolio/commit/d932d62f95671f807837726562697e51d5ad48fd) projects: Add magnus

## portfolio@2.0.0-alpha.2 (October 27, 2025)

### <!-- 11 -->🛠️ Miscellaneous

- [`26214b0`](https://github.com/yehezkieldio/portfolio/commit/26214b007e8a062983f0b76ba3dded7fc9f9c57f) Add bun.lock to biome ignore list


- [`4342678`](https://github.com/yehezkieldio/portfolio/commit/4342678416269125e84050a175a216d70b6cad19) config: Remove lefthook config


- [`a37b0e3`](https://github.com/yehezkieldio/portfolio/commit/a37b0e3c3c8cdd2e50a9fbfece028d3c4fbf1469) config: Add missing linter style rule


- [`d5b46a8`](https://github.com/yehezkieldio/portfolio/commit/d5b46a8c43e4e0d84862652271b568725b38dfd2) config: Add vercel.json


- [`c14d2f5`](https://github.com/yehezkieldio/portfolio/commit/c14d2f574714259cdc0d9cc73283df25064cc79d) Add allowedDevOrigins for specific local IP addresses


### <!-- 16 -->🤖 CI/CD

- [`f35dc99`](https://github.com/yehezkieldio/portfolio/commit/f35dc99cd1a1a9a85c4504de48030145ebd0d57f) workflow: Add code quality workflow


- [`3fae4ea`](https://github.com/yehezkieldio/portfolio/commit/3fae4ea40ee2485feacd8a14cd20146ea78be453) code-quality: Enable Tailwind CSS directive parsing in Biome check


- [`81e777b`](https://github.com/yehezkieldio/portfolio/commit/81e777b48ea38be7318b11224bc153bde8b8e9f3) Add GitHub Actions workflow for automated Vercel deployments


- [`5130d7a`](https://github.com/yehezkieldio/portfolio/commit/5130d7ad515f33704c8c5496e21da7ff23fc50a4) workflows: Capitalize environment names for production and development


- [`45ec69d`](https://github.com/yehezkieldio/portfolio/commit/45ec69d4792750a0f030c565e9d5996ee9a82404) code-quality: Remove tailwindcss parsing flag from biome ci


- [`87e1e46`](https://github.com/yehezkieldio/portfolio/commit/87e1e468aade02e5818ada1c46e32cd31ea6cecf) workflows: Trigger production deployment regardless of src changes


### <!-- 2 -->🧩 Dependencies Updates

- [`0a56dea`](https://github.com/yehezkieldio/portfolio/commit/0a56dea8cbb11440eb458cb6b78a1f1fb1068fcf) deps: Update dependency @types/node to ^20.19.23 ([#8](https://github.com/yehezkieldio/portfolio/issues/8))by renovate[bot]


- [`f119841`](https://github.com/yehezkieldio/portfolio/commit/f119841e2f1b665436821ccf37e2ccf62286fd01) deps: Update dependency typescript to ^5.9.3 ([#9](https://github.com/yehezkieldio/portfolio/issues/9))by renovate[bot]


- [`c83da12`](https://github.com/yehezkieldio/portfolio/commit/c83da1224787aa07f55c4db98b34f3caa086b1aa) deps: Update react monorepo to ^19.2.2 ([#10](https://github.com/yehezkieldio/portfolio/issues/10))by renovate[bot]


- [`c99c1d7`](https://github.com/yehezkieldio/portfolio/commit/c99c1d7c0d195ae8a15e729ed0b20c099615d76c) deps: Update tailwindcss monorepo to ^4.1.16 ([#12](https://github.com/yehezkieldio/portfolio/issues/12))by renovate[bot]


- [`e03cc8e`](https://github.com/yehezkieldio/portfolio/commit/e03cc8e963346b0ad6c160709063554eee9ea1ce) deps: Update dependency @biomejs/biome to v2.3.1 ([#13](https://github.com/yehezkieldio/portfolio/issues/13))by renovate[bot]


- [`e41016e`](https://github.com/yehezkieldio/portfolio/commit/e41016ea421539f0377c657770bfb0efc4dcd8ef) deps: Update dependency ultracite to v6.0.3 ([#14](https://github.com/yehezkieldio/portfolio/issues/14))by renovate[bot]


### <!-- 3 -->🚀 New Features

- [`b903b8b`](https://github.com/yehezkieldio/portfolio/commit/b903b8b7e3c03a827c6e0b7d71b6cd922abf497d) ui: Update global theme and fonts


- [`dc24f93`](https://github.com/yehezkieldio/portfolio/commit/dc24f935a0d937dc7238f51c4deb14206430fbab) ui: Add theme-provider using next-themes


- [`395b1b1`](https://github.com/yehezkieldio/portfolio/commit/395b1b109b5786e0b3fba7a618ae336b8ac56c01) ui: Add theme transition styles


- [`72981b7`](https://github.com/yehezkieldio/portfolio/commit/72981b774950cb0e63730c516fbd89756c7ac8ff) ui: Add navigation bar with theme toggle and update home layout


- [`d6b522d`](https://github.com/yehezkieldio/portfolio/commit/d6b522dbf26d3755af305cd1fd8f458b29597510) navigation: Add responsive mobile menu with toggle and overlay


- [`1ec2d7e`](https://github.com/yehezkieldio/portfolio/commit/1ec2d7e640619a30d11b57f040959232663241ea) ui: Add homepage layout and styles


- [`3da990a`](https://github.com/yehezkieldio/portfolio/commit/3da990aadbe40f88d4dabdede61e46aee6faa731) Rework


- [`826c10b`](https://github.com/yehezkieldio/portfolio/commit/826c10bac55556deac7adbe48785f542596f152d) projects: Add projects primitive components


- [`9467c1a`](https://github.com/yehezkieldio/portfolio/commit/9467c1a211335a9d1edf2269d35053a73e2c3385) layout: Set default theme to dark for consistent initial UI experience


- [`a7404d0`](https://github.com/yehezkieldio/portfolio/commit/a7404d055bdc8de45ef322024ed7f148f69d4a0b) ui: Add github icon and tweak theme


- [`7b47afd`](https://github.com/yehezkieldio/portfolio/commit/7b47afd7e3e2bcb9dcd6daab0166ba2b63ef897e) projects: Add project images and entries


- [`9902f68`](https://github.com/yehezkieldio/portfolio/commit/9902f68b0683b493b00431b7249e4eafe9653449) projects: Add GitLab icon and support for GitLab source URLs in cards


- [`ed8573f`](https://github.com/yehezkieldio/portfolio/commit/ed8573f0a8ffb5e35e98ad5c836fef9994a0f1a5) projects: Add Aqua project entry with image and metadata to list


- [`e9ac0f3`](https://github.com/yehezkieldio/portfolio/commit/e9ac0f337f37b4eda63ae991e5a9aabb448c3cf0) project-card: Add popover to display additional technologies beyond four


- [`e8ebe23`](https://github.com/yehezkieldio/portfolio/commit/e8ebe23a6454872bc2b807640e8d0bc213c7c9d9) projects: Add new project entries with images and update card tech slice limit


- [`26ec914`](https://github.com/yehezkieldio/portfolio/commit/26ec9143bc32a1ac6a76295a13ba602910c0e142) projects: Update categories and years, add new projects with images


### <!-- 4 -->🐛 Bug Fixes

- [`758f4d4`](https://github.com/yehezkieldio/portfolio/commit/758f4d499bf75795ae815ea4257fd1f42866616e) ui: Remove ghost hover styles


- [`3b341cc`](https://github.com/yehezkieldio/portfolio/commit/3b341cccef5c55adcf0cd57bfbae625d054423b4) projects: Sort results by year in descending order for consistency


### <!-- 5 -->📚 Documentation

- [`8ca8454`](https://github.com/yehezkieldio/portfolio/commit/8ca845404f9a6a6f5e21910d68dce1fb2cf28509) Remove quality checklist


### <!-- 7 -->🚜 Refactor

- [`d2ef55b`](https://github.com/yehezkieldio/portfolio/commit/d2ef55bb247b63884011bf0fe273e916744e67ed) navigation: Reduce nav links to projects


- [`92fdd57`](https://github.com/yehezkieldio/portfolio/commit/92fdd570b6fde93f458c74f6bb4e2a01986b6ed4) projects: Convert to server components


- [`8e456af`](https://github.com/yehezkieldio/portfolio/commit/8e456afd259c85151c7159a51e0122fe81e813a7) projects: Consolidate suspense wrappers


### <!-- 9 -->🎨 Code Styling

- [`28191c0`](https://github.com/yehezkieldio/portfolio/commit/28191c0439d2bf463c2009f46f93c309abde986a) navigation: Update link tracking from wide to normal for improved text appearance


- [`0512181`](https://github.com/yehezkieldio/portfolio/commit/05121814737094498730b578a5729977b4b5f412) layout.tsx: Move globals.css import to top for consistent import order

## portfolio@2.0.0-alpha.1 (October 27, 2025)

### <!-- 11 -->🛠️ Miscellaneous

- [`26214b0`](https://github.com/yehezkieldio/portfolio/commit/26214b007e8a062983f0b76ba3dded7fc9f9c57f) Add bun.lock to biome ignore list


- [`4342678`](https://github.com/yehezkieldio/portfolio/commit/4342678416269125e84050a175a216d70b6cad19) config: Remove lefthook config


- [`a37b0e3`](https://github.com/yehezkieldio/portfolio/commit/a37b0e3c3c8cdd2e50a9fbfece028d3c4fbf1469) config: Add missing linter style rule


- [`d5b46a8`](https://github.com/yehezkieldio/portfolio/commit/d5b46a8c43e4e0d84862652271b568725b38dfd2) config: Add vercel.json


- [`c14d2f5`](https://github.com/yehezkieldio/portfolio/commit/c14d2f574714259cdc0d9cc73283df25064cc79d) Add allowedDevOrigins for specific local IP addresses


### <!-- 16 -->🤖 CI/CD

- [`f35dc99`](https://github.com/yehezkieldio/portfolio/commit/f35dc99cd1a1a9a85c4504de48030145ebd0d57f) workflow: Add code quality workflow


- [`3fae4ea`](https://github.com/yehezkieldio/portfolio/commit/3fae4ea40ee2485feacd8a14cd20146ea78be453) code-quality: Enable Tailwind CSS directive parsing in Biome check


- [`81e777b`](https://github.com/yehezkieldio/portfolio/commit/81e777b48ea38be7318b11224bc153bde8b8e9f3) Add GitHub Actions workflow for automated Vercel deployments


- [`5130d7a`](https://github.com/yehezkieldio/portfolio/commit/5130d7ad515f33704c8c5496e21da7ff23fc50a4) workflows: Capitalize environment names for production and development


- [`45ec69d`](https://github.com/yehezkieldio/portfolio/commit/45ec69d4792750a0f030c565e9d5996ee9a82404) code-quality: Remove tailwindcss parsing flag from biome ci


### <!-- 2 -->🧩 Dependencies Updates

- [`0a56dea`](https://github.com/yehezkieldio/portfolio/commit/0a56dea8cbb11440eb458cb6b78a1f1fb1068fcf) deps: Update dependency @types/node to ^20.19.23 ([#8](https://github.com/yehezkieldio/portfolio/issues/8))by renovate[bot]


- [`f119841`](https://github.com/yehezkieldio/portfolio/commit/f119841e2f1b665436821ccf37e2ccf62286fd01) deps: Update dependency typescript to ^5.9.3 ([#9](https://github.com/yehezkieldio/portfolio/issues/9))by renovate[bot]


- [`c83da12`](https://github.com/yehezkieldio/portfolio/commit/c83da1224787aa07f55c4db98b34f3caa086b1aa) deps: Update react monorepo to ^19.2.2 ([#10](https://github.com/yehezkieldio/portfolio/issues/10))by renovate[bot]


- [`c99c1d7`](https://github.com/yehezkieldio/portfolio/commit/c99c1d7c0d195ae8a15e729ed0b20c099615d76c) deps: Update tailwindcss monorepo to ^4.1.16 ([#12](https://github.com/yehezkieldio/portfolio/issues/12))by renovate[bot]


- [`e03cc8e`](https://github.com/yehezkieldio/portfolio/commit/e03cc8e963346b0ad6c160709063554eee9ea1ce) deps: Update dependency @biomejs/biome to v2.3.1 ([#13](https://github.com/yehezkieldio/portfolio/issues/13))by renovate[bot]


- [`e41016e`](https://github.com/yehezkieldio/portfolio/commit/e41016ea421539f0377c657770bfb0efc4dcd8ef) deps: Update dependency ultracite to v6.0.3 ([#14](https://github.com/yehezkieldio/portfolio/issues/14))by renovate[bot]


### <!-- 3 -->🚀 New Features

- [`b903b8b`](https://github.com/yehezkieldio/portfolio/commit/b903b8b7e3c03a827c6e0b7d71b6cd922abf497d) ui: Update global theme and fonts


- [`dc24f93`](https://github.com/yehezkieldio/portfolio/commit/dc24f935a0d937dc7238f51c4deb14206430fbab) ui: Add theme-provider using next-themes


- [`395b1b1`](https://github.com/yehezkieldio/portfolio/commit/395b1b109b5786e0b3fba7a618ae336b8ac56c01) ui: Add theme transition styles


- [`72981b7`](https://github.com/yehezkieldio/portfolio/commit/72981b774950cb0e63730c516fbd89756c7ac8ff) ui: Add navigation bar with theme toggle and update home layout


- [`d6b522d`](https://github.com/yehezkieldio/portfolio/commit/d6b522dbf26d3755af305cd1fd8f458b29597510) navigation: Add responsive mobile menu with toggle and overlay


- [`1ec2d7e`](https://github.com/yehezkieldio/portfolio/commit/1ec2d7e640619a30d11b57f040959232663241ea) ui: Add homepage layout and styles


- [`3da990a`](https://github.com/yehezkieldio/portfolio/commit/3da990aadbe40f88d4dabdede61e46aee6faa731) Rework


- [`826c10b`](https://github.com/yehezkieldio/portfolio/commit/826c10bac55556deac7adbe48785f542596f152d) projects: Add projects primitive components


- [`9467c1a`](https://github.com/yehezkieldio/portfolio/commit/9467c1a211335a9d1edf2269d35053a73e2c3385) layout: Set default theme to dark for consistent initial UI experience


- [`a7404d0`](https://github.com/yehezkieldio/portfolio/commit/a7404d055bdc8de45ef322024ed7f148f69d4a0b) ui: Add github icon and tweak theme


- [`7b47afd`](https://github.com/yehezkieldio/portfolio/commit/7b47afd7e3e2bcb9dcd6daab0166ba2b63ef897e) projects: Add project images and entries


- [`9902f68`](https://github.com/yehezkieldio/portfolio/commit/9902f68b0683b493b00431b7249e4eafe9653449) projects: Add GitLab icon and support for GitLab source URLs in cards


- [`ed8573f`](https://github.com/yehezkieldio/portfolio/commit/ed8573f0a8ffb5e35e98ad5c836fef9994a0f1a5) projects: Add Aqua project entry with image and metadata to list


- [`e9ac0f3`](https://github.com/yehezkieldio/portfolio/commit/e9ac0f337f37b4eda63ae991e5a9aabb448c3cf0) project-card: Add popover to display additional technologies beyond four


- [`e8ebe23`](https://github.com/yehezkieldio/portfolio/commit/e8ebe23a6454872bc2b807640e8d0bc213c7c9d9) projects: Add new project entries with images and update card tech slice limit


- [`26ec914`](https://github.com/yehezkieldio/portfolio/commit/26ec9143bc32a1ac6a76295a13ba602910c0e142) projects: Update categories and years, add new projects with images


### <!-- 4 -->🐛 Bug Fixes

- [`758f4d4`](https://github.com/yehezkieldio/portfolio/commit/758f4d499bf75795ae815ea4257fd1f42866616e) ui: Remove ghost hover styles


- [`3b341cc`](https://github.com/yehezkieldio/portfolio/commit/3b341cccef5c55adcf0cd57bfbae625d054423b4) projects: Sort results by year in descending order for consistency


### <!-- 5 -->📚 Documentation

- [`8ca8454`](https://github.com/yehezkieldio/portfolio/commit/8ca845404f9a6a6f5e21910d68dce1fb2cf28509) Remove quality checklist


### <!-- 7 -->🚜 Refactor

- [`d2ef55b`](https://github.com/yehezkieldio/portfolio/commit/d2ef55bb247b63884011bf0fe273e916744e67ed) navigation: Reduce nav links to projects


- [`92fdd57`](https://github.com/yehezkieldio/portfolio/commit/92fdd570b6fde93f458c74f6bb4e2a01986b6ed4) projects: Convert to server components


- [`8e456af`](https://github.com/yehezkieldio/portfolio/commit/8e456afd259c85151c7159a51e0122fe81e813a7) projects: Consolidate suspense wrappers


### <!-- 9 -->🎨 Code Styling

- [`28191c0`](https://github.com/yehezkieldio/portfolio/commit/28191c0439d2bf463c2009f46f93c309abde986a) navigation: Update link tracking from wide to normal for improved text appearance


- [`0512181`](https://github.com/yehezkieldio/portfolio/commit/05121814737094498730b578a5729977b4b5f412) layout.tsx: Move globals.css import to top for consistent import order

