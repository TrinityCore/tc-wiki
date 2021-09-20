---
title: Final Server Steps
description: 
published: true
date: 2021-09-20T14:40:03.935Z
tags: 
editor: markdown
dateCreated: 2021-09-20T14:36:59.826Z
---

# Final Server Steps

**After completing all the steps listed above you can now start your server.**

## Running the Authserver\Bnetserver
- Run the authserver (bnetserver on master) to run your server.
> Tip: The authserver (bnetserver on master) allows you to enter your username (email on master)/password to connect to the Realm Selection screen, and the worldserver allows you to connect to the realm itself. Once you are in-game, the authserver (bnetserver on master) can be safely closed if you wish no one else to connect to server.
{.is-info}



> !NEVER! create an account directly into your database unless you are ABSOLUTELY SURE that you know what to do and how to do it!
{.is-danger}



## Creating a Login Account
Next create your Login Account by typing directly into the worldserver window the GM Command account create (bnetaccount create on master). Syntax: (see examples below)
If you wish to set the account as a GM then type into the worldserver window: account set gmlevel $account #level #realmid where $account is the account name to change, #level can be 0-3 and #realmid is the realm ID. Setting a #level of "3" is GM account level (higher numbers = more access), and the "-1" is the realm ID that stands for "all realms".


Open the world database in your database management tool and find the command table. This table shows a full list of GM commands, their descriptions, and the security (GM level) needed to use them. You will not find a more accurate list of current GM commands anywhere else (assuming you keep your database up-to-date). The security level for a given command identifies that THAT GM level can use the command, along with all GM levels above it. For example, if a command has a security of 2, all accounts with a GM level of 2, 3, and 4 will be able to use it. More detailed information can be found at GM Commands Page.

Minimize your servers and run WoW (never run WoW using the Launcher unless you edited the realmlist.wtf's patchlist option above).
Log in using the user/pass you just created.
The Trinity realm should be selectable. Log in, create a character, and you're all done!

**Account Creation Examples:**
> To create your account: very important, don't use @ on account names.
{.is-danger}

## 3.3.5

**To create your account:**
Type: account create <user> <pass>

***Example: account create test test***

**To set your account level:**

Type: account set gmlevel <user> 3 -1

***Example: account set gmlevel test 3 -1***

**Login to your account:**

Log in with account test and password test through wow.exe.

  
## Master
**To create your account:**

- Type: bnetaccount create <user> <pass>

***Example: bnetaccount create test@test test***

**To set your account level:**

- Type: account set gmlevel <user#realm> 3 -1

***Example: account set gmlevel 1#1 3 -1***

> Note: The username used for setting your gmlevel is not the same as the username you create with bnetaccount. You must manually find the username in auth.account.username. These are formatted as 1#1, 2#1, etc.
{.is-info}


> NOTE2: if you have connected before using this command you will need to relog.
{.is-info}


## Login to your account:

Log in through a Custom Client Launcher (Not provided).: 
E-mail: **test@test** 
Password: **test** 
