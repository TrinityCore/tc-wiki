---
title: *_loot_template
description: 
published: true
date: 2023-10-22T19:26:01.946Z
tags: database, master, world
editor: markdown
dateCreated: 2022-04-19T10:04:49.757Z
---

<a href="https://trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>

## General
Well, according to vocabulary the meaning of the word "loot" is good for corpse loot and may be for some gameobjects like chests but quite unfit for fishing "loot". Nevermind. We will use term "loot" here as "a set of items generated on an event for a player" and "loot definition" as "a set of rules for loot generation". And forget about vocabulary for a while.

This table format is used for 12 different tables to generate different loot items for different things. The 12 tables are creature_loot_template, disenchant_loot_template, fishing_loot_template, gameobject_loot_template, item_loot_template, pickpocketing_loot_template, prospecting_loot_template, skinning_loot_template, quest_mail_loot_template, reference_loot_template, milling_loot_template, spell_loot_template. The general description here is valid for all 12 because the loot system is the same for all eleven.

Loot templates define only items in the loot. See comments about money drop in corpse, pickpocketing and luggage loot in [creature_template](/en/database/master/world/creature_template){target=_blank}.
&nbsp;
## Structure

| Field | Type | Attributes | Key | Null | Default | Extra | Comment |
| --- | --- | --- | :---: | :---: | --- | --- | --- |
| [Entry](#entry) | int | unsigned | PRI | NO | 0 |  |  |
| [Item](#item) | int | unsigned | PRI | NO | 0 |  |  |
| [Reference](#reference) | int | unsigned |  | NO | 0 |  |  |
| [Chance](#chance) | float |  |  | NO | 100 |  |  |
| [QuestRequired](#questrequired) | tinyint(1) | signed |  | NO | 0 |  |  |
| [LootMode](#lootmode) | smallint | unsigned |  | NO | 1 |  |  |
| [GroupId](#groupid) | tinyint | unsigned |  | NO | 0 |  |  |
| [MinCount](#mincount) | tinyint | unsigned |  | NO | 1 |  |  |
| [MaxCount](#maxcount) | tinyint | unsigned |  | NO | 1 |  |  |
| [Comment](#comment) | varchar(255) |  |  | YES | NULL |  |  |
&nbsp;
## Relations
The 12 tables have different relations with other DB tables.
| Loot table | Field | Relation | Related table | Field | Comment |
| --- | --- | --- | --- | --- | --- |
| fishing_loot_template | no relation | entry is linked with ID of the fishing zone or area |  |  |  |
| creature_loot_template | entry | 	many <- many | [creature_template](/en/database/master/world/creature_template){target=_blank} | [lootid](/en/database/master/world/creature_template#lootid){target=_blank} |  |
| gameobject_loot_template | entry | many <- many | [gameobject_template](/en/database/master/world/gameobject_template){target=_blank} | [Data1](/en/database/master/world/gameobject_template#data1){target=_blank} | Only gameobject type 3 (GAMEOBJECT_TYPE_CHEST) or<br/>25 (GAMEOBJECT_TYPE_FISHINGHOLE) use data1 as loot ID,<br/>for other types data1 is used in other ways |
| item_loot_template | entry | many <- many | [ItemSparse.db2 (wow.tools)](https://wow.tools/dbc/?dbc=itemsparse){target=_blank} | ID |  |
| disenchant_loot_template | entry | many <- many | [ItemSparse.db2 (wow.tools)](https://wow.tools/dbc/?dbc=itemsparse){target=_blank} |  |  |
| prospecting_loot_template | entry | many <- many | [ItemSparse.db2 (wow.tools)](https://wow.tools/dbc/?dbc=itemsparse){target=_blank} | ID |  |
| milling_loot_template | entry | many <- many | [ItemSparse.db2 (wow.tools)](https://wow.tools/dbc/?dbc=itemsparse){target=_blank} | ID |  |
| pickpocketing_loot_template | entry | many <- many | [creature_template](/en/database/master/world/creature_template){target=_blank} | [pickpocketloot](/en/database/master/world/creature_template#pickpocketloot){target=_blank} |  |
| skinning_loot_template | entry | many <- many | [creature_template](/en/database/master/world/creature_template){target=_blank} | [skinloot](/en/database/master/world/creature_template#skinloot){target=_blank}  |  |
| quest_mail_loot_template | entry |  | [quest_template_addon](/en/database/master/world/quest_template_addon){target=_blank} | [RewardMailTemplateID](/en/database/master/world/quest_template_addon#rewardmailtemplateid){target=_blank} |  |
| reference_loot_template | entry | many <- many | *_loot_template | [Reference](#reference) |  |
| spell_loot_template | entry | many <- many | [Spell.db2 (wow.tools)](https://wow.tools/dbc/?dbc=spell){target=_blank} or [SpellName.db2 (wow.tools)](https://wow.tools/dbc/?dbc=spellname){target=_blank} | ID |  |
&nbsp;
## Description of fields

### Entry
The ID of the loot definition (loot template). The rows with the same ID defines a single loot.

It is often the same ID as the loot source (item, creature, etc) but when the link is made not on **Entry** field of the Related table then ID can be different. For example, when several loot sources should provide the same loot, single loot definition can be used. In this case the loot sources have the same value in the link field.

It is possible also to set up **artificial loot templates** which are not used directly at all as they have ID which are not referenced from the related source. Such "support templates" can be referenced from "normal" loot templates.

When a common or artificial loot template is used a problem arises: what ID to use for that template? Depending on the loot table, different rules can be agreed on to simplify maintenance for the table. Moreover, such rules would be very handy but it seems at the moment there are very few rules explicitly defined.

Agreements on **Entry** field values are described [there](#agreements).
&nbsp;

### Item
[Item ID](https://wow.tools/dbc/?dbc=itemsparse) of the item which is included into the loot.

> Note: For reference entries this field has no meaning and is not used by the core in any way. Yet because of the PRIMARY KEY on the entry + item combination, this field will nonetheless need to be a unique number for each reference entry so that no indexing conflicts arise.
{.is-info}

&nbsp;

### Reference
Template reference asks core to process another loot template and to include all items dropped for that template into current loot. Simple idea.

Value of [MaxCount](#MaxCount) field is used as a repetition factor for references - the reference will be processed not just once but exactly **MaxCount** times. So if the referenced template can produce 3 to 10 items (depending on luck) and value of **MaxCount** is '5' then after processing of that reference 15 to 50 items will be added to the loot. An awful example, isn't it? Actually no good example for whole template reference repetition is known, but it is quite useful for group references sometimes.

Be careful. Self references (loot template includes reference to itself) and loop references (loot template A includes reference to entire template B, loot template B includes reference to entire template A) are completely different from internal references. If you make a self-reference like
```sql
INSERT INTO `reference_loot_template` (`Entry`,`Item`,`Reference`) VALUES (21215, 0, 21215);
```

then the core will crash due to stack overflow at first attempt of loot 21215 processing. That is why **self references and loop references are strictly forbidden**.
&nbsp;

### Chance
Item drop chance (plain entry or quest entry).
&nbsp;

#### Plain entry
**Chance > 0**
* Absolute value of **Chance** signifies the percent chance that the item has to drop. Any floating point number is allowed but indeed any value larger that 100 will make the same result as 100.
&nbsp;

#### Quest drop

**Chance > 0**
* Absolute value of **Chance** signifies the percent chance that the item has to drop. Any floating point number is allowed but indeed any value larger that 100 will make the same result as 100.
Just as for plain entries an absolute value of **Chance** signifies the percent chance that the item has to drop.
&nbsp;

#### Chanced references
* For **Reference** entries **Chance** signifies the percent chance that the reference has to be used. So it is very similar to plain entries meaning, just note that entire reference is skipped if the chance is missed.
Negative and zero values of **Chance** make no sense for that case and should not be used.
&nbsp;

#### Common remarks

Zero value of **Chance** is allowed for grouped entries only.

(Non-zero) values of **Chance** in loot definition are multiplied by RATE_DROP_ITEMS (config setting) during loot generation for references and non-reference entries, but not for grouped entries.
&nbsp;

### QuestRequired
Informs the core that the item should be shown only to characters having appropriate quest. This means that even if item is dropped, in order to see it in the loot the player must have at least one quest that has the [item ID](https://wow.tools/dbc/?dbc=itemsparse) in its [RequiredItemId](../world/quest_template#requireditemid1) fields or in its [StartItem](../world/quest_template#startitem) fields. The player must also have less copies of the item than [RequiredItemCount](../world/quest_template#requireditemcount1) or [ProvidedItemCount](../world/quest_template_addon#provideditemcount).
&nbsp;

### LootMode
A special parameter used for separating conditional loot, such as Hard Mode loot. A lootmode of 0 will effectively disable a loot entry (its roll will always fail). This column is a bitmask, so you shouldn't duplicate loot across lootmodes. The active lootmode(s) can be changed at any time by the core. This column should only be used if required, in most cases it should be left as 1. Valid lootmodes include: 1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 16384, 32768.
&nbsp;

### GroupId
A group is a set of loot definitions processed in such a way that at any given looting event the loot generated can receive only 1 (or none) item from the items declared in the loot definitions of the group. Groups are formed by loot definitions having the same values of entry and GroupId fields.

A group may consists of explicitly-chanced (having non-zero Chance) and equal-chanced (Chance = 0) entries. Every equal-chanced entry of a group is considered having such a chance that:
* all equal-chanced entries have the same chance
* group chance (sum of chances of all entries) is 100%

Of course group may consist of
* only explicitly-chanced entries or
* only equal-chanced entries or
* entries of both type.

The easiest way to understand what are groups is to understand how core processes grouped entries:

_At loading time:_
groups are formed - all grouped entries with the same values of **GroupId** and **Entry** fields are gathered into two sets - one for explicitly-chanced entries and one for equal-chanced. Note that order of entries in the sets can not be defined by DB - you should assume that the entries are in an unknown order. But indeed every time core processes a group the entries are in some order, constant during processing.

_During loot generation:_
core rolls for explicitly-chanced entries (if any):
* a random number **R** is rolled in range 0 to 100 (floating point value).
* chance to drop is checked for every (explicitly-chanced) entry in the group:
	* if **R** is less than absolute value of **Chance** of the entry then the entry 'wins':
      * the Item is included in the loot. Group processing stops, the rest of group entries are just skipped.
  * otherwise the entry 'looses':
      * the Item misses its chance to get into the loot. **R** is decreased by the absolute value of **Chance** and next explicitly-chanced entry is checked.
  * if none of explicitly-chanced entries got its chance then equal-chanced part (if any) is processed:
      * a random entry is selected from the set of equal-chanced entries and corresponding Item is included in the loot.
  * If nothing selected yet (this never happens if the group has some equal-chanced entries) - no item from the group is included into the loot.

Let us use term group chance as the sum of **Chance** (absolute) values for the group. Please note that even one equal-chanced entry makes group chance to be 100% (provided that sum of explicit chances does not exceed 100%).

_If you understand the process you can understand the results:_
* Not more than one item from a group may drop at any given time.
* If *group chance* is at least 100 then one item will be dropped for sure.
* If *group chance* does not exceed 100 then every item defined in group entries has exactly that chance to drop as set in **Chance**.
* If *group chance* is greater than 100 then some entries will lose a part of their chance (or even not be checked at all - that will be the case for all equal-chanced entries) whatever value takes the roll **R**. So for some items chance to drop will be less than their **Chance**. That is very bad and that is why having *group chance* > 100 is strictly prohibited.

Processing of equal-chanced part takes much less time then of explicitly-chanced one. So usage of equal-chanced groups is recommended when possible.

_So now basic applications of the groups are clear:_
* Groups with group chance of 100% generate *exactly* one item every time. This is needed quite often, for example such behavior is needed to define a loot template for tier item drop from a boss.
* Groups with group chance < 100 generate *one or zero* items every time, keeping chances of every item unchanged. Such behavior is useful to limit maximum number of items in the loot.

A single group may be defined for a set of items common for several loot sources. This could be very useful for decreasing DB size without any loss of data. See References for more details.

There is no way to have a reference as a part of a group.

> Note: A group may contain definitions of non-quest drop, quest drop or both, but mixing non-quest and quest drop in a single group is not recommended.
{.is-info}

> Note: Due to client constraints only 16 non-quest items (money and items added into the loot for quests are not counted for this "16") may come into the loot. As most of loots have much more than 16 possible items (sometimes several hundreds) so without groups there is a (little) chance that more than 16 items will be rolled for a given loot but player will be able to see (and take) only first 16 of them. With groups you can ensure that more than 16 items will never drop. If DB pretends to be a quality software it must have loot template definitions which ensure that not more than 16 plain entries and groups are defined for any loot template. This is just a note - such declaration is not issued by TDB developers yet.
{.is-info}

> Note: The core has no limitation for number of groups (except 255 by DB field size), but according to the previous note there is no need to use values greater than 16.
{.is-info}

_Groupid for dummies as people have a hard time understanding it:_
Lets say you have 10 different items in groupid 1 with the same chance, everytime the creature dies, it will randomly pick one of those items to drop.
    If you have 10 different items in groupid 1 and 10 different items in groupid 2 with the same chance, then everytime the creature dies, it will randomly pick one of those 10 items in groupid 1 to drop, and one of the 10 items in groupid 2 to drop, meaning two items will drop. This is how boss loot works, this is how you make two random gear items drop everytime the boss dies.


For reference entries: If **GroupId** > 0 only the referenced items with said GroupId will drop.
&nbsp;

### MinCount
The minimum number of copies of the item that can drop in a single loot
* Zero value makes no sense and should not be used.
&nbsp;

### MaxCount
_For non-reference entries:_
* the maximum number of copies of the item that can drop in a single loot.

_For reference entries:_
* The value of **MaxCount** field is used as a repetition factor for references - the reference will be processed not just once but exactly **MaxCount** times.
This is designed to serve a single purpose: to make definition of tier token drops a bit simplier (tokens of a tier are defined as a 100%-chance group of an artificial template and bosses' loot templates include 100%-chanced reference to that group with repetition factor of 2 or 3 depending on the case). Using non-1 repetition factor for other things (references to a group with group chance less than 100% or chanced references with chance less than 100%) must be agreed with TDB devs first (and described here).

> Note: core rolls chance for any loot definition entry just one time - so if a references loses its roll it is skipped for the current loot completely, whatever it's **MaxCount** value.
{.is-info}

&nbsp;

### Comment
This field is for any comment you want to make. It is arbitrary text.
&nbsp;

## Agreements
These agreements are different for different loot tables. Mainly agreements defines rules for loot template IDs ([entry](#entry)) and groups.
&nbsp;

### Fishing haul

For fishing_loot_template, ID is the [AreaTable ID](https://wow.tools/dbc/?dbc=areatable)

Also an extra note on fishing_loot_template: if just one area ID is defined for a zone, then that whole zone ID is skipped and therefore all areas in that zone need to have entries in the table. Only when there doesn't exist any area entries for a zone does the core use the zone ID directly. Zone = Wetlands, Elwynn, etc; Area = Northshire, Lakeshire, etc.

When several zones uses the same loot definition then:
* the loot template of the zone with minimal ID (minID) should be defined without references
* the other zone with the same loot should have loot definition as a single reference to the minID loot definition

> Note: To be confirmed by TDB developers
{.is-info}

As successful fishing should give exactly 1 fish (with an exception for quest fishes) so non-quest part of every loot template should be:
* a single plain entry with 100% drop chance
* or a single group with group chance equal to 100%
* or a reference to a template made according to previous two variants. It is recommended to use group references.

When a fish is caught for a quest it becoms the second fish on the hook. This is blizzlike and fortunately easy to implement. Just add the necessary quest drop definition(s).
&nbsp;

### Corpse loot

For [creature_loot_template](../world/creature_loot_template) basic approach is to use [creature_template.lootid](../world/creature_template#lootid) equal to [creature_template.entry](../world/creature_template#entry). But this results in great overhead in the loot table as:
* many creatures use the same loot definition (well, stats on sites are similar due to the nature of random roll)
* even more creatures use same parts of loot definition

That is why it is recommended to use grouping, group references and template references.
&nbsp;

### Disenchant outcome

Agreements for disenchant loot templates numbering is [item.ItemLevel](../world/item_template#itemlevel) \* 100 + [item.quality](../world/item_template#quality) where Item is disenchanting target.

As disenchanting should give exactly 1 type of shard/essence/dust/etc so every loot template should be:
* a single plain entry with 100% drop chance
* or a single group with group chance equal to 100%

There is no use for references here as the reference is done with the relation field. No quest drop at all.
&nbsp;

### Gameobject harvest
TBD
&nbsp;

### Luggage contents
TBD
&nbsp;

### Pocket pick-ups
Agreements for pickpocketing loot templates numbering is not known.
TBD
&nbsp;

### Prospecting outcome
Agreements for prospecting loot templates numbering is not known.
TBD
&nbsp;

### Skinning pulls
Agreements for skinning loot templates numbering is not known.
It's a real pity as many creatures should use the same templates. In most cases mobs with the same family and level have very similar skinning statistics.

As skinning should give exactly 1 type of skin/hide/etc so every loot template should be:
* a single plain entry with 100% drop chance
* or single group with group chance equal to 100%

There is no use for references here as the reference is done with the relation field.

When a skin is pulled for a quest it becoms the second skin from the mob. This is blizzlike and fortunately easy to implement. Just add necessary quest drop definition(s).
&nbsp;

## Reference Template Numbering
Agreements for Reference Templates are as followed:

| Range | Used for |
|-------|----------|
| 00000-00999 | Skinning Reference Templates |
| 01000-09999 | KEEP FREE: TDB-DEV-References |
| 10000-10999 | Item Reference Templates |
| 11000-11799 | Fishing Reference Templates |
| 11800-11999 | Milling Reference Templates |
| 12000-12899 | Raid: Gameobject Reference Templates |
| 12900-12999 | Mining Reference Templates |
| 13000-13999 | Prospecting Reference Templates |
| 14000-29000 | World Reference Templates |
| 34000-34999 | Raid: Creature Reference Templates |
| 35000-35999 | Dungeon Reference Templates |
{.dense}

&nbsp;

## Examples
Gameobject dropping a single non-quest item

```sql
-- Add a single non-quest item to an object
DELETE `gameobject_loot_template` WHERE `Entry`=1419;
INSERT INTO `gameobject_loot_template`
   (`Entry`,`Item`,`Chance`,`LootMode`,`GroupId`,`MinCount`,`MaxCount`)
VALUES
   (1419,2453,100,0,0,1,3);  -- 100% chance to drop a 1 to 3 Bruiseweed
```
Creature having in the pocket single quest item
```sql
-- creature_template: entry=6846, name='Defias Dockmaster', pickpocketloot=6846
-- Note: link with pickpocketing_loot_template is on `pickpocketloot` field (which is equal to `entry` field in this case)
DELETE `pickpocketing_loot_template` WHERE `Entry`=6846;
INSERT INTO `pickpocketing_loot_template`
   (`Entry`,`Item`,`Chance`,`LootMode`,`GroupId`,`MinCount`,`MaxCount`)
VALUES
   (6846,7675,100,0,0,1,1);
```
&nbsp;

<a href="https://trinitycore.info/en/database/master/world/home" class="mt-5 v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--default darkblue--text text--lighten-3"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-home-outline theme--light"></i><span>Return to world</span></span></a>