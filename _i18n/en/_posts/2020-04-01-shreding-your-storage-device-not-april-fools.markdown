---
layout: post
title:  "Shreding your storage device (not an April Fools' joke)"
date:   2020-04-01 20:00:00 -0400
last-update: 2020-07-15 18:00:00 -0400
categories: security
author: LABB
fedi-post-url: https://mastodon.social/interact/103926134025179047?type=reply
license-link: http://creativecommons.org/licenses/by/4.0/
license-name: Creative Commons Attribution 4.0 International License
---

All data that is stored in your digital storage device is stored as bytes. It is difficult for humans to work with bytes directly. Hell, it's difficult even for computer programs running on operating systems to work with bytes directly all the time. That's why there are also file systems, so programs and humans can manage files, not bytes. When you delete a file, you're not really deleting them, you're just telling the file system to ignore it so you can reuse that space on the hard drive later. But what if you want to make sure a file, or an entire device, is really erased?

To do that you will also need to replace every stored byte with zero, or perhaps random data, including the file system itself. It's not enough to delete all the files in a pendrive or external hard drive to make sure it's empty. Someone with the proper knowledge could recreate the file system and recover the files you supposedly deleted. The reason this happens is because erasing data for real is very slow, and in a lot of cases, unnecessary. But in some cases, like if you want to sell a storage device and you want to make sure nobody will have access to your personal files, it is a very good idea to properly delete the device (alternatively, you can encrypt all the data).

Using most Linux distributions, and a terminal emulator, we will see how we can properly erase an entire storage device with 2 different tools: `shred` (modern) and `dd` (older, but still reliable). You should choose one of these tools, don't need to use both.

* [Preparing a device to be erased](#preparation)
* [Shreding a device using the *shred* tool](#shred)
* [Shreding a device using the *dd* tool](#dd)

Preparing a device to be erased<a name="preparation"></a>
===

1. Needless to say, backup all important data beforehand. You will most likely lose ALL your data after properly erasing your device.

2. After the obvious backup, you should start a computer that runs on Linux, or another Unix-like operating system. If you don't use Linux, make sure your operating system has the tools we will be using, and also be aware that some instructions might not be valid for all operating systems. 

3. Plug in the device you want to erase to the computer. 

4. Now you will need to determine which **device node** is mapped to yours on Linux. Try and find your device node by reading the output of the following command: `sudo fdisk -l`. It can be something like `/dev/sda`.

5. Optional: If you can't find the device node that easy, compare the outputs of the previous command without the device plugged in and with the device plugged in. The device node can also be something like `/dev/sdc` or even `/dev/xvdi`.

6. Make sure your device is NOT mounted. Use `sudo umount /dev/xxx` to unmount it if you need, replacing the `xxx` on `/dev/xxx` with your device name.

7. Once again, make sure you have your data backed up AND you have properly determined which device node your device was mapped to on Linux. If you get this wrong, you can delete the wrong data. If you're not sure, send a question replying this post on the Fediverse (link in the end) and do some research.

Shreding a device using the *shred* tool<a name="shred"></a>
===

For detailed instructions and information about this tool, you can enter `man shred` to know more.

To start shreding, you can use the following command (don't forget to replace `/dev/xxx` with the device node of the disk you want to erase):

{% highlight terminal %}
sudo shred -vfz /dev/xxx
{% endhighlight %}

Now sit back and relax, because this will take a lot of time to complete. You can watch the progress as the command does its job.

After it completes, your device will be free from all the data you have used before. You may need to recreate the file system and format the device again, so you or other person can use it.

Shreding a device using the *dd* tool<a name="dd"></a>
===

For detailed instructions, you can enter `man dd` to know more.

To start shreding, you can use the following command (don't forget to replace `/dev/xxx` with the device node of the disk you want to erase):

{% highlight terminal %}
sudo dd if=/dev/urandom of=/dev/xxx bs=10M status=progress
{% endhighlight %}

Time to relax, because this will also take awhile. You can watch the progress as the command does its job.

After it completes, your device will be ready to be used again (but again without any file system).

I hope you learned something useful today!