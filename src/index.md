---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "JuliaLang Japan 2025"
  # text: "#JuliaLangJa2025"
  tagline: 2025年12月13日(土)<br>東京科学大学 大岡山キャンパス
  image:
    src: ./square.svg
    alt: JuliaLangJa Logo
  actions:
    - theme: brand
      text: 参加登録
      link: /#参加登録
    - theme: alt
      text: お問い合わせ
      link: /#お問い合わせ

features:
  - title: メイントーク
    details: 各20分の発表を行います。Juliaに関係することであれば内容は問いません。
  - title: ライトニングトーク
    details: 各5分の発表を行います。Juliaに関係することであれば内容は問いません。
  - title: 懇親会
    details: 大岡山キャンパス内にて19時頃から2時間の懇親会を予定しています。
---

## 概要

下記の要綱にて JuliaLang Japan 2025 を開催します。皆様のご参加をお待ちしております。

| 項目 | 内容 |
| --- | --- |
| 対象 | Julia言語に関連することであれば内容不問 |
| 日時 | 2025年12月13日(土) 13:00 - 19:00 |
| 方式 | 対面 (定員273名) / Zoom ハイブリット |
| 会場 | [東京科学大学 大岡山キャンパス レクチャーシアター](https://www.ssc.titech.ac.jp/amap/home/ookayama/west/lecture-bldg1/) |
| 最寄り駅 | 大岡山駅（東急目黒線・東急大井町線） |
| 懇親会 | キャンパス内 第二食堂にて 18:40-20:40 |
| 参加登録 | https://forms.gle/jit5sPZPqnEHtxBR7 |
| ハッシュタグ | [`#JuliaLangJa2025`](https://x.com/hashtag/JuliaLangJa2025) |

## 参加登録

https://forms.gle/jit5sPZPqnEHtxBR7 よりご登録ください。

## プログラム

プログラムは発表の申し込み状況などに合わせて変更する可能性があります。

| 時間          | 内容 |
| ------------- | --- |
| 12:40 -       | 開場|
| 13:00 - 13:20 | 開会式, 諸連絡 |
| 13:20 - 14:00 | [トーク](#メイントーク) × 2 |
|               | 30分 集合写真・休憩・議論 |
| 14:30 - 15:30 | [トーク](#メイントーク) × 3 |
|               | 20分 休憩・議論 |
| 15:50 - 16:30 | [LT](#ライトニングトーク) × 8 |
|               | 20分 休憩・議論 |
| 16:50 - 17:50 | [トーク](#メイントーク) × 3 |
| 17:50 - 18:10 | 20分 予備時間  |
| 18:10 - 18:20 | 閉会式 |
| 18:40 - 20:40 | 懇親会 |

## メイントーク

※ 発表順は追って決定します. 発表内容は予告なく変更される場合があります.

### メイントーク1

- 演者: 清水 団（城北中学校＋高等学校）
- 題目: Julia言語と高校数学
- 概要: Julia言語を利用して高校数学を学ぶ5日間のコースウェアを作成し、8月に本校の中学3年、高校1年生約80名を対象に授業を実施しました。その概要と授業の様子を報告します。Julia言語を用いることによって、従来の高校数学のアプローチと異なる流れになっており、新しいの高校数学を学習の提案となっています。

### メイントーク2

- 演者: 王 安清（東北大学D1, 環境科学研究科福島研）
- 題目: Juliaと線形代数の基礎：ソルバー選定とコード性能最適化
- 概要: 本講演では、Julia エコシステムにおける線形方程式ソルバーを概観する（LU／QR／Cholesky などの直接法、CG／GMRES／MINRES／BiCGStab などの反復法、疎行列や前処理を含む）。さらに、既存ソルバーが適合しない場面で自作する際の性能上の落とし穴（不要アロケーション、キャッシュ非局所性、BLAS・スレッド設定等）と最適化指針を整理する。具体例として Jacobian-Free Newton–Krylov (JFNK) と ブロック三重対角系に対する Thomas 法 の実装を取り上げ、設計判断・計測・チューニングの勘所を示す。（発表言語：英語）

### メイントーク3

- 演者: 山口 悠地（東京科学大）
- 題目: JETLS.jl: Julia コンパイラインフラを活用した新世代 Language Server
- 概要: 発表者も開発に参加している Julia 言語の新世代 Language Server である JETLS.jl を紹介します．JETLS.jl は最新の Julia コンパイラインフラを最大限活用して，高度な解析を少ない開発コストとメンテナンス負荷で実現します．本発表では JETLS.jl の概要の紹介にとどまらず，その実装についても述べて最近の Julia コンパイラフロントエンドの進化についても取り上げます．

### メイントーク4

- 演者: Hiroshi Shinaoka (Associate professor, Saitama University)
- 題目: Bridging Julia and C++/Rust for Scientific Computing
- 概要: JuliaはC-FFIを介して多様なプログラミング言語と連携できる柔軟な環境を備えている. 本発表では, 計算物理の応用を念頭に, Juliaライブラリ (SparseIR.jl) のバックエンドとしてC++およびRustを採用した事例を紹介する. LAPACK/BLASやMPIといった外部ライブラリへの依存関係をどのように扱い, 可搬性の高いパッケージとして構築するかについても議論する. 発表内容は, 寺崎敏志氏 (AtelierArith), Markus Wallerberger氏 (TU Wien) との共同研究に基づいている.

### メイントーク5

- 演者: 本山 裕一（東大物性研）
- 題目: プロパティベーステスト in JuliaLang
- 概要: JuliaLangにおけるプロパティベーステストパッケージSupposition.jlを用いて、プロパティベーステストについて説明する。

### メイントーク6

- 演者: 佐原 恭平（京都大学D2）
- 題目: Fermi.jl による量子化学計算の性能評価
- 概要: 特に計算科学が専門でない分野では、レガシーシステムによって研究が進められるケースが多く見受けられる。 2025 年、量子化学計算において従来型のパッケージから Python に切り替えた場合のコスト等を比較する実験を行ったが（https://proceedings.scipy.org/articles/dvta2583）、今回はさらに Julia にまで対象を広げてこれを検証する。

### メイントーク7

- 演者: 富谷 昭夫（東京女子大学専任講師, 京都大学特定准教授）
- 題目: 格子QCDにおける勾配流でのトポロジーの研究
- 概要: 格子QCDでは時空は離散的になっているが、勾配流を用いるとゲージ場のトポロジーを定義でき、計算できる。その計算をJuliaにて計算したがその経緯や結果について講演する。

### メイントーク8

TBA

## ライトニングトーク

※ 発表順は追って決定します. 発表内容は予告なく変更される場合があります.

### ライトニングトーク1

- 演者: 三輪涼雅（大阪大D1）
- 題目: Tullioによる計算の高速化
- 概要: TBA

### ライトニングトーク2

- 演者: 石井 大輔
- 題目: オープンソース実験による格子暗号アルゴリズムの実装的検証と計算効率評価
- 概要: 本研究は、量子計算の登場により従来の公開鍵暗号（RSAやECC）が脅かされる中で、有力な耐量子候補とされる格子暗号の実用化を目指す試みである。特に、理論的には堅牢だが、計算コストや基底簡約の複雑性、大きな鍵サイズといった課題を抱える現状を踏まえ、オープンソース実験基盤を通じて理論と実装のギャップを埋めようとする。プロジェクトでは、格子構築・基底簡約・暗号処理を段階的に開発・検証し、計算効率や数値安定性を定量的に評価する。現在、イデアル格子構成ライブラリ（ビルダー）、基底ベクトル簡約アルゴリズム（ソルバー）、およびKZ簡約アルゴリズム（ソルバー）を実装中である。これらを用いて、Lattice Challengeなどの公開ベンチマークを通し、格子次元に対するスケーラビリティや計算時間の複雑性を測定する。得られた成果はオープンデータとして公開し、再現可能な基準を提供することを目的とする。最終的には、世界水準の格子簡約に要する計算努力を明らかにし、次世代のポスト量子暗号設計に実践的洞察をもたらす。

### ライトニングトーク3

- 演者: 後藤 俊介（JuliaTokai / JuliaLangJa）
- 題目: Julia のコミュニティ運営やってます(仮)
- 概要: 地域コミュニティ立ち上げから始まり現在「JuliaLangJa」Discordサーバの管理者やってます。皆さんご遠慮なく参加して日本のJuliaをどんどん盛り上げましょう！(仮)

### ライトニングトーク4

- 演者: 寺崎敏志
- 題目: Juliaマニュアル自動翻訳プロジェクトのお話し
- 概要: Juliaマニュアルを日本語で読めるようにChatGPTAPIで翻訳するプロジェクトを紹介する。

### ライトニングトーク5

- 演者: 菅原宏治（都立大）
- 題目: shiki style を用いた Documenter.jl の syntax highlighting    
- 概要: TBA

### ライトニングトーク6


### ライトニングトーク7

TBA

### ライトニングトーク8

TBA

### ライトニングトーク9

TBA

### ライトニングトーク10

TBA

### ライトニングトーク11

TBA

### ライトニングトーク12

TBA

## 閉会式

- 司会: 大野 周平（横浜市立大学D3, 理化学研究所JRA）
- 議題: JuliaCon Local Japan 2026 に向けて
- 概要: Julia言語のコミュニティが主催する国際会議『JuliaCon』は、これまでアメリカを中心に欧米諸国で開催されてきた。アメリカ以外ではイギリス（ロンドン, 2018）、オランダ（アイントホーフェン, 2024）、ドイツ（フランクフルト, 2026）で開催されている。通常のJuliaCon（JuliaCon Global）の他にも『JuliaCon Local』という地域単位の会議も開催されおり、2023年12月には [JuliaCon Local Eindhoven 2023](https://juliacon.org/local/eindhoven2023/) がオランダ・アイントホーフェンで、2025年10月には [JuliaCon Local Paris 2025](https://juliacon.org/local/paris2025/) がフランス・パリで開催されている。このように、いずれも欧米諸国での開催に留まっており、日本をはじめとするアジア諸国での開催事例はない。私たちは、アジア初のJuliaCon開催という大きな挑戦に向けた準備を始めており、2025年12月13日(土)に実行委員会を正式に発足したい。JuliaCon Local Paris 2025の運営スケジュールおよび[Call for Hosts](https://juliacon.org/2024/callforhosts/) を参考にすれば、JuliaCon Local Japan 2026 の開催は十分に実現可能である。

## アクセス

最寄り駅は **大岡山駅（東急目黒線・東急大井町線）** です。[**大岡山西講義棟１（旧大岡山西５号館）レクチャーシアター**](https://www.ssc.titech.ac.jp/amap/home/ookayama/west/lecture-bldg1/) までお越しください。メインエントランスは３階です。

<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3243.9395791651054!2d139.6797488757844!3d35.604556972612066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018f5305d0b00d1%3A0x74189cc8c3e7599a!2z44CSMTQ1LTAwNjEg5p2x5Lqs6YO95aSn55Sw5Yy655-z5bed55S677yR5LiB55uu77yT77yRIOWkp-WyoeWxseilv-ism-e-qeajnzHvvIjjg6zjgq_jg4Hjg6Pjg7zjgrfjgqLjgr_jg7zvvIk!5e0!3m2!1sja!2sjp!4v1761110827895!5m2!1sja!2sjp" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe><br>

## 当日レポート

Xのハッシュタグは [`#JuliaLangJa2025`](https://x.com/hashtag/JuliaLangJa2025) です。https://x.com/hashtag/JuliaLangJa2025 よりご覧ください。

## アンケート結果

参加登録の終了後、アンケートの集計結果を公開します。

## お問い合わせ

[参加登録フォーム](#参加登録)に記載のメールアドレスまたは[JuliaLangJaのDiscord](https://julialangja.github.io/)にてご連絡ください。

## 実行委員会

- [大野 周平](https://github.com/ohno) (理化学研究所・横浜市立大学)
- [村田 賢太](https://github.com/mrkn) (株式会社サイカ)
- [寺崎 敏志](https://github.com/AtelierArith) (AtelierArith)
- [山下 真](http://www.opt.comp.isct.ac.jp/yamashita/) (東京科学大学)
- [山口 悠地](https://github.com/abap34) (東京科学大学)
- [富谷 昭夫](https://github.com/akio-tomiya) (東京女子大学・京都大学・理化学研究所)
- [後藤 俊介](https://github.com/antimon2) (有限会社来栖川電算)
- TBA

---

本会議は[科学研究費補助金学術変革領域研究A「学習物理の創成」](https://mlphys.scphys.kyoto-u.ac.jp/)からの補助を受けています。
