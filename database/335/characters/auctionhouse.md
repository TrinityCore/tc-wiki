---
title: auctionhouse
description:
published: true
date: 2023-07-24T20:38:05.629Z
tags: database, characters, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T21:58:45.939Z
---

> Contains all information about the currently ongoing auctions in the auction houses. It controls what items are put up for auction and who put it up, who is the highest bidder, etc.
>
> This table is used by Trinity while running and not a table that you would usually edit.
{.is-info}


## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [id](#id-alt) | int | unsigned | PRI | NO | 0 |  |  |
| [houseid](#houseid) | tinyint | unsigned |  | NO | 7 |  |  |
| [itemguid](#itemguid) | int | unsigned | UNI | NO | 0 |  |  |
| [itemowner](#itemowner) | int | unsigned |  | NO | 0 |  |  |
| [buyoutprice](#buyoutprice) | int | unsigned |  | NO | 0 |  |  |
| [time](#time) | int | unsigned |  | NO | 0 |  |  |
| [buyguid](#buyguid) | int | unsigned |  | NO | 0 |  |  |
| [lastbid](#lastbid) | int | unsigned |  | NO | 0 |  |  |
| [startbid](#startbid) | int | unsigned |  | NO | 0 |  |  |
| [deposit](#deposit) | int | unsigned |  | NO | 0 |  |  |
| [Flags](#flags) | tinyint | unsigned |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### id {#id-alt}
Unique identifier for every auction.
&nbsp;

### houseid
The Auctionhouse where this auction was created. Referes to [AuctionHouse ID](/files/DBC/335/auctionhouse#id). Options are :

- 2: Alliance Auction House
- 6: Horde Auction House
- 7: Blackwater Auction House
&nbsp;

### itemguid
The [item guid](../characters/item_instance#guid) of the item that is up for auction.
&nbsp;

### itemowner
The [character guid](../characters/characters#guid) of the owner of the item up for auction.
&nbsp;

### buyoutprice
The buyout price of the item in copper. Divide by 100 to get silver and by 100 again to get gold.
&nbsp;

### time
The time when the auction will end, measured in Unix time (number of seconds from 00:00 Jan 1, 1970).
&nbsp;

### buyguid
The [character guid](../characters/characters#guid) of the highest bidder.
&nbsp;

### lastbid
The amount of money in copper of the last bid put on the item.
&nbsp;

### startbid
The amount of money in copper of the starting bid.
&nbsp;

### deposit
The amount of money in copper spent on the deposit.
&nbsp;

### Flags
| Value | Flag | Name | Comment |
|-------|------|------|---------|
| 0 | 0x0 | AUCTION_ENTRY_FLAG_NONE |  |
| 1 | 0x1 | AUCTION_ENTRY_FLAG_GM_LOG_BUYER | write transaction to gm log file for buyer (optimization flag - avoids querying database for offline player permissions) |
{.dense}

&nbsp;

