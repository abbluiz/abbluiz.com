Mim <a name="mim"></a>
===

Olá, eu sou o LABB (minhas iniciais). Você também pode me chamar de Luiz! Além de ser um desenvolvedor de software, gosto de escrever artigos relacionados a tecnologia, jogar alguns games, assistir a filmes & séries de TV. Não podemos esquecer de música: gosto muito de escutar, e muitos amigos me consideram eclético.

Uma das minhas paixões é software livre e com código-fonte aberto, e por causa disso eu mantenho o projeto [Privacidade Digital](https://www.privacidade.digital/), um site em Português do Brasil com recomendações de ferramentas para melhorar a privacidade digital de indivíduos. A maioria do conteúdo foi traduzido e localizado do projeto [PrivacyTools](https://www.privacytools.io/). Também estou envolvido em outros projetos pessoais e profissionais, dos quais você pode checar no meu [Portfólio]({{ site.baseurl_root }}/pt/portfolio/).

Você pode me encontrar no Fediverso pelo usuário `@abbluiz@mastodon.social`. 

Te vejo lá! 😊

Este site <a name="este-site"></a>
===

A ideia deste site é que sirva como um espaço simples, responsivo, e efetivo para mostrar meus artigos e projetos. Eu o fiz utilizando Jekyll e algumas outras ferramentas ([detalhes aqui]({{ site.baseurl_root }}/pt/portfolio/labb-website/)).

Quando disponível, você pode trocar a língua do site, clicando no ícone `文A` (localizado no canto superior direito), e selecionando a língua que deseja.

A maioria da parte técnica do código-fonte está licenciada pela [licença MIT]({{ site.baseurl_root }}/pt/LICENSE.txt). No entanto, o conteúdo da maioria dos posts e algumas imagens aqui contidas podem estar licenciadas com outra licença (CC-BY-4.0 por padrão), então fique de olho se quiser copiar ou modificar meu conteúdo (o que é perfeitamente aceitável, contanto que respeite os termos de cada licença).

{% assign m = site.time | date: "%-m" %}

Este site foi modificado pela última vez em {{ site.time | date: "%-d de " }}{% case m %}{% when '1' %}Janeiro{% when '2' %}Fevereiro{% when '3' %}Mar&ccedil;o{% when '4' %}Abril{% when '5' %}Maio{% when '6' %}Junho{% when '7' %}Julho{% when '8' %}Agosto{% when '9' %}Setembro{% when '10' %}Outubro{% when '11' %}Novembro{% when '12' %}Dezembro{% endcase %}{{ site.time | date: " de %Y" }}.