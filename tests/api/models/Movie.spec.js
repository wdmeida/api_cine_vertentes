import 'module-alias/register';
import { expect } from 'chai';
import { JSDOM } from 'jsdom';
import Movie from '@models/Movie';

describe('Movie', () => {
  describe('Smoke tests', () => {
    let movie;
    const movieMarkup = `
      <div class="wrapper img-bottom">
        <img src="/media/movies/0502209.jpg-r_1920_1080-f_jpg-q_x-xxyxx.jpg" alt="" class="img-indent">
        <div class="extra-wrap1">
          <div class="movie-title">
            <span class="link3" id="1535"><strong>VIVA - A VIDA É UMA FESTA</strong></span>
            <span class="link7">
              ( 08/03 à
              14/03 )
            </span>
          </div>
          <div class="wrapper">
            <div class="block2">
              <span class="text-bottom1">
                <strong>Duração:</strong>
                90 min.
              </span>
              <span class="text-bottom1">
                <strong>Atores:</strong>
                  Gael García Bernal
                </span>
                <span class="text-bottom1">
                  <strong>Gênero:</strong>
                  Animação
                </span>
                <br clear="all">
                <span class="link4 text-top">
                  CINE GLÓRIA
                </span>
                <br clear="all">
                15h - Dublado (Somente Sábado e Domingo)
                <br clear="all"><br>
                <a class="link1 trailer-showtime" rel="prettyPhoto" href="https://youtu.be/iLmZZV-Nkuk/?iframe=true&amp;width=720&amp;height=450">Assistir o trailer</a>
              </div>
              <div class="block3">
                <p>Miguel é um menino de 12 anos que quer muito ser um músico famoso, mas ele precisa lidar com sua família que desaprova seu sonho. Determinado a virar o jogo, ele acaba desencadeando uma série de eventos ligados a um mistério de 100 anos. A aventura, com inspiração no feriado mexicano do Dia dos Mortos, acaba gerando uma extraordinária reunião familiar.</p>
              </div>
            </div>
          </div>
        </div>`;

    beforeEach(() => {
      const dom = new JSDOM(movieMarkup, { includeNodeLocations: true });
      movie = new Movie(dom);
    });

    it('should have Movie model exist', () => {
      expect(Movie).to.exist;
    });

    it('should have returns movie infos', () => {
      const movieInfo = movie.allMovieInformation();
      expect(movieInfo).to.exist;
    });
  });
});
