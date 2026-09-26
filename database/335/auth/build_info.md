---
title: build_info
description: 
published: true
date: 2026-04-17T15:57:40.564Z
tags: database, auth, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T21:57:47.860Z
---

> Holds client build data to verify if a connecting client is supported by the server.
{.is-info}


## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [build](#build) | int | signed | PRI | NO |  |  |  |
| [majorVersion](#majorversion) | int | signed |  | YES | NULL |  |  |
| [minorVersion](#minorversion) | int | signed |  | YES | NULL |  |  |
| [bugfixVersion](#bugfixversion) | int | signed |  | YES | NULL |  |  |
| [hotfixVersion](#hotfixversion) | char(3) |  |  | YES | NULL |  |  |
&nbsp;
## Description of fields

### build
e.g.: <code>335a.<u><b>12340</b></u></code>
&nbsp;

### majorVersion
e.g.: <code><u><b>3</b></u>35a.12340</code>
&nbsp;

### minorVersion
e.g.: <code>3<u><b>3</b></u>5a.12340</code>
&nbsp;

### bugfixVersion
e.g.: <code>33<u><b>5</b></u>a.12340</code>
&nbsp;

### hotfixVersion
e.g.: <code>335<u><b>a</b></u>.12340</code>
&nbsp;


