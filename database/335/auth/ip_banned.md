---
title: ip_banned
description: 
published: true
date: 2023-08-01T20:33:23.268Z
tags: database, auth, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T21:57:50.536Z
---

> This table contains all of the banned IPs and the date when (or if) the ban will expire.
{.is-info}


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
Unix timestamp when the IP was first banned.
&nbsp;

### unbandate
Unix timestamp when the IP will be unbanned. 
If **unbandate** is equal to **bandate** this is a permanent ban.
&nbsp;

### bannedby
The name of the character that banned the IP. The character should belong to an account with the rights to the `.ban` command in-game.
&nbsp;

### banreason
The reason given for the IP ban.
&nbsp;

