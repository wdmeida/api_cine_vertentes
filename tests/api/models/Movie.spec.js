import 'module-alias/register';
import { expect } from 'chai';
import { JSDOM } from 'jsdom';
import Movie from '@models/Movie';

describe('Movie', () => {
  describe('Smoke tests', () => {
    it('should have Movie model exist', () => {
      expect(Movie).to.exist;
    });
  });

  describe('Movie info list', () => {
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
                <p>Sinopse é a descrição de um filme.</p>
              </div>
            </div>
          </div>
        </div>`;

    beforeEach(() => {
      const dom = new JSDOM(movieMarkup, { includeNodeLocations: true });
      const movieDom = dom.window.document.querySelector('div.wrapper.img-bottom');
      movie = new Movie(movieDom);
    });

    it('should have returns movie infos', () => {
      const movieInfo = movie.allMovieInformation;
      expect(movieInfo).to.exist;
    });

    context('allMovieInformation', () => {
      let movieInfo;

      beforeEach(() => {
        movieInfo = movie.allMovieInformation;
      });

      it('should call movieInfo.name and return a valid value', () => {
        expect(movieInfo.name).to.equal('VIVA - A VIDA É UMA FESTA');
      });

      it('should call movieInfo.weekExhibition and return a valid value', () => {
        expect(movieInfo.weekExhibition).to.equal('( 08/03 à 14/03 )');
      });

      it('should call movieInfo.cover and return a valid value', () => {
        expect(movieInfo.cover).to.equal('/media/movies/0502209.jpg-r_1920_1080-f_jpg-q_x-xxyxx.jpg');
      });

      it('should call movieInfo.duration and return a valid value', () => {
        expect(movieInfo.duration).to.equal('90 min.');
      });

      it('should call movieInfo.actors and return a valid value', () => {
        expect(movieInfo.actors).to.equal('Gael García Bernal');
      });

      it('should call movieInfo.genre and return a valid value', () => {
        expect(movieInfo.genre).to.equal('Animação');
      });

      it('should call movieInfo.local and return a valid value', () => {
        expect(movieInfo.local).to.equal('CINE GLÓRIA');
      });

      it('should call movieInfo.session and return a valid value', () => {
        expect(movieInfo.session).to.equal('15h - Dublado (Somente Sábado e Domingo)');
      });

      it('should call movieInfo.trailer and return a valid value', () => {
        expect(movieInfo.trailer).to.equal('https://youtu.be/iLmZZV-Nkuk/?iframe=true&width=720&height=450');
      });

      it('should call movieInfo.sinopse and return a valid value', () => {
        expect(movieInfo.sinopse).to.equal('Sinopse é a descrição de um filme.');
      });
    });
  });
});
