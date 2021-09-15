---
title: Sniffs and Parsing
description: Short Guide on efficient sniffing and parsing.
published: true
date: 2021-09-15T16:04:45.861Z
tags: sniffs, sniffer, parsing, parser
editor: markdown
dateCreated: 2021-09-15T15:44:24.667Z
---

# Sniffing & Parsing
This guide is to assist in obtaining thorough sniffs with ymir.

> This guide is written to assume you are familiar with both setting up and running the ymir sniffer at: https://github.com/TrinityCore/ymir
> Parsing deals with the translations of sniffs with the tool, Instructions and software at: https://github.com/TrinityCore/WowPacketParser

> Disclaimer: There is no guaranteed safe way to gather sniffs, and you may face an account ban or suspension. Do this only at your own risk of your account and lost invested progress.
{.is-info}




> ***Starting off***
{.is-success}


Ensure proper version of the sniffer is obtained and running before you start your wow client.

Ensure your wow cache folder is cleared before starting your wow client.

Start the game and login



>***What is sniffed while logging and playing***
{.is-success}




**At Login:**
Everything from your ACCOUNT information, such as user name, Full name for billing, expansions authorization, bnet friends list, and bshop transactions is logged and registered.



**At Character Creation\Character selection:**
Character names\ class\race variations is logged durning sniffing. Realm Information is as well.



**At Game play following realm login:**

Area information is logged that is within visible range. Stuff such as npcs, gameobjects, attack rotations, spells, holiday stuff, phases, various stats, gossips, cutscene triggers, spells, auras, phases, and placements.


**Overall:**

Anything that causes a packet send or received gets logged by the sniffer.



> Where to send the sniffs to help contribute to Trinitycore:
> https://community.trinitycore.org/forum/13-wdbadbsniffs
{.is-info}




> Warning: Do not sell or publically post your pkt file as it contains highly sensitive information identifying the sniffing account used, from ip address, billing name, friends list, and various other personal information you do not want to have released on the internet.
{.is-warning}




> *Obtaining Specifics being logged.
{.is-success}




> ***NPCs:***
{.is-info}


**Display id:** Just be in visual range

**Stats:** Visual range.

**Broadcasting random speech:** Ensure you are in visible range.

**Emotes:** Ensure you are in visible range.

**Equipment \ gear load out:** Just be in visual range

**NPC flag:** Visual Range and must be interacted with.

**Gossips:** Must be interacted with, Each gossip option must be clicked on.

**Professions list:** Must be interacted with and view, does not have to be bought.

**Vendor List:** Must be interacted with and view, does not have to be bough.

**Quest Start \ Quest End:** Must be in visible range with the ! Or ? Showing. Best interacted with to ensure proper quest name is showed.

**Loot:** Kill the npc and loot.

**Spells ID and Effects and Visuals:** Visual range, and if possible, be receiving victim

**Attack Rotation:** Visual Range.

**Scripting:** Visual Range, and \ or interaction.

**Waypoints:** Just be in visual range however you may be required to stalk the npc to ensure accurate points and scripted random scenes are logged.



> ***Gameobjects:***
{.is-info}

**Display id:** Just be in visual range

**Gameobject Flag:** Visual Range and must be interacted with.
**Gameobject Gossip:** Must be interacted with, Each gossip option must be clicked on.

**Type:** Just be in visual range if none interactive, if interactive, you will need to click it.

**Gossips:** Must be interacted with, Each gossip option must be clicked on.

**Quest Start \ End:** Must be in visible range with the ! Or ? Showing. Best interacted with to ensure proper quest name is showed.

**Loot:** Must be interacted, if profession related, must have profession to view loot.

**Scripting:** Visual Range, and \ or interaction.

**Waypoints:** Just be in visual range however you may be required to stalk\ride the transport \ flight path to ensure accurate points and scripted random scenes are logged.



> ***Pets:***
{.is-info}


**Same as NPCs with a few exceptions:**

**Abilities:** Must be captured and pet journal viewed.

**Stats:** Must be viewed as they will vary by rarity and zones.



> ***Mounts:***
{.is-info}


**Same as NPCs with a few exceptions:**

**Select stats:** Mount must be used to have their stats logged

**Restrictions:** Mount must be used to view restrictions that are allowed or denied or both



> ***Items:***
{.is-info}


**Same as Gameobjects with a few exceptions:**

**Quests Start \ In-progressed \ End:** Use the item, and \ or have in possession for quest progression.

**Spell Item:** Item must be used

**Charges:** Item only has to be viewed or in possession

**Restrictions:** Item only has to be viewed or in possessions



> ***Spells and Auras:***
{.is-info}


**Player spells:** Must be both acquired and used

**Stats and display and Effects:** Must be used and \ or Viewed with in Visible range.

**Receiving effects:** Must be cast on self or target from the caster who is sniffing.

**Damaging effects:** Must be cast on self or target from the caster who is sniffing.


> 
> ***Quests:***
{.is-info}


**Flags:** Quest must be accepted. Accept and abandon and Accept to ensure phasing is captured if any.

**Quest Rewards:** Quest must be accepted and completed at turn in to ensure special boosted is logged.

**POI \ Bread Crumbs:** Quest Must be accepted and in progress. View the Map to ensure area pois are registered.



***Phasing:***

**Quest Phase ids:** If special phasing, take and abandon quest and retake to ensure logging. If possible.

**NPC Phase Ids:** If special phasing, take and abandon quest and retake to ensure logging. If possible.

**Gameobject Phase Ids:** If special phasing, take and abandon quest and retake to ensure logging. If possible.



> ***Transport\Map\Zone\Area:***
{.is-info}


**Ids:** just be present in the map\zone\id for the id to be logged.

**Spell id:** Must be present before, during, and \ or after spell effect of the area is present. Which every occurrence it may be. (Bizmo Brawl Pub is a good example as you need the brawler invite consumed to be present in the area. Horde Brawler Arena as they have a vip blimp.)


> ***Calendar\UI:***
{.is-info}


Anything dealing with these must be viewed and interacted with.


> ***Transmogs:***
{.is-info}


Anything dealing with these must be obtained and viewed from the journal or transmongifer.

