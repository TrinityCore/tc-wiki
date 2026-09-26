---
title: account_tutorial
description: 
published: true
date: 2024-04-16T18:35:37.629Z
tags: database, characters, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T21:58:32.647Z
---

> This table is used to store the tutorial state of all the accounts.
{.is-info}

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [accountId](#accountid) | int | unsigned | PRI | NO | 0 |  | Account Identifier |
| [tut0](#tut0-7) | int | unsigned |  | NO | 0 |  |  |
| [tut1](#tut0-7) | int | unsigned |  | NO | 0 |  |  |
| [tut2](#tut0-7) | int | unsigned |  | NO | 0 |  |  |
| [tut3](#tut0-7) | int | unsigned |  | NO | 0 |  |  |
| [tut4](#tut0-7) | int | unsigned |  | NO | 0 |  |  |
| [tut5](#tut0-7) | int | unsigned |  | NO | 0 |  |  |
| [tut6](#tut0-7) | int | unsigned |  | NO | 0 |  |  |
| [tut7](#tut0-7) | int | unsigned |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### accountId
The unique [account id](../auth/account#id).
&nbsp;

### tut\[0-7]
These values 32bits flags. So 8 x 32bits values makes 256 bits available to store 256 tutorial messages status.
Each bit means:

- 0: Not yet shown
- 1: Shown

This is used to diplay only tutorial messages the character did not see before.

Unselecting the "Show tutorial" option in game, causes all bits to be set, so all **tutX** columns will then contain 11111111111111111111111111111111 (in binary) / 4294967295 (in decimal).
&nbsp;

