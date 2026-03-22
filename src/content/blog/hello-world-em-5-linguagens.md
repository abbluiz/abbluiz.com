---
title: '"Olá, Mundo!" em 5 linguagens diferentes'
description: 'Construindo o famoso programa de computador "Olá, Mundo!" em 5 linguagens diferentes (humanas e de computador). Meu primeiro post no blog!'
published: 2020-03-15
updated: 2026-03-22
categories: ["programação"]
tags: ["c", "shell", "bash", "java", "python", "c++"]
lang: pt
---

Humanos e computadores utilizam linguagem para se comunicar com o mundo. Línguas faladas como o Português e o Inglês são usadas como meio de comunicação entre humanos. Computadores também se comunicam entre si utilizando vários tipos de linguagens. Essas linguagens podem tomar a forma de protocolos, sinais binários, entre outras coisas. Mas quando humanos querem se comunicar com máquinas? É aí que entram as linguagens de programação.

Linguagens de programação são a melhor forma que humanos têm para se comunicar com computadores, pois são um meio-termo entre as línguas faladas e as instruções de máquina. No entanto, há um detalhe: de forma geral, computadores não entendem linguagens de programação por conta própria. Eles precisam de um interpretador ou compilador que transforme a linguagem em algo mais fácil de processar, como zeros e uns: a língua nativa deles, por assim dizer.

Tradicionalmente, quando programadores começam a aprender uma nova linguagem, suas primeiras "palavras" geralmente servem para realizar algo bem simples: dizer ao computador para exibir "Olá, Mundo!" na tela. Vamos ver como fazer isso em 5 linguagens de programação diferentes e, de bônus, exibir "Olá, Mundo!" em 5 línguas faladas diferentes.

* ["Olá, Mundo!" em C](#c)
* ["Olá, Mundo!" em Bash](#bash)
* ["Olá, Mundo!" em Java](#java)
* ["Olá, Mundo!" em Python](#python)
* ["Olá, Mundo!" em C++](#cpp)

Vou começar com a primeira linguagem de programação que aprendi e a primeira língua falada que aprendi: C e Português, respectivamente. Se você estiver usando uma distribuição GNU/Linux ou outro sistema operacional similar ao UNIX, poderá ver como executar o código.

## "Olá, Mundo!" em C {#c}

C é uma linguagem simples, mas extremamente poderosa, pois é o que alguns desenvolvedores chamam de linguagem de "baixo nível". Isso significa que ela está mais próxima do que um computador consegue entender por conta própria.

Aqui está o código necessário para exibir "Olá, Mundo!" em Português, usando a linguagem C:

```c
#include <stdio.h>

int main() {

  printf("Olá, Mundo!\n");

  return 0;

}
```

Aqui está a saída após compilar e executar o código:

```console
$ gcc code.c
$ ./a.out
Olá, Mundo!
```

## "Olá, Mundo!" em Bash {#bash}

Bash é uma linguagem interpretada. Isso significa que ela não precisa ser compilada. Um interpretador traduz as instruções uma por uma para que o computador possa entendê-las. Nesse caso, podemos criar um arquivo de script que o interpretador lerá linha por linha.

Aqui está o script para exibir "Hello, World!" em Inglês, usando Bash:

```bash
#!/bin/bash

echo "Hello, World!"
```

E aqui está a saída após executar o script:

```console
$ ./script.sh
Hello, World!
```

## "Olá, Mundo!" em Java {#java}

Java é um tipo diferente de linguagem. Ela é compilada para bytecode, que os computadores não entendem diretamente. Uma vez compilado, esse bytecode precisa ser interpretado por uma JVM (Máquina Virtual Java), um programa especial que diz ao computador o que fazer com base no bytecode. Por causa disso, o bytecode pode ser executado em qualquer lugar — desde que haja uma JVM naquele computador.

Ela também utiliza o paradigma de Orientação a Objetos, o que a torna bastante diferente de usar. Aqui está como exibir "Bonjour monde!" em Francês, usando Java:

```java
public class HelloWorld {

  public static void main(String[] args) {
    System.out.println("Bonjour monde!");
  }

}
```

Aqui está a saída após compilar para bytecode e executar:

```console
$ javac HelloWorld.java
$ java HelloWorld
Bonjour monde!
```

## "Olá, Mundo!" em Python3 {#python}

Python é outra linguagem interpretada. É muito popular para scripts de automação, mas também em aprendizado de máquina e ciência de dados.

Uma dica sobre Python que pode ajudar quem está começando: sempre verifique a indentação e use um IDE que auxilie nisso. A indentação consistente é absolutamente necessária em Python, caso contrário o código não será executado.

Aqui está como exibir "¡Hola Mundo!" em Espanhol, usando Python:

```python
#!/usr/bin/env python3

print("¡Hola Mundo!")
```

E aqui está a saída após executar o script:

```console
$ python3 script.py
¡Hola Mundo!
```

## "Olá, Mundo!" em C++ {#cpp}

Por fim, vamos usar C++. Ela é retrocompatível com C, então o código C que usamos antes funcionaria aqui. Mas em vez disso, podemos usar código específico de C++.

Aqui está como exibir "Ciao mondo!" em Italiano, usando C++:

```cpp
#include <iostream>

using namespace std;

int main() {

  cout << "Ciao mondo!" << endl;

  return 0;

}
```

Aqui está a saída após compilar e executar:

```console
$ g++ code.cpp
$ ./a.out
Ciao mondo!
```

É isso! Espero que tenha gostado do meu primeiro post! Até mais, Mundo!
