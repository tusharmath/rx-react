/**
 * Created by tushar.mathur on 18/07/16.
 */

'use strict'
import test from 'ava'
import {Observable as O, CompositeDisposable, Subject} from 'rx'
import componentWillMount from '../src/ext/componentWillMount'

test('componentWillMount():__disposable', t => {
  const mainTransformer = x => O.just('###')
  const interpreters = {}
  const component = {}
  componentWillMount.call(component, {mainTransformer, interpreters})
  t.true(component.__disposable instanceof CompositeDisposable)
})

test('componentWillMount():__subject', t => {
  const mainTransformer = x => O.just('###')
  const interpreters = {}
  const component = {}
  componentWillMount.call(component, {mainTransformer, interpreters})
  t.true(component.__subject instanceof Subject)
})
