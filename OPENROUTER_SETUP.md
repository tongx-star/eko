# OpenRouter + Google Gemini 配置指南

## 📋 配置说明

本项目已配置为使用 **Google Gemini 2.0 Flash** 模型通过 **OpenRouter** API。

## 🔧 模型配置详情

```javascript
const llms = {
  default: {
    provider: "openai",                              // OpenRouter兼容OpenAI格式
    model: "google/gemini-2.0-flash-exp:free",     // 免费的Gemini 2.0模型
    apiKey: "your-openrouter-api-key",              // 你的API密钥
    config: {
      baseURL: "https://openrouter.ai/api/v1",      // OpenRouter API端点
      temperature: 0.2,                              // 控制输出随机性
    }
  }
}
```

## 🚀 快速开始

### 1. 环境变量配置（推荐）

创建 `.env` 文件：
```bash
# OpenRouter API配置
OPENROUTER_API_KEY=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

# 可选：应用信息
APP_NAME=Eko Auto Form Filler
APP_URL=http://localhost:3000
```

### 2. 直接运行

如果不想使用环境变量，代码中已经包含了你提供的API密钥作为fallback。

### 3. 启动项目

```bash
npm start
```

## 🔍 技术原理

### OpenRouter工作方式
- **统一接口**: OpenRouter提供统一的OpenAI兼容API
- **多模型支持**: 通过一个API访问400+不同的LLM模型
- **自动路由**: 智能路由到最佳可用的提供商
- **备用机制**: 自动故障转移确保高可用性

### Eko集成方式
- **Provider**: 使用 `"openai"` 因为OpenRouter兼容OpenAI API格式
- **BaseURL**: 指向OpenRouter的API端点
- **Model**: 使用OpenRouter的模型标识符格式

## 📊 模型特性

**Google Gemini 2.0 Flash (免费版)**
- ✅ **免费使用**: 不消耗额度
- ⚡ **高速响应**: Flash版本优化了推理速度
- 🧠 **多模态**: 支持文本、图像、音频等多种输入
- 🌐 **上下文窗口**: 支持大型上下文

## 🛠️ 故障排除

### 常见错误及解决方案

1. **401 Unauthorized**
   - 检查API密钥是否正确
   - 确认OpenRouter账户状态

2. **模型不可用**
   - 验证模型名称: `google/gemini-2.0-flash-exp:free`
   - 检查模型在OpenRouter上的可用性

3. **网络连接问题**
   - 确认能访问 `https://openrouter.ai/api/v1`
   - 检查防火墙和代理设置

## 🔄 切换其他模型

如需使用其他模型，只需修改 `model` 字段：

```javascript
// 其他可用的Gemini模型
model: "google/gemini-2.5-pro"           // 付费版，更强性能
model: "google/gemini-2.0-flash"         // 标准Flash版本
model: "google/gemma-3n-e4b-it:free"     // 另一个免费模型
```

## 📚 相关资源

- [OpenRouter官网](https://openrouter.ai/)
- [OpenRouter文档](https://openrouter.ai/docs)
- [Gemini模型详情](https://openrouter.ai/google/gemini-2.0-flash-exp:free)
- [Eko官方文档](https://docs.eko.ai/) 