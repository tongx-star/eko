import { Eko } from "@eko-ai/eko";
import { BrowserAgent, FileAgent } from "@eko-ai/eko-nodejs";
import dotenv from "dotenv";

// 加载环境变量
dotenv.config();

const API_KEY = process.env.DASHSCOPE_API_KEY;

// 稳定版本的 LLM 配置
const llms = {
  default: {
    provider: "openai",
    model: "qwen-vl-max-2025-04-08",
    apiKey: API_KEY,
    config: {
      baseURL: "https://dashscope.aliyuncs.com/compatible-mode/v1",
      defaultHeaders: {
        "Content-Type": "application/json",
      },
      maxTokens: 8192,
      temperature: 0.2,
    },
  },
};

async function run() {
  try {
    console.log("🎯 开始执行表单填写任务...");
    console.log("📋 使用稳定版本: 2.1.7");
    
    // 使用最基础的代理配置
    const agents = [new BrowserAgent(), new FileAgent()];
    
    console.log("🔧 创建 Eko 实例...");
    const eko = new Eko({ llms, agents });
    
    console.log("📍 开始执行任务...");
    
    const result = await eko.run(`
请帮我完成以下简单任务：

1. 打开登录页面：https://back-off.domob-inc.cn/user/login?secret-channel=true&tabKey=ACCOUNT
2. 输入邮箱：qurui@domob.cn
3. 输入密码：Admin@1024
4. 点击登录按钮
5. 登录成功后，打开用户列表页面：https://back-off.domob-inc.cn/basic/users
6. 等待页面加载完成
7. 提取并返回用户列表表格第一页的所有数据

注意事项：
- 每次操作后等待页面完全加载
- 如果遇到弹窗或确认框，点击确认
- 最终返回表格中的用户数据，包括所有可见的列信息
    `);
    
    console.log("✅ 任务执行完成");
    console.log("📋 结果:", result.result);
    
    return result.result;
    
  } catch (error) {
    console.error("💥 执行过程中出现错误:", error);
    
    // 输出更详细的错误信息来调试
    console.error("错误详情:");
    console.error("- 错误消息:", error.message);
    console.error("- 错误类型:", error.constructor.name);
    
    // 如果还是有配置问题，提供更多建议
    if (error.message.includes('this.names.indexOf')) {
      console.error("🔍 LLM 配置问题仍然存在，可能的解决方案：");
      console.error("  1. 检查环境变量 DASHSCOPE_API_KEY 是否正确设置");
      console.error("  2. 尝试使用不同的模型名称");
      console.error("  3. 检查网络连接和 API 访问权限");
    }
    
    throw error;
  }
}

// 运行主函数
run().catch((error) => {
  console.error("🚨 程序执行失败:", error.message);
  process.exit(1);
});
