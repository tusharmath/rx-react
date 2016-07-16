/**
 * Created by tushar.mathur on 19/07/16.
 */

'use strict'
import CreateTransformers from './CreateTransformers'

export default (component, interpreters, main) => {
  const transformers = CreateTransformers(component, interpreters)
  return main(transformers)
}
