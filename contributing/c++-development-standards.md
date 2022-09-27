---
title: C++ Development Standards
description: 
published: true
date: 2022-09-27T18:18:39.274Z
tags: standard, code, c++, cpp
editor: markdown
dateCreated: 2022-09-27T18:04:36.070Z
---

# 1. Intro
## Why do we need coding standards?
It makes easier to maintain and read all the scripts related code and gives us more control over the code.

In some cases it will be a safe guard against errors.

## Why is it important for occasional developers/contributors?
We only accept code that is written according to our developing standards.

A properly written patch goes faster to core than unordered ones and makes the maintainers lifes easier.

# 2. Coding Standards
## Tab size / Indents
Code never contain tabs, instead we use spaces.
By tab size, we mean 4x spaces. Not 5, not 3.
Most sane development-tools have options to replace tabs with 4 spaces.

Visual Studio:
Tools -> Options: Text Editor -> C++ -> Tabs

Smart, 4, 4, Insert spaces.

Notepad++:
Settings -> Preferences -> Language

Tab size: 4, Replace by space: checked

## Comments
Always comment code where it is not typical code repeated in many/all scripts and/or not self-explanatory what the code does.
A comment should either be placed directly above the code :

```c
// My comment
if (something == MY_CONSTANT)
```

or at code line 61 if this fits more natural in the code :

```c
if (something == MY_CONSTANT)
{
    a = b; // My comment
```

## Whitespace
Do not file source code containing white space in end of line. Generally a no-no.
Do not fill parenthesis with whitespace. Place space in front, not after.

<span style="color:red">Wrong</span> :
```c
if( attack )
if ( attack )
```

<span style="color:green">Correct</span> :
```c
if (attack)
```

## Brackets
We use symmetric brackets. One line blocks does not need brackets

```c
if (attack)
{
    me->DoA();
    me->DoB();
}
else
{
    me->SelectA(); me->SelectB();
}
```

or

```c
if (attack)
{
    me->DoA();
    me->DoB();
}
else
    me->SelectA();
```

## Loop syntax
Similar to if () blocks, one line statements do not need brackets

```c
for (uint32 i = 0; i < loopEnd; ++i)
{
    DoSomething();
    DoSomethingElse();
}
  
uint32 i = 0;
while (i < 10)
{
    DoSomething();
    DoSomethingElse();
    ++i;
}
  
do
{
    DoSomething();
    DoSomethingElse();
    --i;
}
while (i > 0);
```

## Magic numbers vs. Constants
Constants makes code easier to read and does also provide a degree of fail safe.

<span style="color:red">Wrong</span> :
```c
if (player->GetQuestStatus(10090) == 1)
    me->RemoveFlag(58, 2);
```

<span style="color:green">Correct</span> :
```c
if (player->GetQuestStatus(QUEST_BEAT_UP) == QUEST_STATUS_INCOMPLETE)
    me->RemoveFlag(UNIT_FIELD_FLAGS, UNIT_FLAG_NON_ATTACKABLE);
```

Constants are either set as #define, or most preferred in a enum. If it does not exist, make one.

## Enumeration vs. define
It is strongly advised to avoid using #defines for constants, use either a const variable or an enum, if multiple variables can be grouped together
Enums must have a name. Separate constant on different enums depending on their type.

<span style="color:green">Correct</span> :
```c
enum Spells
{
    SPELL_1 = 23444,
    SPELL_2 = 23233,
    H_SPELL_3 = 28345
};
```

## Standard constant name prefixes
Constant names have standardized prefixes :

| Prefix | Usage |
| --- | --- |
|SPELL_ | Spell id
|NPC_ | Creature_template.entry
|ITEM_ | Item_template.entry
|GO_ | Gameobject_template.entry
|QUEST_ | Quest_template.entry
|SAY_ | Script_texts.entry (yell/normal say)
|EMOTE_ | Same as above, just different prefix to clearly see its emote
|EQUIP_ | Typically a item id(id from dbc, not _template)
|MODEL_ | A creature model
|H_XX | Heroic mode prefix (goes before the other prefix) XX is max man amount from mode. (OBSOLETE AS OF PATCH 3.2 WITH SpellDifficulty.dbc)
|RAID_XX | Raid mode prefix (goes before the other prefix) XX is max man amount from mode. (OBSOLETE AS OF PATCH 3.2 WITH SpellDifficulty.dbc)
|EVENT_ | Event/Encounter identifier for instances
|DATA_ | Identifiers in instance used for GUIDs/data not being event/encounter
|ACHIEV_ | Achievement id

<span style="color:green">Correct</span> :
```
SPELL_ENRAGE
H_XX_SPELL_ENRAGE
EVENT_ILLIDAN
DATA_ILLIDAN
ACHIEV_OH_NOVOS
```

## Naming of variables and functions
No matter what, DO NOT USE HUNGARIAN NOTATION IN VARIABLE NAMES

for public/protected members or global variables:

```
uint64 SomeGuid;
uint32 ShadowBoltTimer;
uint8 ShadowBoltCount;
bool IsEnraged;
float HeightData;
```

for private members:

```c
uint64 _someGuid;
uint32 _mapEntry;
uint8 _count;
bool _isDead;
float _heightData;
```

Methods are always UpperCamelCase and their parameters in lowerCamelCase, just like local variables

```c
void DoSomething(uint32 someNumber)
{
    uint32 someOtherNumber = 5;
}
```

Remember to use ' f ' after float values when declaring them to avoid compile warnings

```c
float posX = 234.3456f;
```

Defining an array of structs:

```c
Position const PosMobs[5] =
{
    {-724.12f, -176.64f, 430.03f, 2.543f},
    {-766.70f, -225.03f, 430.50f, 1.710f},
    {-729.54f, -186.26f, 430.12f, 1.902f},
    {-756.01f, -219.23f, 430.50f, 2.369f},
    {-798.01f, -227.24f, 429.84f ,1.446f},
};
```

## WorldObjects
We are used to defining WorldObjects in this way :

```c
GameObject* go;
Creature* creature;
Item* item;
Player* player;
Unit* unit;
```
<span style="color:red">Keep in mind we never use multiple declarations with pointers</span>
```c
Something* obj1, *obj2;
```

<span style="color:green">The proper way to do this is</span>
```c
Something* obj1;
Something* obj2;
```
References are defined in a similar way (& must be stuck to the type)

```c
Creature& creature;
```

Never define Creature* me; in a creature script!
'me' is the pointer to the scripted creature

## Defining const variables
const keyword should always go after type name

```c
Player const* player; // player object is constant
Unit* const unit; // pointer to the unit is constant
SpellEntry const* const spell; // both spell and pointer to spell are constant
```

## Static variables
static keyword always should be put as first

```c
static uint32 someVar = 5;
static float const otherVar = 1.0f;
```

# File naming & hierarchy
> TODO
{.is-danger}

:construction:

# Further reading
- [Google C++ Style Guide](https://google.github.io/styleguide/cppguide.html){target=_blank}
{.links-list}