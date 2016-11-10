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
