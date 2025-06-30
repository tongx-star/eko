# New Eko - AI表单自动填写项目

基于Eko AI的智能表单自动填写工具，可以自动识别网页表单并填写测试数据。

## 功能特性

- 🤖 智能表单识别
- 📝 自动填写表单字段
- 🌐 支持多种网页表单
- ⚡ 基于AI的智能操作

## 环境要求

- Node.js >= 18.0.0
- npm >= 8.0.0

## 安装配置

1. 克隆项目到本地
2. 安装依赖：
   ```bash
   npm install
   ```

3. 配置环境变量：
   ```bash
   cp .env.example .env
   # 编辑 .env 文件，填入您的API密钥
   ```

4. 运行项目：
   ```bash
   npm start
   ```

## 环境变量配置

在 `.env` 文件中配置以下变量：

- `DASHSCOPE_API_KEY`: 阿里云DashScope API密钥

## 使用说明

运行程序后，系统将自动：
1. 打开浏览器
2. 访问测试表单页面
3. 智能识别表单字段
4. 填写测试数据
5. 提交表单并确认结果

## 支持的测试表单

- httpbin.org/forms/post - 简单测试表单
- the-internet.herokuapp.com/login - 登录表单
- demoqa.com/text-box - 文本框表单
- W3Schools表单示例

## 开发模式

```bash
npm run dev
```

## 许可证

MIT License 