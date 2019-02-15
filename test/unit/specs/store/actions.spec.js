import axios from 'axios';
import MockAdapter from 'axios-mock-adapter'
import { testAction } from './test-utils'
import actions from '@/store/actions'
let mock = new MockAdapter(axios)

describe('actions', () => {
  beforeEach(function() {
    mock.reset()
  })

  it('getTodo', (done) => {
    const response = [
      {id: 1, title: 'Do sth', completed: false},
      {id: 2, title: 'Do sth else', completed: true}
    ]
    mock.onGet('http://localhost:300/api/tasks').reply(200, response)
    testAction(actions.getTodo, null, {}, [{type: 'addError',
      payload: 'Network Error'}], done)
  })
})
