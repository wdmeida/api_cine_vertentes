[![Build Status](https://travis-ci.org/wdmeida/api_cine_vertentes.svg?branch=master)](https://travis-ci.org/wdmeida/api_cine_vertentes)
[![Coverage Status](https://coveralls.io/repos/github/wdmeida/api_cine_vertentes/badge.svg?branch=master)](https://coveralls.io/github/wdmeida/api_cine_vertentes?branch=master)

# Em Atualização

<h3>API Cine Vertentes</h3>

<p>Servidor feito em <strong>NodeJS</strong> que obtém as informações dos filmes em cartaz no Cine Plaza na cidade de <strong>Barbacena - MG</strong>.</p>

<h4>Tecnologias Utilizadas</h4>
<ul>
  <li>cheerio</li>
  <li>ejs</li>
  <li>express</li>
  <li>express-load</li>
  <li>body-parser</li>
  <li>method-override</li>
  <li>request</li>
</ul>

<h4>Como utilizar</h4>
<p>Após realizar o download e extração dos arquivos, do diretório raiz da aplicação, abra o terminal e baixe as dependências através do comando:</p><br/>
<strong>npm install -save</strong></br>
<p>Após o término do download das dependências, iniciar a aplicação com o seguinte comando:</p><br/>
<strong>node server.js</strong></br>
<p>Para acessar os dados, basta realizar uma requisição GET para a seguinte url:</p><br/>
<strong>localhost:3000/movies</strong></br>
