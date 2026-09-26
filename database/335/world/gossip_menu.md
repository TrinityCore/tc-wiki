---
title: gossip_menu
description: 
published: true
date: 2024-05-16T11:19:32.891Z
tags: database, world, 3.3.5, 3.3.5a, 335, 335a, wotlk
editor: markdown
dateCreated: 2021-08-30T22:05:38.890Z
---

This table is used for displaying gossip when a player talks to an NPC with [npcflag](../world/creature_template#npcflag) set or gameobjects of type GAMEOBJECT_TYPE_QUESTGIVER (2) or GAMEOBJECT_TYPE_GOOBER (10)

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [MenuID](#menuid) | smallint | unsigned | PRI | NO | 0 |  |  |
| [TextID](#textid) | int | unsigned | PRI | NO | 0 |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### MenuID
This must match the entry you added to [creature_template.gossip_menu_id](../world/creature_template#gossip_menu_id). This also
groups the options from [gossip_menu_option](../world/gossip_menu_option) and displays all options associated with this **MenuID**.
> 
> Note: If adding your own custom menu options, then it is common practice to start with an ID at or above 50,000 just to be safe that it doesn't conflict with other gossip menu id's.
{.is-info}

&nbsp;

### TextID
This links to the [npc_text.ID](../world/npc_text#id) for the gossip you want to be initially displayed. Also this tells the NPC what to say at the top of the options menu when it is displayed.
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific [client build](/database/335/auth/realmlist#gamebuild).

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -[Client Build](/database/335/auth/realmlist#gamebuild) then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.
&nbsp;

