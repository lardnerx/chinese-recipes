# 给外国人看的中国菜谱 / Chinese Recipes for Foreigners

一个多语言的中国菜谱网站，支持6种语言和5个难度级别。

## 功能特性

- 🥘 4个经典中国菜谱
  - 宫保鸡丁 (Kung Pao Chicken)
  - 麻婆豆腐 (Mapo Tofu)
  - 蛋炒饭 (Egg Fried Rice)
  - 糖醋里脊 (Sweet and Sour Pork)

- 🌍 6种语言支持
  - 中文
  - English
  - 日本語
  - 한국어
  - Français
  - Español

- ⭐ 5个难度级别
  - Level 1: 新手入门
  - Level 2: 进阶入门
  - Level 3: 中级水平
  - Level 4: 专业级
  - Level 5: 大师级

## 技术栈

- 后端：Node.js + Express
- 数据库：SQLite3
- 前端：HTML + CSS + JavaScript

## 快速开始

### 1. 安装依赖

```bash
npm install
```

### 2. 初始化数据库

```bash
node init-db-complete.js
```

### 3. 启动服务器

```bash
npm start
```

或

```bash
node server.js
```

服务器将在 http://localhost:3000 上运行

## 项目结构

```
caipu0516/
├── public/
│   ├── index.html      # 首页
│   └── recipe.html     # 菜谱详情页
├── server.js           # Express 服务器
├── init-db-complete.js # 完整的数据库初始化脚本
├── package.json        # 项目配置
└── README.md           # 项目说明
```

## 许可证

MIT License
