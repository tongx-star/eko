# 飞书机器人工作流程时序图

```mermaid
sequenceDiagram
    participant FB as 飞书机器人
    participant Coze as Coze
    participant API as Node API
    participant Queue as 任务队列
    participant Task as 任务执行器
    participant Eko as Eko执行引擎
    participant DB as 数据库
    participant Card as 卡片展示

    Note over FB: 接收用户消息
    FB->>+Coze: 发送消息 (1 条)
    
    Note over Coze: 处理用户请求
    Coze->>+API: 转发请求
    
    Note over API: 组装提示词
    API->>API: 组装提示词和参数
    API->>+Queue: 创建任务并入队
    
    Note over Queue: 生成任务ID
    Queue-->>API: 返回任务ID
    API-->>Coze: 返回任务ID
    Coze-->>FB: 返回任务创建成功
    
    Note over Task: 监听任务队列
    Queue->>+Task: 分发新任务
    
    Note over Task: 执行任务入库
    Task->>+DB: 创建任务记录
    DB-->>Task: 确认入库成功
    
    Note over Task: 开始执行任务
    Task->>+Eko: 启动Eko执行引擎
    
    Note over Eko: 执行具体业务逻辑
    Eko->>Eko: 处理业务逻辑
    Eko-->>Task: 返回执行结果
    
    Note over Task: 标记任务完成
    Task->>+DB: 更新任务状态为完成
    DB-->>Task: 确认状态更新
    
    Note over Task: 返回最终结果
    Task-->>Queue: 任务执行完成
    Queue->>+Card: 推送结果数据
    
    Note over Card: 展示结果
    Card->>FB: 发送结果卡片
    FB->>FB: 展示结果给用户
```

## 流程说明

1. **飞书机器人** 接收用户发送的消息
2. **Coze** 处理和理解用户请求
3. **Node API** 组装提示词和相关参数
4. **任务队列** 生成唯一任务ID并管理任务
5. **任务执行器** 监听队列并处理新任务
6. **数据库** 记录任务信息和状态
7. **Eko执行引擎** 执行具体的业务逻辑
8. **完成处理** 更新数据库状态并标记任务完成
9. **结果返回** 通过卡片形式展示给用户

## 关键节点

- **异步处理**: 任务入队后立即返回任务ID，实现异步执行
- **状态管理**: 数据库记录任务的完整生命周期
- **结果展示**: 通过卡片形式美观地展示执行结果
- **可靠性**: 任务队列确保任务不丢失，数据库记录确保状态可追踪 