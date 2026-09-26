---
title: ip_banned
description: This table contains all of the banned IPs and the date when (or if) the ban will expire.
published: true
date: 2022-11-21T20:58:30.237Z
tags: database, auth, master
editor: markdown
dateCreated: 2021-08-26T01:42:17.474Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [ip](#ip) | varchar(15) |  | PRI | NO | 127.0.0.1 |  |  |
| [bandate](#bandate) | int | unsigned | PRI | NO |  |  |  |
| [unbandate](#unbandate) | int | unsigned |  | NO |  |  |  |
| [bannedby](#bannedby) | varchar(50) |  |  | NO | [Console] |  |  |
| [banreason](#banreason) | varchar(255) |  |  | NO | no reason |  |  |
&nbsp;
## Description of fields

### ip
The IP address that is banned.
&nbsp;

### bandate
The date when the IP was first banned, in Unix time.
&nbsp;

### unbandate
The date when the IP will be unbanned in Unix time. Any date that is set lower than the current date basically classifies as a permanent ban as it will never auto expire.
&nbsp;

### bannedby
The name of the character that banned the IP. The character should belong to an account with the rights to the .ban command in-game.
&nbsp;

### banreason
The reason given for the IP ban.
&nbsp;

