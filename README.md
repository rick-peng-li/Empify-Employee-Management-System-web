<!-- 项目 Git 地址：https://github.com/rick-peng-li/Empify-Employee-Management-System-web.git -->

# Empify 员工管理系统

Empify 是一个前后端分离的员工管理系统，面向企业内部的管理员与员工两类角色，覆盖员工信息管理、考勤打卡、请假审批、工资单管理、个人资料维护等核心场景。项目采用 React + Vite 构建前端界面，Node.js + Express 提供后端 API，MongoDB 负责业务数据存储，并结合 Inngest 实现定时任务与事件驱动提醒。

## 项目简介

本项目适合用于以下场景：

- 企业内部员工管理系统原型或课程项目
- 管理员统一维护员工档案、审批请假、生成工资单
- 员工自助查看个人信息、提交请假、查询工资单、完成上下班打卡
- 需要基于邮件提醒和定时任务扩展业务流程的全栈实践项目

## 核心功能

### 管理员端

- 管理员登录与会话校验
- 员工列表管理、新增员工、编辑员工、软删除员工
- 仪表盘统计：员工总数、当日考勤、待处理请假、部门分布
- 请假审批：查看全部申请并执行批准或驳回
- 工资单生成与查看

### 员工端

- 员工登录与身份鉴权
- 上下班打卡、考勤历史查看、工时统计
- 请假申请提交与状态追踪
- 工资单查看与打印
- 个人资料维护与密码修改
- 个性化仪表盘数据展示

### 自动化能力

- 员工忘记签退时自动发送邮件提醒
- 请假申请长时间未处理时提醒管理员
- 定时检测未打卡员工并发送提醒邮件

## 技术架构

### 整体架构

- 前端：React 19 + Vite 8，负责页面渲染、路由管理与接口调用
- 后端：Node.js + Express 5，提供 RESTful API
- 数据库：MongoDB + Mongoose 9
- 鉴权：JWT + 本地 token 存储
- 定时与事件任务：Inngest
- 邮件服务：Nodemailer

### 前端技术栈

- React 19
- Vite 8
- React Router DOM 7
- Axios
- Tailwind CSS 4
- react-hot-toast
- lucide-react
- date-fns
- ESLint 9

### 后端技术栈

- Node.js
- Express 5
- MongoDB
- Mongoose 9
- JSON Web Token
- bcrypt
- dotenv
- cors
- multer
- Inngest
- Nodemailer
- nodemon

## 目录结构

```text
Empify-Employee-Management-System-web/
├── backend/
│   ├── config/          # 数据库与邮件配置
│   ├── constants/       # 常量定义
│   ├── controllers/     # 业务控制器
│   ├── inngest/         # 事件与定时任务
│   ├── middleware/      # 鉴权中间件
│   ├── models/          # Mongoose 数据模型
│   ├── routes/          # 后端路由
│   ├── package.json
│   ├── seed.js          # 初始化管理员账号
│   └── server.js        # 服务入口
├── frontend/
│   ├── src/
│   │   ├── api/         # Axios 实例与接口配置
│   │   ├── assets/      # 静态资源与配置数据
│   │   ├── components/  # 通用组件
│   │   ├── context/     # 全局状态上下文
│   │   ├── pages/       # 页面级组件
│   │   ├── App.jsx      # 前端路由入口
│   │   └── main.jsx     # 应用挂载入口
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
├── .gitignore
└── README.md
```

## 关键模块说明

### 前端

- `frontend/src/App.jsx`：负责应用主路由与页面入口组织
- `frontend/src/context/AuthContext.jsx`：管理登录态、用户信息与鉴权上下文
- `frontend/src/api/axios.js`：统一配置接口基础地址与请求 token
- `frontend/src/pages/`：按页面划分仪表盘、员工、考勤、请假、工资单、设置等视图
- `frontend/src/components/`：封装表单、弹窗、统计卡片、列表等复用组件

### 后端

- `backend/server.js`：注册中间件、业务路由与 Inngest 服务入口
- `backend/config/db.js`：连接 MongoDB
- `backend/routes/`：按业务拆分认证、员工、个人信息、考勤、请假、工资单、仪表盘接口
- `backend/controllers/`：处理各模块业务逻辑
- `backend/models/`：定义用户、员工、考勤、请假申请、工资单等模型
- `backend/inngest/index.js`：定义自动签退提醒、请假提醒、考勤提醒等后台任务

## 运行环境

启动项目前请确保本地环境满足以下要求：

- Node.js 18 及以上
- npm 9 及以上
- MongoDB 可用实例
- 可选：可用的 SMTP 邮箱配置，用于邮件提醒功能

## 环境变量

后端通过 `.env` 文件读取配置，至少建议包含以下变量：

```env
PORT=4000
MONGO_URI=mongodb://127.0.0.1:27017/empify
JWT_SECRET=your-jwt-secret
ADMIN_EMAIL=admin@example.com
SMTP_USER=your-smtp-user
SMTP_PASS=your-smtp-password
SENDER_EMAIL=your-sender-email
```

前端可按需在 `frontend` 目录下创建 `.env` 文件：

```env
VITE_BASE_URL=http://localhost:4000
```

## 启动方式

### 1. 安装依赖

分别在前后端目录安装依赖：

```bash
cd backend
npm install

cd ../frontend
npm install
```

### 2. 初始化管理员账号

首次使用建议在后端目录执行种子脚本：

```bash
cd backend
npm run node
```

脚本会根据 `ADMIN_EMAIL` 创建管理员账号，默认初始密码为：

```text
admin123
```

首次登录后建议立即修改密码。

### 3. 启动后端服务

```bash
cd backend
npm run server
```

默认监听地址：

```text
http://localhost:4000
```

### 4. 启动前端项目

```bash
cd frontend
npm run dev
```

默认访问地址：

```text
http://localhost:5173
```

## 接口与访问说明

### 默认接口前缀

- 后端接口基础前缀：`/api`
- 前端默认请求地址：`http://localhost:4000/api`

### 主要接口模块

- `/api/auth`：登录、会话校验
- `/api/employees`：员工管理
- `/api/profile`：个人信息与密码修改
- `/api/attendance`：考勤打卡与记录
- `/api/leave`：请假申请与审批
- `/api/payslips`：工资单管理
- `/api/dashboard`：仪表盘统计
- `/api/inngest`：事件与定时任务入口

## 开发说明

- 前后端采用分目录独立管理，适合分别部署或本地并行开发
- 前端通过 `VITE_BASE_URL` 指向后端服务地址
- 后端使用 JWT 鉴权，受保护接口需携带 `Authorization: Bearer <token>` 请求头
- 邮件提醒相关能力依赖 SMTP 配置，未配置时对应功能无法正常发送邮件
- 项目包含 `vercel.json`，可继续扩展前后端部署方案

## 适合二次开发的方向

- 增加角色与权限颗粒度控制
- 引入文件上传与员工头像管理
- 补充单元测试与接口测试
- 对接更完善的审批流与消息通知系统
- 增加 Docker、CI/CD 与生产环境部署配置
