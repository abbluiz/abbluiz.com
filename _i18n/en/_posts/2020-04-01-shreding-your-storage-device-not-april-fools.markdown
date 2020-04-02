---
layout: post
title:  "Shreding your storage device (not an April Fools' joke)"
date:   2020-04-01 17:00:00 -0400
last-update:
categories: security
author: LABB
fedi-post-url: 
---

All data stored on your digital storage device are stored as bytes. It would be difficult for humans to work with bytes directly. Hell, it would be difficult even for computer programs running on operating systems to work with bytes all the time. That's why there are also file systems. When you delete a file, you're not really deleting them, you're just telling the file system to ignore it so you can reuse that space on the hard drive later. But what if you want to make sure a file, or an entire device, is really erased?

To do that you would you would also need to replace every byte to zero, or perhaps random data, including the file system. It's not enough to delete all the files in a pendrive that you want to lend or sell, for example. Someone with the proper knowledge could recreate the file system and recover the files you supposedly deleted.

Using most Linux distributions, and a terminal emulator, we will see how we can properly erase an entire storage device with 2 tools: `shred` and `dd`.

* [Preparing your device to be erased](#preparation)
* [Shreding your device using *shred*](#shred)
* [Shreding your device using *dd*](#dd)

Preparing your device to be erased <a name="preparation"></a>
===

1. Needless to say, backup all important data. You will most likely lose ALL your data after properly erasing your device 😉 

2. After the obvious backup, you should start a computer that runs on Linux. If you don't use Linux, make sure your operating system has the tools we will be using. 

3. Plug in the device you want to erase to the computer. 

4. Now you will need to determine which device name is mapped to yours on Linux. Try and find your device by reading the output of the following command: `sudo fdisk -l`. It can be something like `/dev/sda`.

5. Optional: If you can't find the name that easy, compare the outputs of the previous command without the device and with the device plugged in. It may be something like `/dev/sdc` or even `/dev/xvdi`.

6. Make sure your device is NOT mounted. Use `sudo umount /dev/xxx` to unmount it if you need, replacing `/dev/xxx` with your device.

**Make sure you have your data backed up AND you have properly determined which device name your device was mapped to on Linux. If you get this wrong, you can delete the wrong data. If you're not sure, send a question replying this post on the Fediverse (link in the end).**

Shreding your device using *shred*<a name="shred"></a>
===

For detailed instructions, you can enter `man shred` to know more.

1. To start shreding, you can use the following command (don't forget to replace `/dev/xxx` with the name of the disk you want to erase):

{% highlight terminal %}
sudo shred -vfz /dev/xxx
{% endhighlight %}

2. Now sit back and relax, because it will take a lot of time to complete. You can watch the progress as the command does its job.

3. Done! After it completes, your device will be ready to be sold, lent, or used again for whatever brand new purpose you have for it. You'll need to format it again, though.

Shreding your device using *dd*<a name="dd"></a>
===

For detailed instructions, you can enter `man dd` to know more.

1. To start shreding, you can use the following command (don't forget to replace `/dev/xxx` with the name of the disk you want to erase):

{% highlight terminal %}
sudo dd if=/dev/urandom of=/dev/xxx bs=10M status=progress
{% endhighlight %}

2. Now sit back and relax, because it will take a lot of time to complete. You can watch the progress as the command does its job.

3. Done! After it completes, your device will be ready to be sold, lent, or used again for whatever brand new purpose you have for it. You'll need to format it again, though.

I hope you learned something useful today!