import {expect} from 'chai'

export const testAction = (action, payload, state, expectedMutations, done) => {
  let count = 0

  const commit = (type, mutationsPayload) => {
    const mutation = expectedMutations[count]
    try {
      expect(type).to.equal(mutation.type)
      if (mutationsPayload) {
        expect(mutationsPayload).to.deep.equal(mutation.payload)
      }
    } catch (error) {
      done(error)
    }

    count++
    if (count >= expectedMutations.length) {
      done(error)
    }
  }

  if (expectedMutations.length === 0) {
    expect(count).to.equal(0)
    done()
  } else {
    action({ commit, state }, payload)
  }
}
