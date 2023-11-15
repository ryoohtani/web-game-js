## Creating a website with javascript
## javascriptでwebサイトの作成

<sub> This is a project file with the theme of learning JS, HTML, and CSS for front-end development. </sub>

<sub> フロントエンドの開発に向けて、JSとHTMLとCSSの学習をテーマにしたプロジェクトファイルです </sub>

**環境構築**

*dockerコマンド*

* ビルドコマンド
```
docker compose build
```
* 環境の立ち上げ
```
docker compose up -d
```
* コンテナにアクセス(python-algorithmsはコンテナ名)
```
docker exec -it webgame bash
```

*javascriptのコマンド*

* nodeのバージョン確認
```
node -v
```

* yarnのバージョン確認
```
yarn -v
```

* Bunのバージョン確認
```
bun -v
```

* ターミナル実行
```
node ファイル名.js
```

* ターミナル実行(Bun)
```
bun ファイル名.js
bun run ファイル名.js
```

* reactの初期実行コマンド
```
npx create-react-app react-my-app --template typescript
※TS不要ならreact-my-appよりあとは不要
react-my-appは好きな名前でOK
```

* reactの実行コマンド
```
yarn start or npm start
```

* ESLintのインストール
```
npm install eslint --save-dev
```

* ESLintの初期設定
```
npm init @eslint/config
```

* jestのインストール
```
npm i -D eslint-plugin-jest
※.eslintrc.jsのpluginsに右を入れる、'jest'
```

* コード修正(fix設定)
```
npx eslint --fix react-my-app/src/ファイル名
.jsをts*にするとTS対応できる
```

* TailwindCssのインストール(react-my-app内に作成)
```
yarn add -D tailwindcss postcss autoprefixer
```

* TailwindCssの初期化(react-my-app内に作成)
```
yarn tailwindcss init -p
```

*gitコマンド*

* ローカルリポジトリの新規作成
```
git init
```

* ファイルの追跡(変更分全て)
```
git add .
```

* コミット
```
git commit
```

* ローカルリポジトリにリモートリポジトリのURLを貼り付ける
```
git remote add gamejs URLを貼り付ける
```

* リモートリポジトリへプッシュ
```
git push -u gamejs main
```

* リモートリポジトリからローカルに反映
```
git fetch
```

* ブランチの移動
```
git checkout main
```

* マージ
```
git merge gamejs/main
```