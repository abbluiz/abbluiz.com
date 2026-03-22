---
title: "Destruindo seu dispositivo de armazenamento"
description: "Aprenda a apagar seus HDDs de verdade, evitando deixar rastros."
published: 2020-04-01
updated: 2026-03-22
categories: ["segurança"]
tags: ["dd", "shred"]
lang: pt
---

Todos os dados armazenados em um dispositivo de armazenamento digital são guardados como bytes. É difícil para humanos trabalhar diretamente com bytes. Na verdade, é difícil até para programas rodando em sistemas operacionais lidar com bytes diretamente o tempo todo. É por isso que existem sistemas de arquivos, para que programas e humanos possam gerenciar arquivos, não bytes. Quando você deleta um arquivo, você não está realmente apagando-o — você está apenas dizendo ao sistema de arquivos para ignorá-lo, para que o espaço no disco possa ser reutilizado depois. Mas e se você quiser ter certeza de que um arquivo, ou um dispositivo inteiro, foi realmente apagado?

Para isso, você também precisará substituir cada byte armazenado por zero ou por dados aleatórios, incluindo o próprio sistema de arquivos. Não basta deletar todos os arquivos de um pendrive ou HD externo para garantir que ele esteja vazio. Alguém com o conhecimento adequado poderia recriar o sistema de arquivos e recuperar os arquivos que você supostamente deletou. O motivo é que apagar dados de verdade é muito lento e, em muitos casos, desnecessário. Mas em alguns casos — como quando você quer vender um dispositivo de armazenamento e quer garantir que ninguém terá acesso aos seus arquivos pessoais — é uma ótima ideia apagar o dispositivo corretamente (alternativamente, você pode criptografar todos os dados).

Usando a maioria das distribuições Linux e um emulador de terminal, veremos como apagar adequadamente um dispositivo de armazenamento inteiro com 2 ferramentas diferentes: `shred` (mais moderna) e `dd` (mais antiga, mas ainda confiável). Você deve escolher uma das ferramentas — não é necessário usar as duas.

* [Preparando um dispositivo para ser apagado](#preparacao)
* [Apagando um dispositivo com a ferramenta *shred*](#shred)
* [Apagando um dispositivo com a ferramenta *dd*](#dd)

## Preparando um dispositivo para ser apagado {#preparacao}

1. Desnecessário dizer: faça backup de todos os dados importantes antes. Você provavelmente perderá TODOS os seus dados após apagar corretamente o dispositivo.

2. Após o óbvio backup, inicie um computador com Linux ou outro sistema operacional similar ao UNIX. Se você não usa Linux, certifique-se de que seu sistema operacional possui as ferramentas que usaremos, e esteja ciente de que algumas instruções podem não ser válidas para todos os sistemas.

3. Conecte o dispositivo que deseja apagar ao computador.

4. Agora você precisará determinar qual **nó de dispositivo** está mapeado para o seu no Linux. Tente encontrar o nó do seu dispositivo lendo a saída do seguinte comando: `sudo fdisk -l`. Pode ser algo como `/dev/sda`.

5. Opcional: Se não conseguir encontrar o nó do dispositivo facilmente, compare as saídas do comando anterior com e sem o dispositivo conectado. O nó do dispositivo também pode ser algo como `/dev/sdc` ou até `/dev/xvdi`.

6. Certifique-se de que o dispositivo NÃO está montado. Use `sudo umount /dev/xxx` para desmontá-lo, substituindo `xxx` pelo nome do seu dispositivo.

7. Mais uma vez: certifique-se de ter feito o backup dos seus dados E de ter determinado corretamente qual nó de dispositivo corresponde ao seu. Se errar, você pode apagar dados errados. Em caso de dúvida, faça uma pesquisa antes de prosseguir.

## Apagando um dispositivo com a ferramenta *shred* {#shred}

Para instruções detalhadas sobre essa ferramenta, você pode executar `man shred`.

Para iniciar o processo, use o seguinte comando (não esqueça de substituir `/dev/xxx` pelo nó do dispositivo que deseja apagar):

```terminal
sudo shred -vfz /dev/xxx
```

Agora é só relaxar, porque isso vai demorar bastante. Você pode acompanhar o progresso enquanto o comando trabalha.

Após concluir, seu dispositivo estará livre de todos os dados anteriores. Pode ser necessário recriar o sistema de arquivos e formatar o dispositivo novamente para que você ou outra pessoa possa usá-lo.

## Apagando um dispositivo com a ferramenta *dd* {#dd}

Para instruções detalhadas, você pode executar `man dd`.

Para iniciar o processo, use o seguinte comando (não esqueça de substituir `/dev/xxx` pelo nó do dispositivo que deseja apagar):

```terminal
sudo dd if=/dev/urandom of=/dev/xxx bs=10M status=progress
```

Relaxe, porque isso também vai demorar. Você pode acompanhar o progresso enquanto o comando trabalha.

Após concluir, seu dispositivo estará pronto para ser usado novamente (mas sem sistema de arquivos).

Espero que tenha aprendido algo útil hoje!
