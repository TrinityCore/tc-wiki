---
title: SOAP with TrinityCore
description: How to interact with TC using SOAP 
published: true
date: 2022-12-28T22:56:23.830Z
tags: 
editor: markdown
dateCreated: 2022-12-28T22:20:35.183Z
---

# How to interact with TC using SOAP 
SOAP stands for Simple Object Access Protocol, and is an older form of standards-based web services acess protocol similar to REST. You can leverage SOAP to send commands to a TrinityCore server, as long as the necessary configurations are in place.

Note: at the time of writing, TC 335a only supports HTTP, so take care not to send secrets (passwords, etc) in this manner. Assume that anything passed is in clear-text and could be read by anyone. 

If you plan to connect via SOAP remotely, you should absolutely take steps to ensure secure connections. One potential way is through a [reverse SSL proxy](https://www.digitalocean.com/community/tutorials/how-to-configure-nginx-with-ssl-as-a-reverse-proxy-for-jenkins) (a guide for Jenkins, but could be adapted to work for TC), which is outside the scope of this guide.


# Configuration

### worldserver.conf

Ensure the settings in your configuration file are set appropriately. 

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

You will also need a user account with permission to use GM commands, taking into consideration your specific RBAC access configurations.

# Sending commands to the server

It may be helpful to understand the differences between REST and SOAP. The following article does a decent job of breaking this comparison down - https://smartbear.com/blog/soap-vs-rest-whats-the-difference/. 

The primary difference between REST and SOAP is that SOAP relies exclusively on XML to provide responses and accept payloads. PHP offers a few ways to make this process easier, but depending on your usage, you may need to get familiar with XML. A few approaches have been provided below.

### HTTP clients for prototyping

There are a few HTTP clients out there to rapidly set up access:

- Postman - https://www.postman.com/ (web-based)
- Insomnia - https://insomnia.rest/
- Nightingale - https://nightingale.rest/

All of them offer various niceties, but ultimately work similarly. Credits to Jackpoz for providing steps specific to Postman. 

1. Navigate to postman.com and create an account. It's free for up to 3 users in a workspace. If you're already logged into a Google account, you can easily sign-up via SSO.
2. Under `My Workspace`, find the `Import` button. You'll use the Raw text option.
3. 