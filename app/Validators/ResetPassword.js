'use strict'

class ResetPassword {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      toke: 'required',
      password: 'required|confirmed'
    }
  }
}

module.exports = ResetPassword
