# 使用 Node.js 官方镜像作为基础镜像
FROM node:14

# 创建并设置工作目录
WORKDIR /app

# 将应用程序代码复制到容器中
COPY package.json package-lock.json /app/
RUN npm install
COPY . /app/

# 设置环境变量
ENV PORT=7819

# 暴露容器的端口，用于与宿主机通信
EXPOSE $PORT

# 启动应用程序
CMD ["node", "app.js"]
