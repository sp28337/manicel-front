import test from 'node:test'
import assert from 'node:assert/strict'
import { buildCRMLeadsEndpoint, isLeadStatus, toAssignedManagerId } from '../app/lib/admin-utils.js'

test('buildCRMLeadsEndpoint builds base endpoint without filter', () => {
  const endpoint = buildCRMLeadsEndpoint('https://api.example.com', undefined)
  assert.equal(endpoint, 'https://api.example.com/crm/leads')
})

test('buildCRMLeadsEndpoint adds status filter for valid status', () => {
  const endpoint = buildCRMLeadsEndpoint('https://api.example.com', 'WON')
  assert.equal(endpoint, 'https://api.example.com/crm/leads?status_filter=WON')
})

test('lead status helper validates expected statuses only', () => {
  assert.equal(isLeadStatus('NEW'), true)
  assert.equal(isLeadStatus('UNKNOWN'), false)
})

test('toAssignedManagerId normalizes values', () => {
  assert.equal(toAssignedManagerId('14'), 14)
  assert.equal(toAssignedManagerId(''), null)
  assert.equal(toAssignedManagerId('abc'), null)
})
