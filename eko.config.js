// Eko 高级配置文件
export const ekoConfig = {
  // 性能优化配置
  performance: {
    // 并发限制
    maxConcurrentTasks: 3,
    // 任务队列大小
    taskQueueSize: 10,
    // 内存优化
    memoryOptimization: true,
    // 缓存策略
    caching: {
      enabled: true,
      ttl: 300000, // 5分钟缓存
      maxSize: 100, // 最大缓存条目数
    }
  },

  // 重试策略配置
  retryStrategy: {
    // 最大重试次数
    maxRetries: 3,
    // 重试延迟（毫秒）
    retryDelay: 2000,
    // 指数退避
    exponentialBackoff: true,
    // 退避倍数
    backoffMultiplier: 2,
    // 最大延迟时间
    maxDelay: 30000,
    // 需要重试的错误类型
    retryableErrors: [
      'timeout',
      'network',
      'element not found',
      'page load',
      'connection refused'
    ]
  },

  // 浏览器优化配置
  browser: {
    // 启动参数
    launchOptions: {
      headless: false,
      defaultViewport: {
        width: 1920,
        height: 1080
      },
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
        '--disable-gpu',
        '--no-first-run',
        '--no-default-browser-check',
        '--disable-background-timer-throttling',
        '--disable-backgrounding-occluded-windows',
        '--disable-renderer-backgrounding'
      ]
    },
    // 页面配置
    pageOptions: {
      // 默认超时时间
      timeout: 30000,
      // 等待策略
      waitUntil: 'networkidle2',
      // 用户代理
      userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    }
  },

  // AI 模型优化配置
  ai: {
    // 智能重试
    smartRetry: {
      enabled: true,
      // 根据错误类型调整策略
      errorAnalysis: true,
      // 自适应超时
      adaptiveTimeout: true
    },
    // 上下文管理
    contextManagement: {
      // 最大上下文长度
      maxContextLength: 8000,
      // 上下文压缩
      compression: true,
      // 重要信息保留
      preserveImportant: true
    },
    // 任务优化
    taskOptimization: {
      // 任务分解深度
      decompositionDepth: 3,
      // 并行执行
      parallelExecution: false, // 当前任务需要串行执行
      // 智能等待
      smartWaiting: true
    }
  },

  // 错误处理配置
  errorHandling: {
    // 详细日志
    detailedLogging: true,
    // 截图保存
    screenshotOnError: true,
    // 状态快照
    stateSnapshot: true,
    // 错误分类
    errorClassification: {
      network: ['ECONNREFUSED', 'ETIMEDOUT', 'ENOTFOUND'],
      browser: ['Protocol error', 'Target closed', 'Navigation timeout'],
      element: ['Element not found', 'Element not visible', 'Element not interactable'],
      auth: ['Unauthorized', 'Forbidden', 'Authentication failed']
    }
  },

  // 监控和调试配置
  monitoring: {
    // 性能监控
    performanceMonitoring: true,
    // 执行追踪
    executionTracing: true,
    // 内存监控
    memoryMonitoring: true,
    // 指标收集
    metricsCollection: {
      enabled: true,
      interval: 5000, // 5秒收集一次
      metrics: [
        'executionTime',
        'memoryUsage',
        'successRate',
        'errorRate'
      ]
    }
  },

  // 安全配置
  security: {
    // 输入验证
    inputValidation: true,
    // 输出过滤
    outputFiltering: true,
    // 敏感信息脱敏
    sensitiveDataMasking: {
      enabled: true,
      patterns: [
        /\b\d{4}[\s-]?\d{4}[\s-]?\d{4}[\s-]?\d{4}\b/, // 信用卡号
        /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/, // 邮箱
        /\b\d{3}-\d{2}-\d{4}\b/ // 社会保险号
      ]
    }
  }
};

// 特定任务配置
export const taskConfigs = {
  login: {
    timeout: 60000,
    retries: 3,
    waitStrategy: 'networkidle2',
    errorHandling: 'strict'
  },
  
  navigation: {
    timeout: 30000,
    retries: 2,
    waitStrategy: 'domcontentloaded',
    errorHandling: 'lenient'
  },
  
  formFilling: {
    timeout: 45000,
    retries: 2,
    waitStrategy: 'networkidle0',
    errorHandling: 'adaptive',
    fieldValidation: true
  },
  
  search: {
    timeout: 30000,
    retries: 3,
    waitStrategy: 'networkidle2',
    errorHandling: 'adaptive',
    resultValidation: true
  }
};

// 导出默认配置
export default ekoConfig; 