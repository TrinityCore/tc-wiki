---
title: creature_template_gossip
description: 
published: true
date: 2023-05-29T22:27:13.975Z
tags: database, master, world
editor: markdown
dateCreated: 2023-04-05T22:12:35.196Z
---

## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [CreatureID](#creatureid) | int | unsigned | PRI | NO |  |  |  |
| [MenuID](#menuid) | int | unsigned | PRI | NO |  |  |  |
| [VerifiedBuild](#verifiedbuild) | int | signed |  | NO | 0 |  |  |
&nbsp;
## Description of fields

### CreatureID
This field references the [creature_template.entry](/database/master/world/creature_template#entry).
&nbsp;

### MenuID
The gossip ID of this creature. This field is obtained from sniff (update fields). If you can not sniff this value, and need to make one up, it must be > 50000. This field is the link to [gossip_menu.MenuId](/database/master/world/gossip_menu#menuid).
&nbsp;

### VerifiedBuild
This field is used by the TrinityDB Team to determine whether a template has been verified from WDB files.

If value is 0 then it has not been parsed yet.

If value is above 0 then it has been parsed with WDB files from that specific client build.

If value is -1 then it is just a place holder until proper data are found on WDBs.

If value is -Client Build then it was parsed with WDB files from that specific client build and manually edited later for some special necessity.

&nbsp;

