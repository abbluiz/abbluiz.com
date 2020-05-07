---
layout: post
title:  "“Hello, World!” in 5 different languages"
date:   2020-03-15 19:20:00 -0400
last-update:
categories: programming
author: LABB
fedi-post-url: https://mastodon.social/interact/103829639626749774?type=reply
license-link: http://creativecommons.org/licenses/by/4.0/
license-name: Creative Commons Attribution 4.0 International License
---

Humans and computers use language to communicate with the world. You can use spoken languages to communicate with other humans, such as Portuguese, or English. Computers also talk with each other using various types of languages. These languages can take the form of protocols, binary signals, among other things. But when humans want to communicate with machines? That's when a programming language comes to place.

Programming languages are the best way humans can communicate with computers, because it's a middle ground between spoken languages and computer instructions. However, there's a catch: generally speaking, computers do not understand programming languages by themselves. They need an interpreter or compiler that transforms the language into something easier for them to process, such as zeroes and ones: their native tongue, if you will.

When programmers start learning a new language, their first "words" are generally used to accomplish something very simple: to tell the computer to display "Hello, World!" to the screen. Let us see how we can do that in 5 different programming languages, and as a bonus, display "Hello, World!" in 5 different human spoken languages as well.

* ["Hello, World!" in C](#c)
* ["Hello, World!" in Bash](#bash)
* ["Hello, World!" in Java](#java)
* ["Hello, World!" in Python](#python)
* ["Hello, World!" in C++](#cpp)

I want to start with the first programming language I have ever learned and the first spoken language I have ever learned: C and Portuguese, respectively. If you are running Linux, you will also be able to see how to compile/run the code.

"Hello, World!" in C<a name="c"></a>
===

C is a very simple, yet very powerful language, because it is what some developers call "low-level" language. That means it is closer of what a computer can understand and run by itself.

So here's the code necessary to display "Hello, World!" in Portuguese, using C language: 

{% highlight c %}
#include <stdio.h>

int main() {

  printf("Olá, Mundo!\n");

  return 0;

}
{% endhighlight %}

Here's the output after compiling and running the code:

{% highlight console %}
$ gcc code.c
$ ./a.out
Olá, Mundo!
{% endhighlight %}

"Hello, World!" in Bash<a name="bash"></a>
===

Bash is an interpreted language. It means it does not need to be compiled. An interpreter translates the instructions one by one so the computer can understand it. In this case, we can also create a script file that the interpreter will read line by line and interpret it.

So here's the script to display "Hello, World!" in English, using Bash:

{% highlight bash %}
#!/bin/bash

echo "Hello, World!"
{% endhighlight %}

And here's the output after running the script:

{% highlight console %}
$ ./script.sh
Hello, World!
{% endhighlight %}

"Hello, World!" in Java<a name="java"></a>
===

Java is a different kind of language. It is actually compiled to bytecode, which computers do not understand. Once compiled, this bytecode needs to be interpreted by a JVM (Java Virtual Machine), a special kind of program that will tell the computer what it should do based on the bytecode. Because the way it works, bytecode can be runned everywhere! Or at least everywhere as long as there's a JVM running on that computer.

It also uses the Object-Oriented paradigm of dealing with code, so it is quite different to use as well. Here's how we can display "Hello, World!" in French, using Java:

{% highlight java %}
public class HelloWorld {

  public static void main(String[] args) {
    System.out.println("Bonjour monde!");
  }

}
{% endhighlight %}

Here's the output after compiling it to bytecode and running the bytecode:

{% highlight console %}
$ javac HelloWorld.java
$ java HelloWorld
Bonjour monde!
{% endhighlight %}

"Hello, World!" in Python3<a name="python"></a>
===

Python is another interpreted language. There's an old version of this language, Python2, that will be deprecated soon, even though it's still being used. We'll use the latest one, which is Python3. It's very popular with common task scripts, but also in machine learning and data science.

A tip about Python that might help you if you are starting: always double-check your indentation and try to use an IDE that helps you with that. It is absolutely necessary with Python.

Here's how we can display "Hello, World!" in Spanish, using Python:

{% highlight python %}
#!/usr/bin/env python3

print("¡Hola Mundo!")
{% endhighlight %}

And here's the output after running the script:

{% highlight console %}
$ python3 script.py
¡Hola Mundo!
{% endhighlight %}

"Hello, World!" in C++<a name="cpp"></a>
===

Finally, let's use C++. It is backwards compatible with C, so the C code we have used before will work here. But instead of doing that, we can use C++ specific code.

Here's how to display "Hello, World!" in Italian, using C++:

{% highlight cpp %}
#include <iostream>

using namespace std;

int main() {

  cout << "Ciao mondo!" << endl;

  return 0;

}
{% endhighlight %}

Here's the output after compiling and running the code:

{% highlight console %}
$ g++ code.cpp
$ ./a.out
Ciao mondo!
{% endhighlight %}

That's it! I hope you have learned something, specially if you are new to programming, and I hope you liked my first post!