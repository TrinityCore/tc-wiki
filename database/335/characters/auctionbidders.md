---
title: auctionbidders
description: 
published: true
date: 2023-07-24T20:30:25.311Z
tags: database, characters, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T21:58:43.350Z
---

> Contains the data about what character bid on which auction.
{.is-info}


## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [id](#id-alt) | int | unsigned | PRI | NO | 0 |  |  |
| [bidderguid](#bidderguid) | int | unsigned | PRI | NO | 0 |  |  |
&nbsp;
## Description of fields

### id {#id-alt}
references [auctionhouse id](../characters/auctionhouse#id)
&nbsp;

### bidderguid
[character guid](../characters/characters#guid) who bid on the auction.
&nbsp;

