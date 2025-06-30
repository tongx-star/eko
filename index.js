import { Eko } from "@eko-ai/eko";
import { BrowserAgent, FileAgent } from "@eko-ai/eko-nodejs";
import dotenv from 'dotenv';

// 加载环境变量
dotenv.config();

const API_KEY = process.env.DASHSCOPE_API_KEY;

const llms = {
  default: {
    provider: "openai",
    model: "qwen-vl-max-2025-04-08", 
    apiKey: API_KEY,
    config: {
        baseURL: "https://dashscope.aliyuncs.com/compatible-mode/v1",
        // 简化配置，只保留基本参数
        defaultHeaders: {
            "Content-Type": "application/json"
        },
        maxTokens: 8192
    }
  }
};

async function run() {
  try {
    console.log("开始执行表单填写任务...");
    
    let agents = [new BrowserAgent(), new FileAgent()];
    let eko = new Eko({ llms, agents });
    
    let result = await eko.run(`
      打开浏览器，访问以下表单页面之一进行测试：
      
      1. https://httpbin.org/forms/post - 一个简单的测试表单
      2. https://the-internet.herokuapp.com/login - 登录表单测试页面
      3. https://demoqa.com/text-box - 包含文本框的表单
      4. https://www.w3schools.com/html/tryit.asp?filename=tryhtml_form_submit - W3Schools表单示例
      
      请访问其中一个页面，智能识别表单中的各个字段，
      填写合适的测试数据（用户名可以用'testuser'，密码用'password123'，邮箱用'test@example.com'等），
      然后提交表单，并确认提交是否成功
    `);
    
    console.log("表单填写任务执行结果:", result.result);
  } catch (error) {
    console.error("执行过程中出现错误:", error);
  }
}

// 运行主函数
run().catch(e => {
  console.log(e);
}); 