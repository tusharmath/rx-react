/**
 * Created by tushar.mathur on 18/07/16.
 */

'use strict'

import AssignSignals from '../AssignSignals'
import {Subject} from 'rx'
import CreateOutputSignal from '../CreateOutputSignal'

export default function ({interpreters, mainTransformer}) {
  this.__subject = new Subject()
  const outSignal$ = CreateOutputSignal(this, interpreters, mainTransformer)
  this.__disposable = AssignSignals(this, interpreters, outSignal$)
}
