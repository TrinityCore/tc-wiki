---
title: build_auth_key
description: 
published: true
date: 2026-04-17T15:51:56.075Z
tags: database, auth, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2026-04-17T15:51:56.075Z
---

> Holds client build data to verify if a connecting client is supported by the server.
{.is-info}


## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [build](#build) | int | signed | PRI | NO |  |  |  |
| [platform](#platform) | char(4) |  | PRI | NO |  |  |  |
| [arch](#arch) | char(4) |  | PRI | NO |  |  |  |
| [type](#type) | char(4) |  | PRI | NO |  |  |  |
| [key](#key) | binary(16) |  |  | NO |  |  |  |
&nbsp;
## Description of fields

### build
e.g.: `12340`
&nbsp;

### platform
* `Win`
* `Mac`
&nbsp;

### arch
* `x86`
* `x64`
* `A64`
&nbsp;

### type
* `WoW`
&nbsp;

### key
 *- no description -*
&nbsp;


