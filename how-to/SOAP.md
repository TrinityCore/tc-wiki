---
title: SOAP with TrinityCore
description: How to interact with TC using SOAP 
published: true
date: 2022-12-28T22:20:35.183Z
tags: 
editor: markdown
dateCreated: 2022-12-28T22:20:35.183Z
---

# How to interact with TC using SOAP 
SOAP stands for Simple Object Access Protocol, and is an older form of standards-based web services acess protocol similar to REST. You can leverage SOAP to send commands to a TrinityCore server, as long as the necessary configurations are in place.

Note: at present, TC only supports HTTP, so take care not to send secrets (passwords, etc) in this manner. Assume that anything passed is in clear-text and could be read by anyone.








# Configuration

#### worldserver.conf

Ensure the settings in your configuration file are set appropriately. Note that these refer to the SOAP interface; to connect remotely, you will need to use the host machine's IP and that any firewalls are configured to allow traffic on the specified port.

```conf
#
#    SOAP.Enable
#        Description: Enable soap service.
#        Default:     0 - (Disabled)
#                     1 - (Enabled)

SOAP.Enabled = 1

#
#    SOAP.IP
#        Description: Bind SOAP service to IP/hostname.
#        Default:     "127.0.0.1" - (Bind to localhost)

SOAP.IP = "127.0.0.1"

#
#    SOAP.Port
#        Description: TCP port to reach the SOAP service.
#        Default:     7878

SOAP.Port = 7878
```