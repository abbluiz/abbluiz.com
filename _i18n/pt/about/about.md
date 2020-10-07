Mim <a name="mim"></a>
===

E aí, como é que você tá?

Eu me chamo Luiz Antonio Bueno Barbosa (LABB), e sou um desenvolvedor de software morando no Canadá. No entanto, eu já morei por vários anos no Brasil! Eu tenho bastante interesse em muitas áreas relacionadas à TI, incluindo, mas não limitado a: Segurança, Privacidade Digital, Redes de Computadores, Programação, Desenvolvimento Web, Software Livre... e muito mais. Se eu puder aprender pelo menos uma coisa nova por dia sobre alguma dessas áreas, eu fico feliz!

Mas isso não é tudo: você provavelmente vai me encontrar falando sobre jogos, música, filmes, cozinha... ou qualquer coisa que eu ache interessante, na real. Eu costumo mudar de interesses várias vezes por mês!

Uma das minhas paixões é software livre e com código-fonte aberto, além de privacidade digital. Por causa disso que eu sou um dos fundadores e mantenedores principais da [Iniciativa Privacidade Digital](https://www.privacidade.digital/), um site em Português do Brasil com recomendações de ferramentas para melhorar sua privacidade nesse mundo cada vez mais conectado. O site foi traduzido e localizado do projeto em Inglês [PrivacyTools](https://www.privacytools.io/). Também estou envolvido com outros projetos no momento, e você pode checá-los no meu [Portfólio]({{ site.baseurl_root }}/pt/portfolio/). Você precisa de ajuda com algum projeto interessante? Me manda uma mensagem sobre ele!

É possível me encontrar no Fediverso pelo usuário [@abbluiz@mastodon.social](https://mastodon.social/@abbluiz), e possivelmente em muitos outros lugares, mas isso você pode conferir através dos ícones no footer do site.

Espero te ver em breve!

Este site <a name="este-site"></a>
===

Eu queria ter este site pra mostrar meus posts e projetos de uma forma simples, responsiva, e focada em conteúdo. Eu o fiz utilizando o gerador de sites estáticos Jekyll com algumas outras ferramentas, incluindo o tema Minima, ícones da Font Awesome, Liquid, HTML, CSS/SCSS, [e mais]({{ site.baseurl_root }}/pt/portfolio/labb-website/).

Sempre que disponível você pode trocar a língua do site, clicando no ícone `文A` (localizado no canto superior direito), e selecionando a língua que deseja. Eu amo aprender novas línguas, então quando ficar mais confortável com alguma que estiver aprendendo, irei incluí-la aqui no site!

Você pode copiar o meu site, caso respeite os termos das licenças que eu utilizo. Os códigos-fonte, incluindo códigos de exemplo que podem vir a ser mostrados em posts, estarão licenciados sob a [licença MIT]({{ site.baseurl_root }}/pt/LICENSE.txt). No entanto, o conteúdo do site, como as partes escritas de posts & páginas, imagens, dados, etc, estarão disponíveis sob a licença [CC-BY-4.0](https://creativecommons.org/licenses/by/4.0/deed.pt_BR).

Em algumas situações, pode ser que outras licenças sejam utilizadas no lugar das descritas acima. Quando isso ocorrer, será claramente indicado junto ao código-fonte ou conteúdo a licença utilizada. Um exemplo é a utilização da biblioteca Font Awesome, cujos ícones estão disponíveis sob a licença CC-BY-4.0, e código-fonte sob a MIT, mas suas fontes sob a [SIL OFL 1.1](https://scripts.sil.org/cms/scripts/page.php?site_id=nrsi&id=OFL).

{% assign m = site.time | date: "%-m" %}

Site modificado pela última vez em: {{ site.time | date: "%-d de " }}{% case m %}{% when '1' %}Janeiro{% when '2' %}Fevereiro{% when '3' %}Mar&ccedil;o{% when '4' %}Abril{% when '5' %}Maio{% when '6' %}Junho{% when '7' %}Julho{% when '8' %}Agosto{% when '9' %}Setembro{% when '10' %}Outubro{% when '11' %}Novembro{% when '12' %}Dezembro{% endcase %}{{ site.time | date: " de %Y" }}.