FROM node:20.8.1

WORKDIR /app

COPY . /app

# パッケージの更新
RUN apt-get update
# キャッシュクリーンアップと不要なリストの削除
RUN apt-get clean && rm -rf /var/lib/apt/lists/*
# リナックスコマンドのパッケージインストール
RUN apt-get update && apt-get install -y vim less sudo tree
# 軽量系のnodeをインストールするなら以下のコメント外す
# RUN npm install --global yarn

# bunのインストール
RUN curl -fsSL https://bun.sh/install | bash
ENV BUN_PORT=3000

ENV LANG=C.UTF-8
ENV TZ=Asia/Tokyo

EXPOSE 3000