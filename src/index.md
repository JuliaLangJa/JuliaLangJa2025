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
  - title: 意見交換会
    details: 大岡山キャンパス内にて19時頃から2時間の意見交換会を予定しています。
---

## 概要

下記の要綱にて JuliaLang Japan 2025 を開催します。ぜひ周知のご協力を賜れますと幸いです。皆様のご参加をお待ちしております。

| 項目 | 内容 |
| --- | --- |
| 対象 | Julia言語に関連することであれば内容不問 |
| 日時 | 2025年12月13日(土) 13:00 - |
| 方式 | 対面 (定員273名) / Zoom ハイブリット |
| 会場 | [東京科学大学 大岡山キャンパス レクチャーシアター](https://www.ssc.titech.ac.jp/amap/home/ookayama/west/lecture-bldg1/) |
| 最寄り駅 | 大岡山駅（東急目黒線・東急大井町線） |
| 意見交換会 | キャンパス内 第二食堂にて 18:40-20:40 |
| 参加登録 | https://forms.gle/jit5sPZPqnEHtxBR7 |
| ハッシュタグ | [`#JuliaLangJa2025`](https://x.com/hashtag/JuliaLangJa2025) |

## 参加登録

https://forms.gle/jit5sPZPqnEHtxBR7 よりご登録ください。

## プログラム

プログラムは発表の申し込み状況などに合わせて変更する可能性があります。掲載されている発表順は暫定的なものであり、最終的な発表順は追って決定します。また、発表内容は予告なく変更される場合があります。

| 時間          | 内容 |
| ------------- | --- |
| 12:40 -       | 開場|
| 13:00 - 13:10 | [開会式](#開会式) |
| 13:10 - 13:50 | [招待講演](#招待講演) × 2 |
|               | 10分 休憩・議論 |
| 14:00 - 14:40 | [メイントーク](#メイントーク) × 2 |
|               | 10分 休憩・議論 |
| 14:50 - 15:40 | [ライトニングトーク](#ライトニングトーク) × 10 |
|               | 20分 集合写真・休憩・議論 |
| 16:00 - 17:00 | [メイントーク](#メイントーク) × 3 |
|               | 10分 休憩・議論 |
| 17:10 - 18:10 | [メイントーク](#メイントーク) × 3 |
| 18:10 - 18:20 | [閉会式](#閉会式) |
| 18:40 - 20:40 | 意見交換会 |
|               | 意見交換会終了後、撤収作業 |

## 開会式

- 担当: 大野 周平
- 議題: 開会の挨拶, 開催の経緯説明, アンケート結果報告, 関連イベント紹介, 諸連絡
- 概要: Julia言語を共通言語として地域や分野の垣根を越えた交流を図ると共に、アジア初の『JuliaCon』開催に向けて国内コミュニティの結束を強化することを目的として、[JuliaTokyo](https://juliatokyo.connpass.com/)、[JuliaTokai](https://juliatokai.connpass.com/)、[Julia in Physics](https://ohno.github.io/julia_in_physics_2024/)の運営メンバー等による研究会『JuliaLang Japan 2025』を開催します。

## 招待講演

招待講演では、学術界・産業界の第一線で活躍するお二人をお招きし、他言語での経験を基づいた視点からJuliaに関する新鮮な見方をご講演いただきます。

### 招待講演1

- 演者: 尾崎 克久（芝浦工業大学 教授）
- 題目: Juliaにおける行列積のエミュレーション
- 概要: 本講演では，長年MATLABを活用してきた立場から，高精度計算に関してJuliaを使用した際の印象を共有する．具体的には，コード生成の容易さおよび実際の計算パフォーマンスの観点から，MATLABとの比較を交えながら報告する．さらに，近年注目を集めている行列積のエミュレーション手法である尾崎スキーム（Ozaki Scheme）をJulia上で実装した結果についても紹介する．

### 招待講演2

- 演者: 田本 芳文（株式会社MatrixFlow 代表）
- 題目: Pythonユーザーが見たJulia ― 数値計算の思想と広がる応用
- 概要: Pythonを中心に利用してきた経験を踏まえ、Juliaの設計思想や数値計算分野での表現力・一貫性について感じた点を共有する。また、Webフレームワーク Oxygen の例にも触れ、科学計算以外の領域にも広がるJulia活用の動きを見ていく。

## メイントーク

メイントークでは、交代・質疑応答を含む各20分でJuliaに関連する幅広い話題をご講演いただきます。

### メイントーク1

- 演者: 清水 団（城北中学校＋高等学校）
- 題目: Julia言語と高校数学
- 概要: Julia言語を利用して高校数学を学ぶ5日間のコースウェアを作成し、8月に本校の中学3年、高校1年生約80名を対象に授業を実施しました。その概要と授業の様子を報告します。Julia言語を用いることによって、従来の高校数学のアプローチと異なる流れになっており、新しいの高校数学を学習の提案となっています。
- 資料: [PDF](https://shimizudan.github.io/20250824-28summer-semi/julialang_japan_2025_report.pdf)

### メイントーク2

- 演者: 松井 勇佑（東京大学 情報理工学系研究科 講師）
- 題目: 東大１年生にJulia教えてみた
- 概要: 東京大学の全ての１年生は、研究活動を体験する少人数チュートリアル講義である「初年次ゼミナール」を受講します。私はJuliaを用いて線形代数・最適化・機械学習を体験する初年次ゼミナール講義を開講しました。その取り組みの内容を紹介し、大学初等教育において学生が線形代数の内容を実際に自身でコーディングして計算することの重要性を議論します。そしてそのために、Google Colaboratory上で簡単に実行可能で、行列演算をシンプルに記述出来るJuliaの可能性を論じます。
- 資料: [スライド](https://speakerdeck.com/matsui_528/dong-da-1nian-sheng-nijuliajiao-etemita)

### メイントーク3

- 演者: 王 安清（東北大学D1, 環境科学研究科福島研）
- 題目: Juliaと線形代数の基礎：ソルバー選定とコード性能最適化
- 概要: 本講演では、Julia エコシステムにおける線形方程式ソルバーを概観する（LU／QR／Cholesky などの直接法、CG／GMRES／MINRES／BiCGStab などの反復法、疎行列や前処理を含む）。さらに、既存ソルバーが適合しない場面で自作する際の性能上の落とし穴（不要アロケーション、キャッシュ非局所性、BLAS・スレッド設定等）と最適化指針を整理する。具体例として Jacobian-Free Newton–Krylov (JFNK) と ブロック三重対角系に対する Thomas 法 の実装を取り上げ、設計判断・計測・チューニングの勘所を示す。（発表言語：英語）

### メイントーク4

- 演者: 山口 悠地（東京科学大）
- 題目: JETLS.jl: Julia コンパイラインフラを活用した新世代 Language Server
- 概要: 発表者も開発に参加している Julia 言語の新世代 Language Server である JETLS.jl を紹介します．JETLS.jl は最新の Julia コンパイラインフラを最大限活用して，高度な解析を少ない開発コストとメンテナンス負荷で実現します．本発表では JETLS.jl の概要の紹介にとどまらず，その実装についても述べて最近の Julia コンパイラフロントエンドの進化についても取り上げます．

### メイントーク5

- 演者: 本山 裕一（東大物性研）
- 題目: プロパティベーステスト in JuliaLang
- 概要: JuliaLangにおけるプロパティベーステストパッケージSupposition.jlを用いて、プロパティベーステストについて説明する。

### メイントーク6

- 演者: 佐原 恭平（京都大学D2）
- 題目: DFTK.jl による量子化学計算の性能評価
- 概要: 特に計算科学が専門でない分野では、レガシーシステムによって研究が進められるケースが多く見受けられる。 2025 年、量子化学計算において従来型のパッケージから Python に切り替えた場合のコスト等を比較する実験を行ったが（[https://proceedings.scipy.org/articles/dvta2583](https://proceedings.scipy.org/articles/dvta2583)）、今回はさらに Julia にまで対象を広げてこれを検証する。

### メイントーク7

- 演者: 羽田 哲也（株式会社サイカ）
- 題目: データ分析の実務における Julia
- 概要: 本講演では、データ分析の実務でJuliaを使っている立場から、Juliaの利点を具体例とともに共有する。標準的な手法を拡張したり組み合わせたりする場面を取り上げ、そのような分析においてJuliaがなぜ有効かを論じる。また、インタラクティブな探索における速度の重要性や、LLMとの分業といった観点にも触れる。

## ライトニングトーク

ライトニングトークでは、交代・質疑応答を含む各5分でJuliaに関連する幅広い話題をご講演いただきます。

### ライトニングトーク1

- 演者: 三輪 涼雅（大阪大D1）
- 題目: Tullioによる計算の高速化
- 概要: 本発表では、数値計算ライブラリのTullioを紹介する。数値計算では多重ループを並列化や行列演算に落とし込むなどして、その計算速度を効率化することがしばしば求められる。そのような効率化の手法の一つとして、フレキシブルな縮約計算を行えるTullioが挙げられる。ここでは量子力学における相関関数の数値計算を例に、その使用法を簡単に紹介する。

### ライトニングトーク2

- 演者: 後藤 俊介（JuliaTokai / JuliaLangJa）
- 題目: Julia のコミュニティ運営やってます(仮)
- 概要: 地域コミュニティ立ち上げから始まり現在「JuliaLangJa」Discordサーバの管理者やってます。皆さんご遠慮なく参加して日本のJuliaをどんどん盛り上げましょう！(仮)

### ライトニングトーク4

- 演者: 寺崎 敏志
- 題目: Juliaマニュアル自動翻訳プロジェクトのお話し
- 概要: Juliaマニュアルを日本語で読めるようにChatGPTAPIで翻訳するプロジェクトを紹介する。

### ライトニングトーク5

- 演者: 菅原 宏治（都立大）
- 題目: Shiki Style を用いたコードブロックの修飾 ― Using ShikiStyle for decorating Documenter's generated code blocks
- 概要: Documenter.jl が生成するHTMLコードブロックを ShikiStyle を用いて修飾できるようにした。複数行の背景色をネストレベルに応じて付与する機能を独自に追加した。新規パッケージの作成時に ShikiStyle を導入する PkgTemplates.jl のプラグインを開発・公開した。<br>[https://github.com/hsugawa8651/PkgTemplatesShikiPlugin.jl](https://github.com/hsugawa8651/PkgTemplatesShikiPlugin.jl)<br>[https://hsugawa8651.github.io/DocumenterShikiDemo.jl/dev/](https://hsugawa8651.github.io/DocumenterShikiDemo.jl/dev/)

### ライトニングトーク6

- 演者: 大野 周平（横浜市大D3, 理研JRA）
- 題目: 少数多体系物理学におけるJuliaパッケージ開発
- 概要: 我々は[JuliaFewBody](https://github.com/JuliaFewBody)を立ち上げ, 少数多体系物理学におけるオープンソースソフトウェア（OSS）の開発を行っている. 開発の背景, 方針, テスト設計を紹介し, エコシステム全体の展望を述べる.

### ライトニングトーク7

- 演者: 真武 正伍　(神戸大B4)
- 題目: 非O(4)対称下でのgradient flow法を用いた一次相転移率の数値的評価
- 概要: 標準模型の拡張においてヒッグス場の一次相転移が起こる場合があり、その相転移率は宇宙論的帰結を決定するために重要な量である。我々は有限温度下やソリトンなどの不純物存在下などの対称性の低い状況下での相転移率の数値的評価方法をgradient flow法を用いて定式化した。さらに有限温度下などでの数値計算を実際にJuliaで実装した。

### ライトニングトーク8

- 演者: 安永 隼輔 (東京科学大D2, 理研アルバイト)
- 題目: Juilaを用いた格子QCDと機械学習
- 概要: TBA

### ライトニングトーク9

- 演者: 富谷 昭夫（東京女子大学専任講師, 京都大学特定准教授）
- 題目: 格子QCDにおける勾配流でのトポロジーの研究
- 概要: 格子QCDでは時空は離散的になっているが、勾配流を用いるとゲージ場のトポロジーを定義でき、計算できる。その計算をJuliaにて計算したがその経緯や結果について講演する。

### ライトニングトーク10

- 演者: 浦野翔哉（北大D2）
- 題目: 高精度計算入門
- 概要: TBA

### ライトニングトーク11

- 演者: 佐藤建太（株式会社リコー）
- 題目: Julia昔話（仮）
- 概要: TBA

## 閉会式

- 担当: 富谷 昭夫
- 議題: JuliaCon Local Japan 2026 に向けて
- 概要: Julia言語のコミュニティが主催する国際会議『JuliaCon』は、これまでアメリカを中心に欧米諸国で開催されてきた。アメリカ以外ではイギリス（ロンドン, 2018）、オランダ（アイントホーフェン, 2024）、ドイツ（フランクフルト, 2026）で開催されている。通常のJuliaCon（JuliaCon Global）の他にも『JuliaCon Local』という地域単位の会議も開催されおり、2023年12月には [JuliaCon Local Eindhoven 2023](https://juliacon.org/local/eindhoven2023/) がオランダ・アイントホーフェンで、2025年10月には [JuliaCon Local Paris 2025](https://juliacon.org/local/paris2025/) がフランス・パリで開催された。このように、JuliaConはいずれも欧米諸国での開催に留まっており、日本をはじめとするアジア諸国での開催事例はない。私たちは、アジア初のJuliaCon開催という大きな挑戦に向け、2025年12月13日(土)に実行委員会を正式に発足する。JuliaCon Local Paris 2025の運営スケジュールおよび [Call for Hosts](https://juliacon.org/2024/callforhosts/) を参考にすれば、JuliaCon Local Japan 2026 の開催は十分に実現可能である。

## アクセス

最寄り駅は **大岡山駅（東急目黒線・東急大井町線）** です。[**大岡山西講義棟１（旧大岡山西５号館）レクチャーシアター**](https://www.ssc.titech.ac.jp/amap/home/ookayama/west/lecture-bldg1/) までお越しください。メインエントランスは３階です。

<div style="max-width: 100%; overflow: hidden; padding-bottom:1em;">
<iframe src="https://www.google.com/maps/d/u/0/embed?mid=1NhRK4EXeB-5VJkBaqUAsjNcRBcF3__Q&ehbc=2E312F&noprof=1" width="640" height="480"></iframe>
</div>

## 当日レポート

Xのハッシュタグは [`#JuliaLangJa2025`](https://x.com/hashtag/JuliaLangJa2025?f=live) です。https://x.com/hashtag/JuliaLangJa2025?f=live よりご覧ください。

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
- [永井 佑紀](https://github.com/cometscome) (東京大学)
- [横山 俊一](https://sites.google.com/view/s-yokoyama/) (東京都立大学)
- TBA

---

本会議は[科学研究費補助金学術変革領域研究A「学習物理の創成」](https://mlphys.scphys.kyoto-u.ac.jp/)からの補助を受けています。
