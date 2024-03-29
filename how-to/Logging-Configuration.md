---
title: Logging Configuration
description: Learn about the logging system of TrinityCore
published: true
date: 2023-10-26T18:14:30.365Z
tags: logging, core
editor: markdown
dateCreated: 2023-10-26T18:07:40.211Z
---

# Loggers and Appenders
Logging system has two components: loggers and appenders. These types of components enable users to log messages according to message type and level andcontrol at runtime where they are reported.

## Loggers
The first and foremost advantage of this system resided in the ability to disable certain log statements while allowing others to print unhindered.
This capability assumes that the loggers are categorized according to some developer-chosen criteria.

Loggers are named entitites. Logger names are case-sensitive and they follow the hierarchical naming rule:

A Logger is said to be an ancestor of another logger if its name followed by a dot is a prefix of the descendant logger name. A logger is said to be a parent of a child logger if there are no ancestors between itself and the
descendant logger.

For example, the logger named "entities.player" is a parent of the logger named "entities.player.character". Similarly, "entities" is a parent of "entities.player" and an ancestor of "entities.player.character".

Loggers may be assigned levels. The set of possible levels are TRACE, DEBUG, INFO, WARN, ERROR AND FATAL, or be disabled using level DISABLED.

By definition the printing method determines the level of a logging request. For example, TC_LOG_INFO(...) is a logging request of level INFO.

A logging request is said to be enabled if its level is higher than or equal to the level of its logger. Otherwise, the request is said to be disabled. A logger without an assigned level will inherit one from the hierarchy.

Example:

| Logger Name | Assigned Level | Inherited Level |
| ----------- | -------------- | --------------- |
| root        | Proot          | Proot           |
| server      | None           | Proot           |

As "server" is not defined, it uses the root logger and it's log level.
TRACE < DEBUG < INFO < WARN < ERROR < FATAL.

## Appenders
The ability to selectively enable of dissable logging request based on their loggers is only part of the picture. This system allows logging requests to print to multiple destinations. An output destination is called an appender.
Current system defines appenders for Console, files and Database, but can be easily extended to remote socket server, NT event loggers, syslog daemons or any other system.

More than one appender can be attached to one logger. Each enabled logging request for a given logger will be forwarded to all the appenders in that logger

## Configuration
System will read all config elements with prefix "Logger." and "Appender." and configure the logging system. If "root" can not be properly configured the core will remove all loggers and appenders and create a default set:

- Logger "root" with log level Error
- Logger "server" with log level Info
- Appender "Console" to log to console

Appender config line follows the format:

```
Type,LogLevel,Flags,optional1,optional2
```

Its a list of elements separated by comma where each element has its own meaning

```
Type: Type of the appender

1 - (Console)
2 - (File)
3 - (DB)

LogLevel: Log level

0 - (Disabled)
1 - (Trace)
2 - (Debug)
3 - (Info)
4 - (Warn)
5 - (Error)
6 - (Fatal)

Flags: Define some extra modifications to do to logging message

1 - Prefix Timestamp to the text
2 - Prefix Log Level to the text
4 - Prefix Log Filter type to the text
8 - Append timestamp to the log file name. Format: YYYY-MM-DD_HH-MM-SS (Only used with Type = 2)
16 - Make a backup of existing file before overwrite (Only used with Mode = w)
```
Depending on the type, elements optional1 and optional2 will take different
```
Colors (read as optional1 if Type = Console)

Format: "fatal error warn info debug trace"
0 - BLACK
1 - RED
2 - GREEN
3 - BROWN
4 - BLUE
5 - MAGENTA
6 - CYAN
7 - GREY
8 - YELLOW
9 - LRED
10 - LGREEN
11 - LBLUE
12 - LMAGENTA
13 - LCYAN
14 - WHITE
Example: "13 11 9 5 3 1"

File: Name of the file (read as optional1 if Type = File)
Allows to use one "%u" to create dynamic files

Mode: Mode to open the file (read as optional2 if Type = File)

a - (Append)
w - (Overwrite)
```

Example:
```
Appender.Console1=1,2,6

Creates new appender to log to console any message with log level DEBUG or higher and prefixes log type and level to the message.

Appender.Console2=1,5,1,13 11 9 5 3 1

Creates new appender to log to console any message with log level ERROR or higher and prefixes timestamp to the message using colored text.

Appender.File=2,2,7,Auth.log,w

Creates new appender to log to file "Auth.log" any message with log level DEBUG or higher and prefixes timestamp, type and level to message
```
In the example, having two different loggers to log to console is perfectly legal but redundant.

Once we have the list of loggers to read, system will try to configure a new logger from its config line. Logger config line follows the format:
```
LogLevel,AppenderList
```
Its a list of elements separated by comma where each element has its own meaning
```
LogLevel

0 - (Disabled)
1 - (Trace)
2 - (Debug)
3 - (Info)
4 - (Warn)
5 - (Error)
6 - (Fatal)

AppenderList: List of appenders linked to logger
(Using spaces as separator).
```

# Examples
## Example 1
Log errors to console and a file called server.log that only contain logs for this server run. File should prefix timestamp, type and log level to the messages. Console should prefix type and log level.
```
Appender.Console=1,5,6
Appender.Server=2,5,7,Server.log,w
Logger.root=5,Console Server
```
Lets trace how system will log two different messages:

1. TC_LOG_ERROR(LOG_FILTER_GUILD, "Guild 1 created");
	System will try to find logger of type GUILD, as no logger is configured for GUILD it will use Root logger. As message Log Level is equal or higher than the Log level of logger the message is sent to the Appenders configured in the Logger. "Console" and "Server".
	Console will write: "ERROR [GUILD ] Guild 1 created"
	Server will write to file "2012-08-15 ERROR [GUILD ] Guild 1 created"
2. TC_LOG_INFO(LOG_FILTER_CHARACTER, "Player Name Logged in");
	System will try to find logger of type CHARACTER, as no logger is configured for CHARACTER it will use Root logger. As message Log Level is not equal or higher than the Log level of logger the message its discarted.
  
## Example 2
Same example that above, but now i want to see all messages of level INFO on
file and server file should add timestamp on creation.
```
Appender.Console=1,5,6
Appender.Server=2,4,15,Server.log
Logger.root=4,Console Server
```
Lets trace how system will log two different messages:

1. TC_LOG_ERROR(LOG_FILTER_GUILD, "Guild 1 created");
	Performs exactly as example 1.
2. TC_LOG_INFO(LOG_FILTER_CHARACTER, "Player Name Logged in");
	System will try to find logger of type CHARACTER, as no logger is configured for CHARACTER it will use Root logger. As message Log Level is equal or higher than the Log level of logger the message is sent to the Appenders configured in the Logger. "Console" and "Server".
	Console will discard msg as Log Level is not higher or equal to this appender
	Server will write to file "2012-08-15 INFO [CHARACTER ] Player Name Logged in"

## Example 3
As a dev, i may be interested in logging just a particular part of the core while i'm trying to fix something. So... i want to debug GUILDS to maximum and also some CHARACTER events to some point. Also im checking some Waypoints so i want SQLDEV to be logged to file without prefixes. All other messages should only be logged to console, GUILD to TRACE and CHARACTER to INFO
```
Appender.Console=1,1
Appender.SQLDev=2,2,0,SQLDev.log
Logger.guild=1,Console
Logger.entities.player.character=3,Console
Logger.sql.dev=3,SQLDev
```
With this config, any message logger with a Log type different to GUILD, CHARACTER or SQLDEV will be ignored, as we didn't define a logger Root and system created a default Root disabled. Appender Console, log level should be defined to allow all possible messages of its loggers, in this case GUILD uses TRACE (1), so Appender should allow it. Logger Characters will limit it's own messages to INFO (3)
