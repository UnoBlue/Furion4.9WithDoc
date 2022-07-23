﻿using Microsoft.Extensions.Logging;

namespace Furion.Logging;

/// <summary>
/// 文件日志结构化消息
/// </summary>
[SuppressSniffer]
public struct FileLogMessage
{
    /// <summary>
    /// 构造函数
    /// </summary>
    /// <param name="logName">记录器类别名称</param>
    /// <param name="logLevel">日志级别</param>
    /// <param name="eventId">事件 Id</param>
    /// <param name="message">日志消息</param>
    /// <param name="exception">异常对象</param>
    internal FileLogMessage(string logName
        , LogLevel logLevel
        , EventId eventId
        , string message
        , Exception exception)
    {
        LogName = logName;
        Message = message;
        LogLevel = logLevel;
        EventId = eventId;
        Exception = exception;
    }

    /// <summary>
    /// 记录器类别名称
    /// </summary>
    public readonly string LogName;

    /// <summary>
    /// 日志级别
    /// </summary>
    public readonly LogLevel LogLevel;

    /// <summary>
    /// 事件 Id
    /// </summary>
    public readonly EventId EventId;

    /// <summary>
    /// 日志消息
    /// </summary>
    public readonly string Message;

    /// <summary>
    /// 异常对象
    /// </summary>
    public readonly Exception Exception;
}