---
title: build_executable_hash
description: 
published: true
date: 2026-04-17T16:00:28.277Z
tags: database, auth, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2026-04-17T15:57:16.136Z
---

> Holds client build data to verify if a connecting client is supported by the server.
{.is-info}


## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [build](#build) | int | signed | PRI | NO |  |  |  |
| [platform](#platform) | char(4) |  | PRI | NO |  |  |  |
| [executableHash](#executablehash) | binary(20) |  |  | NO |  |  |  |
&nbsp;
## Description of fields

### build
e.g.: `12340`
&nbsp;

### platform
* `Win`
* `OSX`
&nbsp;

### executableHash
 *- no description -*
&nbsp;


