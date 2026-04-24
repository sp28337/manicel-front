import test from 'node:test'
import assert from 'node:assert/strict'
import { getAdminRequestError } from '../app/lib/admin-screen-utils.js'

test('screen error helper returns auth message for 401', () => {
  assert.equal(getAdminRequestError(401, 'dashboard'), 'Сессия истекла. Авторизуйтесь повторно.')
})

test('screen error helper returns forbidden message for 403', () => {
  assert.equal(getAdminRequestError(403, 'лидов'), 'Доступ запрещён.')
})

test('screen error helper returns generic message for unexpected errors', () => {
  assert.equal(getAdminRequestError(500, 'лидов'), 'Ошибка загрузки лидов.')
})
