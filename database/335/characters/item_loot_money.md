---
title: item_loot_money
description: 
published: true
date: 2023-07-31T19:51:45.925Z
tags: database, characters, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:01:32.445Z
---

> Contains the money associated with a lootable inventory item such as [Fat Sack of Coins](https://aowow.trinitycore.info/?item=11937).
> 
> This table is populated the first time the player right-clicks to open an item. Rows are deleted when the player either removes the money or destroys the container item.
{.is-info}


## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [container_id](#container_id) | int | unsigned | PRI | NO | 0 |  | guid of container (item_instance.guid) |
| [money](#money) | int | unsigned |  | NO | 0 |  | money loot (in copper) |
&nbsp;
## Description of fields

### container_id
references [item_loot_items.container_id](../characters/item_loot_items#container_id)
&nbsp;

### money
The amount of money loot in copper.
&nbsp;

