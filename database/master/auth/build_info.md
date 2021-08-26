---
title: build_info
description: 
published: true
date: 2021-08-26T00:01:46.748Z
tags: database, auth, master
editor: markdown
dateCreated: 2021-08-26T00:01:46.748Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
|---|---|---|:---:|:---:|---|---|---|
[build](#build) | int(11) | signed | PRI | NO |  |  |  |
[majorVersion](#majorVersion) | int(11) | signed |  | YES | NULL |  |  |
[minorVersion](#minorVersion) | int(11) | signed |  | YES | NULL |  |  |
[bugfixVersion](#bugfixVersion) | int(11) | signed |  | YES | NULL |  |  |
[hotfixVersion](#hotfixVersion) | char(3) | signed |  | YES | NULL |  |  |
[winAuthSeed](#winAuthSeed) | varchar(32) | signed |  | YES | NULL |  |  |
[win64AuthSeed](#win64AuthSeed) | varchar(32) | signed |  | YES | NULL |  |  |
[mac64AuthSeed](#mac64AuthSeed) | varchar(32) | signed |  | YES | NULL |  |  |
[winChecksumSeed](#winChecksumSeed) | varchar(40) | signed |  | YES | NULL |  |  |
[macChecksumSeed](#macChecksumSeed) | varchar(40) | signed |  | YES | NULL |  |  |

&nbsp;
## Description of fields

### build   
*- no description -*
&nbsp;
    
### majorVersion  
*- no description -*
&nbsp;

### minorVersion
*- no description -*
&nbsp;

### bugfixVersion
*- no description -*
&nbsp;

### hotfixVersion
*- no description -*
&nbsp;

### winAuthSeed
*- no description -*
&nbsp;

### win64AuthSeed
*- no description -*
&nbsp;

### mac64AuthSeed
*- no description -*
&nbsp;

### winChecksumSeed
*- no description -*
&nbsp;

### macChecksumSeed
*- no description -*
&nbsp;