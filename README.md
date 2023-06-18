# Oliver

## bugs
### ToolInBodyInstallAppLink
- 描述：現在選了 ToolInBodyInstallAppLink 模式後，如果跳去其他模式第一次會失效 (會跳回原本模式）
- 原因：使用 setTimeOut 更新物件
- 暫時解決方案：若在 ToolInBodyInstallAppLink 要跳去其他模式，先選另一個模式再選要的模式。


