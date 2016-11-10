'use strict';

const chai          = require('chai'),
      assert        = chai.assert,
      unifyUsername = require('./../scripts/unify-username');

describe(
  'unifyUsername', () => {
    it(
      'Возвращает функцию', () => {
        assert.isFunction(unifyUsername);
      }
    );

    describe(
      'Правильно работает при корректных данных', () => {

        it(
          'https://vk.com/skillbranch', () => {
            assert.equal(unifyUsername('https://vk.com/skillbranch'), '@skillbranch');
          }
        );

        it(
          '//vk.com/skillbranch', () => {
            assert.equal(unifyUsername('//vk.com/skillbranch'), '@skillbranch');
          }
        );

        it(
          'skillbranch', () => {
            assert.equal(unifyUsername('skillbranch'), '@skillbranch');
          }
        );

        it(
          'https://vk.com/skillbranch?w=wall-117903599_1076', () => {
            assert.equal(unifyUsername('https://vk.com/skillbranch?w=wall-117903599_1076'), '@skillbranch');
          }
        );

        it(
          '@@skillbranch', () => {
            assert.equal(unifyUsername('@@skillbranch'), '@skillbranch');
          }
        );

        it(
          '@@skill.branch', () => {
            assert.equal(unifyUsername('@@skillbranch'), '@skill.branch');
          }
        );

        it(
          'https://github.com/kriasoft/react-starter-kit', () => {
            assert.equal(unifyUsername('https://github.com/kriasoft/react-starter-kit'), '@kriasoft');
          }
        );

        it(
          'https://github.com:80/kriasoft/react-starter-kit', () => {
            assert.equal(unifyUsername('https://github.com:80/kriasoft/react-starter-kit'), '@kriasoft');
          }
        );

        it(
          'vk.com/durov', () => {
            assert.equal(unifyUsername('vk.com/durov'), '@durov');
          }
        );

        it(
          'http://www.vk.com/durov', () => {
            assert.equal(unifyUsername('http://www.vk.com/durov'), '@durov');
          }
        );

        it(
          'vk.com/pavel.durov', () => {
            assert.equal(unifyUsername('vk.com/pavel.durov'), '@pavel.durov');
          }
        );

      }
    );

    describe(
      'Возвращает ошибку при некорректных данных', () => {

        it(
          '\'\'', () => {
            assert.throws(() => {unifyUsername('')}, 'Invalid username');
          }
        );

        it(
          '\?', () => {
            assert.throws(() => {unifyUsername('\?')}, 'Invalid username');
          }
        );

      }
    );
  }
);
