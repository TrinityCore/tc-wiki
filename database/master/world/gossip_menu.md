---
title: gossip_menu
description: 
published: true
date: 2022-11-21T21:05:44.276Z
tags: database, master, world
editor: markdown
dateCreated: 2021-08-30T09:32:09.447Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment | Source in sniff |
| --- | --- | --- | :---: | :---: | --- | --- | --- | --- |
| [MenuID](#menuid) | int | unsigned | PRI | NO | 0 |  |  | SMSG_GOSSIP_MESSAGE |
| [TextID](#textid) | int | unsigned | PRI | NO | 0 |  |  | SMSG_GOSSIP_MESSAGE |
| [VerifiedBuild](#verifiedbuild) | int | signed |  | NO | 0 |  |  | generated |
&nbsp;
## Description of fields

### MenuID
This matches the id used in [creature_template.gossip_menu_id](/database/master/world/creature_template#gossip_menu_id). This also groups the options from [gossip_menu_option](/database/master/world/gossip_menu_option) and displays all options associated with this ID.
&nbsp;

### TextID
This links to [npc_text.ID](/database/master/world/npc_text#ID). It is used for the text being displayed when the gossip menu is opened. Default text is `Greetings, <name>` if an invalid `npc_text` id is provided.
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;


